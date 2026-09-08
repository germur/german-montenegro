import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/metodologia" },
  title: "Metodología de Tratamiento",
  description: "Nuestra metodología en 4 fases: diagnóstico, control del dolor, recuperación funcional y readaptación al deporte.",
};

export default function Page() {
  return <SiteApp page="metodologia" />;
}
