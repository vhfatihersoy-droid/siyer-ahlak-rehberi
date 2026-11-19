import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2, AlertCircle, Download, Award, BookOpen, Check, RotateCcw, Printer, Plus
} from 'lucide-react';
import {
  hilyeSerifData,
  adultVakaScenarios,
  propheticPrayersData,
  fortyHadithSelectionData,
  universalDeclarationsData,
  weeklyCurriculumData,
  siyerQuizData,
  fivePrayerAnchorsData,
  eveningMuhasabaQuestions,
  quranPropheticMoralsData,
  esmaiNebiData,
  socialRolesSunnahData,
  propheticLettersData,
  propheticBalanceData,
  moralRemediesData
} from '../data/siyerData';
import { GlossaryText, CitationFooter } from './SharedUI';
import { safeStorage, printTopicHandout } from '../services/storageService';
import { useLanguage, localizeItem } from '../services/i18n';
import {
  enVakaMap,
  enPrayersMap,
  enPrayersCategoryMap,
  enFortyHadithMap,
  enDeclarationsMap,
  enLettersMap,
  enPrayerAnchorsMap,
  enMuhasabaMap,
  enQuranMap,
  enEsmaMap,
  enSocialRolesMap,
  enBalanceMap,
  enRemediesMap
} from '../data/englishContent';

