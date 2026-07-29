"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { heroSlaytlari } from "@/data/blog-icerik";

export default function HeroSlider() {
  const [aktif, setAktif] = useState(0);
  const zamanlayici = useRef<ReturnType<typeof setInterval> | null>(null);

  const sonraki = useCallback(() => {
    setAktif((onceki) => (onceki + 1) % heroSlaytlari.length);
  }, []);

  const onceki = useCallback(() => {
    setAktif((onceki) => (onceki - 1 + heroSlaytlari.length) % heroSlaytlari.length);
  }, []);

  useEffect(() => {
    zamanlayici.current = setInterval(sonraki, 6000);
    return () => {
      if (zamanlayici.current) clearInterval(zamanlayici.current);
    };
  }, [sonraki, aktif]);

  const duraklat = () => {
    if (zamanlayici.current) clearInterval(zamanlayici.current);
  };

  return (
    <section
      className="relative h-[68vh] min-h-[420px] w-full overflow-hidden sm:h-[78vh]"
      onMouseEnter={duraklat}
      role="region"
      aria-label="Öne çıkan içerikler"
    >
      {heroSlaytlari.map((slayt, index) => (
        <div
          key={slayt.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === aktif ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          aria-hidden={index !== aktif}
        >
          <Image
            src={slayt.gorsel}
            alt={slayt.baslik}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          {/* Okunabilirlik için karartma katmanı */}
          <div className="absolute inset-0 bg-gradient-to-t from-zeytin-950/85 via-zeytin-950/30 to-zeytin-950/10" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <span className="section-label mb-3 text-toprak-400">
              {String(index + 1).padStart(2, "0")} / {String(heroSlaytlari.length).padStart(2, "0")}
            </span>
            <h1 className="max-w-xl font-display text-3xl font-semibold leading-tight text-bej-50 sm:text-4xl md:text-5xl">
              {slayt.baslik}
            </h1>
            <p className="mt-4 max-w-md font-body text-sm text-bej-100/90 sm:text-base">
              {slayt.aciklama}
            </p>
            <Link href={slayt.butonHref} className="mt-7">
              <Button
                label={slayt.butonMetni}
                icon="pi pi-arrow-right"
                iconPos="right"
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      ))}

      {/* Önceki / sonraki kontrolleri */}
      <Button
        icon="pi pi-chevron-left"
        rounded
        text
        aria-label="Önceki slayt"
        onClick={onceki}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 !bg-bej-50/20 !text-bej-50 backdrop-blur-sm hover:!bg-bej-50/40 sm:flex"
      />
      <Button
        icon="pi pi-chevron-right"
        rounded
        text
        aria-label="Sonraki slayt"
        onClick={sonraki}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 !bg-bej-50/20 !text-bej-50 backdrop-blur-sm hover:!bg-bej-50/40 sm:flex"
      />

      {/* Slayt noktaları */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-auto sm:right-8 sm:translate-x-0">
        {heroSlaytlari.map((slayt, index) => (
          <button
            key={slayt.id}
            type="button"
            onClick={() => setAktif(index)}
            aria-label={`${index + 1}. slayta geç`}
            aria-current={index === aktif}
            className={`h-2 rounded-full transition-all ${index === aktif ? "dot-active bg-toprak-400" : "w-2 bg-bej-50/50 hover:bg-bej-50/80"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
