import CareerPageClient from "../../components/career/CareerPageClient";

// This file is now a plain Server Component specifically so it can
// export real `metadata` — a Client Component (which CareerPageClient
// is, since it needs the modal/form state) can never do this, canonical
// link included. All the interactive logic lives in CareerPageClient
// instead.
export const metadata = {
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return <CareerPageClient />;
}
