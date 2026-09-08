import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/lesiones" },
  title: "Lesiones Deportivas que Tratamos",
  description: "Guía de lesiones deportivas: pubalgia, ciática, tendinitis, hombro y más. Síntomas, diagnóstico y tratamiento en Bogotá.",
};

export default function Page() {
  return <SiteApp page="lesiones" />;
}
