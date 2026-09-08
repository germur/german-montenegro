import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/servicios/readaptacion-deportiva" },
  title: "Readaptación Deportiva",
  description: "Readaptación deportiva y retorno seguro a la competición tras una lesión en Bogotá.",
};

export default function Page() {
  return <SiteApp page="readaptacion" />;
}
