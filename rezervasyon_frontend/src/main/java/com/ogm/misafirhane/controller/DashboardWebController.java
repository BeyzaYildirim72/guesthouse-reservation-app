package com.ogm.misafirhane.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Dashboard (Ana Panel) Web Kontrolcüsü
 */
//@Controller
@RequestMapping("/dashboard")
public class DashboardWebController {

    @GetMapping
    public String dashboard(Model model) {
        model.addAttribute("pageTitle", "Ana Panel");
        model.addAttribute("activeMenu", "dashboard");
        // Örnek istatistik verileri
        model.addAttribute("toplamRezervasyonSayisi", 142);
        model.addAttribute("aktifMisafirSayisi", 38);
        model.addAttribute("bosOdaSayisi", 12);
        model.addAttribute("aylikGelir", 87500);
        return "dashboard";
    }
}