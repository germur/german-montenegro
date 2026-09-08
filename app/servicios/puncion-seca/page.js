import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/servicios/puncion-seca" },
  title: "Punción Seca",
  description: "Punción seca para puntos gatillo y dolor miofascial en deportistas en Bogotá.",
};

export default function Page() {
  return <SiteApp page="puncion" />;
}
