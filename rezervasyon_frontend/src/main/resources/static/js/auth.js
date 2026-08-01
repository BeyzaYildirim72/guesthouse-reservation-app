'use strict';

/* =====================================================
   OGM MİSAFİRHANE — AUTH.JS
   Giriş ve Kayıt Sayfaları: Form Validasyon & Mantık
   ===================================================== */

// ----------------------------------------------------------------
// ACCORDION — ROL SEÇİM KARTI
// ----------------------------------------------------------------

/**
 * Kurum personeli login formunu accordion gibi açar/kapatır.
 * @param {HTMLElement} card - Tıklanan rol kartı elementi
 * @param {string}      panelId - Açılacak panel elementi ID'si
 */
function selectRole(card, panelId) {
  const panel   = document.getElementById(panelId);
  const isOpen  = panel && panel.classList.contains('open');

  // Önce tüm seçimleri ve açık formları kapat
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.login-form-panel').forEach(p => {
    p.classList.remove('open');
  });

  if (!isOpen && panel) {
    card.classList.add('selected');
    panel.classList.add('open');
    // Smooth scroll
    requestAnimationFrame(() => {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

// ----------------------------------------------------------------
// ŞİFRE GÖSTER / GİZLE
// ----------------------------------------------------------------

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';

  const icon = btn.querySelector('i');
  if (icon) icon.className = isHidden ? 'bi bi-eye-slash' : 'bi bi-eye';
}

// ----------------------------------------------------------------
// KURUM PERSONELİ GİRİŞ FORMU VALİDASYON
// ----------------------------------------------------------------

function validateKurumForm(e) {
  e.preventDefault();
  let valid = true;

  // TC / Sicil No
  valid = validateField('kurumTc', 'tcError',
    v => v.trim().length >= 5,
    'TC Kimlik veya Sicil No giriniz (min. 5 karakter).'
  ) && valid;

  // Şifre
  valid = validateField('kurumSifre', 'sifreError',
    v => v.length >= 4,
    'Şifrenizi giriniz (min. 4 karakter).'
  ) && valid;

  if (valid) {
    const btn = e.target.querySelector('[type=submit]');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spin">&#9696;</span> Giriş yapılıyor…';
    }
    showToast('Giriş yapılıyor, lütfen bekleyiniz…', 'info');
    // Gerçek uygulamada form POST edilir; simüle yönlendirme:
    setTimeout(() => { window.location.href = '/dashboard'; }, 1200);
  }
}

// ----------------------------------------------------------------
// ÜYE OL FORMU VALİDASYON
// ----------------------------------------------------------------

function validateRegisterForm(e) {
  e.preventDefault();
  let valid = true;

  const fields = [
    {
      id: 'regAd', errId: 'adError',
      test: v => v.trim().length >= 2,
      msg: 'Ad en az 2 karakter olmalıdır.'
    },
    {
      id: 'regSoyad', errId: 'soyadError',
      test: v => v.trim().length >= 2,
      msg: 'Soyad en az 2 karakter olmalıdır.'
    },
    {
      id: 'regTc', errId: 'tcError',
      test: v => /^\d{11}$/.test(v.trim()),
      msg: 'T.C. Kimlik No 11 rakamdan oluşmalıdır.'
    },
    {
      id: 'regSicil', errId: 'sicilError',
      test: v => v.trim().length >= 3,
      msg: 'Sicil numarası giriniz (min. 3 karakter).'
    },
    {
      id: 'regEposta', errId: 'epostaError',
      test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      msg: 'Geçerli bir e-posta adresi giriniz.'
    },
    {
      id: 'regTelefon', errId: 'telefonError',
      test: v => /^0?\d{10,11}$/.test(v.replace(/\s/g, '')),
      msg: 'Geçerli bir telefon numarası giriniz.'
    },
    {
      id: 'regSifre', errId: 'sifreError',
      test: v => v.length >= 8,
      msg: 'Şifre en az 8 karakter olmalıdır.'
    },
  ];

  fields.forEach(f => {
    valid = validateField(f.id, f.errId, f.test, f.msg) && valid;
  });

  // Şifre Eşleşme Kontrolü
  const sifre       = document.getElementById('regSifre');
  const sifreTekrar = document.getElementById('regSifreTekrar');
  const stErr       = document.getElementById('sifreTekrarError');

  if (sifre && sifreTekrar) {
    if (sifre.value !== sifreTekrar.value) {
      sifreTekrar.classList.add('is-invalid');
      if (stErr) { stErr.textContent = 'Şifreler eşleşmiyor.'; stErr.style.display = 'block'; }
      valid = false;
    } else {
      sifreTekrar.classList.remove('is-invalid');
      if (stErr) stErr.style.display = 'none';
    }
  }

  // KVKK Onayı
  const kvkk    = document.getElementById('kvkk');
  const kvkkErr = document.getElementById('kvkkError');
  if (kvkk && !kvkk.checked) {
    if (kvkkErr) { kvkkErr.textContent = 'Aydınlatma metnini onaylamanız gerekmektedir.'; kvkkErr.style.display = 'block'; }
    valid = false;
  } else if (kvkkErr) {
    kvkkErr.style.display = 'none';
  }

  if (valid) {
    const btn = e.target.querySelector('[type=submit]');
    if (btn) { btn.disabled = true; btn.textContent = 'Kayıt oluşturuluyor…'; }
    showToast('Kaydınız oluşturuluyor, lütfen bekleyiniz…', 'info');
    setTimeout(() => { window.location.href = '/giris?registered=true'; }, 1300);
  }
}

// ----------------------------------------------------------------
// YARDIMCI — TEK ALAN VALİDASYON
// ----------------------------------------------------------------

function validateField(inputId, errId, testFn, errorMsg) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errId);
  if (!input) return true;

  const ok = testFn(input.value);
  if (!ok) {
    input.classList.add('is-invalid');
    if (errEl) { errEl.textContent = errorMsg; errEl.style.display = 'block'; }
    return false;
  } else {
    input.classList.remove('is-invalid');
    if (errEl) errEl.style.display = 'none';
    return true;
  }
}

