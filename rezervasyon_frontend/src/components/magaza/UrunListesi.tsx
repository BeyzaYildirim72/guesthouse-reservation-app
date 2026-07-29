"use client";

import { useMemo, useState } from "react";
import { urunler } from "@/data/magaza-icerik";
import UrunKarti from "@/components/magaza/UrunKarti";
import KategoriFiltre from "@/components/magaza/KategoriFiltre";
import { Message } from "primereact/message";

const kategoriEslesme: Record<string, string> = {
  kitap: "Kitap",
  brosur: "Broşür",
  hediyelik: "Hediyelik",
  "basili-materyal": "Basılı Materyal",
};

export default function UrunListesi() {
  const [aktifKategori, setAktifKategori] = useState("tumu");

  const filtrelenmis = useMemo(() => {
    if (aktifKategori === "tumu") return urunler;
    const hedefKategori = kategoriEslesme[aktifKategori];
    return urunler.filter((u) => u.kategori === hedefKategori);
  }, [aktifKategori]);

  return (
    <section className="bg-bej-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <KategoriFiltre aktifKategori={aktifKategori} onSecim={setAktifKategori} />
          <p className="font-body text-sm text-zeytin-500">
            {filtrelenmis.length} ürün gösteriliyor
          </p>
        </div>

        {filtrelenmis.length === 0 ? (
          <div className="w-full flex justify-center">
            <Message
              severity="info"
              text="Bu kategoride henüz ürün bulunmuyor."
              className="w-full border-solid border border-zeytin-100 bg-zeytin-50 text-zeytin-700 font-body text-sm rounded-xl p-6 justify-center"
              pt={{
                icon: { className: "text-lg mr-2" } 
              }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {filtrelenmis.map((urun) => (
              <UrunKarti key={urun.id} urun={urun} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}