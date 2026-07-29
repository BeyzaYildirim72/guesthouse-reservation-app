import Header from "@/components/blog/Header";
import HeroSlider from "@/components/blog/HeroSlider";
import HizliLinkler from "@/components/blog/HizliLinkler";
import Haberler from "@/components/blog/Haberler";
import Duyurular from "@/components/blog/Duyurular";
import MuzeBilgileri from "@/components/blog/MuzeBilgileri";
import Footer from "@/components/shared/Footer";

export default function AnaSayfa() {
  return (
    <main className="min-h-screen bg-bej-50">
      <Header />
      <HeroSlider />
      <HizliLinkler />
      <Haberler />
      <Duyurular />
      <MuzeBilgileri />
      <Footer />
    </main>
  );
}
