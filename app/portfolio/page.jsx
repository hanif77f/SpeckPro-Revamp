import PortfolioClient from "../../components/portfolio/PortfolioClient";

// Plain Server Component so this page can export real `metadata` — the
// interactive category filter lives in PortfolioClient.jsx instead,
// which is a Client Component and couldn't export metadata itself.
export const metadata = {
  title: "Our Portfolio & Client Projects",
  description:
    "See websites, mobile apps, and custom software SpeckPro Digital has delivered for clients across e-commerce, publishing, and other industries.",
  keywords: [
    "SpeckPro portfolio",
    "software development case studies",
    "client projects",
    "e-commerce development examples",
    "mobile app portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
