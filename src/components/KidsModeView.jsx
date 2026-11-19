import React, { useState, useEffect, useRef } from 'react';
import {
  Star, X, Volume2, VolumeX, HelpCircle, BookOpen, CheckCircle2,
  Award, Sparkles, ChevronLeft, ChevronRight, Users, Heart, Download, RotateCcw
} from 'lucide-react';
import {
  kidsBadgesData,
  kidsDailyTasks,
  kidsStoriesData,
  kidsYoungSahabesData,
  kidsScenariosData,
  kidsGlossaryCards,
  kidsMatchingPairsData,
  kidsThirtyDayCalendarData,
  kidsRiddlesData
} from '../data/siyerData';
import { safeStorage, speakTurkish, stopSpeaking } from '../services/storageService';
import { PortalLogo } from './PortalLogo';
import { KidsThirtyTwoFards } from './KidsThirtyTwoFards';
import { useLanguage } from '../services/i18n';

export function KidsModeView() {
  const { t } = useLanguage();
  const [activeKidsTab, setActiveKidsTab] = useState("kissalar");
  const [stars, setStars] = useState(() => safeStorage.get("siyer_kids_stars", 25));
  const [completedTasks, setCompletedTasks] = useState(() => safeStorage.get("siyer_kids_tasks", []));
  const [readStories, setReadStories] = useState(() => safeStorage.get("siyer_kids_stories", []));
  const [solvedScenarios, setSolvedScenarios] = useState(() => safeStorage.get("siyer_kids_scenarios", []));

  const [ageFilter, setAgeFilter] = useState("Tümü");
  const [selectedStoryId, setSelectedStoryId] = useState(kidsStoriesData[0].id);
  const [speakingId, setSpeakingId] = useState(null);
  const [isRadioMode, setIsRadioMode] = useState(false);
  const [scenarioAnswers, setScenarioAnswers] = useState({});
  const [showParentCorner, setShowParentCorner] = useState(false);

  // Eşleştirme Oyunu, 30 Günlük Takvim, Bilmeceler ve Güzel Ahlak Beratı State'leri
  const [selectedLeftId, setSelectedLeftId] = useState(null);
  const [matchedIds, setMatchedIds] = useState(() => safeStorage.get("siyer_kids_matched", []));
  const [wrongMatchFlash, setWrongMatchFlash] = useState(false);
  const [childName, setChildName] = useState("Zeynep");
  const beratCanvasRef = useRef(null);
  const [calendarDoneDays, setCalendarDoneDays] = useState(() => safeStorage.get("siyer_kids_calendar", []));
  const [selectedCalDay, setSelectedCalDay] = useState(1);
  const [riddleAnswers, setRiddleAnswers] = useState({});
  const [solvedRiddles, setSolvedRiddles] = useState(() => safeStorage.get("siyer_kids_riddles", []));

  useEffect(() => {
    safeStorage.set("siyer_kids_stars", stars);
  }, [stars]);

  useEffect(() => {
    safeStorage.set("siyer_kids_tasks", completedTasks);
  }, [completedTasks]);

  useEffect(() => {
    safeStorage.set("siyer_kids_stories", readStories);
  }, [readStories]);

  useEffect(() => {
    safeStorage.set("siyer_kids_scenarios", solvedScenarios);
  }, [solvedScenarios]);

  useEffect(() => {
    safeStorage.set("siyer_kids_matched", matchedIds);
  }, [matchedIds]);

  useEffect(() => {
    safeStorage.set("siyer_kids_calendar", calendarDoneDays);
  }, [calendarDoneDays]);

  useEffect(() => {
    safeStorage.set("siyer_kids_riddles", solvedRiddles);
  }, [solvedRiddles]);

  const toggleCalendarDay = (dayNo) => {
    if (calendarDoneDays.includes(dayNo)) {
      setCalendarDoneDays((prev) => prev.filter((d) => d !== dayNo));
      setStars((s) => Math.max(0, s - 5));
    } else {
      setCalendarDoneDays((prev) => [...prev, dayNo]);
      setStars((s) => s + 5);
    }
  };

  const handleRiddleAnswer = (riddle, optionIdx) => {
    setRiddleAnswers((prev) => ({ ...prev, [riddle.id]: optionIdx }));
    if (optionIdx === riddle.correctIndex && !solvedRiddles.includes(riddle.id)) {
      setSolvedRiddles((prev) => [...prev, riddle.id]);
      setStars((s) => s + 10);
    }
  };

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const toggleTask = (task) => {
    if (completedTasks.includes(task.id)) {
      setCompletedTasks((prev) => prev.filter((id) => id !== task.id));
      setStars((s) => Math.max(0, s - task.stars));
    } else {
      setCompletedTasks((prev) => [...prev, task.id]);
      setStars((s) => s + task.stars);
    }
  };

  const finishStory = (storyId) => {
    if (!readStories.includes(storyId)) {
      setReadStories((prev) => [...prev, storyId]);
      setStars((s) => s + 10);
    }
  };

  const handleSelectScenarioOption = (sc, opt) => {
    setScenarioAnswers((prev) => ({ ...prev, [sc.id]: opt }));
    if (opt.isCorrect && !solvedScenarios.includes(sc.id)) {
      setSolvedScenarios((prev) => [...prev, sc.id]);
      setStars((s) => s + 15);
    }
  };

  const handleSpeak = (story) => {
    setIsRadioMode(false);
    if (speakingId === story.id) {
      stopSpeaking();
      setSpeakingId(null);
      return;
    }
    setSpeakingId(story.id);
    speakTurkish(
      `${story.title}. ${story.story} Bu kıssadan öğrendiğimiz ders: ${story.lesson}`,
      () => setSpeakingId(null)
    );
  };

  const toggleRadioMode = () => {
    if (isRadioMode) {
      stopSpeaking();
      setIsRadioMode(false);
      setSpeakingId(null);
      return;
    }
    const list = kidsStoriesData.filter((s) => ageFilter === "Tümü" || s.ageGroup === ageFilter);
    const startIdx = Math.max(0, list.findIndex((s) => s.id === selectedStoryId));
    setIsRadioMode(true);

    const playAt = (idx) => {
      if (idx >= list.length) {
        setIsRadioMode(false);
        setSpeakingId(null);
        return;
      }
      const st = list[idx];
      setSelectedStoryId(st.id);
      setSpeakingId(st.id);
      speakTurkish(
        `${idx + 1}. Kıssa: ${st.title}. ${st.story} Sünnet dersimiz: ${st.lesson}`,
        () => {
          playAt(idx + 1);
        }
      );
    };

    playAt(startIdx);
  };

  const treeStage =
    stars < 35
      ? { level: 1, name: "Minik Fidan", emoji: "🌱", next: 35, desc: "İyilik yaptıkça fidanın kök salıyor!" }
      : stars < 75
      ? { level: 2, name: "Genç Ağaç", emoji: "🌿", next: 75, desc: "Harika gidiyorsun, dalların yeşerdi!" }
      : stars < 120
      ? { level: 3, name: "Çiçek Açan Ağaç", emoji: "🌸", next: 120, desc: "Ağacın mis gibi iyilik çiçekleri açtı!" }
      : stars < 170
      ? { level: 4, name: "Meyve Veren Çınar", emoji: "🌳", next: 170, desc: "Kocaman bir iyilik çınarı yetiştirdin!" }
      : { level: 5, name: "Asr-ı Saâdet Bahçesi", emoji: "🏡", next: 200, desc: "Tebrikler! Örnek bir sünnet bahçesi kurdun!" };

  const progressToNext = Math.min(100, Math.round((stars / treeStage.next) * 100));

  const visibleStories = kidsStoriesData.filter(
    (s) => ageFilter === "Tümü" || s.ageGroup === ageFilter
  );

  const featuredStory =
    visibleStories.find((s) => s.id === selectedStoryId) || visibleStories[0] || kidsStoriesData[0];

  const handleStepStory = (dir) => {
    const idx = visibleStories.findIndex((s) => s.id === featuredStory.id);
    const nextIdx = (idx + dir + visibleStories.length) % visibleStories.length;
    stopSpeaking();
    setSpeakingId(null);
    setSelectedStoryId(visibleStories[nextIdx].id);
  };

  const handleMatchRight = (rightPairId) => {
    if (!selectedLeftId) return;
    if (selectedLeftId === rightPairId) {
      if (!matchedIds.includes(rightPairId)) {
        setMatchedIds((prev) => [...prev, rightPairId]);
        setStars((s) => s + 10);
      }
      setSelectedLeftId(null);
    } else {
      setWrongMatchFlash(true);
      setTimeout(() => setWrongMatchFlash(false), 600);
      setSelectedLeftId(null);
    }
  };

  useEffect(() => {
    if (activeKidsTab !== "berat") return;
    const canvas = beratCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = 1200;
    const height = 850;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "#0B4F3F";
    ctx.lineWidth = 18;
    ctx.strokeRect(36, 36, width - 72, height - 72);

    ctx.strokeStyle = "#B4833E";
    ctx.lineWidth = 4;
    ctx.strokeRect(58, 58, width - 116, height - 116);

    ctx.fillStyle = "#0B4F3F";
    ctx.font = "bold 24px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SİYER VE AHLAK PORTALI • GÜZEL AHLAK BAHÇESİ", width / 2, 145);

    ctx.fillStyle = "#B4833E";
    ctx.font = "bold 50px Georgia, serif";
    ctx.fillText("GÜZEL AHLAK VE SÜNNET BERATI", width / 2, 225);

    ctx.fillStyle = "#475569";
    ctx.font = "24px system-ui, sans-serif";
    ctx.fillText("Siyer kıssalarını okuyup iyilik görevlerini tamamlayarak kendi İyilik Ağacını büyüten", width / 2, 300);

    ctx.fillStyle = "#0B4F3F";
    ctx.font = "bold 56px Georgia, serif";
    ctx.fillText(childName.trim() || "Sevgili Çocuğumuz", width / 2, 405);

    ctx.strokeStyle = "#B4833E";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 430);
    ctx.lineTo(850, 430);
    ctx.stroke();

    ctx.fillStyle = "#1E293B";
    ctx.font = "bold 26px system-ui, sans-serif";
    ctx.fillText(
      `İyilik Ağacı Seviyesi: ${treeStage.name}   •   Toplam Puan: ${stars} Yıldız`,
      width / 2,
      515
    );

    const earnedMedals = kidsBadgesData
      .filter((b) => stars >= b.minStars)
      .map((b) => b.title)
      .join("  •  ");
    ctx.fillStyle = "#9A6B28";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.fillText(`Kazanılan Madalyalar: ${earnedMedals || "El-Emîn Adayı"}`, width / 2, 575);

    ctx.fillStyle = "#0B4F3F";
    ctx.font = "italic 25px Georgia, serif";
    ctx.fillText('"Kardeşine gülümsemen senin için bir sadakadır." (Hadis-i Şerif)', width / 2, 665);

    ctx.fillStyle = "#64748B";
    ctx.font = "19px system-ui, sans-serif";
    ctx.fillText(`Tarih: ${new Date().toLocaleDateString("tr-TR")} • Siyer ve Ahlak Portalı Çocuk Modülü`, width / 2, 745);
  }, [activeKidsTab, childName, stars, treeStage.name]);

  const downloadKidBerat = () => {
    try {
      const canvas = beratCanvasRef.current;
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `guzel-ahlak-berati-${Date.now()}.png`;
      a.click();
    } catch {
      alert("Berat indirilirken bir hata oluştu.");
    }
  };

  const kidsTabs = [
    { id: "kissalar", label: t(`Siyer Kıssaları & Radyo (${kidsStoriesData.length})`, `Prophetic Stories & Audio (${kidsStoriesData.length})`), icon: BookOpen },
    { id: "32farz", label: t("32 Farz Atölyesi & Testi", "32 Fards Workshop & Quiz"), icon: Sparkles },
    { id: "gorevler", label: t(`İyilik Görevlerim (${completedTasks.length}/${kidsDailyTasks.length})`, `Good Deeds (${completedTasks.length}/${kidsDailyTasks.length})`), icon: CheckCircle2 },
    { id: "kahramanlar", label: t("Genç Sahabeler & Kavramlar", "Young Heroes & Words"), icon: Users },
    { id: "senaryolar", label: t("Ahlak & Eşleştirme Oyunu", "Ethics & Matching Games"), icon: HelpCircle },
    { id: "berat", label: t("Sünnet Pasaportum & Berat", "Sunnah Passport & Award"), icon: Award }
  ];

  const taskCategories = ["Ev & Aile", "Nezaket & Arkadaşlık", "Doğa & Emanet"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* 1. ÜST KARŞILAMA, İYİLİK AĞACI VE ERDEM MADALYALARI PANELİ */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div className="bg-[#0B4F3F] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#B4833E]">
          <div className="flex items-center gap-3">
            <PortalLogo className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {t("Peygamberimizin Güzel Ahlak Bahçesi", "Garden of Prophetic Character")}
                </h2>
                <span className="text-xs font-semibold bg-[#B4833E] text-white px-2.5 py-0.5 rounded-full">
                  {t("Çocuk Portalı", "Kids Portal")}
                </span>
              </div>
              <p className="text-xs text-emerald-100/85">
                {t(
                  "Kıssaları oku veya sesli dinle, iyilik görevlerini tamamla ve erdem madalyalarını topla!",
                  "Read or listen to stories, learn the 32 Fards, complete good deeds, and collect virtue medals!"
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
              <div>
                <span className="text-xs text-emerald-100 block leading-none">{t("Toplam Puanım", "My Score")}</span>
                <span className="text-base font-extrabold text-amber-300">{stars} {t("Yıldız", "Stars")}</span>
              </div>
            </div>

            <button
              onClick={() => setShowParentCorner(!showParentCorner)}
              className="bg-white text-[#0B4F3F] hover:bg-emerald-50 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              {showParentCorner ? t("Rehberi Kapat", "Close Guide") : t("Ebeveyn Rehberi", "Parents Guide")}
            </button>
          </div>
        </div>

        {/* Ebeveyn Pedagojik Rehberi */}
        {showParentCorner && (
          <div className="bg-amber-50/70 dark:bg-slate-800/80 border-b border-amber-200 dark:border-slate-700 px-6 py-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                👨‍👩‍👧‍👦 Ebeveyn ve Eğitimci Pedagojik Uygulama Rehberi
              </h3>
              <button onClick={() => setShowParentCorner(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Çocuk gelişimi ve değerler eğitimi pedagojik ilkelerine göre hazırlanan bu modülde her kıssanın altında{" "}
              <strong>"Ailemle Sohbet Sorusu"</strong> ve <strong>"Şimdi Sıra Sende"</strong> adımı yer alır. Çocuğunuzla kıssayı okuduktan sonra yargılamadan, açık uçlu sorularla kendi duygularını ifade etmesine alan açabilirsiniz.
            </p>
          </div>
        )}

        {/* İyilik Ağacı & 5 Erdem Madalyası Özeti */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#FAF9F6] dark:bg-slate-900/60">
          {/* Sol (4 Birim): İyilik Ağacı Kartı */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border-2 border-[#0B4F3F]/30 flex items-center justify-center text-4xl shrink-0">
              {treeStage.emoji}
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                  Seviye {treeStage.level} • {treeStage.name}
                </span>
                <span className="text-xs font-semibold text-slate-500">{stars}/{treeStage.next} ⭐</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0B4F3F] dark:bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressToNext}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{treeStage.desc}</p>
            </div>
          </div>

          {/* Sağ (8 Birim): 5 Erdem Madalyası Koleksiyonu */}
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Nebevî Erdem Madalyalarım ({kidsBadgesData.filter((b) => stars >= b.minStars).length}/{kidsBadgesData.length})
              </span>
              <span className="text-xs text-slate-500">Yıldız topladıkça yeni madalyalar açılır</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {kidsBadgesData.map((badge) => {
                const unlocked = stars >= badge.minStars;
                return (
                  <div
                    key={badge.id}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      unlocked
                        ? "bg-white dark:bg-slate-800 border-[#B4833E] shadow-2xs"
                        : "bg-slate-100/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 opacity-60"
                    }`}
                    title={badge.desc}
                  >
                    <div className="text-2xl mb-1">{badge.emoji}</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                      {badge.title}
                    </div>
                    <div className="text-xs text-[#9A6B28] dark:text-amber-400 font-medium">
                      {unlocked ? "✓ Kazanıldı" : `${badge.minStars} ⭐ Hedef`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Çocuk Sekmesi Navigasyonu */}
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-2.5 flex flex-wrap items-center gap-2">
          {kidsTabs.map((t) => {
            const Icon = t.icon;
            const active = activeKidsTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveKidsTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? "bg-[#0B4F3F] text-white shadow-2xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =================================================================
          SEKME 1: RESİMLİ SİYER KISSALARI & ODAKLI HİKAYE SAHNESİ (12 KISSA)
         ================================================================= */}
      {activeKidsTab === "kissalar" && (
        <div className="space-y-6">
          {/* Yaş Filtresi ve Kıssa Sayacı */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Hikaye Okuma Sahnesi & Kıssa Kütüphanesi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Okumak veya sesli dinlemek istediğin kıssayı aşağıdan seçebilirsin.
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {["Tümü", "4-6 Yaş", "7-12 Yaş"].map((age) => (
                <button
                  key={age}
                  onClick={() => {
                    setAgeFilter(age);
                    const first = kidsStoriesData.find((s) => age === "Tümü" || s.ageGroup === age);
                    if (first) setSelectedStoryId(first.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    ageFilter === age
                      ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* ODAKLI HİKAYE OKUMA SAHNESİ (SEÇİLİ KISSA KİTAP GÖRÜNÜMÜ) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-[#0B4F3F]/30 dark:border-emerald-700/40 shadow-sm overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800/80 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B4F3F] text-white">
                  {featuredStory.ageGroup}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-[#9A6B28] dark:text-amber-300">
                  Erdem: {featuredStory.category}
                </span>
                {readStories.includes(featuredStory.id) && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    ✓ Okundu
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={toggleRadioMode}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    isRadioMode
                      ? "bg-rose-600 text-white"
                      : "bg-[#0B4F3F] hover:bg-[#08382C] text-white"
                  }`}
                >
                  {isRadioMode ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>
                    {isRadioMode ? "Siyer Radyosunu Durdur" : "📻 Siyer Radyosu (Tümünü Sırayla Dinle)"}
                  </span>
                </button>

                <button
                  onClick={() => handleSpeak(featuredStory)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    speakingId === featuredStory.id
                      ? "bg-rose-600 text-white"
                      : "bg-[#B4833E] hover:bg-[#9A6B28] text-white"
                  }`}
                >
                  {speakingId === featuredStory.id ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                  <span>{speakingId === featuredStory.id ? "Okumayı Durdur" : "Kıssayı Sesli Dinle"}</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleStepStory(-1)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100"
                    title="Önceki Kıssa"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleStepStory(1)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100"
                    title="Sonraki Kıssa"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Sol Sütun (7 Birim): Hikaye Metni ve Biliyor muydun? */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-3xl shrink-0">
                    {featuredStory.emoji || "📖"}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Seçili Siyer Kıssası</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {featuredStory.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed bg-[#FAF9F6] dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700">
                  {featuredStory.story}
                </p>

                {featuredStory.didYouKnow && (
                  <div className="bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/60 rounded-xl p-4 text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-sky-900 dark:text-sky-300 block mb-1">
                      💡 Biliyor muydun?
                    </span>
                    {featuredStory.didYouKnow}
                  </div>
                )}
              </div>

              {/* Sağ Sütun (5 Birim): Sünnet Dersim, Sıra Sende & Aile Sorusu */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border-l-4 border-[#0B4F3F] p-4 rounded-r-xl text-xs space-y-1">
                  <span className="font-bold text-[#0B4F3F] dark:text-emerald-400 uppercase tracking-wider block">
                    🌟 Bu Kıssadan Sünnet Dersim
                  </span>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {featuredStory.lesson}
                  </p>
                </div>

                {featuredStory.actionTip && (
                  <div className="bg-amber-50/70 dark:bg-amber-950/30 border-l-4 border-[#B4833E] p-4 rounded-r-xl text-xs space-y-1">
                    <span className="font-bold text-[#9A6B28] dark:text-amber-400 uppercase tracking-wider block">
                      🚀 Şimdi Sıra Sende (Küçük Görev)
                    </span>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      {featuredStory.actionTip}
                    </p>
                  </div>
                )}

                {featuredStory.familyQuestion && (
                  <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block">
                      👨‍👩‍👧 Ailemle Sohbet Sorusu:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      "{featuredStory.familyQuestion}"
                    </p>
                  </div>
                )}

                <button
                  onClick={() => finishStory(featuredStory.id)}
                  disabled={readStories.includes(featuredStory.id)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                    readStories.includes(featuredStory.id)
                      ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 cursor-default"
                      : "bg-[#0B4F3F] hover:bg-[#08382C] text-white shadow-xs"
                  }`}
                >
                  {readStories.includes(featuredStory.id)
                    ? "✓ Bu Kıssayı Tamamladın (+10 Yıldız Kazanıldı)"
                    : "Kıssayı Okudum / Dinledim (+10 ⭐ Kazan)"}
                </button>

                <div className="text-xs text-slate-400 text-right">
                  Kaynak: {featuredStory.source}
                </div>
              </div>
            </div>
          </div>

          {/* 12 KISSA KÜTÜPHANESİ KARTLARI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleStories.map((st) => {
              const isSelected = st.id === featuredStory.id;
              const isRead = readStories.includes(st.id);
              return (
                <div
                  key={st.id}
                  onClick={() => setSelectedStoryId(st.id)}
                  className={`cursor-pointer rounded-xl p-5 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-emerald-50/40 dark:bg-emerald-950/30 border-2 border-[#0B4F3F] shadow-xs"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-[#0B4F3F]/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{st.emoji || "📖"}</span>
                        <div>
                          <span className="text-xs font-bold text-[#0B4F3F] dark:text-emerald-400 block">
                            {st.category}
                          </span>
                          <span className="text-xs text-slate-400">{st.ageGroup}</span>
                        </div>
                      </div>
                      {isRead ? (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                          ✓ Okundu
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300">
                          +10 ⭐
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {st.story}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400">
                      {isSelected ? "● Sahnede Açık" : "Sahnede Aç →"}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(st);
                      }}
                      className="text-slate-500 hover:text-[#0B4F3F] font-semibold inline-flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{speakingId === st.id ? "Durdur" : "Dinle"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================
          SEKME 2: GÜNLÜK İYİLİK GÖREVLERİM (3 KATEGORİLİ KART YERLEŞİMİ)
         ================================================================= */}
      {activeKidsTab === "gorevler" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Günlük Sünnet ve İyilik Görevlerim
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Evde, arkadaşlarınla ve doğada yaptığın her güzel davranış İyilik Ağacını büyütür!
              </p>
            </div>
            <div className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
              Tamamlanan Görev: {completedTasks.length} / {kidsDailyTasks.length}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {taskCategories.map((cat) => {
              const catTasks = kidsDailyTasks.filter((t) => t.category === cat);
              return (
                <div
                  key={cat}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3.5"
                >
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-2.5 flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#0B4F3F] dark:text-emerald-400 uppercase tracking-wider">
                      {cat}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {catTasks.filter((t) => completedTasks.includes(t.id)).length}/{catTasks.length}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {catTasks.map((task) => {
                      const done = completedTasks.includes(task.id);
                      return (
                        <button
                          key={task.id}
                          onClick={() => toggleTask(task)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                            done
                              ? "bg-emerald-50/80 dark:bg-emerald-950/50 border-[#0B4F3F] text-slate-900 dark:text-slate-100"
                              : "bg-[#FAF9F6] dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] text-slate-700 dark:text-slate-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="text-xl shrink-0">{task.emoji}</span>
                            <span className="text-xs font-semibold leading-relaxed">{task.title}</span>
                          </div>
                          <span
                            className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${
                              done
                                ? "bg-[#0B4F3F] text-white"
                                : "bg-amber-100 dark:bg-amber-950 text-[#9A6B28] dark:text-amber-300"
                            }`}
                          >
                            {done ? "✓" : `+${task.stars}⭐`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 30 GÜNLÜK SÜNNET VE İYİLİK TAKVİMİ (İNTERAKTİF 30 GÜN) */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                  Aylık Sünnet ve İyilik Maratonu
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  📅 30 Günlük Sünnet ve İyilik Takvimim (+5 ⭐ / Gün)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Her güne bir iyilik ve sünnet görevi! Bir güne tıklayarak görevi gör ve tamamladığında işaretle.
                </p>
              </div>
              <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-3.5 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                Tamamlanan Gün: {calendarDoneDays.length} / 30
              </span>
            </div>

            {(() => {
              const currentDayObj =
                kidsThirtyDayCalendarData.find((d) => d.day === selectedCalDay) || kidsThirtyDayCalendarData[0];
              const isDayDone = calendarDoneDays.includes(currentDayObj.day);
              return (
                <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border-2 border-[#0B4F3F]/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B4F3F] text-white flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs font-semibold leading-none">GÜN</span>
                      <span className="text-base font-extrabold">{currentDayObj.day}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#9A6B28] dark:text-amber-400 block">
                        {currentDayObj.emoji} {currentDayObj.day}. Gün Sünnet Görevi
                      </span>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {currentDayObj.task}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCalendarDay(currentDayObj.day)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                      isDayDone
                        ? "bg-emerald-100 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 border border-[#0B4F3F]"
                        : "bg-[#0B4F3F] hover:bg-[#08382C] text-white"
                    }`}
                  >
                    {isDayDone ? "✓ Bugün Tamamlandı (+5 ⭐)" : "Görevi Yaptım (+5 ⭐ Kazan)"}
                  </button>
                </div>
              );
            })()}

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
              {kidsThirtyDayCalendarData.map((d) => {
                const done = calendarDoneDays.includes(d.day);
                const selected = selectedCalDay === d.day;
                return (
                  <button
                    key={d.day}
                    onClick={() => setSelectedCalDay(d.day)}
                    className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                      selected
                        ? "border-2 border-[#0B4F3F] bg-emerald-50/90 dark:bg-emerald-950/60 shadow-2xs"
                        : done
                        ? "bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800"
                        : "bg-[#FAF9F6] dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F]"
                    }`}
                  >
                    <span className="text-base">{d.emoji}</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{d.day}. Gün</span>
                    <span className="text-xs font-extrabold text-[#0B4F3F] dark:text-emerald-400">
                      {done ? "✓" : "•"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          SEKME 3: GENÇ SAHABE KAHRAMANLARI & RESİMLİ KAVRAM KARTLARI
         ================================================================= */}
      {activeKidsTab === "kahramanlar" && (
        <div className="space-y-8">
          {/* Bölüm 3A: Çocuk ve Genç Sahabe Kahramanları (6 Kart) */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Peygamberimizin Yanında Yetişen Çocuk ve Genç Kahramanlar
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Çocuk yaşta cesaretleri, dürüstlükleri ve ilim sevgileriyle örnek olan genç sahabeler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {kidsYoungSahabesData.map((ys) => (
                <div
                  key={ys.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-2xl shrink-0">
                        {ys.emoji}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#9A6B28] dark:text-amber-400 block">
                          {ys.virtue}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{ys.name}</h4>
                        <span className="text-xs text-slate-500">{ys.ageTitle}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{ys.story}</p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3 rounded-r-lg text-xs text-slate-700 dark:text-slate-200">
                    <span className="font-bold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                      Ondan Öğrendiğim İlke:
                    </span>
                    {ys.quote}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bölüm 3B: Resimli Siyer ve Ahlak Kavram Kartları (8 Kart) */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Resimli Siyer ve Güzel Ahlak Sözlüğüm
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kıssalarda geçen güzel kelimelerin anlamları ve günlük hayatımızdaki örnekleri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kidsGlossaryCards.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{c.emoji}</span>
                      <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded-full">
                        {c.subtitle || "Kavram"}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#0B4F3F] dark:text-emerald-400">{c.term}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{c.meaning}</p>
                  </div>

                  {c.example && (
                    <div className="bg-[#FAF9F6] dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 rounded-lg p-2.5 text-xs text-slate-700 dark:text-slate-300 italic">
                      "{c.example}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          SEKME 4: SEN OLSAYDIN NE YAPARDIN? (6 İNTERAKTİF AHLAK OYUNU)
         ================================================================= */}
      {activeKidsTab === "senaryolar" && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Sen Olsaydın Ne Yapardın? • Güzel Ahlak Oyunu
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Her senaryoda Peygamberimizin güzel ahlakına en uygun davranışı seçerek +15 Yıldız kazan!
              </p>
            </div>
            <div className="text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-800">
              Doğru Tamamlanan: {solvedScenarios.length} / {kidsScenariosData.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kidsScenariosData.map((sc, idx) => {
              const chosen = scenarioAnswers[sc.id];
              const isSolved = solvedScenarios.includes(sc.id);
              return (
                <div
                  key={sc.id}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                        {sc.emoji} Senaryo {idx + 1} • {sc.category || "Güzel Ahlak"}
                      </span>
                      {isSolved && (
                        <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                          ✓ +15 ⭐ Kazanıldı
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                      {sc.question}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {sc.options.map((opt) => {
                      const isPicked = chosen?.id === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectScenarioOption(sc, opt)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all ${
                            isPicked
                              ? opt.isCorrect
                                ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                                : "bg-amber-100 dark:bg-amber-950 border-amber-500 text-amber-950 dark:text-amber-200"
                              : "bg-[#FAF9F6] dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] text-slate-700 dark:text-slate-200"
                          }`}
                        >
                          {opt.text}
                        </button>
                      );
                    })}

                    {chosen && (
                      <div
                        className={`text-xs font-medium p-3.5 rounded-xl border ${
                          chosen.isCorrect
                            ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200"
                            : "bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200"
                        }`}
                      >
                        {chosen.feedback}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SAHABE VE KAVRAM EŞLEŞTİRME OYUNU */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                  Eğitici Hafıza & Eşleştirme Etkinliği
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Sahabe ve Kavram Eşleştirme Oyunu (+10 ⭐)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Önce soldaki bir kavram veya sahabe ismine tıkla, sonra sağdaki doğru açıklamasıyla eşleştir!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-3.5 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  Eşleşen: {matchedIds.length} / {kidsMatchingPairsData.length}
                </span>
                {matchedIds.length > 0 && (
                  <button
                    onClick={() => {
                      setMatchedIds([]);
                      setSelectedLeftId(null);
                    }}
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800"
                    title="Eşleştirmeyi Sıfırla"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {wrongMatchFlash && (
              <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-[#9A6B28] dark:text-amber-300 px-4 py-2.5 rounded-lg text-xs font-semibold">
                Bu eşleşme tam olmadı, gel tekrar deneyelim!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sol Sütun: Kavramlar & Sahabeler */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  1. Adım: Kavram veya Sahabe Seç
                </span>
                {kidsMatchingPairsData.map((p) => {
                  const isDone = matchedIds.includes(p.id);
                  const isSelected = selectedLeftId === p.id;
                  return (
                    <button
                      key={p.id}
                      disabled={isDone}
                      onClick={() => setSelectedLeftId(p.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                        isDone
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
                          : isSelected
                          ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                          : "bg-[#FAF9F6] dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      <span>{p.left}</span>
                      <span>{isDone ? "✓ Eşleşti" : isSelected ? "Seçildi →" : ""}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sağ Sütun: Açıklamalar */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  2. Adım: Doğru Açıklamaya Tıkla
                </span>
                {[...kidsMatchingPairsData].reverse().map((p) => {
                  const isDone = matchedIds.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      disabled={isDone}
                      onClick={() => handleMatchRight(p.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        isDone
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-[#B4833E] text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <span>{p.right}</span>
                      {isDone && <span className="font-bold">+10 ⭐</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* "BEN KİMİM / BEN NEYİM?" SİYER BİLMECELERİ (4 İPUÇLU BİLMECE) */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block">
                  3 İpucu 1 Cevap • Siyer Dedektifi
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  🕵️ "Ben Kimim / Ben Neyim?" Siyer Bilmeceleri (+10 ⭐)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  3 ipucunu dikkatlice oku ve hangi sahabe, mekan veya mucizevi hatıra olduğunu tahmin et!
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 px-3.5 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
                Çözülen Bilmece: {solvedRiddles.length} / {kidsRiddlesData.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {kidsRiddlesData.map((rd, idx) => {
                const pickedIdx = riddleAnswers[rd.id];
                const isAnswered = pickedIdx !== undefined;
                const isCorrect = pickedIdx === rd.correctIndex;
                return (
                  <div
                    key={rd.id}
                    className="bg-[#FAF9F6] dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                          {rd.emoji} Bilmece {idx + 1} • {rd.category}
                        </span>
                        {solvedRiddles.includes(rd.id) && (
                          <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                            ✓ +10 ⭐
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700">
                        {rd.clues.map((clue, cIdx) => (
                          <p key={cIdx} className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                            <strong className="text-[#9A6B28] dark:text-amber-400">{cIdx + 1}. İpucu: </strong>
                            {clue}
                          </p>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {rd.options.map((opt, oIdx) => {
                          const selectedThis = pickedIdx === oIdx;
                          let style =
                            "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#0B4F3F]";
                          if (isAnswered) {
                            if (oIdx === rd.correctIndex) {
                              style = "bg-[#0B4F3F] text-white border-[#0B4F3F]";
                            } else if (selectedThis) {
                              style = "bg-amber-100 dark:bg-amber-950 border-amber-500 text-amber-900 dark:text-amber-200";
                            }
                          }
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleRiddleAnswer(rd, oIdx)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${style}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {isAnswered && (
                      <div
                        className={`p-3 rounded-xl border text-xs font-medium ${
                          isCorrect
                            ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200"
                            : "bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200"
                        }`}
                      >
                        {rd.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================
          SEKME 5: SÜNNET PASAPORTUM (DAMGALI HARİTA) & İSME ÖZEL GÜZEL AHLAK BERATI
         ================================================================= */}
      {activeKidsTab === "berat" && (
        <div className="space-y-6">
          {/* Sünnet Pasaportum - Damgalı Başarı Haritası */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                  Sünnet ve Kıssa Pasaportu
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  🛂 Benim Sünnet ve Kıssa Pasaportum
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tamamladığın her siyer kıssası ve iyilik görevi için pasaportuna özel sünnet damgası basılır!
                </p>
              </div>
              <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-[#0B4F3F] dark:text-emerald-300 px-3.5 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                Basılan Damga: {readStories.length + completedTasks.length} / {kidsStoriesData.length + kidsDailyTasks.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {kidsStoriesData.map((st, i) => {
                const stamped = readStories.includes(st.id);
                return (
                  <div
                    key={st.id}
                    className={`p-3 rounded-xl border text-center space-y-1 transition-all ${
                      stamped
                        ? "bg-emerald-50/70 dark:bg-emerald-950/40 border-2 border-[#0B4F3F]"
                        : "bg-slate-50 dark:bg-slate-800/40 border-dashed border-slate-300 dark:border-slate-700 opacity-60"
                    }`}
                  >
                    <div className="text-xl">{st.emoji}</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100 line-clamp-1">
                      {i + 1}. {st.title}
                    </div>
                    <div
                      className={`text-xs font-extrabold px-2 py-0.5 rounded-full inline-block ${
                        stamped
                          ? "bg-[#0B4F3F] text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                      }`}
                    >
                      {stamped ? "★ DAMGALANDI" : "Bekliyor"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block mb-1">
                Çocuk Portalı Başarı Belgesi
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                İsme Özel Güzel Ahlak ve Sünnet Beratı
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Adını aşağıya yazarak kazandığın yıldızları, İyilik Ağacı seviyeni ve madalyalarını içeren beratını hemen indirebilirsin!
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Beratta Yazacak Adın Soyadın:
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Örn: Zeynep Ersoy"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0B4F3F]"
              />
            </div>

            <button
              onClick={downloadKidBerat}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4F3F] hover:bg-[#08382C] text-white py-3.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Güzel Ahlak Beratımı İndir (PNG)</span>
            </button>
          </div>

          <div className="lg:col-span-7 bg-slate-100 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center">
            <canvas
              ref={beratCanvasRef}
              className="w-full max-w-lg h-auto rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
            />
          </div>
          </div>
        </div>
      )}

      {/* =================================================================
          SEKME 6: ÇOCUKLAR İÇİN 32 FARZ ÖĞRENME & SORU-CEVAP ATÖLYESİ
         ================================================================= */}
      {activeKidsTab === "32farz" && (
        <KidsThirtyTwoFards
          onAwardStars={(delta) => setStars((s) => Math.max(0, s + delta))}
        />
      )}
    </div>
  );
}
