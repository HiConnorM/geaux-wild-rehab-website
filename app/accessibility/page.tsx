import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Geaux Wild Rehab is committed to improving website accessibility and usability for all visitors.',
}

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
        Accessibility Statement
      </h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 18, 2026</p>

      <div className="space-y-10 text-foreground">

        <section aria-labelledby="goal-heading">
          <h2 id="goal-heading" className="text-2xl font-bold text-foreground mb-4">
            Our Accessibility Goal
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab aims to make its website accessible and user-friendly for all
            visitors, including people with disabilities. We work toward conformance with the Web
            Content Accessibility Guidelines (WCAG) 2.2 Level AA where practical, and we
            continually look for ways to improve.
          </p>
        </section>

        <section aria-labelledby="measures-heading">
          <h2 id="measures-heading" className="text-2xl font-bold text-foreground mb-4">
            Measures We Take
          </h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            In building and maintaining this website, we aim to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use semantic HTML elements to support assistive technologies</li>
            <li>Provide text alternatives for meaningful images</li>
            <li>Ensure keyboard navigation is functional throughout the site</li>
            <li>Use sufficient color contrast for text and interactive elements</li>
            <li>Include visible focus indicators for keyboard users</li>
            <li>Label all form inputs and associate error messages with fields</li>
            <li>Include a skip-to-content link for keyboard and screen reader users</li>
            <li>Respect the prefers-reduced-motion browser setting to limit animations</li>
            <li>Use ARIA attributes where needed to communicate state and structure</li>
            <li>Design forms and interactive components to be usable on mobile devices</li>
          </ul>
        </section>

        <section aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="text-2xl font-bold text-foreground mb-4">
            Known Limitations
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            While we strive to meet accessibility best practices, this website may have areas
            that do not yet fully meet WCAG 2.2 Level AA. We are a small nonprofit and work to
            address accessibility issues as we become aware of them. If you encounter a barrier,
            we want to hear from you.
          </p>
        </section>

        <section aria-labelledby="feedback-heading">
          <h2 id="feedback-heading" className="text-2xl font-bold text-foreground mb-4">
            Feedback and Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            If you experience difficulty accessing any part of this website, please contact us and
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>The URL or page where you experienced the issue</li>
            <li>A description of the difficulty you encountered</li>
            <li>The browser or assistive technology you are using, if comfortable sharing</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            You may reach us at{' '}
            <a
              href="mailto:Geauxwildrehab@gmail.com"
              className="text-primary hover:underline"
            >
              Geauxwildrehab@gmail.com
            </a>
            . We will do our best to respond and address the issue.
          </p>
        </section>

        <section aria-labelledby="improvement-heading">
          <h2 id="improvement-heading" className="text-2xl font-bold text-foreground mb-4">
            Ongoing Improvement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Accessibility is an ongoing effort. We are committed to reviewing and improving the
            accessibility of this website over time. We welcome feedback from all users and will
            use it to guide future improvements.
          </p>
        </section>

      </div>
    </main>
  )
}
