import type { Metadata } from "next";
import DuyuruYonetimi from "@/components/admin/DuyuruYonetimi";

export const metadata: Metadata = {
  title: "Duyurular | Yönetim Paneli",
};

export default function AdminDuyurularSayfasi() {
  return <DuyuruYonetimi />;
}
