'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('');

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Şifre sıfırlama e-postası gönderildi:', email);
        // Buraya ilerleyen aşamalarda API isteği eklenecek
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-[420px] text-center box-border">
            
            {/* Başlık ve Açıklama Alanı */}
            <div className="flex flex-col items-center mb-8">
                <h2 className="m-0 mb-2 text-[#2c3a22] text-2xl font-bold tracking-tight">
                    Parola Sıfırlama
                </h2>
                <p className="m-0 text-gray-500 text-xs leading-relaxed px-4">
                    Talimatları size e-posta ile göndereceğiz
                </p>
            </div>

            {/* Şifre Sıfırlama Formu */}
            <form onSubmit={handleResetPassword} className="flex flex-col gap-5 text-left">
                
                {/* E-Posta Girdi Alanı */}
                <div className="flex w-full box-border items-stretch">
                    <span className="flex items-center justify-center w-12 min-w-[48px] bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg text-[#2c3a22] text-base">
                        <i className="pi pi-envelope"></i>
                    </span>
                    <InputText 
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Mail Adresiniz"
                        className="flex-1 w-full rounded-r-lg border border-gray-300 p-3 text-sm outline-none box-border focus:border-[#c8703d]"
                        required
                    />
                </div>

                {/* Sıfırlama Butonu */}
                <Button 
                    label="ŞİFREMİ SIFIRLA"
                    icon="pi pi-refresh"
                    type="submit"
                    className="w-full text-white font-semibold p-3 rounded-lg cursor-pointer text-sm tracking-wide transition-colors duration-200 border-none flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#2c3a22' }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e2918'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c3a22'}
                />
            </form>

            {/* Geri Dönüş Linki */}
            <div className="flex justify-center items-center gap-2 mt-6 pt-4 border-t border-gray-100 text-sm">
                <i className="pi pi-arrow-left text-xs text-gray-400"></i>
                <Link href="/login" className="text-gray-500 no-underline hover:text-[#c8703d] hover:underline transition-colors duration-200">
                    Giriş Sayfasına Dön
                </Link>
            </div>
        </div>
    );
}