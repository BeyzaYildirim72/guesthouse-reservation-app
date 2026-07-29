'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        
        if (key === 'passwordConfirm') {
            if (formData.password !== value) {
                setPasswordError('Girdiğiniz şifreler birbiriyle eşleşmiyor.');
            } else {
                setPasswordError('');
            }
        } else if (key === 'password') {
            if (formData.passwordConfirm && value !== formData.passwordConfirm) {
                setPasswordError('Girdiğiniz şifreler birbiriyle eşleşmiyor.');
            } else {
                setPasswordError('');
            }
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirm) {
            setPasswordError('Girdiğiniz şifreler birbiriyle eşleşmiyor. Lütfen kontrol edin.');
            return;
        }
        if (!acceptedTerms) {
            alert('Lütfen hüküm ve koşulları kabul edin.');
            return;
        }
        setPasswordError('');
        console.log('Kayıt Başarılı! Veriler:', formData);
    };

    return (
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-[680px] box-border">
            {/* Başlık Alanı */}
            <div className="text-center mb-10 flex flex-col items-center">
                <h2 className="m-0 mb-2 text-[#2c3a22] text-3xl font-bold tracking-tight">
                    Hesap Oluştur
                </h2>
                <p className="m-0 text-gray-400 text-xs max-w-[360px] leading-relaxed">
                    Üye olmak için tüm alanları eksiksiz doldurmanız gereklidir.
                </p>
            </div>

            {/* Kayıt Formu */}
            <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">Ad</label>
                        <InputText 
                            value={formData.firstName} 
                            onChange={(e) => handleInputChange('firstName', e.target.value)} 
                            placeholder="Ad" 
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#c8703d]"
                            required
                        />
                        <span className="text-[10px] text-gray-400">(* Zorunlu Alan)</span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">Soyad</label>
                        <InputText 
                            value={formData.lastName} 
                            onChange={(e) => handleInputChange('lastName', e.target.value)} 
                            placeholder="Soyad" 
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#c8703d]"
                            required
                        />
                        <span className="text-[10px] text-gray-400">(* Zorunlu Alan)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">Şifre</label>
                        <Password 
                            value={formData.password} 
                            onChange={(e) => handleInputChange('password', e.target.value)} 
                            placeholder="Şifre" 
                            toggleMask 
                            feedback={false}
                            style={{ width: '100%' }}
                            inputClassName={`w-full rounded-lg border p-3 text-sm outline-none focus:border-[#c8703d] ${passwordError ? 'border-[#c8703d]' : 'border-gray-300'}`}
                            required
                        />
                        <span className="text-[10px] text-gray-400">(* Zorunlu Alan)</span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">Şifre Tekrar</label>
                        <Password 
                            value={formData.passwordConfirm} 
                            onChange={(e) => handleInputChange('passwordConfirm', e.target.value)} 
                            placeholder="Şifre Tekrar" 
                            toggleMask 
                            feedback={false}
                            style={{ width: '100%' }}
                            inputClassName={`w-full rounded-lg border p-3 text-sm outline-none focus:border-[#c8703d] ${passwordError ? 'border-[#c8703d]' : 'border-gray-300'}`}
                            required
                        />
                        <span className="text-[10px] text-gray-400">(* Zorunlu Alan)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">E-Posta</label>
                        <InputText 
                            type="email"
                            value={formData.email} 
                            onChange={(e) => handleInputChange('email', e.target.value)} 
                            placeholder="E-Posta" 
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#c8703d]"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-[#2c3a22]">E-Posta Tekrar</label>
                        <InputText 
                            type="email"
                            value={formData.emailConfirm} 
                            onChange={(e) => handleInputChange('emailConfirm', e.target.value)} 
                            placeholder="E-Posta Tekrar" 
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#c8703d]"
                            required
                        />
                    </div>
                </div>

                {passwordError && (
                    <div className="text-xs font-semibold p-3 rounded-lg bg-orange-50 flex items-center gap-2 border border-orange-100 justify-center" style={{ color: '#c8703d' }}>
                        <i className="pi pi-exclamation-triangle"></i>
                        {passwordError}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            inputId="terms" 
                            checked={acceptedTerms} 
                            onChange={e => setAcceptedTerms(e.checked ?? false)} 
                            style={{ borderColor: acceptedTerms ? '#2c3a22' : '#d1d5db' }}
                        />
                        <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                            <Link href="/terms" className="text-gray-700 underline font-medium hover:text-[#c8703d]">Hüküm ve koşulları</Link> okudum kabul ediyorum.
                        </label>
                    </div>

                    <Button 
                        label="KAYIT OL" 
                        icon="pi pi-arrow-right" 
                        iconPos="right"
                        type="submit"
                        className="px-6 py-3 text-white font-semibold rounded-lg cursor-pointer text-sm tracking-wide transition-colors duration-200 border-none flex items-center gap-2 self-end sm:self-auto"
                        style={{ backgroundColor: '#2c3a22' }} 
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e2918'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c3a22'}
                    />
                </div>
            </form>

            <div className="flex justify-center items-center gap-1 mt-8 pt-4 border-t border-gray-100 text-sm">
                <span className="text-gray-500">Zaten hesabınız var mı?</span>
                <Link href="/login" className="font-semibold no-underline hover:underline transition-colors duration-200" style={{ color: '#c8703d' }}>
                    Giriş Yap
                </Link>
            </div>
        </div>
    );
}