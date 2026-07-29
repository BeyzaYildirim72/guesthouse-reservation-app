"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/shared/Badge";
import { urunler as ilkUrunler } from "@/data/magaza-icerik";
import { urunDurumRengi, paraFormatla } from "@/lib/format";
import type { Urun } from "@/lib/types";

const kategoriSecenekleri: Urun["kategori"][] = [
  "Kitap",
  "Broşür",
  "Hediyelik",
  "Basılı Materyal",
];

export default function UrunYonetimi() {
  const [urunler, setUrunler] = useState<Urun[]>(ilkUrunler);
  const [formAcik, setFormAcik] = useState(false);
  const [yeniAd, setYeniAd] = useState("");
  const [yeniFiyat, setYeniFiyat] = useState("");
  const [yeniStok, setYeniStok] = useState("");
  const [yeniKategori, setYeniKategori] = useState<Urun["kategori"]>("Kitap");

  const durumDegistir = (id: string) => {
    setUrunler((onceki) =>
      onceki.map((u) => {
        if (u.id !== id) return u;
        const siradakiDurum: Record<Urun["durum"], Urun["durum"]> = {
          Yayında: "Taslak",
          Taslak: "Yayında",
          "Stokta Yok": "Yayında",
        };
        return { ...u, durum: siradakiDurum[u.durum] };
      })
    );
  };

  const urunSil = (id: string) => {
    setUrunler((onceki) => onceki.filter((u) => u.id !== id));
  };

  const urunEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yeniAd.trim() || !yeniFiyat) return;

    const slug = yeniAd
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const yeniUrun: Urun = {
      id: `urn-${Date.now()}`,
      slug,
      ad: yeniAd,
      kategori: yeniKategori,
      fiyat: Number(yeniFiyat) || 0,
      stok: Number(yeniStok) || 0,
      gorsel:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop",
      kisaAciklama: "Yeni eklenen ürün.",
      aciklama: "Bu ürün için henüz detaylı açıklama eklenmedi.",
      durum: "Taslak",
    };

    setUrunler((onceki) => [yeniUrun, ...onceki]);
    setYeniAd("");
    setYeniFiyat("");
    setYeniStok("");
    setFormAcik(false);
  };

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-zeytin-900">
            Mağaza Ürünleri
          </h1>
          <p className="mt-1 font-body text-sm text-zeytin-500">
            Kitap, broşür ve hediyelik ürünlerinizi buradan yönetin.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setFormAcik(!formAcik)}
          className="flex items-center gap-2 rounded-full bg-toprak-500 px-5 py-2.5 font-body text-sm font-semibold text-bej-50 transition-colors hover:bg-toprak-600"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
          Yeni Ürün
        </button>
      </div>

      {formAcik && (
        <form
          onSubmit={urunEkle}
          className="mb-6 rounded-2xl bg-white p-5 ring-1 ring-zeytin-100 sm:p-6"
        >
          <h2 className="font-display text-base font-semibold text-zeytin-900">
            Yeni Ürün Ekle
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <label className="font-body text-sm font-medium text-zeytin-800">
                Ürün Adı
              </label>
              <input
                type="text"
                value={yeniAd}
                onChange={(e) => setYeniAd(e.target.value)}
                placeholder="Örn: Anadolu Motifli Kupa"
                className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-zeytin-800">
                Kategori
              </label>
              <select
                value={yeniKategori}
                onChange={(e) => setYeniKategori(e.target.value as Urun["kategori"])}
                className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
              >
                {kategoriSecenekleri.map((kat) => (
                  <option key={kat} value={kat}>
                    {kat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-zeytin-800">
                Fiyat (₺)
              </label>
              <input
                type="number"
                min={0}
                value={yeniFiyat}
                onChange={(e) => setYeniFiyat(e.target.value)}
                placeholder="0"
                className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-zeytin-800">
                Stok Adedi
              </label>
              <input
                type="number"
                min={0}
                value={yeniStok}
                onChange={(e) => setYeniStok(e.target.value)}
                placeholder="0"
                className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              className="rounded-full bg-zeytin-700 px-5 py-2.5 font-body text-sm font-semibold text-bej-50 hover:bg-zeytin-800"
            >
              Taslak Olarak Kaydet
            </button>
            <button
              type="button"
              onClick={() => setFormAcik(false)}
              className="rounded-full px-5 py-2.5 font-body text-sm font-semibold text-zeytin-600 hover:bg-zeytin-50"
            >
              Vazgeç
            </button>
          </div>
        </form>
      )}

      <div className="rounded-2xl bg-white ring-1 ring-zeytin-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="font-body text-xs uppercase tracking-wide text-zeytin-400">
                <th className="px-5 py-3">Ürün</th>
                <th className="px-5 py-3">Kategori</th>
                <th className="px-5 py-3">Fiyat</th>
                <th className="px-5 py-3">Stok</th>
                <th className="px-5 py-3">Durum</th>
                <th className="px-5 py-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm text-zeytin-700">
              {urunler.map((urun) => (
                <tr key={urun.id} className="border-t border-zeytin-100">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zeytin-50">
                        <Image src={urun.gorsel} alt={urun.ad} fill sizes="48px" className="object-cover" />
                      </div>
                      <p className="font-medium text-zeytin-900">{urun.ad}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">{urun.kategori}</td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    {urun.fiyat === 0 ? "Ücretsiz" : paraFormatla(urun.fiyat)}
                  </td>
                  <td className="px-5 py-3">
                    <span className={urun.stok === 0 ? "text-toprak-600" : ""}>
                      {urun.stok}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <Badge renk={urunDurumRengi(urun.durum)}>{urun.durum}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => durumDegistir(urun.id)}
                        className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-zeytin-700 hover:bg-zeytin-50"
                      >
                        {urun.durum === "Yayında" ? "Taslağa Al" : "Yayınla"}
                      </button>
                      <button
                        type="button"
                        onClick={() => urunSil(urun.id)}
                        className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-toprak-600 hover:bg-toprak-50"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {urunler.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-zeytin-400">
                    Henüz ürün eklenmemiş.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
