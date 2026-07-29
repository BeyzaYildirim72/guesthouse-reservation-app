"use client";

import Image from "next/image";
import Link from "next/link";
import MagazaHeader from "@/components/magaza/MagazaHeader";
import Footer from "@/components/shared/Footer";
import { useSepet } from "@/components/magaza/SepetContext";
import { paraFormatla } from "@/lib/format";
import { Button } from "primereact/button";
import { InputNumber, type InputNumberValueChangeEvent } from "primereact/inputnumber";

export default function SepetSayfasi() {
  const { urunler, adetGuncelle, urunCikar, toplamTutar } = useSepet();
  const kargoUcreti = toplamTutar >= 500 || toplamTutar === 0 ? 0 : 40;
  const genelToplam = toplamTutar + kargoUcreti;

  return (
    <main className="min-h-screen bg-bej-50">
      <MagazaHeader />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-2xl font-semibold text-zeytin-900 sm:text-3xl">
            Sepetim
          </h1>

          {urunler.length === 0 ? (
            <div className="mt-10 rounded-2xl bg-white p-10 text-center ring-1 ring-zeytin-100">
              <p className="font-body text-sm text-zeytin-600">
                Sepetiniz şu anda boş.
              </p>
              <Link href="/magaza" passHref legacyBehavior>
                <Button 
                  label="Mağazaya Göz At"
                  className="mt-5 rounded-full bg-toprak-500 border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600"
                />
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <ul className="space-y-4">
                {urunler.map((urun) => (
                  <li
                    key={urun.id}
                    className="flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-zeytin-100"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-zeytin-50">
                      <Image
                        src={urun.gorsel}
                        alt={urun.ad}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-sm font-semibold text-zeytin-900 sm:text-base">
                            {urun.ad}
                          </p>
                          <p className="mt-0.5 font-body text-xs text-zeytin-500">
                            {urun.kategori}
                          </p>
                        </div>
                        
                        <Button
                          type="button"
                          icon="pi pi-times"
                          onClick={() => urunCikar(urun.id)}
                          aria-label={`${urun.ad} ürününü sepetten çıkar`}
                          className="p-button-rounded p-button-text text-zeytin-400 hover:text-toprak-600 p-0 m-0 h-7 w-7 focus:shadow-none"
                          style={{ backgroundColor: 'transparent', border: 'none' }}
                        />
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="custom-sepet-inputnumber">
                          <InputNumber
                            value={urun.adet}
                            onValueChange={(e: InputNumberValueChangeEvent) => {
                              const yeniAdet = e.value ?? 1;
                              if (yeniAdet > 0) {
                                adetGuncelle(urun.id, yeniAdet);
                              }
                            }}
                            showButtons
                            buttonLayout="horizontal"
                            step={1}
                            min={1}
                            decrementButtonClassName="p-button-text text-zeytin-700 hover:text-toprak-600 focus:shadow-none"
                            incrementButtonClassName="p-button-text text-zeytin-700 hover:text-toprak-600 focus:shadow-none"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                            inputClassName="w-10 text-center font-body text-sm font-semibold text-zeytin-900 bg-transparent p-0 border-none focus:shadow-none"
                            className="flex items-center rounded-full border border-zeytin-200 h-8 px-1"
                          />
                        </div>
                        
                        <span className="font-display text-sm font-semibold text-zeytin-900">
                          {paraFormatla(urun.fiyat * urun.adet)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="h-fit rounded-2xl bg-white p-6 ring-1 ring-zeytin-100">
                <h2 className="font-display text-lg font-semibold text-zeytin-900">
                  Sipariş Özeti
                </h2>
                <div className="mt-4 space-y-2 font-body text-sm text-zeytin-700">
                  <div className="flex justify-between">
                    <span>Ara Toplam</span>
                    <span>{paraFormatla(toplamTutar)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kargo</span>
                    <span>{kargoUcreti === 0 ? "Ücretsiz" : paraFormatla(kargoUcreti)}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-t border-zeytin-100 pt-4 font-display text-base font-semibold text-zeytin-900">
                  <span>Toplam</span>
                  <span>{paraFormatla(genelToplam)}</span>
                </div>

                <Link href="/magaza/odeme" passHref legacyBehavior>
                  <Button 
                    label="Ödemeye Geç"
                    className="mt-6 w-full rounded-full bg-toprak-500 border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600"
                  />
                </Link>

                <Link href="/magaza" className="mt-3 block text-center font-body text-sm font-semibold text-zeytin-600 hover:text-toprak-600">
                  Alışverişe Devam Et
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}