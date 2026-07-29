import type { Metadata } from "next";
import Link from "next/link";
import IstatistikKarti from "@/components/admin/IstatistikKarti";
import Badge from "@/components/shared/Badge";
import { dashboardOzet, siparisler, blogYazilari } from "@/data/admin-icerik";
import { siparisDurumRengi, urunDurumRengi, paraFormatla } from "@/lib/format";

export const metadata: Metadata = {
  title: "Genel Bakış | Yönetim Paneli",
};

export default function AdminAnaSayfa() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-zeytin-900">
          Genel Bakış
        </h1>
        <p className="mt-1 font-body text-sm text-zeytin-500">
          Mağaza ve blog performansınıza hızlı bir bakış.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <IstatistikKarti
          etiket="Toplam Sipariş"
          deger={dashboardOzet.toplamSiparis.deger}
          degisim={dashboardOzet.toplamSiparis.degisim}
          yon={dashboardOzet.toplamSiparis.yon}
          ikon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 4h2l1 12h13l1-9H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
            </svg>
          }
        />
        <IstatistikKarti
          etiket="Toplam Gelir"
          deger={dashboardOzet.toplamGelir.deger}
          degisim={dashboardOzet.toplamGelir.degisim}
          yon={dashboardOzet.toplamGelir.yon}
          ikon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        <IstatistikKarti
          etiket="Yayındaki Yazı"
          deger={dashboardOzet.yayindakiYazi.deger}
          degisim={dashboardOzet.yayindakiYazi.degisim}
          yon={dashboardOzet.yayindakiYazi.yon}
          ikon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16v16H4z" strokeLinejoin="round" />
              <path d="M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
            </svg>
          }
        />
        <IstatistikKarti
          etiket="Bekleyen Sipariş"
          deger={dashboardOzet.bekleyenSiparis.deger}
          degisim={dashboardOzet.bekleyenSiparis.degisim}
          yon={dashboardOzet.bekleyenSiparis.yon}
          ikon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Son siparişler */}
        <div className="rounded-2xl bg-white p-5 ring-1 ring-zeytin-100 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-zeytin-900">
              Son Siparişler
            </h2>
            <Link
              href="/admin/magaza/siparisler"
              className="font-body text-sm font-semibold text-zeytin-600 hover:text-toprak-600"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="font-body text-xs uppercase tracking-wide text-zeytin-400">
                  <th className="pb-3 pr-4">Sipariş</th>
                  <th className="pb-3 pr-4">Müşteri</th>
                  <th className="pb-3 pr-4">Tutar</th>
                  <th className="pb-3">Durum</th>
                </tr>
              </thead>
              <tbody className="font-body text-sm text-zeytin-700">
                {siparisler.slice(0, 5).map((siparis) => (
                  <tr key={siparis.id} className="border-t border-zeytin-100">
                    <td className="py-3 pr-4 font-medium text-zeytin-900">{siparis.id}</td>
                    <td className="py-3 pr-4">{siparis.musteriAdi}</td>
                    <td className="py-3 pr-4">{paraFormatla(siparis.tutar)}</td>
                    <td className="py-3">
                      <Badge renk={siparisDurumRengi(siparis.durum)}>{siparis.durum}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blog durumu */}
        <div className="rounded-2xl bg-white p-5 ring-1 ring-zeytin-100 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-zeytin-900">
              Son Blog Yazıları
            </h2>
            <Link
              href="/admin/blog"
              className="font-body text-sm font-semibold text-zeytin-600 hover:text-toprak-600"
            >
              Tümü →
            </Link>
          </div>

          <ul className="space-y-3">
            {blogYazilari.slice(0, 4).map((yazi) => (
              <li key={yazi.id} className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-body text-sm font-medium text-zeytin-900">
                    {yazi.baslik}
                  </p>
                  <p className="font-body text-xs text-zeytin-400">{yazi.tarih}</p>
                </div>
                <Badge renk={urunDurumRengi(yazi.durum)}>{yazi.durum}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
