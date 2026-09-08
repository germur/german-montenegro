import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/servicios/masajes-deportivos" },
  title: "Masajes Deportivos",
  description: "Masaje deportivo para recuperación, descarga muscular y prevención de lesiones en Bogotá.",
};

export default function Page() {
  return <SiteApp page="masajes" />;
}
