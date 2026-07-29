'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Giriş isteği:', { email, password });
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-[420px] text-center box-border">
            
            {/* Logo ve Başlık Alanı */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-[120px] h-[120px] rounded-full bg-white shadow-md flex items-center justify-center mb-4 border border-gray-100 p-2 overflow-hidden box-border">
                    <img 
                        src="/Orman_Genel_Müdürlüğü_logo.png" 
                        alt="OGM Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <h2 className="m-0 mb-2 text-[#2c3a22] text-2xl font-bold tracking-tight">
                    Kullanıcı Girişi
                </h2>
                <p className="m-0 text-gray-500 text-xs leading-relaxed px-2">
                    İşlemlerinize devam edebilmeniz için kullanıcı girişi yapın
                </p>
            </div>

            {/* Giriş Formu */}
            <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
                
                {/* E-Posta Satırı */}
                <div className="flex w-full box-border items-stretch">
                    <span className="flex items-center justify-center w-12 min-w-[48px] bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg text-[#2c3a22] text-base">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="kullanıcı mail adresi" 
                        className="flex-1 w-full rounded-r-lg border border-gray-300 p-3 text-sm outline-none box-border focus:border-[#c8703d]"
                        required
                    />
                </div>

                {/* Şifre Satırı */}
                <div className="flex w-full box-border items-stretch">
                    <span className="flex items-center justify-center w-12 min-w-[48px] bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg text-[#2c3a22] text-base">
                        <i className="pi pi-key"></i>
                    </span>
                    {/* flex-1 eklenerek PrimeReact sarmalayıcısının tüm boşluğu kaplaması sağlandı */}
                    <div className="flex-1 flex">
                        <Password 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Şifreniz" 
                            toggleMask 
                            feedback={false}
                            required
                            style={{ width: '100%' }} // Kök bileşeni tam genişlik yapıyoruz
                            className="w-full flex"
                            inputClassName="w-full rounded-r-lg border border-gray-300 p-3 text-sm outline-none box-border focus:border-[#c8703d]"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Link href="/forgot-password" className="text-gray-500 text-xs no-underline hover:text-[#c8703d] hover:underline transition-colors duration-200">
                        Şifremi Unuttum
                    </Link>
                </div>

                <Button 
                    label="GİRİŞ YAP" 
                    type="submit"
                    className="w-full mt-2 text-white font-semibold p-3 rounded-lg cursor-pointer text-sm tracking-wide transition-colors duration-200 border-none"
                    style={{ backgroundColor: '#2c3a22' }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e2918'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c3a22'}
                />
            </form>

            <div className="flex justify-center items-center gap-1 mt-6 pt-4 border-t border-gray-100 text-sm">
                <span className="text-gray-500">Hesabınız yok mu?</span>
                <Link href="/register" className="font-semibold no-underline hover:underline transition-colors duration-200" style={{ color: '#c8703d' }}>
                    Üye Ol
                </Link>
            </div>
        </div>
    );
}