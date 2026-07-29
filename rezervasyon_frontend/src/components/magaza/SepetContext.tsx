"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
  type ReactNode,
} from "react";
import type { SepetUrunu, Urun } from "@/lib/types";
import { Toast } from "primereact/toast";

type SepetBaglami = {
  urunler: SepetUrunu[];
  toplamAdet: number;
  toplamTutar: number;
  sepeteEkle: (urun: Urun, adet?: number) => void;
  adetGuncelle: (id: string, adet: number) => void;
  urunCikar: (id: string) => void;
  sepetiBosalt: () => void;
};

const SepetContext = createContext<SepetBaglami | null>(null);

export function SepetProvider({ children }: { children: ReactNode }) {
  const [urunler, setUrunler] = useState<SepetUrunu[]>([]);
  const toastRef = useRef<Toast>(null);

  const sepeteEkle = (urun: Urun, adet: number = 1) => {
    setUrunler((onceki) => {
      const mevcut = onceki.find((u) => u.id === urun.id);
      if (mevcut) {
        return onceki.map((u) =>
          u.id === urun.id ? { ...u, adet: u.adet + adet } : u
        );
      }
      return [...onceki, { ...urun, adet }];
    });
    toastRef.current?.show({
      severity: "success",
      summary: "Sepete Eklendi",
      detail: `${urun.ad} (${adet} adet) sepete eklendi.`,
      life: 2500,
    });
  };

  const adetGuncelle = (id: string, adet: number) => {
    if (adet < 1) return;
    setUrunler((onceki) =>
      onceki.map((u) => (u.id === id ? { ...u, adet } : u))
    );
  };

  const urunCikar = (id: string) => {
    const silinecekUrun = urunler.find((u) => u.id === id);
    setUrunler((onceki) => onceki.filter((u) => u.id !== id));

    if (silinecekUrun) {
      toastRef.current?.show({
        severity: "warn",
        summary: "Ürün Çıkarıldı",
        detail: `${silinecekUrun.ad} sepetinizden kaldırıldı.`,
        life: 2500,
      });
    }
  };

  const sepetiBosalt = () => {
    setUrunler([]);
    toastRef.current?.show({
      severity: "info",
      summary: "Sepet Temizlendi",
      detail: "Sepetinizdeki tüm ürünler kaldırıldı.",
      life: 2500,
    });
  };

  const toplamAdet = useMemo(
    () => urunler.reduce((acc, u) => acc + u.adet, 0),
    [urunler]
  );

  const toplamTutar = useMemo(
    () => urunler.reduce((acc, u) => acc + u.fiyat * u.adet, 0),
    [urunler]
  );

  return (
    <SepetContext.Provider
      value={{
        urunler,
        toplamAdet,
        toplamTutar,
        sepeteEkle,
        adetGuncelle,
        urunCikar,
        sepetiBosalt,
      }}
    >
      <Toast ref={toastRef} position="bottom-right" className="font-body text-sm" />
      {children}
    </SepetContext.Provider>
  );
}

export function useSepet() {
  const ctx = useContext(SepetContext);
  if (!ctx) {
    throw new Error("useSepet, SepetProvider içinde kullanılmalıdır.");
  }
  return ctx;
}