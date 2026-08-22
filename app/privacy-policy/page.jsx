import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import Blooms from "../../components/ui/Blooms";
import OrbitalRing from "../../components/ui/OrbitalRing";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Reveal from "../../components/ui/Reveal";
import { ringPresets } from "../../lib/ringPresets";
import { siteConfig } from "../../lib/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How SpeckPro Digital collects, uses, stores, shares, and protects your personal data across our website, mobile applications, products, and services.",
  alternates: { canonical: "/privacy-policy" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-policy", label: "Policy" },
  { id: "ch-contact", label: "Contact" },
];

const toc = [
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use", label: "2. How We Use the Information" },
  { id: "data-sharing", label: "3. Data Sharing and Disclosure" },
  { id: "data-security", label: "4. Data Security" },
  { id: "data-retention", label: "5. Data Retention and Deletion" },
  { id: "cookies", label: "6. Cookies and Tracking" },
  { id: "account-deletion", label: "7. Account Creation and Deletion" },
  { id: "childrens-privacy", label: "8. Children's Privacy" },
  { id: "your-rights", label: "9. Your Privacy Rights" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnimVariant name="anim-gentle" />
      <ChapterRail items={railItems} />

      {/* ============ HERO ============ */}
      <section className="c-open c-void c-open--sub" id="top">
        <Blooms />
        <OrbitalRing config={ringPresets["privacy-policy"]} size="sub" />

        <div className="c-w">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

          <Reveal as="span" className="c-cap" index={1}>
            Legal
          </Reveal>

          <Reveal
            as="h1"
            className="c-open__t"
            index={2}
            style={{ marginTop: 20, maxWidth: "16ch" }}
          >
            Privacy Policy
          </Reveal>

          <Reveal as="p" className="c-open__s" index={3} style={{ maxWidth: 640 }}>
            Last updated: November 8, 2025
          </Reveal>

          <Reveal as="p" className="c-open__s" index={4}>
            SpeckPro Digital (&ldquo;SpeckPro,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal
            data. This Privacy Policy explains how we collect, use, store, share, and protect
            your information when you interact with our website, mobile applications, products,
            and services (collectively, the &ldquo;Services&rdquo;). By using our website or any
            of our Services, you agree to the terms of this Privacy Policy. If you do not agree,
            please do not use our website or apps.
          </Reveal>
        </div>
      </section>

      {/* ============ POLICY ============ */}
      <section className="c-sec" id="ch-policy">
        <div className="c-w">
          <div className="legal-layout">
            <Reveal as="aside" className="legal-toc">
              <h5>On This Page</h5>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </Reveal>

            <Reveal as="article" className="legal-content" index={1}>
              <h2 id="information-we-collect">1. Information We Collect</h2>
              <p>
                We collect personal and non-personal information to understand our customers&rsquo;
                requirements and provide the best possible experience. This may include:
              </p>

              <h3>1.1 Personal Information</h3>
              <p>We may collect:</p>
              <ul>
                <li>Name, email address, phone number, and company information</li>
                <li>Account login credentials (where applicable)</li>
                <li>Payment or billing details (if you make purchases through our Services)</li>
                <li>Any data you voluntarily provide through contact forms, surveys, or inquiries</li>
              </ul>

              <h3>1.2 Usage and Technical Data</h3>
              <p>We may collect:</p>
              <ul>
                <li>Device information (e.g., type, operating system, browser)</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies for analytics, security, and personalization</li>
                <li>Server log data to ensure system security and detect illegal activities</li>
              </ul>

              <h3>1.3 Location Data</h3>
              <p>
                We may collect and process your location data to tailor services and enhance user
                experience, in full compliance with Google&rsquo;s consent and data protection
                policies.
              </p>

              <h2 id="how-we-use">2. How We Use the Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and improve our Services</li>
                <li>Personalize user experiences</li>
                <li>Send promotional updates about new products, offers, or services (with your consent)</li>
                <li>Conduct research, surveys, and service quality analysis</li>
                <li>Provide customer support and address inquiries</li>
                <li>Comply with legal obligations and ensure platform security</li>
              </ul>

              <h2 id="data-sharing">3. Data Sharing and Disclosure</h2>
              <p>
                We do <strong>not sell, rent, or trade</strong> your personal data. However, we
                may share limited data:
              </p>
              <ul>
                <li>
                  With trusted service providers who assist in operations (e.g., analytics,
                  hosting, payment processing) under strict confidentiality agreements
                </li>
                <li>To comply with legal obligations or respond to lawful government requests</li>
                <li>To prevent fraud, abuse, or security threats</li>
              </ul>
              <p>
                All third-party partners are required to handle your data securely and use it
                only for agreed purposes.
              </p>

              <h2 id="data-security">4. Data Security</h2>
              <p>
                SpeckPro Digital employs appropriate technical and organizational measures to
                safeguard your data against unauthorized access, loss, or alteration. This
                includes encryption, secure servers, restricted access controls, and regular
                system audits.
              </p>

              <h2 id="data-retention">5. Data Retention and Deletion Policy</h2>
              <p>
                We retain personal data only as long as necessary to fulfill the purposes
                outlined in this Privacy Policy or as required by law.
              </p>
              <p>
                Once data is no longer needed, it will be securely deleted or anonymized. If you
                have an account with us, you can{" "}
                <strong>request deletion of your account and associated data</strong> at any time
                (see Section 7 below).
              </p>

              <h2 id="cookies">6. Cookies and Tracking Technologies</h2>
              <p>Our website may use cookies to:</p>
              <ul>
                <li>Enhance user experience</li>
                <li>Analyze traffic and performance</li>
                <li>Remember user preferences</li>
              </ul>
              <p>
                You can manage or disable cookies through your browser settings, though this may
                limit some website functionalities.
              </p>

              <h2 id="account-deletion">7. Account Creation and Deletion (Google Compliance)</h2>
              <p>
                If our app or website allows users to create an account, users also have the
                right to delete their account and associated data at any time.
              </p>
              <p>
                <strong>Account Deletion Options:</strong>
              </p>
              <ul>
                <li>Within the App: Navigate to Settings → Account → Delete Account</li>
              </ul>

              <h2 id="childrens-privacy">8. Children&rsquo;s Privacy</h2>
              <p>
                Our Services are not intended for children under the age of 13. We do not
                knowingly collect personal data from minors. If you believe your child has
                provided us with personal information, please contact us immediately for
                deletion.
              </p>

              <h2 id="your-rights">9. Your Privacy Rights</h2>
              <p>Depending on your jurisdiction, you may have rights to:</p>
              <ul>
                <li>Access, correct, or delete your personal data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
                <li>Restrict or object to processing</li>
              </ul>
              <p>
                If you have any questions, concerns, or complaints regarding this Privacy Policy
                or your data, please contact our privacy team at{" "}
                <a href={`mailto:${siteConfig.contact.emailUk}`}>{siteConfig.contact.emailUk}</a>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
