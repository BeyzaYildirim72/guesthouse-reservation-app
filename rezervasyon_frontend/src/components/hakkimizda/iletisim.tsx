'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';

interface FormData {
    adSoyad: string;
    email: string;
    telefon: string;
    konu: string;
    mesaj: string;
}

export default function Iletisim() {
    const [formData, setFormData] = useState<FormData>({
        adSoyad: '',
        email: '',
        telefon: '',
        konu: '',
        mesaj: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Verileri:', formData);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-slate-800">
            {/* Sayfa Başlığı */}
            <h1 className="text-3xl font-bold border-b-2 border-emerald-600 pb-3 mb-8 text-emerald-800">
                İletişim
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* SOL SÜTUN: Harita ve İletişim Bilgileri */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Google Harita Iframe */}
                    <div className="w-full h-80 rounded-xl overflow-hidden shadow-md border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.9572458428415!2d28.9818816!3d41.1794273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab31668c2d6f5%3A0x6b4847e1d5fd3ee5!2sAtat%C3%BCrk%20Arboretumu!5e0!3m2!1str!2str!4v1719650000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* İletişim Kartları Grid Yapısı */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                        {/* Adres */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                            <i className="pi pi-map-marker text-2xl text-emerald-600 mb-2"></i>
                            <span className="font-semibold text-sm mb-1">Adres</span>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                İstanbul Üniversitesi-Cerrahpaşa, Orman Fakültesi, Bahçeköy Merkez Mah., Valide Sultan Cad. No:2 34473 Bahçeköy-Sarıyer/İSTANBUL
                            </p>
                        </div>

                        {/* Telefon */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center text-center justify-center">
                            <i className="pi pi-phone text-2xl text-emerald-600 mb-2"></i>
                            <span className="font-semibold text-sm mb-1">Telefon</span>
                            <p className="text-sm text-slate-600 font-medium">0212 226 19 29</p>
                        </div>

                        {/* E-posta */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center text-center justify-center">
                            <i className="pi pi-envelope text-2xl text-emerald-600 mb-2"></i>
                            <span className="font-semibold text-sm mb-1">E-posta</span>
                            <p className="text-sm text-slate-600 break-all font-medium">
                                ataturkarboretumu@ogm.gov.tr
                            </p>
                        </div>
                    </div>
                </div>

                {/* SAĞ SÜTUN: İletişim Formu */}
                <div className="lg:col-span-5 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-semibold mb-6 text-slate-700 flex items-center gap-2">
                        <i className="pi pi-file-edit text-emerald-600"></i> İletişim Formu
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Ad Soyad */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="adSoyad" className="text-sm font-medium text-slate-600">Ad Soyad</label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-user" />
                                <InputText
                                    id="adSoyad"
                                    value={formData.adSoyad}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, adSoyad: e.target.value })}
                                    className="w-full p-inputtext-sm pl-10 border border-slate-300 rounded-md p-2 focus:border-emerald-500"
                                    placeholder="Adınız ve Soyadınız"
                                    required
                                />
                            </span>
                        </div>

                        {/* E-mail */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-600">E-mail</label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-envelope" />
                                <InputText
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-inputtext-sm pl-10 border border-slate-300 rounded-md p-2 focus:border-emerald-500"
                                    placeholder="E-posta adresiniz"
                                    required
                                />
                            </span>
                        </div>

                        {/* Telefon (Maskeli ve TypeScript Uyumlu) */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="telefon" className="text-sm font-medium text-slate-600">Telefon</label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-phone" />
                                <InputMask
                                    id="telefon"
                                    mask="+99 (999) 999-9999"
                                    value={formData.telefon}
                                    onChange={(e: InputMaskChangeEvent) => setFormData({ ...formData, telefon: e.value ?? '' })}
                                    className="w-full p-inputtext-sm pl-10 border border-slate-300 rounded-md p-2 focus:border-emerald-500"
                                    placeholder="+90 (555) 555-5555"
                                    required
                                />
                            </span>
                        </div>

                        {/* Konu */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="konu" className="text-sm font-medium text-slate-600">Konu</label>
                            <span className="p-input-icon-left w-full">
                                <i className="pi pi-bookmark" />
                                <InputText
                                    id="konu"
                                    value={formData.konu}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, konu: e.target.value })}
                                    className="w-full p-inputtext-sm pl-10 border border-slate-300 rounded-md p-2 focus:border-emerald-500"
                                    placeholder="Mesaj konusu"
                                    required
                                />
                            </span>
                        </div>

                        {/* Mesajınız */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mesaj" className="text-sm font-medium text-slate-600">Mesajınız</label>
                            <InputTextarea
                                id="mesaj"
                                value={formData.mesaj}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, mesaj: e.target.value })}
                                rows={4}
                                className="w-full p-inputtext-sm border border-slate-300 rounded-md p-2 focus:border-emerald-500"
                                placeholder="Mesajınızı buraya yazın..."
                                autoResize
                                required
                            />
                        </div>

                        {/* Gönder Butonu */}
                        <Button
                            type="submit"
                            label="Gönder"
                            icon="pi pi-send"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 border-none flex justify-center items-center gap-2 mt-2 shadow-sm"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}