import type { Metadata } from "next";
import BlogYonetimi from "@/components/admin/BlogYonetimi";

export const metadata: Metadata = {
  title: "Blog Yönetimi | Yönetim Paneli",
};

export default function AdminBlogSayfasi() {
  return <BlogYonetimi />;
}
