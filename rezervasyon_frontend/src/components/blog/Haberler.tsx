import Image from "next/image";
import Link from "next/link";
import { haberler } from "@/data/blog-icerik";

export default function Haberler() {
  return (
    <section className="bg-bej-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-label text-toprak-600">Müzeden Haberler</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-zeytin-900 sm:text-3xl">
              Son Gelişmeler
            </h2>
          </div>
          <Link
            href="/haberler"
            className="font-body text-sm font-semibold text-zeytin-700 underline-offset-4 hover:text-toprak-600 hover:underline"
          >
            Tüm haberleri gör →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {haberler.map((haber) => (
            <article
              key={haber.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-zeytin-100 transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={haber.gorsel}
                  alt={haber.baslik}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-body text-xs text-zeytin-500">{haber.tarih}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-zeytin-900">
                  {haber.baslik}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm text-zeytin-600">
                  {haber.ozet}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-toprak-600">
                  Devamını oku
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
