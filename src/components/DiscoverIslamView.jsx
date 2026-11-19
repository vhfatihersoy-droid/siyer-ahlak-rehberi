import React, { useState } from 'react';
import {
  Globe, Heart, HelpCircle, Sparkles, ChevronDown, ChevronUp, Image, Quote, BookOpen
} from 'lucide-react';
import {
  discoverMeetProphetData,
  discoverHeartStoriesData,
  discoverHonestQAData,
  discoverGlobalVoicesData,
  discoverExpressionsData,
  discoverFirstStepsData
} from '../data/discoverIslamData';
import { PortalLogo } from './PortalLogo';
import { useLanguage } from '../services/i18n';

export function DiscoverIslamView({ onOpenCard }) {
  const { lang, setLang, isEn } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState("meet"); // "meet" | "stories" | "qa" | "first-steps"
  const [openQaId, setOpenQaId] = useState(discoverHonestQAData[0].id);

  const subTabs = [
    {
      id: "meet",
      label: isEn ? "Meet Prophet Muhammad ﷺ (6)" : "5 Dakikada Hz. Muhammed (6)",
      icon: Sparkles
    },
    {
      id: "stories",
      label: isEn ? "Stories That Touch the Heart (6)" : "Kalbe Dokunan Kıssalar (6)",
      icon: Heart
    },
    {
      id: "qa",
      label: isEn ? "Honest Q&A & Global Voices" : "Merak Edilenler & Dünya Düşünürleri",
      icon: HelpCircle
    },
    {
      id: "first-steps",
      label: isEn ? "First Steps & Everyday Expressions" : "İlk Adım & Güzel İfadeler",
      icon: BookOpen
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* WELCOMING BILINGUAL HERO BANNER */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div className="bg-[#0B4F3F] text-white px-6 py-6 border-b-2 border-[#B4833E] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <PortalLogo className="w-12 h-12" />
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Globe className="w-3.5 h-3.5" />
                <span>{isEn ? "International Welcome Guide • Peace Be Upon You" : "Uluslararası Tanışma Rehberi • Selâmün Aleyküm"}</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {isEn
                  ? "Discover Islam & Prophet Muhammad ﷺ"
                  : "İslam'ı ve Hz. Muhammed'i (s.a.v.) Tanıyın"}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                {isEn
                  ? "A calm, authentic, and open-hearted introduction to the character, mercy, universal values, and timeless message of Prophet Muhammad ﷺ—written for curious minds everywhere."
                  : "Yabancı misafirler ve merak eden herkes için Hz. Peygamber'in (s.a.v.) merhametini, evrensel insanî değerlerini ve İslam'ın özünü yalın, sıcak ve sahih kaynaklarla anlatan çift dilli rehber."}
              </p>
            </div>
          </div>

          {/* Instant EN | TR Language Switcher */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/20 shrink-0 self-start md:self-center">
            <button
              onClick={() => setLang("en")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isEn ? "bg-white text-[#0B4F3F]" : "text-emerald-100 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("tr")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                !isEn ? "bg-white text-[#0B4F3F]" : "text-emerald-100 hover:text-white"
              }`}
            >
              Türkçe
            </button>
          </div>
        </div>

        {/* Clean Sub-Tab Navigation */}
        <div className="px-6 py-3 bg-[#FAF9F6] dark:bg-slate-900/70 flex flex-wrap items-center gap-2">
          {subTabs.map((t) => {
            const Icon = t.icon;
            const active = activeSubTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveSubTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                  active
                    ? "bg-[#0B4F3F] text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =================================================================
          TAB 1: MEET PROPHET MUHAMMAD ﷺ IN 5 MINUTES (6 CARDS)
         ================================================================= */}
      {activeSubTab === "meet" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {discoverMeetProphetData.map((item) => {
            const content = item[lang];
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                      {content.badge}
                    </span>
                    <span className="w-7 h-7 rounded-lg bg-[#0B4F3F] text-amber-300 text-xs font-extrabold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{content.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {content.text}
                  </p>

                  <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border-l-4 border-[#0B4F3F] p-3 rounded-r-lg text-xs font-medium text-slate-700 dark:text-slate-200 italic">
                    "{content.highlight}"
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate pr-2">{item.source}</span>
                  {onOpenCard && (
                    <button
                      onClick={() =>
                        onOpenCard({
                          title: content.title,
                          quote: content.highlight,
                          source: item.source
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#0B4F3F] dark:text-emerald-400 font-semibold hover:underline shrink-0"
                    >
                      <Image className="w-3.5 h-3.5" />
                      <span>{isEn ? "Share Card" : "Kart"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =================================================================
          TAB 2: STORIES THAT TOUCH THE HEART (6 UNIVERSAL HUMAN STORIES)
         ================================================================= */}
      {activeSubTab === "stories" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {discoverHeartStoriesData.map((st) => {
            const content = st[lang];
            return (
              <div
                key={st.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{st.emoji}</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                        {content.theme}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {content.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {content.story}
                  </p>

                  <div className="bg-emerald-50/60 dark:bg-emerald-950/30 border-l-4 border-[#B4833E] p-3.5 rounded-r-lg text-xs text-slate-800 dark:text-slate-200 font-medium">
                    {content.reflection}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>{st.source}</span>
                  {onOpenCard && (
                    <button
                      onClick={() =>
                        onOpenCard({
                          title: content.title,
                          quote: content.reflection,
                          source: st.source
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#0B4F3F] dark:text-emerald-400 font-semibold hover:underline shrink-0"
                    >
                      <Image className="w-3.5 h-3.5" />
                      <span>{isEn ? "Share Card" : "Kart"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =================================================================
          TAB 3: HONEST Q&A & GLOBAL VOICES (THINKERS & HISTORIANS)
         ================================================================= */}
      {activeSubTab === "qa" && (
        <div className="space-y-8">
          {/* Honest Q&A Accordion */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                {isEn ? "Clear & Thoughtful Answers" : "Önyargısız ve Samimi Cevaplar"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isEn
                  ? "Honest Questions People Often Ask About Islam"
                  : "İslam Hakkında En Çok Merak Edilen Sorular"}
              </h3>
            </div>

            <div className="space-y-3">
              {discoverHonestQAData.map((qa) => {
                const isOpen = openQaId === qa.id;
                const content = qa[lang];
                return (
                  <div
                    key={qa.id}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenQaId(isOpen ? null : qa.id)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                        {content.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#0B4F3F] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                          {content.answer}
                        </p>
                        <div className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400">
                          {isEn ? "Reference: " : "Kaynak: "}
                          {qa.source}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Global Voices */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block">
                {isEn ? "Historical Testimonials" : "Tarafsız Tarihî Tanıklıklar"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isEn
                  ? "What World Thinkers & Historians Said About Prophet Muhammad ﷺ"
                  : "Dünya Düşünürlerinin Gözünden Hz. Muhammed (s.a.v.)"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {discoverGlobalVoicesData.map((gv) => (
                <div
                  key={gv.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <Quote className="w-6 h-6 text-[#B4833E] opacity-70" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                      "{gv[lang]}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{gv.author}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {isEn ? gv.roleEn : gv.roleTr} • {gv.source}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          TAB 4: FIRST STEPS & EVERYDAY EXPRESSIONS
         ================================================================= */}
      {activeSubTab === "first-steps" && (
        <div className="space-y-8">
          {/* Gentle First Steps */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                {isEn ? "At Your Own Pace" : "Kendi Ritminle Keşfet"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isEn ? "Four Gentle First Steps to Explore Islam" : "İslam'ı Tanımak İçin 4 Sıcak İlk Adım"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {discoverFirstStepsData.map((fs) => {
                const content = fs[lang];
                return (
                  <div
                    key={fs.id}
                    className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0B4F3F] text-amber-300 font-extrabold text-sm flex items-center justify-center shrink-0">
                      {fs.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                        {content.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {content.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Everyday Beautiful Islamic Expressions */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block">
                {isEn ? "Words of Peace & Gratitude" : "Barış, Şükür ve Nezaket İfadeleri"}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isEn
                  ? "Beautiful Everyday Expressions You Will Hear From Muslims"
                  : "Müslümanların Günlük Hayatta Kullandığı Güzel İfadeler"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {discoverExpressionsData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100">{exp.phrase}</span>
                    <span className="font-serif text-lg text-[#0B4F3F] dark:text-emerald-400">{exp.arabic}</span>
                  </div>
                  <p className="text-xs font-bold text-[#9A6B28] dark:text-amber-400">
                    "{isEn ? exp.enMeaning : exp.trMeaning}"
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isEn ? exp.enUse : exp.trUse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
