import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/deportes/crossfit" },
  title: "Fisioterapia para CrossFit",
  description: "Lesiones de CrossFit y protocolo de retorno al box. Fisioterapia deportiva para crossfitters en Bogotá.",
};

export default function Page() {
  return <SiteApp page="crossfit" />;
}
