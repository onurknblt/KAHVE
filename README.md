# KAHVE TURKISH COFFEE | Kurumsal Web Uygulaması

Türkiye ve Rusya'da (Tokat, Zile, Turhal ve Maykop) faaliyet gösteren **Kahve Turkish Coffee** zinciri için geliştirilmiş, yüksek performanslı ve modern kurumsal web uygulaması. Proje, "brutalist" tasarım felsefesini benimseyerek, keskin hatlar, güçlü tipografi ve akıcı animasyonlarla markanın özgün kimliğini yansıtır.

## 🚀 Teknolojiler ve Araçlar

Bu proje modern frontend ekosisteminin en güncel araçları kullanılarak inşa edilmiştir:

- **Framework:** [Next.js](https://nextjs.org/) (App Router mimarisi)
- **UI Kütüphanesi:** [React](https://react.dev/) 19
- **Stilleme:** [Tailwind CSS v4](https://tailwindcss.com/) (PostCSS ile)
- **Animasyonlar:** [Framer Motion](https://www.framer.com/motion/)
- **İkonlar:** [Lucide React](https://lucide.dev/)
- **Tema Yönetimi:** `next-themes` (Karanlık/Aydınlık mod desteği)
- **E-posta Entegrasyonu:** [Resend](https://resend.com/) (İletişim formu için)
- **Tipografi:** *Syne* (Display) ve *JetBrains Mono* (Monospace) font aileleri

## 💎 Temel Özellikler

- **Brutalist ve Özgün Tasarım:** Keskin köşeler, kalın sınırlar (borders), hard-shadow efektleri ve grid tabanlı arka planlar.
- **Akıcı Animasyonlar:** Sayfa geçişleri, hover efektleri ve özel `Framer Motion` varyantları ile zenginleştirilmiş kullanıcı deneyimi.
- **Dinamik Galeri (Lightbox):** Klavye yön tuşları ile kontrol edilebilen, özel tasarımlı tam ekran galeri görünümü.
- **İletişim Modülü:** Kullanıcı mesajlarını doğrudan sistem yöneticisine ileten `Resend` entegreli iletişim formu.
- **Şube ve Lokasyon Yönetimi:** Türkiye ve Rusya şubelerinin interaktif harita bağlantıları ve operasyon saatleri ile listelenmesi.
- **Tam Duyarlılık (Responsive Mobil Uyumluluk):** Tüm cihaz ekranlarında kusursuz çalışan esnek yapı ve mobil menü tasarımı.

## 📂 Proje Yapısı

```text
src/
├── app/
│   ├── actions/          # Sunucu taraflı işlemler (örn. sendEmail.ts)
│   ├── galeri/           # Galeri sayfası
│   ├── hakkimizda/       # Manifesto ve hakkımızda sayfası
│   ├── iletisim/         # İletişim formu sayfası
│   ├── subeler/          # Lokasyonlar sayfası
│   ├── globals.css       # Global Tailwind ve özel CSS ayarları
│   ├── layout.tsx        # Ana layout ve font tanımlamaları
│   └── page.tsx          # Ana Sayfa (Hero, Marquee, Seçkiler)
├── components/           # Yeniden kullanılabilir UI bileşenleri
│   ├── Footer.tsx        # Alt bilgi alanı
│   ├── Header.tsx        # Navigasyon ve kontroller
│   ├── MobileMenu.tsx    # Mobil uyumlu menü
│   └── ThemeProvider.tsx # Dark/Light mod sağlayıcısı

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın
\`\`\`bash
git clone https://github.com/kullaniciadi/kahve.git
cd kahve
\`\`\`

### 2. Bağımlılıkları Yükleyin
\`\`\`bash
npm install
# veya
yarn install
# veya
pnpm install
\`\`\`

### 3. Çevresel Değişkenleri (Environment Variables) Ayarlayın
Proje dizininde bir `.env` dosyası oluşturun ve Resend API anahtarınızı ekleyin (İletişim formunun çalışması için gereklidir):
\`\`\`env
RESEND_API_KEY=sizin_resend_api_anahtariniz
\`\`\`

### 4. Geliştirme Sunucusunu Başlatın
\`\`\`bash
npm run dev
# veya
yarn dev
\`\`\`
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek projeyi görüntüleyebilirsiniz.

## 🛠️ Tasarım Dili (Design System)

Proje, standart UI kütüphanelerinden kaçınarak tamamen kendine has bir "Frontend Aesthetics" barındırır. `globals.css` içerisinde tanımlanan özel değişkenler:
- **Rust (Vurgu Rengi):** `#B5433C`
- **Asphalt:** `#111111`
- Özel gürültü (noise) arka plan filtresi ve grid dokusu.
- Özelleştirilmiş scrollbar tasarımı.
- Karanlık (Dark) ve Aydınlık (Light) tema arasında tam senkronizasyon.

## 📜 Lisans

© 2026 KAHVE TURKISH COFFEE. Tüm hakları saklıdır.
