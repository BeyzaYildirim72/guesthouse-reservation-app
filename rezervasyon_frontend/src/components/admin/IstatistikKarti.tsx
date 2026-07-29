type Yon = "artis" | "azalis";

export default function IstatistikKarti({
  etiket,
  deger,
  degisim,
  yon,
  ikon,
}: {
  etiket: string;
  deger: string | number;
  degisim: string;
  yon: Yon;
  ikon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-zeytin-100">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zeytin-100 text-zeytin-700">
          {ikon}
        </span>
        <span
          className={`flex items-center gap-1 font-body text-xs font-semibold ${
            yon === "artis" ? "text-zeytin-700" : "text-toprak-600"
          }`}
        >
          {yon === "artis" ? "↑" : "↓"} {degisim}
        </span>
      </div>
      <p className="mt-4 font-display text-2xl font-semibold text-zeytin-900">
        {deger}
      </p>
      <p className="mt-1 font-body text-sm text-zeytin-500">{etiket}</p>
    </div>
  );
}
