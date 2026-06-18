import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transparency',
  description:
    "Learn more about Geaux Wild Rehab's nonprofit mission, donation use, and public transparency information.",
}

export default function TransparencyPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
        Transparency
      </h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: June 18, 2026</p>

      <div className="space-y-10 text-foreground">

        <section aria-labelledby="nonprofit-heading">
          <h2 id="nonprofit-heading" className="text-2xl font-bold text-foreground mb-4">
            501(c)(3) Nonprofit Status
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab is a 501(c)(3) nonprofit wildlife rehabilitation center based in
            Hammond, Louisiana. Donations to Geaux Wild Rehab may be tax-deductible to the extent
            allowed by law. Please consult your tax advisor for guidance specific to your situation.
            No goods or services are provided in exchange for contributions unless otherwise stated.
          </p>
        </section>

        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-2xl font-bold text-foreground mb-4">
            Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Geaux Wild Rehab is dedicated to the rescue, rehabilitation, and release of injured and
            orphaned native Louisiana wildlife. We are licensed by the Louisiana Department of
            Wildlife and Fisheries to care for native mammal species. Our mission is to give
            Louisiana&apos;s native wildlife a second chance through licensed rehabilitation,
            compassionate care, and release back into the wild whenever possible.
          </p>
        </section>

        <section aria-labelledby="donation-use-heading">
          <h2 id="donation-use-heading" className="text-2xl font-bold text-foreground mb-4">
            Donation Use
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your support helps provide food, supplies, housing, transport, veterinary care, and
            rehabilitation for Louisiana&apos;s native wildlife. Geaux Wild Rehab is run by a
            small, dedicated team and relies on community support to continue its work. We are
            committed to using resources responsibly in direct service of the animals in our care.
          </p>
        </section>

        <section aria-labelledby="documents-heading">
          <h2 id="documents-heading" className="text-2xl font-bold text-foreground mb-4">
            Public Documents
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Certain nonprofit documents, including applicable IRS exemption and annual filing
            documents, may be available upon request or through IRS public resources. To request
            information about our nonprofit status or filings, please contact us at{' '}
            <a
              href="mailto:Geauxwildrehab@gmail.com"
              className="text-primary hover:underline"
            >
              Geauxwildrehab@gmail.com
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="contact-transparency-heading">
          <h2 id="contact-transparency-heading" className="text-2xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about our nonprofit status, donation use, or public documents, please
            contact us at{' '}
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
