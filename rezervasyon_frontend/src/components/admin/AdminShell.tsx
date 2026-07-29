"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const girisSayfasi = pathname === "/admin/login";

  if (girisSayfasi) {
    // Giriş ekranı tam sayfa, sidebar/topbar olmadan gösterilir.
    return <div className="min-h-screen bg-zeytin-950">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-bej-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        {children}
      </div>
    </div>
  );
}
