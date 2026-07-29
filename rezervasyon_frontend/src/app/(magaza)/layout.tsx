"use client";

import { SepetProvider } from "@/components/magaza/SepetContext";
import { PrimeReactProvider } from "primereact/api";
export default function MagazaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <SepetProvider>
        {children}
      </SepetProvider>
    </PrimeReactProvider>
  );
}