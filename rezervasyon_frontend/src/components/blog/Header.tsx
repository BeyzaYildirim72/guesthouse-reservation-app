"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "primereact/button";
import { kategoriMenu } from "@/data/blog-icerik";

export default function Header() {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <header className="relative z-50">
      {/* Üst bilgi şeridi */}
      <div className="bg-zeytin-900 text-bej-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="hidden font-body sm:block">
            Her gün 09:00–18:00 açığız &middot; Pazartesi kapalı
          </p>
          <p className="font-body sm:hidden">09:00–18:00 &middot; Pzt kapalı</p>
          <div className="flex items-center gap-4 font-body">
            <a href="tel:+903121234567" className="hover:text-toprak-400">
              0312 123 45 67
            </a>
            <Link href="/randevu" className="hidden hover:text-toprak-400 sm:inline">
              Randevu Al
            </Link>
          </div>
        </div>
      </div>

      {/* Logo + ana navigasyon */}
      <div className="bg-bej-100/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zeytin-700 font-display text-lg text-bej-100">
              ADK
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-zeytin-900 sm:text-xl">
                Atatürk Arboretumu Müzesi
              </span>
              <span className="section-label text-zeytin-600">Müzesi</span>
            </span>
          </Link>

          {/* Masaüstü kategori menüsü */}
          <nav className="hidden items-center gap-8 lg:flex">
            {kategoriMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-zeytin-800 transition-colors hover:text-toprak-600"
              >
                {item.etiket}
              </Link>
            ))}
          </nav>

          <Link href="/randevu" className="hidden lg:inline-block">
            <Button label="Randevu Al" className="rounded-full" />
          </Link>

          {/* Mobil menü butonu */}
          <Button
            icon={menuAcik ? "pi pi-times" : "pi pi-bars"}
            rounded
            outlined
            severity="secondary"
            aria-label="Menüyü aç/kapat"
            onClick={() => setMenuAcik(!menuAcik)}
            className="lg:hidden"
          />
        </div>

        {/* Mobil açılır menü */}
        {menuAcik && (
          <nav className="flex flex-col gap-1 border-t border-zeytin-200/60 bg-bej-100 px-4 pb-4 pt-2 lg:hidden">
            {kategoriMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuAcik(false)}
                className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-zeytin-800 hover:bg-zeytin-100"
              >
                {item.etiket}
              </Link>
            ))}
            <Link href="/randevu" onClick={() => setMenuAcik(false)} className="mt-2">
              <Button label="Randevu Al" className="w-full justify-center rounded-full" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
