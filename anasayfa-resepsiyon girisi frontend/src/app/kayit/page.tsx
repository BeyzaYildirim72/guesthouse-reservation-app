"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function KayitPage() {
  const [tc, setTc] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 20px'
    }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/ogm.agac.avif" alt="Orman" fill style={{ objectFit: 'cover', opacity: 0.25, mixBlendMode: 'luminosity' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,42,15,0.85) 0%, rgba(10,26,10,0.95) 100%)' }} />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '480px',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 16px',
            background: 'radial-gradient(circle at 32% 28%, #2a6b2a, var(--dark) 72%)',
            border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Image src="/ogm.logo.png" alt="OGM" width={38} height={38} style={{ borderRadius: '50%' }} />
          </div>
          <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>Hesap Oluştur</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Misafirhanemizden rezervasyon yapmak için kayıt olun</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>T.C. Kimlik No</label>
              <input 
                type="text" 
                maxLength={11}
                value={tc}
                onChange={(e) => setTc(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="11 Haneli"
                style={{
                  width: '100%', padding: '14px 16px', borderRadius: '12px',
                  background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color .2s ease'
                }} 
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Ad Soyad</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız Soyadınız"
                style={{
                  width: '100%', padding: '14px 16px', borderRadius: '12px',
                  background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color .2s ease'
                }} 
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Telefon Numarası</label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XX XXX XX XX"
              style={{
                width: '100%', padding: '14px 16px', borderRadius: '12px',
                background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color .2s ease'
              }} 
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>E-posta Adresi</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@ogm.gov.tr"
              style={{
                width: '100%', padding: '14px 16px', borderRadius: '12px',
                background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color .2s ease'
              }} 
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Şifre</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="En az 6 karakter"
              style={{
                width: '100%', padding: '14px 16px', borderRadius: '12px',
                background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontSize: '14px', outline: 'none', transition: 'border-color .2s ease'
              }} 
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              required
            />
          </div>

          <button type="submit" style={{
            background: 'var(--accent)', color: 'var(--dark)', fontWeight: 700, fontSize: '15px',
            padding: '14px', borderRadius: '12px', marginTop: '8px',
            boxShadow: '0 8px 20px rgba(74,222,128,0.25)', transition: 'transform .2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Kayıt Ol
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13.5px', color: 'rgba(255,255,255,0.6)' }}>
          Zaten hesabınız var mı? <Link href="/giris" style={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}>Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
}
