"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marka } from "@/data/site-icerik";

const menuOgeleri = [
  {
    baslik: "Genel Bakış",
    href: "/admin",
    ikon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" />
        <rect x="13" y="11" width="8" height="10" rx="1.5" />
        <rect x="3" y="14" width="8" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    baslik: "Blog Yönetimi",
    href: "/admin/blog",
    ikon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4z" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    baslik: "Duyurular",
    href: "/admin/duyurular",
    ikon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 21h4M5 17h14l-1.4-2.8a3 3 0 01-.3-1.3V9a5.3 5.3 0 00-10.6 0v3.9c0 .45-.1.9-.3 1.3L5 17z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    baslik: "Mağaza Ürünleri",
    href: "/admin/magaza/urunler",
    ikon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7v10l9 4 9-4V7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    baslik: "Siparişler",
    href: "/admin/magaza/siparisler",
    ikon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 4h2l1 12h13l1-9H6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-zeytin-950 text-bej-100 lg:flex">
      <div className="flex items-center gap-3 px-6 py-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-toprak-500 font-display text-sm text-bej-50">
          {marka.kisaAd}
        </span>
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold text-bej-50">Yönetim Paneli</p>
          <p className="font-body text-xs text-bej-400">Müze İçerik Sistemi</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {menuOgeleri.map((oge) => {
          const aktif = pathname === oge.href;
          return (
            <Link
              key={oge.href}
              href={oge.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-body text-sm font-medium transition-colors ${
                aktif
                  ? "bg-zeytin-800 text-bej-50"
                  : "text-bej-300 hover:bg-zeytin-900 hover:text-bej-50"
              }`}
            >
              {oge.ikon}
              {oge.baslik}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zeytin-800 px-6 py-4">
        <Link
          href="/admin/login"
          className="flex items-center gap-2 font-body text-sm text-bej-400 hover:text-toprak-400"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Çıkış Yap
        </Link>
      </div>
    </aside>
  );
}
