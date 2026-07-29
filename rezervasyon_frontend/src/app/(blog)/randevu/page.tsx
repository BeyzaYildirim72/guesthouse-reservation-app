import type { Metadata } from "next";
import Header from "@/components/blog/Header";
import Footer from "@/components/shared/Footer";
import RandevuFormu from "@/components/blog/RandevuFormu";

export const metadata: Metadata = {
  title: "Randevu Al | Atatürk Arboretumu Müzesi",
  description: "Müze ziyaretiniz için online randevu oluşturun.",
};

const bilgiNoktalari = [
  {
    baslik: "Esnek Saatler",
    aciklama: "Hafta içi 09:00–18:00 arası 8 farklı zaman diliminden seçim yapın.",
  },
  {
    baslik: "Grup Ziyaretleri",
    aciklama: "Okul ve kurumsal gruplar için en az 3 gün önceden randevu önerilir.",
  },
  {
    baslik: "Ücretsiz İptal",
    aciklama: "Randevunuzu ziyaret tarihinden 24 saat öncesine kadar değiştirebilirsiniz.",
  },
];

export default function RandevuSayfasi() {
  return (
    <main className="min-h-screen bg-bej-50">
      <Header />

      {/* Sayfa başlığı */}
      <section className="bg-zeytin-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-label text-toprak-400">Ziyaretinizi Planlayın</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-bej-50 sm:text-4xl">
            Randevu Oluşturun
          </h1>
          <p className="mt-3 max-w-xl font-body text-sm text-bej-100/80 sm:text-base">
            Bireysel, aile ya da grup ziyaretiniz için aşağıdaki formu doldurun.
            Talebinizi aldıktan sonra sizinle iletişime geçeceğiz.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          {/* Bilgi paneli */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-zeytin-50 p-6 ring-1 ring-zeytin-100">
              <h2 className="font-display text-lg font-semibold text-zeytin-900">
                Bilmeniz Gerekenler
              </h2>
              <ul className="mt-4 space-y-4">
                {bilgiNoktalari.map((nokta) => (
                  <li key={nokta.baslik} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zeytin-700 text-bej-50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-body text-sm font-semibold text-zeytin-900">
                        {nokta.baslik}
                      </p>
                      <p className="mt-0.5 font-body text-sm text-zeytin-600">
                        {nokta.aciklama}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-toprak-500 p-6 text-bej-50">
              <h2 className="font-display text-lg font-semibold">Yardıma mı ihtiyacınız var?</h2>
              <p className="mt-2 font-body text-sm text-bej-50/90">
                Randevu oluşturmakta sorun yaşıyorsanız bizi arayın, size yardımcı olalım.
              </p>
              <a
                href="tel:+903121234567"
                className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold underline-offset-4 hover:underline"
              >
                0312 123 45 67
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 ring-1 ring-zeytin-100 sm:p-8">
            <RandevuFormu />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
