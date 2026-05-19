import Script from 'next/script'

const siteConfig = {
  name: 'Geaux Wild Rehab',
  url: 'https://geauxwildrehab.org',
  description: 'Geaux Wild Rehab is a 501c3 nonprofit wildlife rehabilitation center based in Hammond, Louisiana, dedicated to giving Louisiana\'s native wildlife a second chance. Licensed by the Louisiana Department of Wildlife and Fisheries.',
  logo: 'https://geauxwildrehab.org/images/logo.png',
  phone: '5044918036',
  address: {
    streetAddress: '',
    addressLocality: 'Hammond',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/p/Geaux-Wild-Rehab-100087779529674/',
    instagram: 'https://www.instagram.com/geauxwildrehab/',
    tiktok: 'https://tiktok.com/@geauxwildrehab',
  },
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    sameAs: Object.values(siteConfig.socialLinks),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Geaux Wild Rehab',
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export { siteConfig }
