"use client";

import { magazaKategorileri } from "@/data/magaza-icerik";
import { SelectButton, type SelectButtonChangeEvent } from "primereact/selectbutton";

export default function KategoriFiltre({
  aktifKategori,
  onSecim,
}: {
  aktifKategori: string;
  onSecim: (slug: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 custom-kategori-filter">
      <SelectButton
        value={aktifKategori}
        options={magazaKategorileri}
        optionLabel="etiket"
        optionValue="slug"
        onChange={(e: SelectButtonChangeEvent) => {
          if (e.value !== null) {
            onSecim(e.value);
          }
        }}
        className="flex flex-wrap gap-2"
        pt={{
          button: (options) => ({
            className: `rounded-full px-4 py-2 font-body text-sm font-medium transition-colors border-none focus:shadow-none ${
              options?.context?.selected
                ? "bg-zeytin-700 text-bej-50"
                : "bg-zeytin-50 text-zeytin-700 hover:bg-zeytin-100"
            }`,
          }),
        }}
      />
    </div>
  );
}