// ----------------------------------------------------------------
// CANLI VALİDASYON — blur/input eventleri
// ----------------------------------------------------------------

function setupLiveValidation() {
  document.querySelectorAll('.validate-live').forEach(input => {
    const errId = input.dataset.error;

    input.addEventListener('blur', () => {
      if (input.value.trim()) clearError(input, errId);
    });

    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid') && input.value.trim()) {
        clearError(input, errId);
      }
    });
  });
}

function clearError(input, errId) {
  input.classList.remove('is-invalid');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.style.display = 'none';
}

// ----------------------------------------------------------------
// TOAST BİLDİRİMİ
// ----------------------------------------------------------------

function showToast(message, type = 'success') {
  document.getElementById('ogm-toast')?.remove();

  const palette = {
    success: { bg: '#276e31', icon: 'bi-check-circle-fill' },
    error:   { bg: '#c62828', icon: 'bi-x-circle-fill' },
    info:    { bg: '#1565c0', icon: 'bi-info-circle-fill' },
    warn:    { bg: '#b45309', icon: 'bi-exclamation-triangle-fill' },
  };

  const p = palette[type] || palette.info;
  const toast = document.createElement('div');
  toast.id = 'ogm-toast';
  Object.assign(toast.style, {
    position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: '9999',
    background: p.bg, color: '#fff',
    padding: '.85rem 1.25rem',
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '.87rem', fontWeight: '500',
    boxShadow: '0 10px 25px rgba(0,0,0,.25)',
    maxWidth: '340px',
    fontFamily: 'Inter, system-ui, sans-serif',
    animation: 'toastIn .3s ease-out',
  });

  toast.innerHTML = `<i class="bi ${p.icon}" style="font-size:1rem;flex-shrink:0;"></i><span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .35s ease';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

// ----------------------------------------------------------------
// INIT
// ----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  setupLiveValidation();

  // Kurum Personeli Login Formu
  document.getElementById('kurumLoginForm')?.addEventListener('submit', validateKurumForm);

  // Kayıt Formu
  document.getElementById('registerForm')?.addEventListener('submit', validateRegisterForm);

  // URL Parametre Kontrolü
  const params = new URLSearchParams(window.location.search);
  if (params.get('registered') === 'true') {
    showToast('Kayıt başarıyla oluşturuldu. Giriş yapabilirsiniz.', 'success');
  }
  if (params.get('logout') === 'true') {
    showToast('Güvenli şekilde çıkış yaptınız.', 'info');
  }
  if (params.get('hata') === 'true') {
    showToast('Giriş bilgileri hatalı. Lütfen tekrar deneyiniz.', 'error');
  }
});
