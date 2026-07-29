"use client";

import { useState, type FormEvent } from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { SelectButton } from "primereact/selectbutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

type FormVeri = {
  adSoyad: string;
  eposta: string;
  telefon: string;
  ziyaretTipi: string;
  kisiSayisi: number | null;
  tarih: Date | null;
  saat: string | null;
  not: string;
};

const bosForm: FormVeri = {
  adSoyad: "",
  eposta: "",
  telefon: "",
  ziyaretTipi: "Bireysel",
  kisiSayisi: 1,
  tarih: null,
  saat: null,
  not: "",
};

const ziyaretTipiSecenekleri = ["Bireysel", "Aile", "Okul Grubu", "Kurumsal Grup"];

const saatSecenekleri = [
  "09:30",
  "10:30",
  "11:30",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function RandevuFormu() {
  const [form, setForm] = useState<FormVeri>(bosForm);
  const [hatalar, setHatalar] = useState<Partial<Record<keyof FormVeri, string>>>({});
  const [gonderildi, setGonderildi] = useState(false);

  const alaniGuncelle = <K extends keyof FormVeri>(alan: K, deger: FormVeri[K]) => {
    setForm((onceki) => ({ ...onceki, [alan]: deger }));
    setHatalar((onceki) => ({ ...onceki, [alan]: undefined }));
  };

  const formuDogrula = (): boolean => {
    const yeniHatalar: Partial<Record<keyof FormVeri, string>> = {};

    if (!form.adSoyad.trim()) {
      yeniHatalar.adSoyad = "Ad soyad alanı zorunludur.";
    }
    if (!form.eposta.trim()) {
      yeniHatalar.eposta = "E-posta alanı zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.eposta)) {
      yeniHatalar.eposta = "Geçerli bir e-posta adresi girin.";
    }
    if (!form.telefon.trim() || form.telefon.includes("_")) {
      yeniHatalar.telefon = "Geçerli bir telefon numarası girin.";
    }
    if (!form.tarih) {
      yeniHatalar.tarih = "Lütfen bir tarih seçin.";
    } else {
      const bugun = new Date();
      bugun.setHours(0, 0, 0, 0);
      if (form.tarih < bugun) {
        yeniHatalar.tarih = "Geçmiş bir tarih seçemezsiniz.";
      }
    }
    if (!form.saat) {
      yeniHatalar.saat = "Lütfen bir saat seçin.";
    }
    if (!form.kisiSayisi || form.kisiSayisi < 1) {
      yeniHatalar.kisiSayisi = "En az 1 kişi giriniz.";
    }

    setHatalar(yeniHatalar);
    return Object.keys(yeniHatalar).length === 0;
  };

  const formuGonder = (e: FormEvent) => {
    e.preventDefault();
    if (!formuDogrula()) return;

    console.log("Randevu talebi:", form);
    setGonderildi(true);
    setForm(bosForm);
  };

  if (gonderildi) {
    return (
      <div className="rounded-2xl bg-zeytin-50 p-8 text-center ring-1 ring-zeytin-200 sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zeytin-700 text-bej-50">
          <i className="pi pi-check text-xl" aria-hidden />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-zeytin-900">
          Randevu Talebiniz Alındı
        </h2>
        <p className="mx-auto mt-2 max-w-md font-body text-sm text-zeytin-600">
          Talebinizi inceleyip en kısa sürede e-posta veya telefon ile sizinle
          iletişime geçeceğiz.
        </p>
        <Button
          label="Yeni Randevu Oluştur"
          onClick={() => setGonderildi(false)}
          className="mt-6"
        />
      </div>
    );
  }

  return (
    <form onSubmit={formuGonder} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="adSoyad" className="font-body text-sm font-medium text-zeytin-800">
            Ad Soyad
          </label>
          <InputText
            id="adSoyad"
            value={form.adSoyad}
            onChange={(e) => alaniGuncelle("adSoyad", e.target.value)}
            placeholder="Adınız ve soyadınız"
            invalid={Boolean(hatalar.adSoyad)}
          />
          {hatalar.adSoyad && (
            <p className="font-body text-xs text-toprak-700">{hatalar.adSoyad}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefon" className="font-body text-sm font-medium text-zeytin-800">
            Telefon
          </label>
          <InputMask
            id="telefon"
            mask="(999) 999 99 99"
            value={form.telefon}
            onChange={(e) => alaniGuncelle("telefon", e.value || "")}
            placeholder="(5XX) XXX XX XX"
            invalid={Boolean(hatalar.telefon)}
          />
          {hatalar.telefon && (
            <p className="font-body text-xs text-toprak-700">{hatalar.telefon}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="eposta" className="font-body text-sm font-medium text-zeytin-800">
          E-posta
        </label>
        <InputText
          id="eposta"
          type="email"
          value={form.eposta}
          onChange={(e) => alaniGuncelle("eposta", e.target.value)}
          placeholder="ornek@eposta.com"
          invalid={Boolean(hatalar.eposta)}
        />
        {hatalar.eposta && (
          <p className="font-body text-xs text-toprak-700">{hatalar.eposta}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ziyaretTipi" className="font-body text-sm font-medium text-zeytin-800">
            Ziyaret Tipi
          </label>
          <Dropdown
            inputId="ziyaretTipi"
            value={form.ziyaretTipi}
            onChange={(e) => alaniGuncelle("ziyaretTipi", e.value)}
            options={ziyaretTipiSecenekleri}
            className="w-full"
          />
        </div>

        {/* Kişi Sayısı - Düzenlenmiş Kısım */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="kisiSayisi" className="font-body text-sm font-medium text-zeytin-800">
            Kişi Sayısı
          </label>
          <InputNumber
            inputId="kisiSayisi"
            value={form.kisiSayisi}
            onValueChange={(e) => alaniGuncelle("kisiSayisi", e.value ?? null)}
            min={1}
            max={100}
            showButtons
            buttonLayout="horizontal"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            decrementButtonClassName="p-button-outlined"
            incrementButtonClassName="p-button-outlined"
            inputClassName="text-center w-full"
            className="w-full"
            invalid={Boolean(hatalar.kisiSayisi)}
          />
          {hatalar.kisiSayisi && (
            <p className="font-body text-xs text-toprak-700">{hatalar.kisiSayisi}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tarih" className="font-body text-sm font-medium text-zeytin-800">
            Ziyaret Tarihi
          </label>
          <Calendar
            inputId="tarih"
            value={form.tarih}
            onChange={(e) => alaniGuncelle("tarih", e.value ?? null)}
            dateFormat="dd/mm/yy"
            minDate={new Date()}
            placeholder="Tarih seçin"
            showIcon
            invalid={Boolean(hatalar.tarih)}
          />
          {hatalar.tarih && (
            <p className="font-body text-xs text-toprak-700">{hatalar.tarih}</p>
          )}
        </div>
      </div>

      {/* Saat Seçimi - Düzenlenmiş Kısım */}
      <div className="flex flex-col gap-1.5">
        <span className="font-body text-sm font-medium text-zeytin-800">Saat Seçin</span>
        <div className="mt-1">
          <SelectButton
            value={form.saat}
            onChange={(e) => alaniGuncelle("saat", e.value)}
            options={saatSecenekleri}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 [&_.p-button]:w-full [&_.p-button]:justify-center [&_.p-button]:text-center"
          />
        </div>
        {hatalar.saat && (
          <p className="mt-1 font-body text-xs text-toprak-700">{hatalar.saat}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="not" className="font-body text-sm font-medium text-zeytin-800">
          Not <span className="text-zeytin-400">(opsiyonel)</span>
        </label>
        <InputTextarea
          id="not"
          rows={3}
          value={form.not}
          onChange={(e) => alaniGuncelle("not", e.target.value)}
          placeholder="Özel istekleriniz veya erişilebilirlik ihtiyaçlarınız varsa belirtebilirsiniz."
          autoResize
        />
      </div>

      <Button type="submit" label="Randevu Talebini Gönder" className="w-full sm:w-auto" />
    </form>
  );
}