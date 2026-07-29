import type { Urun } from "@/lib/types";

// Mağaza ekibinin sahip olduğu içerik. Gerçek bir e-ticaret altyapısına
// bağlanırken bu dosya yerini bir API çağrısına bırakır.

export const magazaKategorileri = [
  { etiket: "Tümü", slug: "tumu" },
  { etiket: "Kitap", slug: "kitap" },
  { etiket: "Broşür", slug: "brosur" },
  { etiket: "Hediyelik", slug: "hediyelik" },
  { etiket: "Basılı Materyal", slug: "basili-materyal" },
];

export const urunler: Urun[] = [
  {
    id: "urn-001",
    slug: "anadolunun-12000-yili",
    ad: "Anadolu'nun 12.000 Yılı",
    kategori: "Kitap",
    fiyat: 320,
    stok: 42,
    gorsel:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Koleksiyonumuzdaki temel eserleri anlatan kapsamlı katalog kitabı.",
    aciklama:
      "Müzemizin 12.000 yıllık koleksiyonunu kronolojik olarak ele alan, 240 sayfalık, yüksek baskı kaliteli katalog kitabı. Tüm önemli eserlerin fotoğrafları ve uzman analizleriyle birlikte sunulur.",
    durum: "Yayında",
  },
  {
    id: "urn-002",
    slug: "gobeklitepe-rehberi",
    ad: "Göbeklitepe Gezi Rehberi",
    kategori: "Kitap",
    fiyat: 145,
    stok: 78,
    gorsel:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Cep boyutunda, harita ve illüstrasyonlarla zenginleştirilmiş rehber.",
    aciklama:
      "Göbeklitepe ören yerini ziyaret edecekler için hazırlanmış, taşınabilir boyutta gezi rehberi. Bölge haritaları, dönem illüstrasyonları ve uzman yorumları içerir.",
    durum: "Yayında",
  },
  {
    id: "urn-003",
    slug: "muze-tanitim-brosuru",
    ad: "Müze Tanıtım Broşürü (TR/EN)",
    kategori: "Broşür",
    fiyat: 0,
    stok: 500,
    gorsel:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Türkçe ve İngilizce müze tanıtım broşürü, ücretsiz dağıtım.",
    aciklama:
      "Müzemizin genel tanıtımını, çalışma saatlerini ve sergi haritasını içeren, girişte ücretsiz olarak verilen ikiletişim broşürümüz. Online sipariş ile toplu olarak da temin edilebilir.",
    durum: "Yayında",
  },
  {
    id: "urn-004",
    slug: "el-yapimi-seramik-kase",
    ad: "El Yapımı Seramik Kâse (Replika)",
    kategori: "Hediyelik",
    fiyat: 480,
    stok: 15,
    gorsel:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Koleksiyonumuzdaki çömlek desenlerinden ilham alan el yapımı kâse.",
    aciklama:
      "Yerel ustalar tarafından, koleksiyonumuzdaki Anadolu çömlekçilik desenlerinden ilhamla elde üretilen, her biri özgün seramik kâse. Hediyelik kutusunda teslim edilir.",
    durum: "Yayında",
  },
  {
    id: "urn-005",
    slug: "antik-motif-defter",
    ad: "Antik Motifli Not Defteri",
    kategori: "Hediyelik",
    fiyat: 95,
    stok: 120,
    gorsel:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Anadolu motifleriyle bezeli, 120 sayfa çizgisiz not defteri.",
    aciklama:
      "Koleksiyonumuzdaki taş kabartmalardan esinlenen motiflerle tasarlanmış, kalın kağıtlı, 120 sayfalık not defteri. Müze ziyaretinizi hatırlatacak şık bir hediye.",
    durum: "Yayında",
  },
  {
    id: "urn-006",
    slug: "cocuklar-icin-aktivite-kitabi",
    ad: "Çocuklar için Müze Aktivite Kitabı",
    kategori: "Kitap",
    fiyat: 85,
    stok: 60,
    gorsel:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "7-12 yaş arası çocuklar için boyama ve bulmaca etkinlikleri.",
    aciklama:
      "Çocukların müzeyi keşfederken eğlenmesini sağlayan, boyama sayfaları, bulmacalar ve basit bilgilerle dolu 48 sayfalık aktivite kitabı.",
    durum: "Yayında",
  },
  {
    id: "urn-007",
    slug: "sergi-katalogu-toprak-hafiza",
    ad: "\"Toprağın Hafızası\" Sergi Kataloğu",
    kategori: "Kitap",
    fiyat: 210,
    stok: 0,
    gorsel:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "Güncel sergimizin tüm eserlerini içeren özel katalog.",
    aciklama:
      "\"Toprağın Hafızası\" sergisinde yer alan tüm eserlerin yüksek çözünürlüklü fotoğraflarını ve küratör notlarını içeren sınırlı sayıda basılan özel katalog.",
    durum: "Stokta Yok",
  },
  {
    id: "urn-008",
    slug: "muze-bez-canta",
    ad: "Müze Logolu Bez Çanta",
    kategori: "Hediyelik",
    fiyat: 120,
    stok: 200,
    gorsel:
      "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=800&auto=format&fit=crop",
    kisaAciklama: "%100 pamuklu, müze logolu, doğa dostu bez çanta.",
    aciklama:
      "Geri dönüştürülmüş pamuktan üretilen, müzemizin logosunu taşıyan, günlük kullanıma uygun dayanıklı bez çanta.",
    durum: "Yayında",
  },
];

export function urunBul(slug: string): Urun | undefined {
  return urunler.find((urun) => urun.slug === slug);
}
