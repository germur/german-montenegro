import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/deportes/weightlifting" },
  title: "Fisioterapia para Halterofilia",
  description: "Lesiones en halterofilia y levantamiento olímpico. Tratamiento y readaptación en Bogotá.",
};

export default function Page() {
  return <SiteApp page="weightlifting" />;
}
