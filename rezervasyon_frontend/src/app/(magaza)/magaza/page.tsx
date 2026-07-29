import type { Metadata } from "next";
import MagazaHeader from "@/components/magaza/MagazaHeader";
import MagazaHero from "@/components/magaza/MagazaHero";
import UrunListesi from "@/components/magaza/UrunListesi";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Müze Mağazası | Atatürk Arboretumu Müzesi",
  description:
    "Müzemizin koleksiyonundan ilham alan kitap, broşür ve hediyelik ürünleri inceleyin.",
};

export default function MagazaSayfasi() {
  return (
    <main className="min-h-screen bg-bej-50">
      <MagazaHeader />
      <MagazaHero />
      <UrunListesi />
      <Footer />
    </main>
  );
}
