import SiteApp from "@/components/SiteApp";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <SiteApp page="home" />;
}
