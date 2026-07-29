import Link from "next/link";
import { hizliLinkler } from "@/data/blog-icerik";

const ikonlar: Record<string, React.ReactNode> = {
  "Ziyaret Saatleri": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Bilet & Randevu": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 5v0M16 5v0" strokeLinecap="round" />
    </svg>
  ),
  Koleksiyon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19V8l8-4 8 4v11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19h16M9 19v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Eğitim Programları": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function HizliLinkler() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:-mt-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 rounded-2xl bg-bej-50 p-3 shadow-lg shadow-zeytin-900/10 ring-1 ring-zeytin-100 sm:grid-cols-4 sm:gap-4 sm:p-4">
        {hizliLinkler.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col gap-2 rounded-xl p-4 transition-colors hover:bg-zeytin-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zeytin-100 text-zeytin-700 transition-colors group-hover:bg-toprak-500 group-hover:text-bej-50">
              {ikonlar[link.etiket]}
            </span>
            <span className="font-display text-sm font-semibold text-zeytin-900 sm:text-base">
              {link.etiket}
            </span>
            <span className="font-body text-xs text-zeytin-600 sm:text-sm">
              {link.aciklama}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
