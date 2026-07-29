"use client";

import Image from "next/image";
import Link from "next/link";
import type { Urun } from "@/lib/types";
import { useSepet } from "@/components/magaza/SepetContext";
import { paraFormatla } from "@/lib/format";

// PrimeReact Bileşenleri
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function UrunKarti({ urun }: { urun: Urun }) {
  const { sepeteEkle } = useSepet();
  const stokYok = urun.stok === 0;

  const kartGorseli = (
    <Link href={`/magaza/urun/${urun.slug}`} className="relative block h-52 w-full overflow-hidden bg-zeytin-50">
      <Image
        src={urun.gorsel}
        alt={urun.ad}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {stokYok && (
        <Tag 
          value="Stokta Yok" 
          className="absolute left-3 top-3 rounded-full bg-zinc-800/85 px-3 py-1 font-body text-xs font-semibold text-bej-50 border-none"
        />
      )}
      {urun.fiyat === 0 && !stokYok && (
        <Tag 
          value="Ücretsiz" 
          className="absolute left-3 top-3 rounded-full bg-zeytin-700 px-3 py-1 font-body text-xs font-semibold text-bej-50 border-none"
        />
      )}
    </Link>
  );

  return (
    <Card
      header={kartGorseli}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-zeytin-100 transition-shadow hover:shadow-md border-none p-0 custom-urun-karti"
      pt={{
        body: { className: "p-0 flex flex-1 flex-col" },
        content: { className: "p-4 flex flex-1 flex-col" }
      }}
    >
      <span className="section-label text-toprak-600">{urun.kategori}</span>
      
      <Link href={`/magaza/urun/${urun.slug}`}>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-zeytin-900 hover:text-toprak-700">
          {urun.ad}
        </h3>
      </Link>
      
      <p className="mt-1.5 flex-1 font-body text-sm text-zeytin-600">
        {urun.kisaAciklama}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-zeytin-900">
          {urun.fiyat === 0 ? "Ücretsiz" : paraFormatla(urun.fiyat)}
        </span>
        
        <Button
          type="button"
          disabled={stokYok}
          icon={stokYok ? "pi pi-exclamation-triangle" : "pi pi-plus"}
          label={stokYok ? "Tükendi" : "Sepete Ekle"}
          onClick={() => sepeteEkle(urun)}
          className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors focus:shadow-none border-none h-9 text-bej-50 ${
            stokYok 
              ? "bg-zinc-300 cursor-not-allowed text-zinc-500" 
              : "bg-toprak-500 hover:bg-toprak-600"
          }`}
          pt={{
            icon: { className: "text-xs mr-1.5" }
          }}
        />
      </div>
    </Card>
  );
}