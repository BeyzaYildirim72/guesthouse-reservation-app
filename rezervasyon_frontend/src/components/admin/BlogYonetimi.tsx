"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/shared/Badge";
import { blogYazilari as ilkYazilar } from "@/data/admin-icerik";
import { urunDurumRengi } from "@/lib/format";
import type { BlogYazisi } from "@/lib/types";

export default function BlogYonetimi() {
  const [yazilar, setYazilar] = useState<BlogYazisi[]>(ilkYazilar);
  const [formAcik, setFormAcik] = useState(false);
  const [yeniBaslik, setYeniBaslik] = useState("");
  const [yeniOzet, setYeniOzet] = useState("");

  const durumDegistir = (id: string) => {
    setYazilar((onceki) =>
      onceki.map((y) =>
        y.id === id
          ? { ...y, durum: y.durum === "Yayında" ? "Taslak" : "Yayında" }
          : y
      )
    );
  };

  const yaziSil = (id: string) => {
    setYazilar((onceki) => onceki.filter((y) => y.id !== id));
  };

  const yeniYaziEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yeniBaslik.trim()) return;

    const yeniYazi: BlogYazisi = {
      id: `by-${Date.now()}`,
      baslik: yeniBaslik,
      ozet: yeniOzet,
      tarih: new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      durum: "Taslak",
      gorsel:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=400&auto=format&fit=crop",
    };

    setYazilar((onceki) => [yeniYazi, ...onceki]);
    setYeniBaslik("");
    setYeniOzet("");
    setFormAcik(false);
  };

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-zeytin-900">
            Blog Yönetimi
          </h1>
          <p className="mt-1 font-body text-sm text-zeytin-500">
            Haberler ve duyuru yazılarınızı buradan yönetin.
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
          Yeni Yazı
        </button>
      </div>

      {formAcik && (
        <form
          onSubmit={yeniYaziEkle}
          className="mb-6 rounded-2xl bg-white p-5 ring-1 ring-zeytin-100 sm:p-6"
        >
          <h2 className="font-display text-base font-semibold text-zeytin-900">
            Yeni Blog Yazısı
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="font-body text-sm font-medium text-zeytin-800">
                Başlık
              </label>
              <input
                type="text"
                value={yeniBaslik}
                onChange={(e) => setYeniBaslik(e.target.value)}
                placeholder="Yazı başlığını girin"
                className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-body text-sm font-medium text-zeytin-800">
                Özet
              </label>
              <textarea
                rows={2}
                value={yeniOzet}
                onChange={(e) => setYeniOzet(e.target.value)}
                placeholder="Kısa bir özet girin"
                className="mt-1.5 w-full resize-none rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
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
                <th className="px-5 py-3">Yazı</th>
                <th className="px-5 py-3">Tarih</th>
                <th className="px-5 py-3">Durum</th>
                <th className="px-5 py-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm text-zeytin-700">
              {yazilar.map((yazi) => (
                <tr key={yazi.id} className="border-t border-zeytin-100">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zeytin-50">
                        <Image src={yazi.gorsel} alt={yazi.baslik} fill sizes="48px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-zeytin-900">{yazi.baslik}</p>
                        <p className="line-clamp-1 text-xs text-zeytin-400">{yazi.ozet}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">{yazi.tarih}</td>
                  <td className="px-5 py-3">
                    <Badge renk={urunDurumRengi(yazi.durum)}>{yazi.durum}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => durumDegistir(yazi.id)}
                        className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-zeytin-700 hover:bg-zeytin-50"
                      >
                        {yazi.durum === "Yayında" ? "Taslağa Al" : "Yayınla"}
                      </button>
                      <button
                        type="button"
                        onClick={() => yaziSil(yazi.id)}
                        className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-toprak-600 hover:bg-toprak-50"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {yazilar.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-zeytin-400">
                    Henüz blog yazısı yok.
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
