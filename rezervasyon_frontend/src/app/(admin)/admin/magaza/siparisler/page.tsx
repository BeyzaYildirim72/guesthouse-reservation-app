import type { Metadata } from "next";
import SiparisYonetimi from "@/components/admin/SiparisYonetimi";

export const metadata: Metadata = {
  title: "Siparişler | Yönetim Paneli",
};

export default function AdminSiparislerSayfasi() {
  return <SiparisYonetimi />;
}
