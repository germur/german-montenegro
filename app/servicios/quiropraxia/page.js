import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/servicios/quiropraxia" },
  title: "Quiropraxia",
  description: "Quiropraxia y ajustes para deportistas en Bogotá como parte de un plan de fisioterapia integral.",
};

export default function Page() {
  return <SiteApp page="quiropraxia" />;
}
