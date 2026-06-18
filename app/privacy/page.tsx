import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Geaux Wild Rehab collects, uses, and protects information submitted through wildlife help requests, contact forms, donations, and website interactions.',
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 18, 2026</p>

      <div className="prose prose-slate max-w-none space-y-10 text-foreground">

        <section aria-labelledby="intro-heading">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Geaux Wild Rehab is a 501(c)(3) nonprofit wildlife rehabilitation center based in Hammond,
            Louisiana. This Privacy Policy describes the types of information we may collect through
            our website, how we use that information, and how we protect it.
          </p>
        </section>

        <section aria-labelledby="collected-heading">
          <h2 id="collected-heading" className="text-2xl font-bold text-foreground mb-4">
            Information We May Collect
          </h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            When you submit a wildlife help request, contact form, or interact with this website,
            we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>City, parish, or general location</li>
            <li>Wildlife intake details (species, condition, location found)</li>
            <li>Animal species or type</li>
            <li>Animal condition</li>
            <li>Location where the animal was found</li>
            <li>Photos, only if a photo upload feature is added in the future</li>
            <li>General contact form messages</li>
            <li>Donation-related information handled by third-party platforms</li>
            <li>Basic website analytics or technical data if analytics tools are used</li>
          </ul>
        </section>

        <section aria-labelledby="use-heading">
          <h2 id="use-heading" className="text-2xl font-bold text-foreground mb-4">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Information submitted through this website may be used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Respond to wildlife help requests</li>
            <li>Contact visitors about submitted requests</li>
            <li>Coordinate care, transport, or guidance when appropriate</li>
            <li>Respond to general questions</li>
            <li>Process or acknowledge donations where applicable</li>
            <li>Improve the website and user experience</li>
            <li>Protect the website from spam, abuse, or technical issues</li>
          </ul>
        </section>

        <section aria-labelledby="forms-heading">
          <h2 id="forms-heading" className="text-2xl font-bold text-foreground mb-4">
            Form Submissions
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Form submissions may be delivered by email through Resend to{' '}
            <a
              href="mailto:Geauxwildrehab@gmail.com"
              className="text-primary hover:underline"
            >
              Geauxwildrehab@gmail.com
            </a>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please do not include unnecessary sensitive personal information in form submissions.
            Providing your name, contact information, and details about the wildlife situation is
            sufficient to help us respond effectively.
          </p>
        </section>

        <section aria-labelledby="sharing-heading">
          <h2 id="sharing-heading" className="text-2xl font-bold text-foreground mb-4">
            Sharing of Information
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Geaux Wild Rehab does not sell personal information.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Information may be shared only when necessary with trusted volunteers, transport
            helpers, sub-permittees, rehabilitation contacts, or appropriate wildlife authorities
            in order to respond to a wildlife situation.
          </p>
        </section>

        <section aria-labelledby="donations-heading">
          <h2 id="donations-heading" className="text-2xl font-bold text-foreground mb-4">
            Donations and Third-Party Platforms
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Donations may be processed through third-party platforms such as PayPal, Venmo,
            Amazon Wishlist, or other donation tools. Geaux Wild Rehab does not store full
            credit card or payment card information on this website.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Third-party platforms have their own privacy policies, which govern how your
            information is handled when you use their services.
          </p>
        </section>

        <section aria-labelledby="cookies-heading">
          <h2 id="cookies-heading" className="text-2xl font-bold text-foreground mb-4">
            Cookies and Analytics
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This website may use privacy-conscious analytics or basic technical data to
            understand website performance and improve the user experience. If analytics are
            in use, they are used for aggregate, non-personally-identifying purposes only.
          </p>
        </section>

        <section aria-labelledby="children-heading">
          <h2 id="children-heading" className="text-2xl font-bold text-foreground mb-4">
            {"Children's Privacy"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab does not knowingly collect personal information from children
            under 13. If a parent or guardian believes a child has submitted information
            through this website, they may contact us to request its removal.
          </p>
        </section>

        <section aria-labelledby="contact-privacy-heading">
          <h2 id="contact-privacy-heading" className="text-2xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Privacy questions or requests may be sent to{' '}
            <a
              href="mailto:Geauxwildrehab@gmail.com"
              className="text-primary hover:underline"
            >
              Geauxwildrehab@gmail.com
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  )
}
