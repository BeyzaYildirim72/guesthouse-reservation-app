type BadgeRenk = "yesil" | "sari" | "kirmizi" | "gri" | "mavi";

const renkSiniflari: Record<BadgeRenk, string> = {
  yesil: "bg-zeytin-100 text-zeytin-800",
  sari: "bg-amber-100 text-amber-800",
  kirmizi: "bg-red-100 text-red-700",
  gri: "bg-zinc-100 text-zinc-600",
  mavi: "bg-sky-100 text-sky-700",
};

export default function Badge({
  children,
  renk = "gri",
}: {
  children: React.ReactNode;
  renk?: BadgeRenk;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-body text-xs font-semibold ${renkSiniflari[renk]}`}
    >
      {children}
    </span>
  );
}
