"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { urunBul, urunler } from "@/data/magaza-icerik";
import MagazaHeader from "@/components/magaza/MagazaHeader";
import Footer from "@/components/shared/Footer";
import UrunKarti from "@/components/magaza/UrunKarti";
import { useSepet } from "@/components/magaza/SepetContext";
import { paraFormatla } from "@/lib/format";
import { Button } from "primereact/button";
import { InputNumber, type InputNumberValueChangeEvent } from "primereact/inputnumber";

export default function UrunDetaySayfasi() {
  const params = useParams<{ slug: string }>();
  const urun = urunBul(params.slug);
  const { sepeteEkle } = useSepet();
  const [adet, setAdet] = useState(1);
  const [eklendi, setEklendi] = useState(false);

  if (!urun) {
    notFound();
  }

  const stokYok = urun.stok === 0;
  const benzerUrunler = urunler
    .filter((u) => u.kategori === urun.kategori && u.id !== urun.id)
    .slice(0, 3);

  const sepeteEkleTiklandi = () => {
    sepeteEkle(urun, adet);
    setEklendi(true);
    setTimeout(() => setEklendi(false), 2000);
  };

  return (
    <main className="min-h-screen bg-bej-50">
      <MagazaHeader />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 font-body text-sm text-zeytin-500">
            <Link href="/magaza" className="hover:text-toprak-600">
              Mağaza
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zeytin-700">{urun.ad}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-zeytin-50 sm:h-[420px]">
              <Image
                src={urun.gorsel}
                alt={urun.ad}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              {stokYok && (
                <span className="absolute left-4 top-4 rounded-full bg-zinc-800/85 px-3 py-1 font-body text-xs font-semibold text-bej-50">
                  Stokta Yok
                </span>
              )}
            </div>

            <div>
              <span className="section-label text-toprak-600">{urun.kategori}</span>
              <h1 className="mt-2 font-display text-2xl font-semibold text-zeytin-900 sm:text-3xl">
                {urun.ad}
              </h1>
              <p className="mt-4 font-display text-2xl font-semibold text-zeytin-800">
                {urun.fiyat === 0 ? "Ücretsiz" : paraFormatla(urun.fiyat)}
              </p>

              <p className="mt-5 font-body text-sm leading-relaxed text-zeytin-700 sm:text-base">
                {urun.aciklama}
              </p>

              <p className="mt-4 font-body text-sm text-zeytin-500">
                {stokYok ? "Şu anda stokta bulunmuyor." : `Stokta ${urun.stok} adet bulunuyor.`}
              </p>

              {!stokYok && (
                <div className="mt-6 flex items-center gap-4">
                  <div className="custom-detay-inputnumber">
                    <InputNumber
                      value={adet}
                      onValueChange={(e: InputNumberValueChangeEvent) => setAdet(e.value ?? 1)}
                      showButtons
                      buttonLayout="horizontal"
                      step={1}
                      min={1}
                      max={urun.stok}
                      decrementButtonClassName="p-button-text text-zeytin-700 hover:text-toprak-600 focus:shadow-none"
                      incrementButtonClassName="p-button-text text-zeytin-700 hover:text-toprak-600 focus:shadow-none"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      inputClassName="w-12 text-center font-body text-sm font-semibold text-zeytin-900 bg-transparent p-0 border-none focus:shadow-none"
                      className="flex items-center rounded-full border border-zeytin-200 h-11 px-2"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={sepeteEkleTiklandi}
                    label={eklendi ? "Sepete Eklendi ✓" : "Sepete Ekle"}
                    className={`flex-1 sm:flex-none rounded-full border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 transition-colors focus:shadow-none h-11 ${
                      eklendi ? "bg-zeytin-600 hover:bg-zeytin-700" : "bg-toprak-500 hover:bg-toprak-600"
                    }`}
                  />
                </div>
              )}

              <Link
                href="/magaza/sepet"
                className="mt-4 inline-block font-body text-sm font-semibold text-zeytin-700 underline-offset-4 hover:text-toprak-600 hover:underline"
              >
                Sepete git →
              </Link>
            </div>
          </div>

          {benzerUrunler.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 font-display text-xl font-semibold text-zeytin-900">
                Benzer Ürünler
              </h2>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {benzerUrunler.map((u) => (
                  <UrunKarti key={u.id} urun={u} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}