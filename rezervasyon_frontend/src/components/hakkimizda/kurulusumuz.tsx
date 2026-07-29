'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ListBox } from 'primereact/listbox';

export default function Kurulusumuz() {
    const menuItems = [
        { label: 'Genel Bilgiler', value: 'genel-bilgiler', icon: 'pi pi-info-circle' },
        { label: 'Yönetim', value: 'yonetim', icon: 'pi pi-users' },
        { label: 'Danışma Kurulu', value: 'danisma-kurulu', icon: 'pi pi-comments' },
        { label: 'Orman Genel Müdürlüğü', value: 'ogm', icon: 'pi pi-building' },
        { label: 'Bahçeköy Orman İşletme Müd.', value: 'bahcekoy', icon: 'pi pi-map' },
        { label: 'İstanbul Üniversitesi Orman Fak.', value: 'istanbul-uni', icon: 'pi pi-graduation-cap' },
    ];

    const [activeTab, setActiveTab] = useState('genel-bilgiler');

    const itemTemplate = (option: any) => {
        return (
            <div className="flex items-center gap-3 p-1">
                <i className={`${option.icon} text-emerald-600`}></i>
                <span className="text-sm font-medium text-slate-700">{option.label}</span>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-slate-800">
            <h1 className="text-3xl font-bold border-b-2 border-emerald-600 pb-3 mb-8 text-emerald-800">
                Kuruluşumuz
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* SOL SÜTUN */}
                <div className="md:col-span-4">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                            <span className="font-semibold text-xs text-slate-400 tracking-wider uppercase"></span>
                        </div>
                        <ListBox
                            value={activeTab}
                            options={menuItems}
                            onChange={(e) => e.value && setActiveTab(e.value)}
                            itemTemplate={itemTemplate}
                            className="w-full border-none"
                            listClassName="divide-y divide-slate-100"
                        />
                        <div className="border-t border-slate-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                            <Link href="/hakkimizda/iletisim" className="flex items-center gap-3 px-5 py-3.5">
                                <i className="pi pi-envelope text-emerald-700 font-bold"></i>
                                <span className="text-sm font-semibold text-emerald-800">İletişim</span>
                                <i className="pi pi-arrow-right text-xs text-emerald-600 ml-auto"></i>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* SAĞ SÜTUN */}
                <div className="md:col-span-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 min-h-[400px]">
                    {activeTab === 'genel-bilgiler' && (
                        <div className="space-y-6 animate-fade-in">
                            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 border-b pb-3 text-emerald-700">
                                <i className="pi pi-info-circle"></i> Genel Bilgiler
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
                                Arboretumlari bilimsel araştırma ve gözlem amacıyla orijini ve yaşları belli, 
                                her biri doğru ve dikkatli bir şekilde bir araya getirilmiş olan çoğunluğu ağaç 
                                ve diğer odunsu bitki taksonlarının uygun seçilmiş alanlarda yetiştirilip 
                                sergilendiği tabiat parçalarıdır. Atatürk Arboretumu eğitim ve bilimsel yönleri 
                                ağır basan canlı bir bitki müzesidir...
                            </p>
                            {/* Diğer tarihçe paragrafları... */}
                        </div>
                    )}

                   {activeTab === 'yonetim' && (
    <div className="space-y-6 animate-fade-in">
        {/* Başlık */}
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 border-b pb-3 text-emerald-700">
            <i className="pi pi-users"></i> Yönetim
        </h2>
        
        {/* Orijinal Sitedeki Yönetim Metni */}
        <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
            Atatürk Arboretumu idari olarak <strong className="text-slate-700">Orman Genel Müdürlüğü'ne</strong> bağlı 
            bir şeflik birimi olup bilimsel olarak <strong className="text-slate-700">İ.Ü.C. Orman Fakültesi</strong> ile iş birliği 
            içerisindedir. Bu iş birliği bir protokol çerçevesinde Atatürk Arboretumu'nun yönetilmesini kapsamaktadır.
        </p>
        <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base">
            Arboretumda yapılacak iş ve işlemler hakkında danışma kurulu tarafından kararlar alınmaktadır. 
            Danışma kurulu; İ.Ü.C. Orman Fakültesi Dekanı, İstanbul Orman Bölge Müdürü, İ.Ü.C. Orman Fakültesi'nden 
            üç öğretim üyesi, Bahçeköy Orman İşletme Müdürü, Atatürk Arboretumu Şefinden oluşmaktadır.
        </p>

        {/* Logolar Alanı */}
        <div className="flex flex-wrap items-center justify-center gap-12 pt-6 border-t border-slate-100">
            {/* OGM Logo */}
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-28 h-28 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow">
                    {/* Eğer public klasöründe ogm logosu varsa src="/ogm-logo.png" yapabilirsin */}
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Orman_Genel_M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC_logo.png" 
                        alt="OGM Logo" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            // Eğer internet bağlantısı veya link hatası olursa kırık görünmesin diye ikon koyuyoruz
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                <span className="text-xs font-semibold text-slate-500 max-w-[150px] text-center">Orman Genel Müdürlüğü</span>
            </div>

            {/* İstanbul Üniversitesi Cerrahpaşa Logo */}
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-28 h-28 bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow">
                    <img 
                        src="https://iuc.edu.tr/assets/img/iuc_logo.png" 
                        alt="İÜC Logo" 
                        className="w-full h-full object-contain animate-pulse-once"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                <span className="text-xs font-semibold text-slate-500 max-w-[150px] text-center">İ.Ü.C. Orman Fakültesi</span>
            </div>
        </div>
    </div>
)}

                    {activeTab === 'danisma-kurulu' && (
    <div className="space-y-8 animate-fade-in">
        {/* Başlık */}
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2 border-b pb-3 text-emerald-700">
            <i className="pi pi-comments"></i> Danışma Kurulu
        </h2>

        {/* 1. GRUP: Kurul Başkanları (Üst Sıra - 2 Kolon) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* Başkan 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                {/* Resim Yerine Şık İkon Alanı */}
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3 border border-emerald-200 text-emerald-700">
                    <i className="pi pi-user text-2xl"></i>
                </div>
                <h4 className="font-bold text-sm text-slate-800">Prof. Dr. Türker DÜNDAR</h4>
                <p className="text-xs text-emerald-700 font-semibold mt-1">I.Ü.C. Orman Fakültesi Dekanı</p>
            </div>

            {/* Başkan 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                {/* Resim Yerine Şık İkon Alanı */}
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3 border border-emerald-200 text-emerald-700">
                    <i className="pi pi-user text-2xl"></i>
                </div>
                <h4 className="font-bold text-sm text-slate-800">Zafer DERİNCE</h4>
                <p className="text-xs text-emerald-700 font-semibold mt-1">İstanbul Orman Bölge Müdürü</p>
            </div>
        </div>

        {/* 2. GRUP: Kurul Üyeleri (Alt Sıra) */}
        <div className="border-t border-slate-100 pt-6">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4 text-center">Kurul Üyeleri</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Üye 1 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Prof. Dr. Ünal AKKEMİK</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Üye</p>
                    </div>
                </div>

                {/* Üye 2 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Prof. Dr. Hakan ALTINÇEKİÇ</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Üye</p>
                    </div>
                </div>

                {/* Üye 3 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Prof. Dr. Hüseyin DİRİK</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Üye</p>
                    </div>
                </div>

                {/* Üye 4 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Doç. Dr. Hatice YILMAZ</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Üye</p>
                    </div>
                </div>

                {/* Üye 5 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Turgay DELİGÖZ</h5>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">Bahçeköy Orman İşletme Müdürü</p>
                    </div>
                </div>

                {/* Üye 6 */}
                <div className="bg-white border border-slate-100 rounded-lg p-3 flex items-center gap-4 shadow-xs hover:border-slate-300 transition-colors">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border text-slate-400 flex-shrink-0">
                        <i className="pi pi-user text-base"></i>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm text-slate-800">Merve KARTALDOĞLU SÖNMEZ</h5>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">Atatürk Arboretumu Şefi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

{activeTab === 'ogm' && (
    <div className="space-y-6 animate-fade-in flex flex-col items-center justify-center text-center py-8">
        {/* Kurum Logosu veya Büyük İkon */}
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600 shadow-sm mb-2">
            <i className="pi pi-building text-4xl"></i>
        </div>

        {/* Bilgilendirme Metni */}
        <h2 className="text-xl font-bold text-slate-800">
            Orman Genel Müdürlüğü (OGM)
        </h2>
        <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            Atatürk Arboretumu idari olarak T.C. Tarım ve Orman Bakanlığı Orman Genel Müdürlüğü bünyesinde faaliyet göstermektedir. Kurumun resmi web sayfasına aşağıdaki bağlantıdan ulaşabilirsiniz.
        </p>

        {/* Yönlendirme Butonu */}
        <a 
            href="https://www.ogm.gov.tr/tr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-button p-component bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-md transition duration-200 border-none flex items-center gap-2 shadow-sm text-sm no-underline mt-2"
        >
            <i className="pi pi-external-link"></i>
            Resmi Web Sitesine Git
        </a>
    </div>
)}

{activeTab === 'bahcekoy' && (
    <div className="space-y-6 animate-fade-in flex flex-col items-center justify-center text-center py-8">
        {/* Kurum İkonu */}
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600 shadow-sm mb-2">
            <i className="pi pi-map text-4xl"></i>
        </div>

        {/* Bilgilendirme Metni */}
        <h2 className="text-xl font-bold text-slate-800">
            Bahçeköy Orman İşletme Müdürlüğü
        </h2>
        <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            Atatürk Arboretumu'nun yerel koruma, idari bakım ve saha operasyonları Bahçeköy Orman İşletme Müdürlüğü koordinasyonunda yürütülmektedir. Resmi bölge sayfasına aşağıdaki bağlantıdan ulaşabilirsiniz.
        </p>

        {/* Yönlendirme Butonu */}
        <a 
            href="https://istanbulobm.ogm.gov.tr/bahcekoyoim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-button p-component bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-md transition duration-200 border-none flex items-center gap-2 shadow-sm text-sm no-underline mt-2"
        >
            <i className="pi pi-external-link"></i>
            Resmi Web Sitesine Git
        </a>
    </div>
)}

{activeTab === 'istanbul-uni' && (
    <div className="space-y-6 animate-fade-in flex flex-col items-center justify-center text-center py-8">
        {/* Kurum İkonu */}
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-600 shadow-sm mb-2">
            <i className="pi pi-graduation-cap text-4xl"></i>
        </div>

        {/* Bilgilendirme Metni */}
        <h2 className="text-xl font-bold text-slate-800">
            İstanbul Üniversitesi-Cerrahpaşa Orman Fakültesi
        </h2>
        <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            Atatürk Arboretumu'nun kuruluşu, bilimsel araştırmaları, taksonomik tasnifleri ve akademik tüm faaliyetleri İstanbul Üniversitesi-Cerrahpaşa Orman Fakültesi iş birliğiyle yürütülmektedir.
        </p>

        {/* Yönlendirme Butonu */}
        <a 
            href="https://orman.iuc.edu.tr/tr/_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-button p-component bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-6 rounded-md transition duration-200 border-none flex items-center gap-2 shadow-sm text-sm no-underline mt-2"
        >
            <i className="pi pi-external-link"></i>
            Resmi Web Sitesine Git
        </a>
    </div>
)}
                </div>
            </div>
        </div>
    );
}