'use client'

import Link from 'next/link'
import { forwardRef, type MouseEvent } from 'react'
import { usePageTransition } from './page-transition-provider'

type TransitionLinkProps = React.ComponentPropsWithoutRef<typeof Link>

function isModifiedEvent(e: MouseEvent<HTMLAnchorElement>) {
  return (
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey ||
    e.button !== 0 // only handle primary (left) clicks
  )
}

/**
 * Drop-in replacement for next/link that plays the branded iris transition
 * for internal navigations. Falls back to native Link behavior for anything
 * that should not animate (external, new tab, downloads, hash, modified clicks).
 */
export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink(
    { href, onClick, target, download, ...props },
    ref,
  ) {
    const { startTransition } = usePageTransition()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e)

      // Respect any handler that already took over.
      if (e.defaultPrevented) return

      // Only handle simple string hrefs.
      if (typeof href !== 'string') return

      // Let the browser handle new tabs / downloads / modified clicks.
      if (target && target !== '_self') return
      if (download !== undefined && download !== false) return
      if (isModifiedEvent(e)) return

      // Internal app routes only. This naturally excludes external URLs,
      // protocol-relative URLs, mailto:, tel:, sms:, and bare #hash links.
      if (!href.startsWith('/') || href.startsWith('//')) return

      // Same-page navigation (incl. /current#hash) — let the browser scroll.
      const targetPath = href.split('#')[0].split('?')[0] || '/'
      if (targetPath === window.location.pathname) return

      e.preventDefault()
      startTransition(href, { x: e.clientX, y: e.clientY })
    }

    return (
      <Link
        ref={ref}
        href={href}
        target={target}
        download={download}
        onClick={handleClick}
        {...props}
      />
    )
  },
)
