import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/lesiones/hombro" },
  title: "Lesiones de Hombro: Síntomas y Tratamiento",
  description: "Dolor de hombro en atletas: test de rango de movimiento, diagnóstico y rehabilitación en Bogotá.",
};

export default function Page() {
  return <SiteApp page="hombro" />;
}
