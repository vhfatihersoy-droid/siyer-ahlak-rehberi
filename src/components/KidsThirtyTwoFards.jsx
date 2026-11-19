import React, { useState, useEffect } from 'react';
import {
  BookOpen, HelpCircle, Volume2, VolumeX, CheckCircle2, RotateCcw, Sparkles, ArrowRight
} from 'lucide-react';
import {
  kidsThirtyTwoFardsCategories,
  kidsThirtyTwoFardsQuizData
} from '../data/thirtyTwoFardsData';
import { safeStorage, speakTurkish, stopSpeaking } from '../services/storageService';

export function KidsThirtyTwoFards({ onAwardStars }) {
  const [subMode, setSubMode] = useState("learn"); // "learn" | "quiz"
  const [activeCatId, setActiveCatId] = useState(kidsThirtyTwoFardsCategories[0].id);
  const [learnedIds, setLearnedIds] = useState(() => safeStorage.get("siyer_kids_32farz_learned", []));
  const [solvedQuizIds, setSolvedQuizIds] = useState(() => safeStorage.get("siyer_kids_32farz_quiz", []));
  const [quizAnswers, setQuizAnswers] = useState({});
  const [speakingKey, setSpeakingKey] = useState(null);

  useEffect(() => {
    safeStorage.set("siyer_kids_32farz_learned", learnedIds);
  }, [learnedIds]);

  useEffect(() => {
    safeStorage.set("siyer_kids_32farz_quiz", solvedQuizIds);
  }, [solvedQuizIds]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const activeCategoryIndex = kidsThirtyTwoFardsCategories.findIndex((c) => c.id === activeCatId);
  const activeCategory = kidsThirtyTwoFardsCategories[activeCategoryIndex] || kidsThirtyTwoFardsCategories[0];

  const learnedPercent = Math.round((learnedIds.length / 32) * 100);

  const toggleLearned = (itemId) => {
    if (learnedIds.includes(itemId)) {
      setLearnedIds((prev) => prev.filter((id) => id !== itemId));
      onAwardStars(-2);
    } else {
      setLearnedIds((prev) => [...prev, itemId]);
      onAwardStars(2);
    }
  };

  const handleSpeakItem = (key, text) => {
    if (speakingKey === key) {
      stopSpeaking();
      setSpeakingKey(null);
      return;
    }
    setSpeakingKey(key);
    speakTurkish(text, () => setSpeakingKey(null));
  };

  const handleAnswerQuestion = (q, optIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
    if (optIdx === q.correctIndex && !solvedQuizIds.includes(q.id)) {
      setSolvedQuizIds((prev) => [...prev, q.id]);
      onAwardStars(5);
    }
  };

  const currentCatDoneCount = activeCategory.items.filter((it) => learnedIds.includes(it.id)).length;
  const isCurrentCatComplete = currentCatDoneCount === activeCategory.items.length;

  return (
    <div className="space-y-6">
      {/* ÜST ÖZET, 32 FARZ FORMÜLÜ VE MOD SEÇİCİ */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
              Temel Dinî Bilgiler Atölyesi • Adım Adım Öğren ve Pekiştir
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              🌟 Çocuklar İçin 32 Farz Öğrenme ve Soru-Cevap Atölyesi
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Önce 7 kolay bölümde 32 farzı sesli dinleyip öğren (+2 ⭐), ardından 12 soruluk pekiştirme oyunuyla yıldızları topla (+5 ⭐)!
            </p>
          </div>

          {/* 2 Adımlı Mod Geçişi */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setSubMode("learn")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                subMode === "learn"
                  ? "bg-[#0B4F3F] text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Öğren ({learnedIds.length}/32)</span>
            </button>
            <button
              onClick={() => setSubMode("quiz")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                subMode === "quiz"
                  ? "bg-[#B4833E] text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>2. Soru-Cevap ({solvedQuizIds.length}/{kidsThirtyTwoFardsQuizData.length})</span>
            </button>
          </div>
        </div>

        {/* İlerleme Çubuğu + 6+5+4+3+2+6+6=32 Görsel Şifre Şeridi */}
        <div className="bg-[#FAF9F6] dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-200">
              🧩 32 Farz Şifresi: <span className="text-[#0B4F3F] dark:text-emerald-400">6 + 5 + 4 + 3 + 2 + 6 + 6 = 32</span>
            </span>
            <span className="font-extrabold text-[#0B4F3F] dark:text-emerald-400">
              Öğrenme İlerlemen: %{learnedPercent} ({learnedIds.length}/32)
            </span>
          </div>

          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0B4F3F] dark:bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${learnedPercent}%` }}
            />
          </div>

          {/* 7 Kategori Tıklanabilir Şifre Kartları */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-1">
            {kidsThirtyTwoFardsCategories.map((cat) => {
              const doneInCat = cat.items.filter((i) => learnedIds.includes(i.id)).length;
              const complete = doneInCat === cat.count;
              const isSelected = subMode === "learn" && activeCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSubMode("learn");
                    setActiveCatId(cat.id);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1 ${
                    isSelected
                      ? "bg-[#0B4F3F] text-white border-[#0B4F3F] shadow-2xs"
                      : complete
                      ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-slate-900 dark:text-slate-100"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] text-slate-800 dark:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{cat.emoji}</span>
                    <span
                      className={`text-xs font-extrabold px-1.5 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-white/20 text-amber-300"
                          : complete
                          ? "bg-[#0B4F3F] text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-[#9A6B28] dark:text-amber-400"
                      }`}
                    >
                      {doneInCat}/{cat.count}
                    </span>
                  </div>
                  <span className="text-xs font-bold leading-tight line-clamp-2">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================================
          MOD 1: 32 FARZ ÖĞRENME ALANI (SEÇİLİ KATEGORİ KARTLARI)
         ================================================================= */}
      {subMode === "learn" && (
        <div className="space-y-5">
          {/* Seçili Kategori Başlığı ve Özet İpucu */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-[#0B4F3F]/30 flex items-center justify-center text-2xl shrink-0">
                {activeCategory.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {activeCategory.title} ({activeCategory.count} Farz)
                  </h4>
                  {isCurrentCatComplete && (
                    <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                      ✓ Bölüm Tamamlandı
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{activeCategory.summary}</p>
                <p className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400 mt-1">
                  💡 {activeCategory.memoryTip}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                handleSpeakItem(
                  `cat-${activeCategory.id}`,
                  `${activeCategory.title}. ${activeCategory.count} farz vardır. ${activeCategory.items
                    .map((it, i) => `${i + 1}: ${it.title}.`)
                    .join(" ")}`
                )
              }
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                speakingKey === `cat-${activeCategory.id}`
                  ? "bg-rose-600 text-white"
                  : "bg-[#0B4F3F] hover:bg-[#08382C] text-white"
              }`}
            >
              {speakingKey === `cat-${activeCategory.id}` ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
              <span>
                {speakingKey === `cat-${activeCategory.id}` ? "Okumayı Durdur" : "Bölümü Sesli Dinle"}
              </span>
            </button>
          </div>

          {/* Kategoriye Ait Farz Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.items.map((item) => {
              const isLearned = learnedIds.includes(item.id);
              const isSpeaking = speakingKey === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl p-5 border transition-all flex flex-col justify-between space-y-4 ${
                    isLearned
                      ? "bg-emerald-50/40 dark:bg-emerald-950/25 border-2 border-[#0B4F3F]"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-[#0B4F3F] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                          {item.no}
                        </span>
                        <span className="text-2xl">{item.emoji}</span>
                        <span className="text-xs font-semibold text-slate-400">
                          {item.no} / 32. Farz
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          handleSpeakItem(item.id, `${item.no}. Farz: ${item.title}. ${item.kidDesc}`)
                        }
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                          isSpeaking
                            ? "bg-rose-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0B4F3F]"
                        }`}
                      >
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        <span>{isSpeaking ? "Durdur" : "Dinle"}</span>
                      </button>
                    </div>

                    <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">{item.title}</h5>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.kidDesc}
                    </p>

                    <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border-l-4 border-[#B4833E] px-3 py-2 rounded-r-lg text-xs text-slate-700 dark:text-slate-300">
                      <strong className="text-[#9A6B28] dark:text-amber-400">Aklında Kalsın: </strong>
                      {item.tip}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleLearned(item.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all ${
                      isLearned
                        ? "bg-emerald-100 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 border border-[#0B4F3F]/40"
                        : "bg-[#0B4F3F] hover:bg-[#08382C] text-white"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isLearned ? "✓ Öğrendim (+2 ⭐ Kazanıldı)" : "Öğrendim (+2 ⭐ Kazan)"}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Alt Adım Yönlendirici: Sonraki Bölüm veya Soru-Cevap Testi */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Bu bölümde <strong>{currentCatDoneCount}/{activeCategory.count}</strong> farzı işaretledin.
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {activeCategoryIndex < kidsThirtyTwoFardsCategories.length - 1 && (
                <button
                  onClick={() => {
                    stopSpeaking();
                    setSpeakingKey(null);
                    setActiveCatId(kidsThirtyTwoFardsCategories[activeCategoryIndex + 1].id);
                  }}
                  className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-100 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  <span>Sonraki Bölüm: {kidsThirtyTwoFardsCategories[activeCategoryIndex + 1].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => {
                  stopSpeaking();
                  setSpeakingKey(null);
                  setSubMode("quiz");
                }}
                className="inline-flex items-center gap-1.5 bg-[#B4833E] hover:bg-[#9A6B28] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Soru-Cevap ile Pekiştir →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          MOD 2: 32 FARZ SORU-CEVAP PEKİŞTİRME OYUNU (12 SORU)
         ================================================================= */}
      {subMode === "quiz" && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                🎯 32 Farz Soru-Cevap Pekiştirme Oyunu (+5 ⭐ / Doğru Cevap)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Öğrendiğin 32 farzı eğlenceli sorularla test et; her doğru cevapta +5 Yıldız kazan!
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-3.5 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
                Doğru Bilinen: {solvedQuizIds.length} / {kidsThirtyTwoFardsQuizData.length}
              </span>
              {Object.keys(quizAnswers).length > 0 && (
                <button
                  onClick={() => setQuizAnswers({})}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800"
                  title="Cevapları Yeniden Dene"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {solvedQuizIds.length === kidsThirtyTwoFardsQuizData.length && (
            <div className="bg-emerald-50 dark:bg-emerald-950/50 border-2 border-[#0B4F3F] rounded-2xl p-5 flex items-center gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <h5 className="text-base font-extrabold text-[#0B4F3F] dark:text-emerald-300">
                  Tebrikler! 32 Farz Kahramanı Oldun!
                </h5>
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  Tüm pekiştirme sorularını başarıyla tamamladın. Dilersen Sünnet Pasaportum & Berat sekmesinden başarı belgeni indirebilirsin!
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kidsThirtyTwoFardsQuizData.map((q, idx) => {
              const picked = quizAnswers[q.id];
              const isAnswered = picked !== undefined;
              const isCorrect = picked === q.correctIndex;
              const alreadyRewarded = solvedQuizIds.includes(q.id);

              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                        {q.emoji} Soru {idx + 1} • {q.category}
                      </span>
                      {alreadyRewarded && (
                        <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                          ✓ +5 ⭐
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {q.question}
                    </p>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isPickedThis = picked === oIdx;
                        let style =
                          "bg-[#FAF9F6] dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#0B4F3F]";
                        if (isAnswered) {
                          if (oIdx === q.correctIndex) {
                            style = "bg-[#0B4F3F] text-white border-[#0B4F3F]";
                          } else if (isPickedThis) {
                            style = "bg-amber-100 dark:bg-amber-950 border-amber-500 text-amber-950 dark:text-amber-200";
                          }
                        }
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswerQuestion(q, oIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs font-semibold transition-all ${style}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-3.5 rounded-xl border text-xs font-medium leading-relaxed ${
                        isCorrect
                          ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200"
                          : "bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200"
                      }`}
                    >
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
