"use client";

import { useState } from "react";
import Link from "next/link";
import { marka } from "@/data/site-icerik";
import { magazaKategorileri } from "@/data/magaza-icerik";
import { useSepet } from "@/components/magaza/SepetContext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";

export default function MagazaHeader() {
  const [menuAcik, setMenuAcik] = useState(false);
  const { toplamAdet } = useSepet();

  return (
    <header className="relative z-50">
      <div className="bg-zeytin-900 text-bej-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="font-body">Müze Mağazası &middot; Ücretsiz kargo 500₺ üzeri</p>
          <Link href="/" className="font-body hover:text-toprak-400">
            ← Müze Ana Sayfa
          </Link>
        </div>
      </div>

      <div className="bg-bej-100/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/magaza" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zeytin-700 font-display text-lg text-bej-100">
              {marka.kisaAd}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-zeytin-900 sm:text-xl">
                Müze Mağazası
              </span>
              <span className="section-label text-zeytin-600">Kitap &middot; Hediyelik</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {magazaKategorileri.map((kat) => (
              <Link
                key={kat.slug}
                href={kat.slug === "tumu" ? "/magaza" : `/magaza?kategori=${kat.slug}`}
                className="font-body text-sm font-medium text-zeytin-800 transition-colors hover:text-toprak-600"
              >
                {kat.etiket}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/magaza/sepet" passHref legacyBehavior>
              <Button
                type="button"
                icon="pi pi-shopping-cart"
                aria-label="Sepetim"
                className="rounded-full text-zeytin-800 hover:text-toprak-600 border border-zeytin-300 hover:border-toprak-400 h-11 w-11 p-0 m-0 relative focus:shadow-none bg-transparent"
                style={{ fontSize: "1.2rem" }}
              >
                {toplamAdet > 0 && (
                  <Badge 
                    value={toplamAdet} 
                    className="absolute -right-1.5 -top-1.5 bg-toprak-500 text-bej-50 font-body text-[10px] font-bold h-5 min-w-5 flex items-center justify-center border-none"
                  />
                )}
              </Button>
            </Link>

            <Button
              type="button"
              icon={menuAcik ? "pi pi-times" : "pi pi-bars"}
              onClick={() => setMenuAcik(!menuAcik)}
              aria-expanded={menuAcik}
              aria-label="Menüyü aç/kapat"
              className="rounded-full text-zeytin-800 border border-zeytin-300 h-11 w-11 lg:hidden p-0 m-0 focus:shadow-none bg-transparent"
              style={{ fontSize: "1.1rem" }}
            />
          </div>
        </div>

        {menuAcik && (
          <nav className="flex flex-col gap-1 border-t border-zeytin-200/60 bg-bej-100 px-4 pb-4 pt-2 lg:hidden">
            {magazaKategorileri.map((kat) => (
              <Link
                key={kat.slug}
                href={kat.slug === "tumu" ? "/magaza" : `/magaza?kategori=${kat.slug}`}
                onClick={() => setMenuAcik(false)}
                className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-zeytin-800 hover:bg-zeytin-100"
              >
                {kat.etiket}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}