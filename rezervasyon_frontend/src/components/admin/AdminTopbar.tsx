"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { marka } from "@/data/site-icerik";

const menuOgeleri = [
  { baslik: "Genel Bakış", href: "/admin" },
  { baslik: "Blog Yönetimi", href: "/admin/blog" },
  { baslik: "Duyurular", href: "/admin/duyurular" },
  { baslik: "Mağaza Ürünleri", href: "/admin/magaza/urunler" },
  { baslik: "Siparişler", href: "/admin/magaza/siparisler" },
];

export default function AdminTopbar() {
  const [acik, setAcik] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 bg-zeytin-950 text-bej-100 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-toprak-500 font-display text-sm text-bej-50">
            {marka.kisaAd}
          </span>
          <p className="font-display text-sm font-semibold text-bej-50">Yönetim Paneli</p>
        </div>
        <button
          type="button"
          onClick={() => setAcik(!acik)}
          aria-expanded={acik}
          aria-label="Menüyü aç/kapat"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zeytin-700 text-bej-100"
        >
          {acik ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {acik && (
        <nav className="flex flex-col gap-1 border-t border-zeytin-800 px-3 pb-3 pt-2">
          {menuOgeleri.map((oge) => {
            const aktif = pathname === oge.href;
            return (
              <Link
                key={oge.href}
                href={oge.href}
                onClick={() => setAcik(false)}
                className={`rounded-lg px-3 py-2.5 font-body text-sm font-medium ${
                  aktif ? "bg-zeytin-800 text-bej-50" : "text-bej-300 hover:bg-zeytin-900"
                }`}
              >
                {oge.baslik}
              </Link>
            );
          })}
          <Link
            href="/admin/login"
            onClick={() => setAcik(false)}
            className="rounded-lg px-3 py-2.5 font-body text-sm font-medium text-bej-400 hover:bg-zeytin-900"
          >
            Çıkış Yap
          </Link>
        </nav>
      )}
    </div>
  );
}
