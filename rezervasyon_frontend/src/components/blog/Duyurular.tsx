import { Tag } from "primereact/tag";
import { duyurular } from "@/data/blog-icerik";

export default function Duyurular() {
  return (
    <section className="bg-zeytin-900 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-toprak-500 text-bej-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 21h4M5 17h14l-1.4-2.8a3 3 0 01-.3-1.3V9a5.3 5.3 0 00-10.6 0v3.9c0 .45-.1.9-.3 1.3L5 17z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 className="font-display text-2xl font-semibold text-bej-50 sm:text-3xl">
            Duyurular
          </h2>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {duyurular.map((duyuru) => (
            <li
              key={duyuru.id}
              className="flex items-start gap-4 rounded-xl bg-zeytin-800/60 p-4 ring-1 ring-zeytin-700/50"
            >
              <Tag value={duyuru.tip} severity="warning" className="mt-0.5 shrink-0" />
              <p className="font-body text-sm text-bej-100">{duyuru.baslik}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
