export const metadata = {
  title: "Privacy Policy | Phoenix Business Advisory",
  description:
    "Read the Privacy Policy of Phoenix Business Advisory and learn how we collect, use, protect, and manage personal information.",
};

const sections = [
  {
    id: "user-information",
    title: "User Information",
  },
  {
    id: "cookies",
    title: "Cookies",
  },
  {
    id: "links-to-other-sites",
    title: "Links to Other Sites",
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
  },
  {
    id: "information-security",
    title: "Information Security",
  },
  {
    id: "grievance-redressal",
    title: "Grievance Redressal",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-100-40">
        <div className="container-main">
          <div className="max-w-4xl">
            <p className="!mb-4 text-[var(--color-red-1)] font-semibold uppercase tracking-widest">
              Legal
            </p>

            <h1 className="uppercase">Privacy Policy</h1>

            <p className="fs-20-16 !mb-0 mt-6 text-white/70 max-w-3xl">
              This Privacy Policy explains how Phoenix Business Advisory
              collects, uses, protects, and manages information provided through
              our website and services.
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

                <nav aria-label="Privacy Policy navigation">
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
                <h2 className="fs-36-24 uppercase mb-6">
                  Privacy Policy
                </h2>

                <p>
                  The terms &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot; and
                  &quot;Company&quot; individually and collectively refer to
                  Phoenix Business Advisory, and the terms &quot;You&quot;,
                  &quot;Your&quot; and &quot;Yourself&quot; refer to the users
                  of this website.
                </p>

                <p>
                  This Privacy Policy explains the manner in which information
                  provided by users or collected through our website may be
                  collected, stored, processed, used and protected.
                </p>

                <p className="!mb-0">
                  By accessing or using this website, you acknowledge that you
                  have read and understood this Privacy Policy and agree to the
                  collection and use of information in accordance with its
                  terms.
                </p>
              </div>

              {/* User Information */}
              <section
                id="user-information"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  User Information
                </h2>

                <p>
                  To access certain services or communicate with Phoenix
                  Business Advisory, users may be required to provide personal,
                  professional or business-related information through enquiry
                  forms, consultation forms, registration forms or other
                  interactions with our website.
                </p>

                <p>
                  Such information may include your name, telephone number,
                  email address, city, country, business details, professional
                  details and any other information voluntarily submitted by
                  you.
                </p>

                <p>
                  Information submitted through our website may be used to
                  respond to enquiries, provide requested services, communicate
                  with users, maintain records, improve our services and support
                  legitimate business operations.
                </p>

                <p className="!mb-0">
                  We may also use collected information to understand user
                  requirements and improve the relevance, functionality and
                  overall experience of our website and services.
                </p>
              </section>

              {/* Cookies */}
              <section
                id="cookies"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Cookies
                </h2>

                <p>
                  Our website may use cookies and similar technologies to
                  improve website functionality, understand visitor behaviour
                  and provide a better browsing experience.
                </p>

                <p>
                  Cookies are small files that may be stored on your device.
                  They can help us understand how visitors interact with our
                  website and may collect information such as browser type,
                  device information, pages visited, referring pages and general
                  usage information.
                </p>

                <p className="!mb-0">
                  Users may disable cookies through their browser settings.
                  However, disabling certain cookies may affect the
                  functionality or availability of some website features.
                </p>
              </section>

              {/* Links */}
              <section
                id="links-to-other-sites"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Links to Other Sites
                </h2>

                <p>
                  Our website may contain links to external websites,
                  applications or third-party platforms that are not operated
                  or controlled by Phoenix Business Advisory.
                </p>

                <p className="!mb-0">
                  We are not responsible for the privacy practices, content,
                  security or policies of such third-party websites. Users are
                  encouraged to review the privacy policies of external websites
                  before providing personal information.
                </p>
              </section>

              {/* Information Sharing */}
              <section
                id="information-sharing"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Information Sharing
                </h2>

                <p>
                  Personal information may be shared where reasonably necessary
                  to provide our services, support our business operations,
                  comply with applicable legal requirements or protect the
                  rights and interests of Phoenix Business Advisory.
                </p>

                <p>
                  Information may also be shared with authorised employees,
                  consultants, professional advisers, technology providers,
                  service providers or other parties who require access to such
                  information for legitimate operational purposes.
                </p>

                <p>
                  Where information is shared with third parties, reasonable
                  measures may be taken to ensure that such information is used
                  only for the intended purpose and handled appropriately.
                </p>

                <p className="!mb-0">
                  We may also disclose information where required by law,
                  regulation, governmental authority, legal proceedings or
                  where disclosure is necessary to protect our legal rights,
                  users or business interests.
                </p>
              </section>

              {/* Security */}
              <section
                id="information-security"
                className="pt-60-20 pb-60-20 border-b border-black/10 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Information Security
                </h2>

                <p>
                  Phoenix Business Advisory takes reasonable administrative,
                  organisational and technical measures designed to protect
                  information against unauthorised access, disclosure,
                  alteration, loss, misuse or destruction.
                </p>

                <p>
                  Access to personal information may be restricted to authorised
                  personnel who require such access for legitimate business
                  purposes.
                </p>

                <p>
                  While reasonable precautions are taken to protect information,
                  no internet transmission, electronic storage system or online
                  platform can be guaranteed to be completely secure.
                </p>

                <p className="!mb-0">
                  Users should therefore exercise appropriate caution when
                  submitting confidential or sensitive information through
                  online platforms.
                </p>
              </section>

              {/* Grievance */}
              <section
                id="grievance-redressal"
                className="pt-60-20 scroll-mt-28"
              >
                <h2 className="fs-36-24 uppercase mb-6">
                  Grievance Redressal
                </h2>

                <p>
                  If you have any concerns, questions or grievances regarding
                  this Privacy Policy or the manner in which your information is
                  handled, you may contact Phoenix Business Advisory.
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