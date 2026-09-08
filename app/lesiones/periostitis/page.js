import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/lesiones/periostitis" },
  title: "Periostitis Tibial: Tratamiento",
  description: "Periostitis tibial (shin splints) en corredores: causas, síntomas y tratamiento en Bogotá.",
};

export default function Page() {
  return <SiteApp page="periostitis" />;
}
