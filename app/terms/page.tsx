import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Review the website terms, wildlife information disclaimer, donation terms, external link policy, and safety notices for Geaux Wild Rehab.',
}

export default function TermsPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 18, 2026</p>

      <div className="space-y-10 text-foreground">

        <section aria-labelledby="use-heading">
          <h2 id="use-heading" className="text-2xl font-bold text-foreground mb-4">
            Use of This Website
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using this website, you agree to these Terms &amp; Conditions. This
            website is operated by Geaux Wild Rehab, a 501(c)(3) nonprofit wildlife rehabilitation
            center based in Hammond, Louisiana. We reserve the right to update these terms at any
            time. Continued use of the website after changes are posted constitutes acceptance of
            the updated terms.
          </p>
        </section>

        <section aria-labelledby="wildlife-disclaimer-heading">
          <h2 id="wildlife-disclaimer-heading" className="text-2xl font-bold text-foreground mb-4">
            Wildlife Information Disclaimer
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Information provided on this website is for general educational purposes only and should
            not replace direct guidance from a licensed wildlife rehabilitator, veterinarian, or
            appropriate wildlife authority. Every wildlife situation is different, and what applies
            in one case may not apply in another.
          </p>
        </section>

        <section aria-labelledby="not-emergency-heading">
          <h2 id="not-emergency-heading" className="text-2xl font-bold text-foreground mb-4">
            Not a 24/7 Emergency Service
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab is not a 24/7 emergency service. Submitting a form or sending a
            message through this website does not guarantee an immediate response. Response times
            may vary depending on current animal care needs. For the fastest response, please call
            or text{' '}
            <a href="tel:5044918036" className="text-primary hover:underline font-semibold">
              504-491-8036
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="no-guarantee-heading">
          <h2 id="no-guarantee-heading" className="text-2xl font-bold text-foreground mb-4">
            No Guaranteed Animal Outcome
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab cannot guarantee that every animal can be accepted, treated,
            rehabilitated, or released. Despite our best efforts, outcomes depend on the nature
            and severity of each animal&apos;s condition, available resources, and the limits of
            wildlife medicine. We are committed to providing compassionate care for every animal
            we receive.
          </p>
        </section>

        <section aria-labelledby="visitor-safety-heading">
          <h2 id="visitor-safety-heading" className="text-2xl font-bold text-foreground mb-4">
            Visitor Safety and Responsibility
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Visitors to this website and anyone who encounters wildlife are responsible for their
            own safety and the safety of others. We strongly advise:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Never handle wildlife without proper personal protective equipment (PPE), including
              gloves and long sleeves at minimum.
            </li>
            <li>Keep children and pets away from wild animals.</li>
            <li>Observe from a safe distance whenever possible.</li>
            <li>Contact a licensed rehabilitator for guidance before intervening.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Geaux Wild Rehab is not responsible for injury, illness, or other harm resulting from
            contact with wild animals or from actions taken in response to information on this website.
          </p>
        </section>

        <section aria-labelledby="donations-terms-heading">
          <h2 id="donations-terms-heading" className="text-2xl font-bold text-foreground mb-4">
            Donations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Geaux Wild Rehab is a 501(c)(3) nonprofit organization. Donations may be
            tax-deductible to the extent allowed by law. Please consult your tax advisor for
            guidance specific to your situation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Donations may be processed through third-party platforms such as PayPal, Venmo, or
            Amazon Wishlist. No goods or services are provided in exchange for contributions unless
            otherwise stated. Geaux Wild Rehab does not store full payment card information on this
            website. All donations are appreciated and go toward supporting the animals in our care.
          </p>
        </section>

        <section aria-labelledby="external-links-heading">
          <h2 id="external-links-heading" className="text-2xl font-bold text-foreground mb-4">
            External Links
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This website may contain links to third-party websites including PayPal, Venmo, Amazon,
            social media platforms (Facebook, Instagram, TikTok, YouTube), The Dodo, Earth Rangers,
            FOX 8, the Louisiana Department of Wildlife and Fisheries (LDWF), and other external
            resources. These links are provided for convenience only. Geaux Wild Rehab is not
            responsible for the content, privacy practices, or policies of any third-party website.
            Visiting external sites is at your own discretion.
          </p>
        </section>

        <section aria-labelledby="ip-heading">
          <h2 id="ip-heading" className="text-2xl font-bold text-foreground mb-4">
            Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website, including text, images, logos, and design elements, is
            the property of Geaux Wild Rehab or its respective owners and is protected by applicable
            copyright and intellectual property laws. Content may not be reproduced or distributed
            without prior written permission from Geaux Wild Rehab, except for personal,
            non-commercial use with appropriate attribution.
          </p>
        </section>

        <section aria-labelledby="liability-heading">
          <h2 id="liability-heading" className="text-2xl font-bold text-foreground mb-4">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by law, Geaux Wild Rehab is not liable for any direct,
            indirect, incidental, or consequential damages arising from your use of this website,
            reliance on information provided here, or interactions with wildlife. This website is
            provided on an &quot;as is&quot; basis without warranties of any kind.
          </p>
        </section>

        <section aria-labelledby="changes-heading">
          <h2 id="changes-heading" className="text-2xl font-bold text-foreground mb-4">
            Changes to These Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab may update these Terms &amp; Conditions at any time. The &quot;Last
            updated&quot; date at the top of this page reflects when changes were most recently made.
            We encourage you to review this page periodically.
          </p>
        </section>

        <section aria-labelledby="contact-terms-heading">
          <h2 id="contact-terms-heading" className="text-2xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about these Terms &amp; Conditions may be sent to{' '}
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
