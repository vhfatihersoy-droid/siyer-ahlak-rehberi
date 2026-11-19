# Siyer ve Ahlak Portalı • Seerah & Ethics Portal

**Canlı Demo / Live Site:** https://vhfatihersoy-droid.github.io/siyer-ahlak-rehberi/

Hz. Muhammed'in (s.a.v.) ahlakını, sünnetini, şemâilini, 50 Ashâb-ı Kirâm'ın örnek hayatını, namaz vakitlerini ve çocuklar için değerler eğitimini sahih kaynaklara dayanarak **Türkçe ve İngilizce (`TR | EN`)** sunan bağımsız dijital eğitim portalı (React + Tailwind CSS + Vite PWA).

> *An authentic, calm, bilingual (Turkish & English) digital portal introducing the character, living Sunnah, classical Shama'il, 50 Companions, prayer times, contemporary ethics, an international **Discover Islam** guide, and a playful **Kids Portal**.*

---

## Başlıca Modüller / Key Modules

1. **Günün Sünneti, Rehberlik & Namaz Vakitleri (`Daily Sunnah & Prayer Times`):**
   - Özgün mimari illüstrasyonlu karşılama şeridi ve 4 hızlı erişim **Bento** kartı
   - 7 günlük dinamik **Günün Sünneti** havuzu (Arapça *Amiri* hat, meal, *Esbâb-ı Vürûd*, günlük tatbik, PDF ders föyü & söz kartı)
   - **81 İl + Uluslararası Şehirler Namaz Vakitleri:** Canlı geri sayım, Kıble açısı pusulası, Hicrî tarih, GPS konum ve 7 günlük PDF imsakiye
   - **Ruh Haline Göre Nebevî Rehberlik**, **Kur'an'da Peygamber Ahlakı & Esmâ-i Nebî**, **Nebevî Dualar** ve **40 Hadis Seçkisi**

2. **İslam Ahlakı & Çağdaş Meseleler (`Islamic Ethics & Modern Issues`):**
   - 5 ana başlık altında **20 Tematik Ahlak Konusu** (Aile, Ticaret, Komşuluk & Toplum, İlim & Hikmet, Doğa & Merhamet)
   - **12 Çağdaş Soruna Nebevî Çözüm** (dijital mahremiyet, tükenmişlik, israf, iş etiği, kutuplaşma vb.)
   - **6 Sosyal Rol Rehberi**, **Ahlak Denge Pusulası & 6 Manevi Reçete** ve **6 İnteraktif Vaka Analizi**

3. **50 Ashâb-ı Kirâm Ansiklopedisi (`50 Companions Encyclopedia`):**
   - Kompakt 3 sütunlu fihrist görünümü + her sahabe için ferah **Ansiklopedi Okuma Modalı**
   - Dinamik grup tasnifi (*Hulefâ-yi Râşidîn*, *Ehl-i Beyt & Annelerimiz*, *Aşere-i Mübeşşere*, *İlim & Suffe Ashâbı*, *Ensar & Fedakârlık Öncüleri*) ve çapraz *"Bakınız"* bağlantıları

4. **Şemâil-i Şerîf & Siyer (`Shama'il & Seerah`):**
   - Çift altın cetvelli, dairesel Göbek madalyonlu ve Dört Halife köşe madalyonlu **Klasik Hilye-i Şerîf Levhası**
   - **Veda Hutbesi, Medine Vesikası ve Nebevî Mektuplar / Ahitnameler**
   - Dönem filtreli **Siyer Kronolojisi (M. 571 – 632)**

5. **Eğitim, Çalışma & Muhasebe (`Study & Self-Reflection`):**
   - 5 Vakit Sünnet Durakları & Tesbih Sayacı, Haftalık Muhasebe Çetelesi, 8 Haftalık Ders Halkası Müfredatı, Bilgi Değerlendirmesi ve isme özel PNG sertifika

6. **Discover Islam & Prophet Muhammad ﷺ (`EN | TR` Uluslararası Tanışma):**
   - *Meet the Prophet in 5 Minutes*, *Stories That Touch the Heart*, *Honest Q&A & Global Thinkers*, *First Steps & Everyday Expressions*

7. **Çocuk Portalı (`Kids Portal — 100% TR & EN`):**
   - Suluboya bahçe başlığı ve yıldız puanıyla 5 aşamada gerçek zamanlı büyüyen vektörel **İyilik Ağacı (`GrowingGoodnessTree`)**
   - **32 Farz Öğrenme Atölyesi & 12 Soruluk Pekiştirme Testi**
   - **12 Sesli Siyer Kıssası & Siyer Radyosu**, **30 Günlük İyilik Takvimi**, **Genç Sahabeler**, **Eşleştirme & Bilmece Oyunları** ve isme özel **Güzel Ahlak Beratı (PNG)**

---

## Kurulum ve Çalıştırma / Local Development

```bash
npm install
npm run dev
```

Üretim derlemesi / Production build:

```bash
npm run build
```

## Yayınlama / Deployment

`main` dalına her push yapıldığında `.github/workflows/deploy.yml` üzerinden otomatik olarak derlenir ve **GitHub Pages** üzerinde canlı yayınlanır.