// 1. KURUMSAL HİLYE-İ ŞERÎF LEVHASI (SESLİ OKUMA YOK)
export function HilyeSerifBoard() {
  const { t } = useLanguage();
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
      <div className="bg-[#0B4F3F] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#9A6B28]/40">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-200/90 block">
            {t("Klasik İslam Sanatları & Şemâil Tertibi", "Classical Islamic Arts & Shama'il Tradition")}
          </span>
          <h3 className="text-lg font-bold">
            {t("Hilye-i Şerîf Levhası — Hz. Ali (r.a.) Rivayeti", "Hilyah-i Sharif Panel — Narrated by Ali (r.a.)")}
          </h3>
        </div>
        <span className="text-xs text-emerald-100/80 font-medium">{hilyeSerifData.source}</span>
      </div>

      <div className="p-6 sm:p-8 space-y-6 bg-[#FAF9F6] dark:bg-slate-900/80">
        <div className="text-center pb-5 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-1">
            Başmakam
          </span>
          <div className="text-2xl sm:text-3xl font-serif text-[#0B4F3F] dark:text-emerald-400">
            {hilyeSerifData.besmele}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                Sadakat • Es-Sıddîk
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {hilyeSerifData.corners[0]}
              </span>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                Adalet • El-Fârûk
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {hilyeSerifData.corners[1]}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white dark:bg-slate-800 border-2 border-[#0B4F3F]/30 dark:border-emerald-500/30 rounded-xl p-6 flex flex-col justify-center text-center space-y-3 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
              Göbek Makamı • {hilyeSerifData.gobekTitle}
            </span>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
              "{hilyeSerifData.gobekText}"
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                Hayâ & İnfak • Zinnûreyn
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {hilyeSerifData.corners[2]}
              </span>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                İlim & Hikmet • El-Murtazâ
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                {hilyeSerifData.corners[3]}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center space-y-1">
          <div className="text-lg sm:text-xl font-serif text-[#0B4F3F] dark:text-emerald-400">
            {hilyeSerifData.ayetArabic}
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            "{hilyeSerifData.ayetMeaning}"
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. YETİŞKİNLER İÇİN KURUMSAL VAKA ANALİZİ (AHLAK İKİLEMLERİ)
export function AdultVakaSection() {
  const { lang, t } = useLanguage();
  const [selectedOptions, setSelectedOptions] = useState({});

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
          {t("Uygulamalı Ahlak & Vaka Analizi", "Applied Ethics & Case Analysis")}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {t("Günlük Hayat İkilemlerinde Nebevî Ölçü", "Prophetic Ethics in Everyday Dilemmas")}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {t(
            "Aşağıdaki örnek vakalarda yaklaşımınızı seçerek ilgili hadis ve tefsir hükümlerini inceleyebilirsiniz.",
            "Choose your response in each real-life scenario to see the Prophetic ethical reflection."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {adultVakaScenarios.map((rawVaka) => {
          const vaka = localizeItem(rawVaka, enVakaMap, lang);
          const picked = selectedOptions[vaka.id];
          const activePicked = picked ? vaka.options.find((o) => o.id === picked.id) || picked : null;
          return (
            <div
              key={vaka.id}
              className="bg-slate-50/70 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400 uppercase tracking-wider">
                  {vaka.tag}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{vaka.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{vaka.situation}</p>
              </div>

              <div className="space-y-2">
                {vaka.options.map((opt) => {
                  const isChosen = activePicked?.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOptions((prev) => ({ ...prev, [vaka.id]: opt }))}
                      className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-all ${
                        isChosen
                          ? opt.isProphetic
                            ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                            : "bg-slate-800 text-white border-slate-800"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}

                {activePicked && (
                  <div
                    className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
                      activePicked.isProphetic
                        ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-slate-200"
                        : "bg-amber-50/80 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-[#0B4F3F] dark:text-emerald-400">
                      {activePicked.isProphetic ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-[#9A6B28] shrink-0" />
                      )}
                      <span>
                        {activePicked.isProphetic
                          ? t("Nebevî Ölçüye Uygun Yaklaşım", "Aligned with Prophetic Ethics")
                          : t("Fıkhi ve Ahlaki Değerlendirme", "Ethical Reflection")}
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      <GlossaryText text={activePicked.analysis} />
                    </p>
                    {activePicked.citation && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
                        {t("Kaynak:", "Source:")} {activePicked.citation}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 3. NEBEVÎ DUALAR VE ZİKİRLER REHBERİ
export function PropheticPrayersSection({ onOpenCard }) {
  const { lang, isEn, t } = useLanguage();
  const [catFilter, setCatFilter] = useState("Tümü");
  const categories = ["Tümü", "Sabah & Akşam", "Huzur & Sıkıntı Anı", "İlim, Aile & Bereket", "Günlük Hayat & İbadet"];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Nebevî Dualar ve Zikirler Rehberi", "Prophetic Prayers & Supplications (Duas)")}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t(
              "Hadis kaynaklarında yer alan sahih duaların Arapça metni, Türkçe okunuşu, meali ve okunduğu vakitler.",
              "Authentic Prophetic supplications with Arabic text, transliteration, translation, and occasions."
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                catFilter === c
                  ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800"
              }`}
            >
              {isEn ? enPrayersCategoryMap[c] || c : c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {propheticPrayersData
          .filter((d) => catFilter === "Tümü" || d.category === catFilter)
          .map((rawDua) => {
            const dua = localizeItem(rawDua, enPrayersMap, lang);
            return (
              <div
                key={dua.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                      {dua.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{dua.title}</h4>

                  <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-2.5">
                    <p className="text-right font-serif text-lg sm:text-xl text-[#0B4F3F] dark:text-emerald-400 leading-loose">
                      {dua.arabic}
                    </p>
                    <p className="text-xs text-[#9A6B28] dark:text-amber-400 font-semibold border-t border-slate-200/80 dark:border-slate-700 pt-2">
                      {t("Okunuşu:", "Transliteration:")} <span className="font-normal italic">{dua.pronunciation}</span>
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      {t("Meali:", "Meaning:")} "{dua.meaning}"
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <GlossaryText text={dua.occasion} />
                  </p>
                </div>

                <CitationFooter
                  source={dua.source}
                  speakText={`${dua.title}. ${dua.meaning}. ${dua.occasion}`}
                  onOpenCard={() =>
                    onOpenCard({
                      title: dua.title,
                      arabic: dua.arabic,
                      quote: dua.meaning,
                      source: dua.source
                    })
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

// 4. TEMEL AHLAK HADİSLERİ SEÇKİSİ (40 HADİS GELENEĞİ)
export function FortyHadithSection({ completedItems, onToggleComplete, onOpenCard }) {
  const { lang, t } = useLanguage();
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Temel Ahlak Hadisleri Seçkisi (Kırk Hadis Geleneği)", "Core Ethical Hadiths (Forty Hadith Tradition)")}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t(
              "İslam ahlakının temelini oluşturan özlü hadis-i şerifler, kısa şerhleri ve okuma/ezber takibi.",
              "Foundational Prophetic sayings on character, commentary, and study tracking."
            )}
          </p>
        </div>
        <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-3.5 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
          {t("Tamamlanan Hadis:", "Completed:")} {fortyHadithSelectionData.filter((h) => completedItems.includes(h.id)).length} / {fortyHadithSelectionData.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fortyHadithSelectionData.map((rawHd) => {
          const hd = localizeItem(rawHd, enFortyHadithMap, lang);
          const isDone = completedItems.includes(hd.id);
          return (
            <div
              key={hd.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                    {hd.number} • {hd.topic}
                  </span>
                  <button
                    onClick={() => onToggleComplete(hd.id)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${
                      isDone
                        ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isDone ? t("Ezberlendi / Okundu", "Studied") : t("İşaretle", "Mark Read")}</span>
                  </button>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{hd.title}</h4>

                <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-2">
                  <p className="text-right font-serif text-lg text-[#0B4F3F] dark:text-emerald-400 leading-loose">
                    {hd.arabic}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 italic border-t border-slate-200/80 dark:border-slate-700 pt-2">
                    "{hd.translation}"
                  </p>
                </div>

                {hd.vurudStory && lang === "tr" && (
                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                      Esbâb-ı Vürûd (Hadisin Söylenme Hikayesi):
                    </span>
                    <GlossaryText text={hd.vurudStory} />
                  </div>
                )}

                <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#B4833E] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                    {t("Kısa Şerh & Hikmet:", "Commentary & Wisdom:")}
                  </span>
                  {hd.commentary}
                </div>
              </div>

              <CitationFooter
                source={hd.source}
                speakText={`${hd.title}. ${hd.translation}. ${hd.commentary}`}
                rightAction={
                  <button
                    onClick={() =>
                      printTopicHandout({
                        title: `${hd.number} • ${hd.title}`,
                        badge: hd.topic,
                        arabic: hd.arabic,
                        quote: hd.translation,
                        body: hd.commentary,
                        vurud: lang === "tr" ? hd.vurudStory : "",
                        source: hd.source
                      })
                    }
                    className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded-md font-medium transition-colors"
                    title={t("Ders Föyü Olarak Yazdır (PDF)", "Print Study Sheet (PDF)")}
                  >
                    <Printer className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400" />
                    <span>{t("Ders Föyü", "PDF")}</span>
                  </button>
                }
                onOpenCard={() =>
                  onOpenCard({
                    title: hd.title,
                    arabic: hd.arabic,
                    quote: hd.translation,
                    source: hd.source
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 5. VEDA HUTBESİ, MEDİNE VESİKASI VE NEBEVÎ MEKTUPLAR / AHİTNAMELER (SESLİ OKUMA YOK)
export function UniversalDeclarationsSection({ onOpenCard }) {
  const { lang, t } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            {t("Temel İnsan Hakları ve Hukuk Metinleri", "Universal Human Rights & Legal Charters")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t(
              "Veda Hutbesi ve Medine Sözleşmesi'nde Evrensel İlkeler",
              "Universal Principles in the Farewell Sermon & Charter of Medina"
            )}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t(
              "Hz. Peygamber'in (s.a.v.) insan onuru, eşitlik, kadın hakları ve bir arada yaşama hukukunu tesis eden tarihi beyannameleri.",
              "Historic charters establishing human dignity, racial equality, women's rights, and pluralistic coexistence."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {universalDeclarationsData.map((rawItem) => {
            const item = localizeItem(rawItem, enDeclarationsMap, lang);
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                      {item.document}
                    </span>
                    <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-[#9A6B28] dark:text-amber-400 px-2.5 py-0.5 rounded-md">
                      {item.articleNo}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>

                  <blockquote className="bg-[#FAF9F6] dark:bg-slate-800/70 border-l-4 border-[#0B4F3F] p-4 rounded-r-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    "{item.quote}"
                  </blockquote>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-slate-100">
                      {t("Evrensel Hukuk İlkesi: ", "Universal Legal Principle: ")}
                    </strong>
                    {item.principle}
                  </p>
                </div>

                <CitationFooter
                  source={item.source}
                  onOpenCard={() =>
                    onOpenCard({
                      title: `${item.document} • ${item.title}`,
                      quote: item.quote,
                      source: item.source
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* NEBEVÎ MEKTUPLAR VE AHİTNAMELER (SESLİ OKUMA YOK) */}
      <div className="space-y-5">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block mb-1">
            {t(
              "Diplomatik Nezaket, Kamu Yönetimi ve İnanç Özgürlüğü Belgeleri",
              "Diplomatic Courtesy, Governance & Freedom of Faith Charters"
            )}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t(
              "Nebevî Mektuplar, Vali Talimatnameleri ve Ahitnameler (4 Tarihi Vesika)",
              "Prophetic Letters, Governance Instructions & Covenants (4 Historic Documents)"
            )}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {propheticLettersData.map((rawLt) => {
            const lt = localizeItem(rawLt, enLettersMap, lang);
            return (
              <div
                key={lt.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                      {lt.recipient}
                    </span>
                    <span className="text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-2.5 py-0.5 rounded-md border border-[#B4833E]/30">
                      {lt.year} • {lt.envoy}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{lt.title}</h4>

                  <blockquote className="bg-[#FAF9F6] dark:bg-slate-800/70 border-l-4 border-[#B4833E] p-4 rounded-r-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    "{lt.excerpt}"
                  </blockquote>

                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                      {t("Diplomatik ve Hukuki İlke:", "Diplomatic & Legal Principle:")}
                    </strong>
                    <GlossaryText text={lt.diplomaticPrinciple} />
                  </div>
                </div>

                <CitationFooter
                  source={lt.source}
                  onOpenCard={() =>
                    onOpenCard({
                      title: lt.title,
                      quote: lt.excerpt,
                      source: lt.source
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 6. 8 HAFTALIK AİLE VE OKUL DERS HALKASI MÜFREDATI
export function WeeklyCurriculumSection() {
  const [completedWeeks, setCompletedWeeks] = useState(() => safeStorage.get("siyer_curriculum_weeks", []));

  useEffect(() => {
    safeStorage.set("siyer_curriculum_weeks", completedWeeks);
  }, [completedWeeks]);

  const toggleWeek = (id) => {
    setCompletedWeeks((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
  };

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            Aile & Eğitimci Rehberi
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            8 Haftalık Siyer ve Ahlak Ders Halkası Müfredatı
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Aile içi haftalık okuma saatleri veya okul/kurs ders halkaları için yapılandırılmış 8 haftalık program.
          </p>
        </div>
        <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-4 py-2 rounded-lg border border-emerald-200 dark:border-emerald-800 shrink-0">
          Tamamlanan Hafta: {completedWeeks.length} / {weeklyCurriculumData.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {weeklyCurriculumData.map((w) => {
          const isDone = completedWeeks.includes(w.id);
          return (
            <div
              key={w.id}
              className={`bg-white dark:bg-slate-900 rounded-xl p-6 border transition-all flex flex-col justify-between space-y-4 ${
                isDone
                  ? "border-[#0B4F3F] shadow-xs"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#0B4F3F] text-white">
                    {w.weekNo}
                  </span>
                  <button
                    onClick={() => toggleWeek(w.id)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold border transition-all ${
                      isDone
                        ? "bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 border-[#0B4F3F]"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isDone ? "Hafta Tamamlandı" : "Tamamlandı İşaretle"}</span>
                  </button>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{w.theme}</h4>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-50 dark:bg-slate-800/70 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700">
                    <strong className="text-[#0B4F3F] dark:text-emerald-400">Haftanın Hadisi: </strong>
                    <span className="text-slate-700 dark:text-slate-200">{w.hadith}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/70 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700">
                    <strong className="text-[#9A6B28] dark:text-amber-400">Örnek Sahabe: </strong>
                    <span className="text-slate-700 dark:text-slate-200">{w.sahabe}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/70 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-slate-100">Okuma Maddesi: </strong>
                    <span className="text-slate-700 dark:text-slate-200">{w.reading}</span>
                  </div>
                </div>

                <div className="border-l-4 border-[#B4833E] pl-3 py-1 text-xs text-slate-600 dark:text-slate-300 italic">
                  <strong className="text-slate-900 dark:text-slate-100 not-italic block">
                    Müzakere Sorusu:
                  </strong>
                  "{w.discussion}"
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-slate-300">
                <div>
                  <strong className="text-[#0B4F3F] dark:text-emerald-400">Uygulama: </strong>
                  {w.practice}
                </div>
                <button
                  onClick={() =>
                    printTopicHandout({
                      title: `${w.weekNo}: ${w.theme}`,
                      badge: "Haftalık Ders Halkası Broşürü",
                      quote: w.hadith,
                      body: `Örnek Sahabe: ${w.sahabe} • Okuma Maddesi: ${w.reading}`,
                      practice: w.practice,
                      discussion: w.discussion,
                      source: "Siyer ve Ahlak Portalı • 8 Haftalık Ders Müfredatı"
                    })
                  }
                  className="shrink-0 inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 px-2.5 py-1.5 rounded-md font-semibold border border-slate-200 dark:border-slate-700"
                >
                  <Printer className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400" />
                  <span>Ders Föyü (PDF)</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 8. 5 VAKİT NAMAZ EKSENLİ SÜNNET DURAKLARI & SAYISAL TESBİH/ZİKİR SAYACI + AKŞAM MUHASEBESİ
export function FivePrayerAnchorsSection() {
  const { lang, t } = useLanguage();
  const [counts, setCounts] = useState(() => safeStorage.get("siyer_zikir_counts", {}));
  const [muhasabaChecks, setMuhasabaChecks] = useState(() => safeStorage.get("siyer_evening_muhasaba", {}));

  useEffect(() => {
    safeStorage.set("siyer_zikir_counts", counts);
  }, [counts]);

  useEffect(() => {
    safeStorage.set("siyer_evening_muhasaba", muhasabaChecks);
  }, [muhasabaChecks]);

  const incrementZikir = (id, target) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.min(target, (prev[id] || 0) + 1)
    }));
  };

  const resetZikir = (id) => {
    setCounts((prev) => ({ ...prev, [id]: 0 }));
  };

  const toggleMuhasaba = (id) => {
    setMuhasabaChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
          {t("Vakit Merkezli Sünnet ve Zikir Takibi", "Prayer-Anchored Sunnah & Dhikr Tracker")}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {t(
            "5 Vakit Namaz Eksenli Günlük Sünnet Durakları & Tesbih Sayacı",
            "5 Daily Prayer Sunnah Anchors & Digital Tasbih Counter"
          )}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fivePrayerAnchorsData.map((rawItem) => {
          const item = localizeItem(rawItem, enPrayerAnchorsMap, lang);
          const current = counts[item.id] || 0;
          const done = current >= item.targetCount;
          const pct = Math.min(100, Math.round((current / item.targetCount) * 100));
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                    {item.prayerName}
                  </span>
                  <span className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{item.sunnahTitle}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <GlossaryText text={item.sunnahDesc} />
                </p>
              </div>

              <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-200 truncate pr-2">
                    {item.zikirLabel}
                  </span>
                  <span className="font-extrabold text-[#0B4F3F] dark:text-emerald-400 shrink-0">
                    {current} / {item.targetCount}
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0B4F3F] dark:bg-emerald-500 transition-all duration-200"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => incrementZikir(item.id, item.targetCount)}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      done
                        ? "bg-emerald-100 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300"
                        : "bg-[#0B4F3F] hover:bg-[#08382C] text-white"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{done ? t("✓ Hedef Tamamlandı", "✓ Completed") : t("Tesbih Çek (+1)", "Count (+1)")}</span>
                  </button>
                  {current > 0 && (
                    <button
                      onClick={() => resetZikir(item.id)}
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700"
                      title={t("Sayacı Sıfırla", "Reset Counter")}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* 6. Kart: Gün Sonu 3 Nefis Muhasebesi Sorusu */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-[#B4833E]/40 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block">
              {t("Gece Tefekkürü • Muhasaba", "Evening Reflection • Muhasaba")}
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {t("Gün Sonu 3 Nefis Muhasebesi Sorusu", "3 Evening Self-Reflection Questions")}
            </h4>
          </div>

          <div className="space-y-2">
            {eveningMuhasabaQuestions.map((rawMq) => {
              const mq = localizeItem(rawMq, enMuhasabaMap, lang);
              const checked = !!muhasabaChecks[mq.id];
              return (
                <button
                  key={mq.id}
                  onClick={() => toggleMuhasaba(mq.id)}
                  className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start justify-between gap-2 ${
                    checked
                      ? "bg-emerald-50/80 dark:bg-emerald-950/50 border-[#0B4F3F] text-slate-900 dark:text-slate-100 font-semibold"
                      : "bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <span>{mq.question}</span>
                  <span
                    className={`shrink-0 w-5 h-5 rounded flex items-center justify-center border ${
                      checked ? "bg-[#0B4F3F] border-[#0B4F3F] text-white" : "border-slate-300"
                    }`}
                  >
                    {checked ? "✓" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// 7. KURUMSAL SİYER & AHLAK BİLGİ DEĞERLENDİRMESİ VE ÇALIŞMA BELGESİ (PNG SERTİFİKA)
export function CorporateQuizAndCertificateSection() {
  const [answers, setAnswers] = useState({});
  const [participantName, setParticipantName] = useState("Fatih Ersoy");
  const canvasRef = useRef(null);

  const answeredCount = Object.keys(answers).length;
  const correctCount = siyerQuizData.filter((q) => answers[q.id] === q.correctIndex).length;
  const scorePercent = Math.round((correctCount / siyerQuizData.length) * 100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = 1200;
    const height = 850;
    canvas.width = width;
    canvas.height = height;

    // Arka plan
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, width, height);

    // Dış Kurumsal Zümrüt Çerçeve
    ctx.strokeStyle = "#0B4F3F";
    ctx.lineWidth = 16;
    ctx.strokeRect(36, 36, width - 72, height - 72);

    // İç Bronz/Altın Çerçeve
    ctx.strokeStyle = "#B4833E";
    ctx.lineWidth = 3;
    ctx.strokeRect(56, 56, width - 112, height - 112);

    // Başlık
    ctx.fillStyle = "#0B4F3F";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SİYER VE AHLAK PORTALI • İLMİ VE AHLAKİ REHBER", width / 2, 145);

    ctx.fillStyle = "#B4833E";
    ctx.font = "bold 46px Georgia, serif";
    ctx.fillText("SİYER VE AHLAK ÇALIŞMA BELGESİ", width / 2, 225);

    ctx.fillStyle = "#475569";
    ctx.font = "22px system-ui, sans-serif";
    ctx.fillText("Bu belge, portal üzerindeki siyer, şemâil-i şerîf ve ahlak çalışmalarını", width / 2, 300);
    ctx.fillText("tamamlayan aşağıdaki katılımcıya takdim edilmiştir:", width / 2, 334);

    // İsim Alanı
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 52px Georgia, serif";
    ctx.fillText(participantName.trim() || "Katılımcı", width / 2, 430);

    ctx.strokeStyle = "#B4833E";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(350, 455);
    ctx.lineTo(850, 455);
    ctx.stroke();

    // Hadis-i Şerif
    ctx.fillStyle = "#0B4F3F";
    ctx.font = "italic 26px Georgia, serif";
    ctx.fillText('"Sizin en hayırlınız, ahlakça en güzel olanınızdır." (Buhârî, Edeb, 38)', width / 2, 540);

    // Alt Bilgiler
    ctx.fillStyle = "#334155";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.fillText(
      `Bilgi Değerlendirme Başarısı: ${correctCount}/${siyerQuizData.length} (%${scorePercent})   •   Tarih: ${new Date().toLocaleDateString("tr-TR")}`,
      width / 2,
      645
    );

    ctx.fillStyle = "#64748B";
    ctx.font = "18px system-ui, sans-serif";
    ctx.fillText("Hadislerle İslam • TDV İslâm Ansiklopedisi • Kur'an Yolu Tefsiri", width / 2, 745);
  }, [participantName, correctCount, scorePercent]);

  const downloadCertificate = () => {
    try {
      const canvas = canvasRef.current;
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `siyer-calisma-belgesi-${Date.now()}.png`;
      a.click();
    } catch {
      alert("Belge indirilirken bir hata oluştu.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Üst Başlık ve Skor Özeti */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            Ölçme ve Değerlendirme
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Kurumsal Siyer & Ahlak Bilgi Değerlendirmesi ({siyerQuizData.length} Soru)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Soruları yanıtlayarak bilgilerinizi pekiştirin ve sayfanın altından isminize özel Çalışma Belgesi oluşturun.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-right">
            <span className="text-xs text-slate-500 block">Doğru Yanıt</span>
            <span className="text-base font-bold text-[#0B4F3F] dark:text-emerald-400">
              {correctCount} / {siyerQuizData.length} (%{scorePercent})
            </span>
          </div>
          {answeredCount > 0 && (
            <button
              onClick={() => setAnswers({})}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800"
              title="Testi Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sorular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {siyerQuizData.map((q, idx) => {
          const picked = answers[q.id];
          const isAnswered = picked !== undefined;
          const isCorrect = picked === q.correctIndex;
          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                  Soru {idx + 1}
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.question}
                </p>

                <div className="space-y-2 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const selectedThis = picked === oIdx;
                    const isRightOption = q.correctIndex === oIdx;
                    let btnStyle =
                      "bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#0B4F3F]";
                    if (isAnswered) {
                      if (isRightOption) {
                        btnStyle = "bg-[#0B4F3F] text-white border-[#0B4F3F]";
                      } else if (selectedThis) {
                        btnStyle = "bg-rose-600 text-white border-rose-600";
                      }
                    }
                    return (
                      <button
                        key={oIdx}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                        className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs font-semibold transition-all ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {isAnswered && (
                <div
                  className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                    isCorrect
                      ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-slate-700 dark:text-slate-200"
                      : "bg-amber-50/80 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <strong className="text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                    {isCorrect ? "✓ Doğru Yanıt" : "Açıklama ve Kaynak:"}
                  </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* İsme Özel Kurumsal Çalışma Belgesi Stüdyosu */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block mb-1">
              Kurumsal Belge Oluşturucu
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              İsme Özel Siyer ve Ahlak Çalışma Belgesi
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Adınızı ve soyadınızı yazarak yüksek çözünürlüklü (PNG) çalışma belgenizi indirebilirsiniz.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
              Belgede Yer Alacak Ad Soyad
            </label>
            <input
              type="text"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Adınız Soyadınız..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0B4F3F]"
            />
          </div>

          <button
            onClick={downloadCertificate}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4F3F] hover:bg-[#08382C] text-white py-3 rounded-lg text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Çalışma Belgesini İndir (PNG)</span>
          </button>
        </div>

        <div className="lg:col-span-7 bg-slate-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full max-w-lg h-auto rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
          />
        </div>
      </div>
    </div>
  );
}

// 9. KUR'AN-I KERİM'DE PEYGAMBER AHLAKI (ÜSVE-İ HASENE AYETLERİ) & ESMÂ-İ NEBÎ MODÜLÜ
export function QuranAndEsmaiNebiSection({ onOpenCard }) {
  const { lang, t } = useLanguage();
  return (
    <div className="space-y-8">
      {/* Üsve-i Hasene Ayetleri */}
      <div className="space-y-5">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            {t("Kur'an-ı Kerim & Tefsir Bütünlüğü", "Quranic Verses & Prophetic Character")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Kur'an-ı Kerim'de Peygamber Ahlakı (Üsve-i Hasene Ayetleri)", "Prophetic Character in the Quran (Uswah Hasanah)")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quranPropheticMoralsData.map((rawAyet) => {
            const ayet = localizeItem(rawAyet, enQuranMap, lang);
            return (
              <div
                key={ayet.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                      {ayet.surah}
                    </span>
                    <span className="text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-2.5 py-0.5 rounded-md border border-[#B4833E]/30">
                      {ayet.virtue}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{ayet.title}</h4>

                  <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-2.5">
                    <p className="text-right font-serif text-lg sm:text-xl text-[#0B4F3F] dark:text-emerald-400 leading-loose">
                      {ayet.arabic}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 italic border-t border-slate-200/80 dark:border-slate-700 pt-2">
                      "{ayet.translation}"
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                      {t("Tefsir & Siyer Yansıması:", "Reflection & Seerah Context:")}
                    </span>
                    <GlossaryText text={ayet.tafsirNote} />
                  </div>
                </div>

                <CitationFooter
                  source={ayet.source}
                  speakText={`${ayet.surah}. ${ayet.title}. ${ayet.translation}. ${ayet.tafsirNote}`}
                  onOpenCard={() =>
                    onOpenCard({
                      title: `${ayet.surah} • ${ayet.title}`,
                      arabic: ayet.arabic,
                      quote: ayet.translation,
                      source: ayet.source
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Esmâ-i Nebî */}
      <div className="space-y-5">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block mb-1">
            {t("Şemâil ve Siyer Geleneği", "Noble Names & Attributes")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Esmâ-i Nebî • Hz. Peygamber'in (s.a.v.) Güzel İsimleri (8)", "Asma al-Nabi • Noble Names of the Prophet ﷺ (8)")}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {esmaiNebiData.map((rawEsma) => {
            const esma = localizeItem(rawEsma, enEsmaMap, lang);
            return (
              <div
                key={esma.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400">
                      {esma.reference}
                    </span>
                    <span className="text-xl font-serif text-[#0B4F3F] dark:text-emerald-400">
                      {esma.arabic}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{esma.name}</h4>
                  <p className="text-xs font-semibold text-[#0B4F3F] dark:text-emerald-400">
                    {esma.meaning}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {esma.reflection}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 10. "BENİM ROLÜMDE SÜNNET" — SOSYAL ROL VE MESLEK REHBERİ (6 ROL)
export function SocialRolesSunnahSection({ onOpenCard }) {
  const { lang, t } = useLanguage();
  const [selectedRoleId, setSelectedRoleId] = useState("Tümü");

  const localizedRoles = socialRolesSunnahData.map((r) => localizeItem(r, enSocialRolesMap, lang));
  const visibleRoles =
    selectedRoleId === "Tümü" ? localizedRoles : localizedRoles.filter((r) => r.id === selectedRoleId);

  return (
    <div className="space-y-5">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            {t("Meslek ve Sosyal Sorumluluk Ahlakı", "Social Roles & Professional Ethics")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t('"Benim Rolümde Sünnet" • Sosyal Rol ve Meslek Rehberi', "Sunnah in My Role • Social & Professional Guide")}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedRoleId("Tümü")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              selectedRoleId === "Tümü"
                ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
            }`}
          >
            {t("Tüm Roller (6)", "All Roles (6)")}
          </button>
          {localizedRoles.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRoleId(r.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                selectedRoleId === r.id
                  ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              {r.role}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleRoles.map((role) => (
          <div
            key={role.id}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                  {role.role}
                </span>
                <span className="text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-2.5 py-0.5 rounded-md border border-[#B4833E]/30">
                  {role.badge}
                </span>
              </div>

              <blockquote className="bg-[#FAF9F6] dark:bg-slate-800/70 border-l-4 border-[#0B4F3F] p-3.5 rounded-r-lg text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed">
                "{role.hadith}"
              </blockquote>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-[#9A6B28] dark:text-amber-400">
                  {t("Örnek Sahabe Modeli: ", "Companion Role Model: ")}
                </strong>
                <GlossaryText text={role.sahabeModel} />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                  {t("Bu Rolde 3 Nebevî Uygulama Adımı:", "3 Practical Prophetic Steps:")}
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {role.principles.map((pr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0B4F3F] dark:text-emerald-400 font-bold">{idx + 1}.</span>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-[#9A6B28] dark:text-amber-400">
                  {t("Kaçınılması Gereken Tutum: ", "Attitude to Avoid: ")}
                </strong>
                {role.avoid}
              </div>
            </div>

            <CitationFooter
              source={role.source}
              speakText={`${role.role}. ${role.hadith}`}
              onOpenCard={() =>
                onOpenCard({
                  title: `${role.role}`,
                  quote: role.hadith,
                  source: role.source
                })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// 11. NEBEVÎ DENGE (İTİDAL) PUSULASI & KALBİ YORAN 6 AHLAK ZAFİYETİNE NEBEVÎ REÇETELER
export function MoralBalanceAndRemediesSection({ onOpenCard }) {
  const { lang, t } = useLanguage();
  return (
    <div className="space-y-8">
      {/* Nebevî Denge (İtidal) Pusulası */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
            {t("İslam Ahlakında Vasat ve Ölçü", "Golden Mean in Islamic Ethics")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Nebevî Denge (İtidal) Pusulası — Tefrit, İtidal ve İfrat", "Prophetic Balance Compass — Deficiency, Balance & Excess")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {propheticBalanceData.map((rawB) => {
            const b = localizeItem(rawB, enBalanceMap, lang);
            return (
              <div
                key={b.id}
                className="bg-[#FAF9F6] dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-3"
              >
                <div className="grid grid-cols-3 gap-2 items-center text-center text-xs">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2">
                    <span className="text-slate-400 block">{t("Eksiklik", "Deficiency")}</span>
                    <span className="font-semibold text-slate-600 dark:text-slate-300">{b.tefrit}</span>
                  </div>
                  <div className="bg-[#0B4F3F] text-white rounded-lg p-2.5 shadow-2xs">
                    <span className="text-amber-300 text-xs font-bold block">{t("Nebevî Denge", "Prophetic Balance")}</span>
                    <span className="font-bold">{b.itidal}</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-2">
                    <span className="text-slate-400 block">{t("Aşırılık", "Excess")}</span>
                    <span className="font-semibold text-slate-600 dark:text-slate-300">{b.ifrat}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{b.note}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kalbi Yoran 6 Ahlak Zafiyetine Nebevî Reçeteler */}
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block">
            {t("Manevî Öz-Farkındalık & Pratik İlaçlar", "Spiritual Self-Awareness & Practical Remedies")}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Kalbi Yoran 6 Ahlak Zafiyetine Nebevî Reçeteler", "Prophetic Remedies for 6 Spiritual & Ethical Struggles")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {moralRemediesData.map((rawR) => {
            const r = localizeItem(rawR, enRemediesMap, lang);
            return (
              <div
                key={r.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{r.affliction}</h4>

                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-xs text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-slate-100 block mb-0.5">
                      {t("Belirtisi:", "How It Appears:")}
                    </strong>
                    {r.symptom}
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                      {t("Nebevî Teşhis:", "Prophetic Diagnosis:")}
                    </strong>
                    <GlossaryText text={r.propheticDiagnosis} />
                  </p>

                  <div className="bg-emerald-50/60 dark:bg-emerald-950/30 border-l-4 border-[#0B4F3F] p-3 rounded-r-lg text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong className="text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                      {t("Hemen Uygulanabilir Pratik İlaç:", "Practical Immediate Remedy:")}
                    </strong>
                    {r.remedy}
                  </div>
                </div>

                <CitationFooter
                  source={r.source}
                  speakText={`${r.affliction}. ${r.propheticDiagnosis} ${r.remedy}`}
                  onOpenCard={() =>
                    onOpenCard({
                      title: `${r.affliction}`,
                      quote: r.remedy,
                      source: r.source
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
