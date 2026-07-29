import Link from "next/link";
import { marka, footerMenu } from "@/data/site-icerik";

export default function Footer() {
  return (
    <footer className="bg-zeytin-950 text-bej-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-toprak-500 font-display text-base text-bej-50">
                {marka.kisaAd}
              </span>
              <span className="font-display text-base font-semibold text-bej-50">
                {marka.tamAd}
              </span>
            </span>
            <p className="mt-4 font-body text-sm text-bej-300">
              1962&apos;den bu yana doğal ve kültürel mirası koruyup gelecek
              kuşaklara taşıyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-bej-50">
              Keşfedin
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-bej-300">
              {footerMenu.kesfedin.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-toprak-400">
                    {item.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-bej-50">
              Ziyaret
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-bej-300">
              {footerMenu.ziyaret.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-toprak-400">
                    {item.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-bej-50">
              İletişim
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-bej-300">
              <li>{marka.adres}</li>
              <li>
                <a href={marka.telefonHref} className="hover:text-toprak-400">
                  {marka.telefon}
                </a>
              </li>
              <li>
                <a href={`mailto:${marka.eposta}`} className="hover:text-toprak-400">
                  {marka.eposta}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zeytin-800 pt-6 text-center font-body text-xs text-bej-400">
          © {new Date().getFullYear()} {marka.tamAd}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
