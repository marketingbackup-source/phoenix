export const metadata = {
  title: "Terms & Conditions | Phoenix Business Advisory",
  description:
    "Read the Terms & Conditions of Phoenix Business Advisory governing the use of our website and services.",
};

const sections = [
  {
    id: "use-of-content",
    title: "Use of Content",
  },
  {
    id: "security-rules",
    title: "Security Rules",
  },
  {
    id: "general-rules",
    title: "General Rules",
  },
  {
    id: "indemnity",
    title: "Indemnity",
  },
  {
    id: "liability",
    title: "Liability",
  },
  {
    id: "disclaimer-of-damages",
    title: "Disclaimer of Damages",
  },
];

export default function TermsConditionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-100-40">
        <div className="container-main">
          <div className="max-w-4xl">
            <p className=" text-[var(--color-red-1)] font-semibold uppercase tracking-widest !text-white/80">
              Legal
            </p>

            <h1 className="uppercase !text-white/80">Terms & Conditions</h1>

            <p className="fs-20-16 !mb-0 mt-6 text-white/70 max-w-3xl">
              These Terms and Conditions govern your access to and use of the
              Phoenix Business Advisory website and the services offered
              through it.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-100-40">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-60-20">

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <h3 className="fs-20-16 font-semibold uppercase mb-6">
                  On This Page
                </h3>

                <nav aria-label="Terms and Conditions navigation">
                  <ul className="!p-0 !m-0 list-none border-l border-black/10">
                    {sections.map((section) => (
                      <li key={section.id} className="!mb-0">
                        <a
                          href={`#${section.id}`}
                          className="block border-l-2 border-transparent px-5 py-3 text-sm text-[var(--color-gray-2)] transition-all duration-300 hover:border-[var(--color-red-1)] hover:text-[var(--color-red-1)]"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="lg:col-span-3">
              {/* Introduction */}
              <div className="pb-60-20 border-b border-black/10">
                <h2 className="fs-36-24 uppercase mb-6 ">
                  Terms & Conditions
                </h2>

                <p>
                  The terms &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot; and
                  &quot;Company&quot; individually and collectively refer to
                  PHX Consulting Pvt. Ltd., and the terms &quot;Visitor&quot;
                  and &quot;User&quot; refer to the users of this website.
                </p>

                <p>
                  This page states the Terms and Conditions under which you
                  (Visitor) may visit this website (
                  <a
                    href="https://phoenixbusinessadvisory.com/"
                    className="text-[var(--color-red-1)]"
                  >
                    https://phoenixbusinessadvisory.com/
                  </a>
                  ). Please read this page carefully. If you do not accept the
                  Terms and Conditions stated here, we would request you to
                  exit this site.
                </p>

                <p className="!mb-0">
                  The business, any of its business divisions and / or its
                  subsidiaries, associate companies or subsidiaries to
                  subsidiaries or such other investment companies (in India or
                  abroad) reserve their respective rights to revise these
                  Terms and Conditions at any time by updating this posting.
                  You should visit this page periodically to re-appraise
                  yourself of the Terms and Conditions, because they are
                  binding on all users of this Website.
                </p>
              </div>

              {/* Use of Content */}
              <section
                id="use-of-content"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Use of Content
                </h2>

                <p>
                  All logos, brands, marks, headings, labels, names,
                  signatures, numerals, shapes or any combinations thereof,
                  appearing on this site, except as otherwise noted, are
                  properties either owned, or used under license, by the
                  business and / or its associate entities who feature on this
                  Website. The use of these properties or any other content on
                  this site, except as provided in these terms and conditions
                  or in the site content, is strictly prohibited.
                </p>

                <p className="!mb-0">
                  You may not sell or modify the content of this Website, or
                  reproduce, display, publicly perform, distribute, or
                  otherwise use the materials in any way for any public or
                  commercial purpose without the respective organization&apos;s
                  or entity&apos;s written permission.
                </p>
              </section>

              {/* Security Rules */}
              <section
                id="security-rules"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Security Rules
                </h2>

                <p>
                  Visitors are prohibited from violating or attempting to
                  violate the security of the Website, including, without
                  limitation, (1) accessing data not intended for such user or
                  logging into a server or account which the user is not
                  authorized to access, (2) attempting to probe, scan or test
                  the vulnerability of a system or network or to breach
                  security or authentication measures without proper
                  authorization, (3) attempting to interfere with service to
                  any user, host or network, including, without limitation,
                  via means of submitting a virus or &quot;Trojan horse&quot;
                  to the Website, overloading, &quot;flooding&quot;, &quot;mail
                  bombing&quot; or &quot;crashing&quot;, or (4) sending
                  unsolicited electronic mail, including promotions and/or
                  advertising of products or services.
                </p>

                <p className="!mb-0">
                  Violations of system or network security may result in
                  civil or criminal liability. The business and / or its
                  associate entities will have the right to investigate
                  occurrences that they suspect as involving such violations
                  and will have the right to involve, and cooperate with, law
                  enforcement authorities in prosecuting users who are
                  involved in such violations.
                </p>
              </section>

              {/* General Rules */}
              <section
                id="general-rules"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  General Rules
                </h2>

                <p className="!mb-0">
                  Visitors may not use the Website in order to transmit,
                  distribute, store or destroy material (a) that could
                  constitute or encourage conduct that would be considered a
                  criminal offense or violate any applicable law or
                  regulation, (b) in a manner that will infringe the
                  copyright, trademark, trade secret or other intellectual
                  property rights of others or violate the privacy or
                  publicity or other personal rights of others, or (c) that is
                  libelous, defamatory, pornographic, profane, obscene,
                  threatening, abusive or hateful.
                </p>
              </section>

              {/* Indemnity */}
              <section
                id="indemnity"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6 ">
                  Indemnity
                </h2>

                <p className="!mb-0">
                  The User unilaterally agrees to indemnify and hold harmless,
                  without objection, the Company, its officers, directors,
                  employees and agents from and against any claims, actions
                  and/or demands and/or liabilities and/or losses and/or
                  damages whatsoever arising from or resulting from their use
                  of{" "}
                  <a
                    href="https://phoenixbusinessadvisory.com/"
                    className="text-[var(--color-red-1)]"
                  >
                    https://phoenixbusinessadvisory.com/
                  </a>{" "}
                  or their breach of the terms.
                </p>
              </section>

              {/* Liability */}
              <section
                id="liability"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Liability
                </h2>

                <p>
                  User agrees that neither the Company nor its group
                  companies, directors, officers or employees shall be liable
                  for any direct or/and indirect or/and incidental or/and
                  special or/and consequential or/and exemplary damages,
                  resulting from the use or/and the inability to use the
                  service or/and for cost of procurement of substitute goods
                  or/and services or resulting from any goods or/and data
                  or/and information or/and services purchased or/and
                  obtained or/and messages received or/and transactions
                  entered into through or/and from the service or/and
                  resulting from unauthorized access to or/and alteration of
                  user&apos;s transmissions or/and data or/and arising from any
                  other matter relating to the service, including but not
                  limited to, damages for loss of profits or/and use or/and
                  data or other intangible, even if PHX Consulting Pvt. Ltd.
                  has been advised of the possibility of such damages.
                </p>

                <p>
                  User further agrees that PHX Consulting Pvt. Ltd. shall not
                  be liable for any damages arising from interruption,
                  suspension or termination of service, including but not
                  limited to direct or/and indirect or/and incidental or/and
                  special consequential or/and exemplary damages, whether such
                  interruption or/and suspension or/and termination was
                  justified or not, negligent or intentional, inadvertent or
                  advertent.
                </p>

                <p className="!mb-0">
                  User agrees that PHX Consulting Pvt. Ltd. shall not be
                  responsible or liable to user, or anyone, for the statements
                  or conduct of any third party of the service. In sum, in no
                  event shall Company&apos;s total liability to the User for
                  all damages or/and losses or/and causes of action exceed the
                  amount paid by the User to Company, if any, that is related
                  to the cause of action.
                </p>
              </section>

              {/* Disclaimer of Consequential Damages */}
              <section
                id="disclaimer-of-damages"
                className="pt-60-20 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Disclaimer of Consequential Damages
                </h2>

                <p className="!mb-0">
                  In no event shall Company or any parties, organizations or
                  entities associated with the corporate brand name, us or
                  otherwise, mentioned on this Website be liable for any
                  damages whatsoever (including, without limitation,
                  incidental and consequential damages, lost profits, or
                  damage to computer hardware or loss of data, information or
                  business interruption) resulting from the use or inability
                  to use the Website and the Website material, whether based
                  on warranty, contract, tort, or any other legal theory, and
                  whether or not such organization or entities were advised of
                  the possibility of such damages.
                </p>

                <div className="mt-40-15 border border-black/10 p-40-15">
                  <p className="!mb-3 text-[var(--color-red-1)] font-semibold uppercase tracking-wider">
                    Contact Information
                  </p>

                  <h3 className="fs-20-16 font-semibold mb-5">
                    Phoenix Business Advisory
                  </h3>

                  <div className="flex-column gap-3">
                    <a
                      href="mailto:info@phoenixbusinessadvisory.com"
                      className="w-fit text-[var(--color-gray-2)] transition-colors duration-300 hover:text-[var(--color-red-1)]"
                    >
                      info@phoenixbusinessadvisory.com
                    </a>

                    <a
                      href="tel:+919810256545"
                      className="w-fit text-[var(--color-gray-2)] transition-colors duration-300 hover:text-[var(--color-red-1)]"
                    >
                      +91 98 1025 6545
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}