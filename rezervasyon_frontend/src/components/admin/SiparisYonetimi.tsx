"use client";

import { useState } from "react";
import Badge from "@/components/shared/Badge";
import { siparisler as ilkSiparisler } from "@/data/admin-icerik";
import { siparisDurumRengi, paraFormatla } from "@/lib/format";
import type { Siparis } from "@/lib/types";

const durumSirasi: Siparis["durum"][] = [
  "Beklemede",
  "Hazırlanıyor",
  "Kargoda",
  "Teslim Edildi",
];

export default function SiparisYonetimi() {
  const [siparisler, setSiparisler] = useState<Siparis[]>(ilkSiparisler);
  const [filtre, setFiltre] = useState<"Tümü" | Siparis["durum"]>("Tümü");

  const siradakiDuruma_gecir = (id: string) => {
    setSiparisler((onceki) =>
      onceki.map((s) => {
        if (s.id !== id || s.durum === "İptal") return s;
        const mevcutIndex = durumSirasi.indexOf(s.durum);
        const sonraki = durumSirasi[Math.min(mevcutIndex + 1, durumSirasi.length - 1)];
        return { ...s, durum: sonraki };
      })
    );
  };

  const siparisIptalEt = (id: string) => {
    setSiparisler((onceki) =>
      onceki.map((s) => (s.id === id ? { ...s, durum: "İptal" } : s))
    );
  };

  const filtrelenmis =
    filtre === "Tümü" ? siparisler : siparisler.filter((s) => s.durum === filtre);

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-zeytin-900">
          Siparişler
        </h1>
        <p className="mt-1 font-body text-sm text-zeytin-500">
          Mağazadan gelen siparişleri takip edin ve durumlarını güncelleyin.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {(["Tümü", ...durumSirasi, "İptal"] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setFiltre(d)}
            aria-pressed={filtre === d}
            className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
              filtre === d
                ? "bg-zeytin-700 text-bej-50"
                : "bg-white text-zeytin-700 ring-1 ring-zeytin-200 hover:bg-zeytin-50"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white ring-1 ring-zeytin-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="font-body text-xs uppercase tracking-wide text-zeytin-400">
                <th className="px-5 py-3">Sipariş No</th>
                <th className="px-5 py-3">Müşteri</th>
                <th className="px-5 py-3">Tarih</th>
                <th className="px-5 py-3">Ürün</th>
                <th className="px-5 py-3">Tutar</th>
                <th className="px-5 py-3">Durum</th>
                <th className="px-5 py-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm text-zeytin-700">
              {filtrelenmis.map((siparis) => (
                <tr key={siparis.id} className="border-t border-zeytin-100">
                  <td className="px-5 py-3 font-medium text-zeytin-900">{siparis.id}</td>
                  <td className="px-5 py-3">
                    <p>{siparis.musteriAdi}</p>
                    <p className="text-xs text-zeytin-400">{siparis.eposta}</p>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">{siparis.tarih}</td>
                  <td className="px-5 py-3">{siparis.urunSayisi} ürün</td>
                  <td className="px-5 py-3 whitespace-nowrap">{paraFormatla(siparis.tutar)}</td>
                  <td className="px-5 py-3">
                    <Badge renk={siparisDurumRengi(siparis.durum)}>{siparis.durum}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      {siparis.durum !== "Teslim Edildi" && siparis.durum !== "İptal" && (
                        <button
                          type="button"
                          onClick={() => siradakiDuruma_gecir(siparis.id)}
                          className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-zeytin-700 hover:bg-zeytin-50"
                        >
                          Sonraki Aşama
                        </button>
                      )}
                      {siparis.durum !== "İptal" && siparis.durum !== "Teslim Edildi" && (
                        <button
                          type="button"
                          onClick={() => siparisIptalEt(siparis.id)}
                          className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-toprak-600 hover:bg-toprak-50"
                        >
                          İptal Et
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtrelenmis.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-zeytin-400">
                    Bu durumda sipariş bulunmuyor.
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
