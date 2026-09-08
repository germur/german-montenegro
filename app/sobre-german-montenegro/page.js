import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/sobre-german-montenegro" },
  title: "Sobre Germán Montenegro",
  description: "Conoce a Germán Montenegro, fisioterapeuta deportivo en Bogotá especializado en atletas de fuerza y combate.",
};

export default function Page() {
  return <SiteApp page="sobre" />;
}
