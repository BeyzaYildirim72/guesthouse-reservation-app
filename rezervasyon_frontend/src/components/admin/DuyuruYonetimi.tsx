"use client";

import { useState } from "react";
import Badge from "@/components/shared/Badge";
import { duyuruKayitlari as ilkDuyurular } from "@/data/admin-icerik";
import type { DuyuruKaydi } from "@/lib/types";

const tipSecenekleri = ["Çalışma Saati", "Eğitim", "Mağaza", "Etkinlik", "Genel"];

export default function DuyuruYonetimi() {
  const [duyurular, setDuyurular] = useState<DuyuruKaydi[]>(ilkDuyurular);
  const [yeniBaslik, setYeniBaslik] = useState("");
  const [yeniTip, setYeniTip] = useState(tipSecenekleri[0]);

  const durumDegistir = (id: number) => {
    setDuyurular((onceki) =>
      onceki.map((d) =>
        d.id === id ? { ...d, durum: d.durum === "Yayında" ? "Pasif" : "Yayında" } : d
      )
    );
  };

  const duyuruSil = (id: number) => {
    setDuyurular((onceki) => onceki.filter((d) => d.id !== id));
  };

  const duyuruEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yeniBaslik.trim()) return;

    const yeni: DuyuruKaydi = {
      id: Date.now(),
      baslik: yeniBaslik,
      tip: yeniTip,
      durum: "Yayında",
    };

    setDuyurular((onceki) => [yeni, ...onceki]);
    setYeniBaslik("");
  };

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-zeytin-900">
          Duyurular
        </h1>
        <p className="mt-1 font-body text-sm text-zeytin-500">
          Ana sayfada görünen duyuru şeridini buradan yönetin.
        </p>
      </div>

      <form
        onSubmit={duyuruEkle}
        className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-5 ring-1 ring-zeytin-100 sm:flex-row sm:items-end sm:p-6"
      >
        <div className="flex-1">
          <label className="font-body text-sm font-medium text-zeytin-800">
            Duyuru Metni
          </label>
          <input
            type="text"
            value={yeniBaslik}
            onChange={(e) => setYeniBaslik(e.target.value)}
            placeholder="Yeni duyuru metnini girin"
            className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
          />
        </div>
        <div className="sm:w-48">
          <label className="font-body text-sm font-medium text-zeytin-800">
            Kategori
          </label>
          <select
            value={yeniTip}
            onChange={(e) => setYeniTip(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-zeytin-200 px-4 py-2.5 font-body text-sm focus:border-toprak-500"
          >
            {tipSecenekleri.map((tip) => (
              <option key={tip} value={tip}>
                {tip}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-toprak-500 px-5 py-2.5 font-body text-sm font-semibold text-bej-50 hover:bg-toprak-600"
        >
          Ekle
        </button>
      </form>

      <ul className="space-y-3">
        {duyurular.map((duyuru) => (
          <li
            key={duyuru.id}
            className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 ring-1 ring-zeytin-100 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-zeytin-100 px-2.5 py-1 font-body text-xs font-semibold text-zeytin-700">
                {duyuru.tip}
              </span>
              <p className="font-body text-sm text-zeytin-800">{duyuru.baslik}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Badge renk={duyuru.durum === "Yayında" ? "yesil" : "gri"}>
                {duyuru.durum}
              </Badge>
              <button
                type="button"
                onClick={() => durumDegistir(duyuru.id)}
                className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-zeytin-700 hover:bg-zeytin-50"
              >
                {duyuru.durum === "Yayında" ? "Gizle" : "Yayınla"}
              </button>
              <button
                type="button"
                onClick={() => duyuruSil(duyuru.id)}
                className="rounded-lg px-3 py-1.5 font-body text-xs font-semibold text-toprak-600 hover:bg-toprak-50"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
        {duyurular.length === 0 && (
          <li className="rounded-2xl bg-white p-8 text-center font-body text-sm text-zeytin-400 ring-1 ring-zeytin-100">
            Henüz duyuru eklenmemiş.
          </li>
        )}
      </ul>
    </main>
  );
}
