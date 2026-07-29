"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import MagazaHeader from "@/components/magaza/MagazaHeader";
import Footer from "@/components/shared/Footer";
import { useSepet } from "@/components/magaza/SepetContext";
import { paraFormatla } from "@/lib/format";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";

export default function OdemeSayfasi() {
  const { urunler, toplamTutar, sepetiBosalt } = useSepet();
  const [tamamlandi, setTamamlandi] = useState(false);

  const [adSoyad, setAdSoyad] = useState("");
  const [adres, setAdres] = useState("");
  const [sehir, setSehir] = useState("");
  const [postaKodu, setPostaKodu] = useState("");
  const [telefon, setTelefon] = useState("");
  const [kartAd, setKartAd] = useState("");
  const [kartNo, setKartNo] = useState("");
  const [sonKullanma, setSonKullanma] = useState("");
  const [cvv, setCvv] = useState("");

  const kargoUcreti = toplamTutar >= 500 || toplamTutar === 0 ? 0 : 40;
  const genelToplam = toplamTutar + kargoUcreti;

  const siparisiTamamla = (e: FormEvent) => {
    e.preventDefault();
    console.log("Sipariş tamamlandı:", {
      urunler,
      genelToplam,
      teslimat: { adSoyad, adres, sehir, postaKodu, telephone: telefon },
      odeme: { kartAd, kartNo, sonKullanma, cvv },
    });
    setTamamlandi(true);
    sepetiBosalt();
  };

  if (tamamlandi) {
    return (
      <main className="min-h-screen bg-bej-50">
        <MagazaHeader />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zeytin-700 text-bej-50">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h1 className="mt-5 font-display text-2xl font-semibold text-zeytin-900">
              Siparişiniz Alındı
            </h1>
            <p className="mt-2 font-body text-sm text-zeytin-600">
              Sipariş onayınız e-posta adresinize gönderilecek. Bizi tercih ettiğiniz
              için teşekkür ederiz.
            </p>
            <Link href="/magaza" passHref legacyBehavior>
              <Button 
                label="Mağazaya Dön" 
                className="mt-6 rounded-full bg-toprak-500 border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600 pt-3"
              />
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (urunler.length === 0) {
    return (
      <main className="min-h-screen bg-bej-50">
        <MagazaHeader />
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
            <p className="font-body text-sm text-zeytin-600">
              Ödeme adımına geçmek için sepetinizde ürün bulunmalı.
            </p>
            <Link href="/magaza" passHref legacyBehavior>
              <Button 
                label="Mağazaya Dön" 
                className="mt-5 rounded-full bg-toprak-500 border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600"
              />
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bej-50">
      <MagazaHeader />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-2xl font-semibold text-zeytin-900 sm:text-3xl">
            Ödeme
          </h1>

          <form onSubmit={siparisiTamamla} className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-zeytin-100 p-fluid">
                <h2 className="font-display text-lg font-semibold text-zeytin-900 mb-4">
                  Teslimat Bilgileri
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label htmlFor="adSoyad" className="font-body text-sm font-medium text-zeytin-800">
                      Ad Soyad
                    </label>
                    <InputText
                      id="adSoyad"
                      required
                      value={adSoyad}
                      onChange={(e) => setAdSoyad(e.target.value)}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>
                  
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label htmlFor="adres" className="font-body text-sm font-medium text-zeytin-800">
                      Adres
                    </label>
                    <InputTextarea
                      id="adres"
                      required
                      rows={2}
                      autoResize={false}
                      value={adres}
                      onChange={(e) => setAdres(e.target.value)}
                      className="w-full resize-none rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="sehir" className="font-body text-sm font-medium text-zeytin-800">
                      Şehir
                    </label>
                    <InputText
                      id="sehir"
                      required
                      value={sehir}
                      onChange={(e) => setSehir(e.target.value)}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="postaKodu" className="font-body text-sm font-medium text-zeytin-800">
                      Posta Kodu
                    </label>
                    <InputMask
                      id="postaKodu"
                      required
                      mask="99999"
                      slotChar=""
                      value={postaKodu}
                      onChange={(e) => setPostaKodu(e.value ?? "")}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label htmlFor="telefon" className="font-body text-sm font-medium text-zeytin-800">
                      Telefon
                    </label>
                    <InputMask
                      id="telefon"
                      required
                      mask="(599) 999 99 99"
                      placeholder="(5XX) XXX XX XX"
                      value={telefon}
                      onChange={(e) => setTelefon(e.value ?? "")}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-zeytin-100 p-fluid">
                <h2 className="font-display text-lg font-semibold text-zeytin-900 mb-4">
                  Ödeme Bilgileri
                </h2>
                <div className="grid gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="kartAd" className="font-body text-sm font-medium text-zeytin-800">
                      Kart Üzerindeki Ad
                    </label>
                    <InputText
                      id="kartAd"
                      required
                      value={kartAd}
                      onChange={(e) => setKartAd(e.target.value)}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="kartNo" className="font-body text-sm font-medium text-zeytin-800">
                      Kart Numarası
                    </label>
                    <InputMask
                      id="kartNo"
                      required
                      mask="9999 9999 9999 9999"
                      placeholder="0000 0000 0000 0000"
                      value={kartNo}
                      onChange={(e) => setKartNo(e.value ?? "")}
                      className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="sonKullanma" className="font-body text-sm font-medium text-zeytin-800">
                        Son Kullanma
                      </label>
                      <InputMask
                        id="sonKullanma"
                        required
                        mask="99/99"
                        placeholder="AA/YY"
                        value={sonKullanma}
                        onChange={(e) => setSonKullanma(e.value ?? "")}
                        className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cvv" className="font-body text-sm font-medium text-zeytin-800">
                        CVV
                      </label>
                      <InputMask
                        id="cvv"
                        required
                        mask="999"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.value ?? "")}
                        className="w-full rounded-xl border border-zeytin-200 bg-white px-4 py-2.5 font-body text-sm text-zeytin-900 focus:border-toprak-500 focus:shadow-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 font-body text-xs text-zeytin-400">
                  Bu bir demo formdur; gerçek bir ödeme işlemi gerçekleştirilmez.
                </p>
              </div>
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 ring-1 ring-zeytin-100">
              <h2 className="font-display text-lg font-semibold text-zeytin-900">
                Sipariş Özeti
              </h2>
              <ul className="mt-4 space-y-3">
                {urunler.map((urun) => (
                  <li key={urun.id} className="flex justify-between font-body text-sm text-zeytin-700">
                    <span>
                      {urun.ad} <span className="text-zeytin-400">× {urun.adet}</span>
                    </span>
                    <span>{paraFormatla(urun.fiyat * urun.adet)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 border-t border-zeytin-100 pt-4 font-body text-sm text-zeytin-700">
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

              <Button
                type="submit"
                label="Siparişi Tamamla"
                className="mt-6 w-full rounded-full bg-toprak-500 border-none px-6 py-3 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600"
              />
              
              <Link href="/magaza/sepet" className="mt-3 block text-center font-body text-sm font-semibold text-zeytin-600 hover:text-toprak-600">
                Sepete Dön
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}