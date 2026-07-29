import type { Metadata } from "next";
import UrunYonetimi from "@/components/admin/UrunYonetimi";

export const metadata: Metadata = {
  title: "Mağaza Ürünleri | Yönetim Paneli",
};

export default function AdminUrunlerSayfasi() {
  return <UrunYonetimi />;
}
