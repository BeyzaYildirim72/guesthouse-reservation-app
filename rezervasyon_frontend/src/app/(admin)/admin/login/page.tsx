"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { marka } from "@/data/site-icerik";

export default function AdminGirisSayfasi() {
  const router = useRouter();
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const girisYap = (e: FormEvent) => {
    e.preventDefault();
    setHata("");

    if (!eposta.trim() || !sifre.trim()) {
      setHata("E-posta ve şifre alanları zorunludur.");
      return;
    }

    // NOT: Bu bir UI iskeletidir, gerçek bir kimlik doğrulama yapılmaz.
    // Gerçek auth eklerken burada bir API isteği / NextAuth çağrısı yapılır.
    setYukleniyor(true);
    setTimeout(() => {
      router.push("/admin");
    }, 600);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-toprak-500 font-display text-xl text-bej-50">
            {marka.kisaAd}
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-bej-50">
            Yönetim Paneline Giriş
          </h1>
          <p className="mt-1 font-body text-sm text-bej-300">
            {marka.tamAd} içerik yönetim sistemi
          </p>
        </div>

        <form
          onSubmit={girisYap}
          className="rounded-2xl bg-zeytin-900 p-6 ring-1 ring-zeytin-800 sm:p-8"
        >
          <div>
            <label htmlFor="eposta" className="font-body text-sm font-medium text-bej-200">
              E-posta
            </label>
            <input
              id="eposta"
              type="email"
              value={eposta}
              onChange={(e) => setEposta(e.target.value)}
              placeholder="ornek@amuzesi.org"
              className="mt-1.5 w-full rounded-xl border border-zeytin-700 bg-zeytin-950 px-4 py-2.5 font-body text-sm text-bej-100 placeholder:text-zeytin-500 focus:border-toprak-500"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="sifre" className="font-body text-sm font-medium text-bej-200">
              Şifre
            </label>
            <input
              id="sifre"
              type="password"
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-xl border border-zeytin-700 bg-zeytin-950 px-4 py-2.5 font-body text-sm text-bej-100 placeholder:text-zeytin-500 focus:border-toprak-500"
            />
          </div>

          {hata && (
            <p className="mt-3 font-body text-sm text-toprak-400">{hata}</p>
          )}

          <button
            type="submit"
            disabled={yukleniyor}
            className="mt-6 w-full rounded-full bg-toprak-500 px-6 py-3 font-body text-sm font-semibold text-bej-50 transition-colors hover:bg-toprak-600 disabled:opacity-70"
          >
            {yukleniyor ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>

          <p className="mt-4 text-center font-body text-xs text-zeytin-500">
            Bu bir arayüz demosudur; gerçek bir kimlik doğrulama yapılmaz.
          </p>
        </form>
      </div>
    </main>
  );
}
