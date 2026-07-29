import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { muzeBilgileri } from "@/data/blog-icerik";

export default function MuzeBilgileri() {
  return (
    <section className="bg-bej-100 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Görsel kolaj */}
        <div className="relative order-2 lg:order-1">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1400&auto=format&fit=crop"
              alt="Müze sergi salonu"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-40 w-40 overflow-hidden rounded-2xl ring-4 ring-bej-100 sm:block sm:-right-8">
            <Image
              src="https://images.unsplash.com/photo-1565060169187-6f4904fa2c6c?q=80&w=600&auto=format&fit=crop"
              alt="Sergilenen arkeolojik eser"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Metin ve istatistikler */}
        <div className="order-1 lg:order-2">
          <span className="section-label text-toprak-600">Müzeyi Tanıyın</span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-zeytin-900 sm:text-3xl">
            {muzeBilgileri.baslik}
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-zeytin-700 sm:text-base">
            {muzeBilgileri.paragraf}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {muzeBilgileri.istatistikler.map((stat) => (
              <div key={stat.etiket}>
                <p className="font-display text-2xl font-bold text-zeytin-800 sm:text-3xl">
                  {stat.sayi}
                </p>
                <p className="mt-1 font-body text-xs text-zeytin-600 sm:text-sm">
                  {stat.etiket}
                </p>
              </div>
            ))}
          </div>

          {/* Randevu sayfasına yönlendiren ana CTA */}
          <div className="mt-9 flex flex-col gap-3 rounded-2xl bg-zeytin-700 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-bej-50">
                Ziyaretinizi şimdi planlayın
              </p>
              <p className="mt-1 font-body text-sm text-bej-100/80">
                Bireysel ya da grup ziyaretleri için randevunuzu birkaç adımda oluşturun.
              </p>
            </div>
            <Link href="/randevu" className="shrink-0">
              <Button label="Randevu Oluştur" icon="pi pi-arrow-right" iconPos="right" className="rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
