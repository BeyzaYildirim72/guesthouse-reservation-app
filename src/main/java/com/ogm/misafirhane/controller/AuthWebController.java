package com.ogm.misafirhane.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AuthWebController {

    @GetMapping("/")
    public String anaSayfa() {
        return "redirect:/giris";
    }

    @GetMapping("/giris")
    public String giris(
            @RequestParam(value = "registered", defaultValue = "false") boolean registered,
            @RequestParam(value = "logout",     defaultValue = "false") boolean logout,
            Model model) {
        model.addAttribute("registered", registered);
        model.addAttribute("logout", logout);
        model.addAttribute("pageTitle", "Giriş Yap");
        return "auth/login";
    }

    @GetMapping("/giris-yap")
    public String girisYap(@RequestParam(defaultValue = "") String tc,
                           @RequestParam(defaultValue = "") String sifre) {
        if (!tc.isBlank() && !sifre.isBlank()) {
            return "redirect:/dashboard";
        }
        return "redirect:/giris?hata=true";
    }

    @GetMapping("/uye-ol")
    public String uyeOl(Model model) {
        model.addAttribute("pageTitle", "Üye Ol");
        return "auth/register";
    }

    @GetMapping("/cikis")
    public String cikis() {
        return "redirect:/giris?logout=true";
    }

    // --- REZERVASYON VE PANEL ADIMLARI ---

    @GetMapping("/dashboard")
    public String dashboardSayfasi(Model model) {
        model.addAttribute("pageTitle", "Ana Panel");
        model.addAttribute("activeMenu", "dashboard");
        model.addAttribute("kullaniciAdi", "Aylin Melike"); // Giriş yapan kullanıcının adı
        model.addAttribute("toplamRezervasyonSayisi", 142);
        model.addAttribute("aktifMisafirSayisi", 38);
        model.addAttribute("bosOdaSayisi", 12);
        model.addAttribute("aylikGelir", 87500);
        return "dashboard";
    }

    @GetMapping("/konaklama")
    public String konaklamaSayfasi() {
        return "konaklama";
    }

    @GetMapping("/oda-secimi")
    public String odaSecimiSayfasi() {
        return "oda-secimi";
    }

    @GetMapping("/on-izleme")
    public String onIzlemeSayfasi() {
        return "on-izleme";
    }

    @GetMapping("/odeme")
    public String odemeSayfasi() {
        return "odeme";
    }

    @GetMapping("/rezervasyon-basarili")
    public String rezervasyonBasarili() {
        return "rezervasyon-basarili";
    }

    @GetMapping("/rezervasyonlarim")
    public String rezervasyonlarimSayfasi() {
        return "rezervasyonlarim";
    }

    @GetMapping("/rezervasyon-olustur")
    public String rezervasyonOlusturSayfasi(Model model) {
        model.addAttribute("activeMenu", "rezervasyon");
        return "misafir-bilgileri";
    }

    @GetMapping("/kayit-basarili")
    public String kayitBasariliSayfasi(Model model) {
        model.addAttribute("activeMenu", "anasayfa");
        return "kayit-basarili";
    }

    @GetMapping("/iletisim")
    public String iletisimSayfasi(Model model) {
        model.addAttribute("activeMenu", "iletisim");
        return "iletisim";
    }

    @GetMapping("/misafir-kayit")
    public String misafirKayitSayfasi(Model model) {
        model.addAttribute("activeMenu", "anasayfa");
        return "misafir-kayit";
    }

}