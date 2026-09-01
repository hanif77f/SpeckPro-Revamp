import { ibmPlexSans, ibmPlexMono } from "../lib/fonts";
import { siteConfig } from "../lib/siteConfig";
import SiteChrome from "../components/layout/SiteChrome";
import WhatsAppFab from "../components/layout/WhatsAppFab";
import ConditionalContactSection from "../components/layout/ConditionalContactSection";
import "./globals.css";

// Site-wide defaults. Every page can override title/description via its own
// `metadata` export. Next.js merges them, and `title.template` below means
// each page only needs to set its own short title, not repeat
// "— SpeckPro Digital" every time.
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Engineering Digital Work That Moves Business Forward`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom software development",
    "web development company",
    "mobile app development",
    "UI/UX design services",
    "IoT solutions",
    "digital transformation",
    "digital marketing agency",
    "software development Pakistan",
    "software development UK",
    "SpeckPro Digital",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/speckpro-logo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
   twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/speckpro-logo.png"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  sameAs: Object.values(siteConfig.social),
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: siteConfig.offices.pakistan.address,
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: siteConfig.offices.uk.address,
      addressCountry: "GB",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {/* JSON-LD: helps search engines understand the business entity,
            independent of what's rendered visually on any given page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <a className="vh" href="#main">
          Skip to content
        </a>

        <SiteChrome />

        <main id="main">
          {children}
          <ConditionalContactSection />
        </main>

        <WhatsAppFab />
      </body>
    </html>
  );
}
