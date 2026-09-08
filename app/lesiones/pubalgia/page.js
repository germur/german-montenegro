import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/lesiones/pubalgia" },
  title: "Pubalgia: Síntomas y Tratamiento",
  description: "Pubalgia en deportistas: causas, síntomas, diagnóstico diferencial y tratamiento en Bogotá. Vuelve a entrenar sin dolor.",
};

export default function Page() {
  return <SiteApp page="pubalgia" />;
}
