import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  BookOpen, Heart, Compass, Clock, Calendar, CheckCircle2, Search,
  Sparkles, ShieldCheck, Users, Award, Moon, Sun, Download,
  Image, Volume2, VolumeX, Check, Trash2, ChevronRight, ChevronLeft,
  AlertCircle, Upload, Printer, Bookmark
} from 'lucide-react';

import {
  dailySunnahList,
  moodsData,
  thematicData,
  contemporaryIssuesData,
  dailyRoutineData,
  chronologyData,
  glossaryAndSahabeData,
  semailAndSpecialData,
  defaultHabits,
  weekDays,
  crossReferencesMap
} from './data/siyerData';

import {
  safeStorage,
  speakTurkish,
  stopSpeaking,
  exportUserData,
  printReflectionJournal,
  printTopicHandout
} from './services/storageService';

import { GlossaryText, CitationFooter, PersonalReflectionNote } from './components/SharedUI';
import { QuoteCardModal } from './components/QuoteCardModal';
import { KidsModeView } from './components/KidsModeView';
import {
  HilyeSerifBoard,
  AdultVakaSection,
  PropheticPrayersSection,
  FortyHadithSection,
  UniversalDeclarationsSection,
  WeeklyCurriculumSection,
  CorporateQuizAndCertificateSection,
  FivePrayerAnchorsSection
} from './components/DesignInnovations';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center p-6">
          <div className="bg-white rounded-xl p-8 max-w-md text-center border border-slate-200 shadow-md">
            <AlertCircle className="w-10 h-10 text-[#0B4F3F] mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900 mb-2">Sayfa Yenileniyor</h2>
            <p className="text-sm text-slate-600 mb-4">Geçici bir görüntüleme sorunu oluştu.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-[#0B4F3F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#08382C]"
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainApp() {
  const [isKidsMode, setIsKidsMode] = useState(false);
  const [readingTheme, setReadingTheme] = useState(() => safeStorage.get("siyer_reading_theme", "light"));
  const isDarkMode = readingTheme === "dark";
  const isSepiaMode = readingTheme === "sepia";
  const [currentTab, setCurrentTab] = useState("gunun-sunneti");
  const [searchQuery, setSearchQuery] = useState("");
  const [lastVisited, setLastVisited] = useState(() => safeStorage.get("siyer_last_visited", null));

  // Alt bölüm filtreleri
  const [sunnetSubView, setSunnetSubView] = useState("sunnet");
  const [selectedMoodId, setSelectedMoodId] = useState(moodsData[0].id);
  const [ahlakSubView, setAhlakSubView] = useState("tematik");
  const [thematicCategory, setThematicCategory] = useState("Tümü");
  const [sahabeGroupFilter, setSahabeGroupFilter] = useState("Tümü");
  const [sahabeSearch, setSahabeSearch] = useState("");
  const [semailSubView, setSemailSubView] = useState("semail");
  const [chronoPeriodFilter, setChronoPeriodFilter] = useState("Tümü");
  const [muhasebeSubView, setMuhasebeSubView] = useState("cetele");
  const [fontScale, setFontScale] = useState("normal");
  const [cardModalData, setCardModalData] = useState(null);

  const [sunnahIndex, setSunnahIndex] = useState(() => {
    const dayOfMonth = new Date().getDate();
    return dayOfMonth % dailySunnahList.length;
  });
  const [speakingSunnah, setSpeakingSunnah] = useState(false);

  const [favorites, setFavorites] = useState(() => safeStorage.get("siyer_favorites", []));
  const [completedItems, setCompletedItems] = useState(() => safeStorage.get("siyer_completed", []));
  const [notes, setNotes] = useState(() => safeStorage.get("siyer_notes", {}));
  const [habitLogs, setHabitLogs] = useState(() => safeStorage.get("siyer_habits", {}));
  const fileInputRef = useRef(null);

  const currentSunnah = dailySunnahList[sunnahIndex] || dailySunnahList[0];
  const activeMood = moodsData.find((m) => m.id === selectedMoodId) || moodsData[0];

  useEffect(() => {
    safeStorage.set("siyer_reading_theme", readingTheme);
  }, [readingTheme]);

  useEffect(() => {
    safeStorage.set("siyer_last_visited", lastVisited);
  }, [lastVisited]);

  const recordVisit = (title, tab, subView = "", filterVal = "") => {
    setLastVisited({ title, tab, subView, filterVal });
  };

  const handleCrossReferenceClick = (termKey) => {
    const entry = glossaryAndSahabeData[termKey];
    if (!entry) return;
    if (entry.type === "Sahabe Profili") {
      setSahabeGroupFilter("Tümü");
      setSahabeSearch(termKey);
      setCurrentTab("sahabeler");
      recordVisit(entry.title, "sahabeler", "", termKey);
    } else {
      setSemailSubView("kavramlar");
      setCurrentTab("semail-siyer");
      recordVisit(entry.title, "semail-siyer", "kavramlar", termKey);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    safeStorage.set("siyer_favorites", favorites);
  }, [favorites]);

  useEffect(() => {
    safeStorage.set("siyer_completed", completedItems);
  }, [completedItems]);

  useEffect(() => {
    safeStorage.set("siyer_notes", notes);
  }, [notes]);

  useEffect(() => {
    safeStorage.set("siyer_habits", habitLogs);
  }, [habitLogs]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleComplete = (id) => {
    setCompletedItems((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleSaveNote = (id, text) => {
    setNotes((prev) => {
      const updated = { ...prev };
      if (!text) delete updated[id];
      else updated[id] = text;
      return updated;
    });
  };

  const toggleHabitDay = (habitId, day) => {
    const key = `${habitId}-${day}`;
    setHabitLogs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleImportJson = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (Array.isArray(parsed.favorites)) setFavorites(parsed.favorites);
        if (Array.isArray(parsed.completed)) setCompletedItems(parsed.completed);
        if (parsed.notes && typeof parsed.notes === "object") setNotes(parsed.notes);
        if (parsed.habits && typeof parsed.habits === "object") setHabitLogs(parsed.habits);
      } catch {
        alert("Yedek dosyası okunamadı. Lütfen geçerli bir JSON dosyası seçin.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleToggleSunnahSpeak = () => {
    if (speakingSunnah) {
      stopSpeaking();
      setSpeakingSunnah(false);
    } else {
      setSpeakingSunnah(true);
      speakTurkish(
        `${currentSunnah.title}. ${currentSunnah.translation}. ${currentSunnah.description} Günlük hayata tatbik: ${currentSunnah.application}`,
        () => setSpeakingSunnah(false)
      );
    }
  };

  const totalTrackable =
    dailySunnahList.length + thematicData.length + contemporaryIssuesData.length + dailyRoutineData.length;
  const progressPercent = Math.min(100, Math.round((completedItems.length / totalTrackable) * 100));

  const habitTotalSlots = defaultHabits.length * weekDays.length;
  const habitCheckedCount = Object.values(habitLogs).filter(Boolean).length;
  const habitScore = Math.round((habitCheckedCount / habitTotalSlots) * 100);

  const allItemsMap = useMemo(() => {
    const map = {};
    dailySunnahList.forEach((s) => (map[s.id] = s.title));
    moodsData.forEach((m) => (map[m.id] = m.title));
    thematicData.forEach((t) => (map[t.id] = t.title));
    contemporaryIssuesData.forEach((c) => (map[c.id] = c.title));
    semailAndSpecialData.forEach((s) => (map[s.id] = s.title));
    Object.entries(glossaryAndSahabeData).forEach(([key, item]) => (map[key] = item.title));
    return map;
  }, []);

  const sahabeGroups = [
    { key: "Tümü", label: "Tüm Sahabeler", count: 31 },
    { key: "Hulefâ-yi Râşidîn", label: "Hulefâ-yi Râşidîn", count: 4 },
    { key: "Ehl-i Beyt & Annelerimiz", label: "Ehl-i Beyt & Annelerimiz", count: 7 },
    { key: "Aşere-i Mübeşşere", label: "Aşere-i Mübeşşere", count: 6 },
    { key: "İlim & Suffe Ashâbı", label: "İlim & Suffe Ashâbı", count: 9 },
    { key: "Ensar & Fedakârlık Öncüleri", label: "Ensar & Fedakârlık Öncüleri", count: 5 }
  ];

  const globalSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const results = [];

    dailySunnahList.forEach((s, idx) => {
      if (s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.translation.toLowerCase().includes(q)) {
        results.push({
          id: s.id,
          badge: "Günün Sünneti",
          title: s.title,
          snippet: s.translation,
          source: s.source,
          onSelect: () => {
            setSunnahIndex(idx);
            setCurrentTab("gunun-sunneti");
            setSearchQuery("");
          }
        });
      }
    });

    moodsData.forEach((m) => {
      if (m.name.toLowerCase().includes(q) || m.title.toLowerCase().includes(q) || m.content.toLowerCase().includes(q)) {
        results.push({
          id: m.id,
          badge: `Rehberlik • ${m.name}`,
          title: m.title,
          snippet: m.content,
          source: m.source,
          onSelect: () => {
            setSelectedMoodId(m.id);
            setCurrentTab("gunun-sunneti");
            setSearchQuery("");
          }
        });
      }
    });

    thematicData.forEach((t) => {
      if (t.title.toLowerCase().includes(q) || t.text.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)) {
        results.push({
          id: t.id,
          badge: `Ahlak İlkeleri • ${t.category}`,
          title: t.title,
          snippet: t.text,
          source: t.source,
          onSelect: () => {
            setAhlakSubView("tematik");
            setThematicCategory("Tümü");
            setCurrentTab("ahlak-meseleler");
            setSearchQuery("");
          }
        });
      }
    });

    contemporaryIssuesData.forEach((c) => {
      if (c.title.toLowerCase().includes(q) || c.propheticApproach.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)) {
        results.push({
          id: c.id,
          badge: `Çağdaş Meseleler • ${c.tag}`,
          title: c.title,
          snippet: c.propheticApproach,
          source: c.source,
          onSelect: () => {
            setAhlakSubView("cagdas");
            setCurrentTab("ahlak-meseleler");
            setSearchQuery("");
          }
        });
      }
    });

    Object.entries(glossaryAndSahabeData).forEach(([key, item]) => {
      if (item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.badge.toLowerCase().includes(q)) {
        results.push({
          id: key,
          badge: `${item.type}`,
          title: item.title,
          snippet: item.desc,
          source: item.source,
          onSelect: () => {
            if (item.type === "Sahabe Profili") {
              setSahabeGroupFilter("Tümü");
              setCurrentTab("sahabeler");
            } else {
              setSemailSubView("kavramlar");
              setCurrentTab("semail-siyer");
            }
            setSearchQuery("");
          }
        });
      }
    });

    semailAndSpecialData.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) {
        results.push({
          id: s.id,
          badge: `${s.category}`,
          title: s.title,
          snippet: s.content,
          source: s.source,
          onSelect: () => {
            setSemailSubView("semail");
            setCurrentTab("semail-siyer");
            setSearchQuery("");
          }
        });
      }
    });

    return results;
  }, [searchQuery]);

  // Sadeleştirilmiş 5 Ana Kurumsal Modül
  const tabs = [
    { id: "gunun-sunneti", label: "Sünnet & Rehberlik", icon: Sparkles },
    { id: "ahlak-meseleler", label: "Ahlak & Çağdaş Meseleler", icon: BookOpen },
    { id: "sahabeler", label: "Ashâb-ı Kirâm (31)", icon: Users },
    { id: "semail-siyer", label: "Şemâil-i Şerîf & Siyer", icon: Award },
    { id: "muhasebe", label: "Çalışma & Muhasebe", icon: CheckCircle2 }
  ];

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className={`min-h-screen font-sans transition-colors ${
          isDarkMode
            ? "bg-slate-950 text-slate-100"
            : isSepiaMode
            ? "bg-[#F2ECE1] text-[#2C241B]"
            : "bg-[#F5F6F8] text-slate-800"
        }`}
      >
        {/* KURUMSAL ÜST BAR (HEADER) */}
        <header className="bg-[#0B4F3F] text-white border-b-2 border-[#B4833E] sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold tracking-tight text-white">
                  Siyer ve Ahlak Portalı
                </h1>
                <p className="text-xs text-emerald-100/80 hidden sm:block">
                  Diyanet İşleri Başkanlığı & Türkiye Diyanet Vakfı Kaynaklı Rehber
                </p>
              </div>
            </div>

            {!isKidsMode && (
              <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 w-72 focus-within:bg-white focus-within:text-slate-900 transition-all">
                <Search className="w-4 h-4 opacity-70 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Portalda hadis, sahabe, kavram ara..."
                  className="bg-transparent text-xs w-full focus:outline-none placeholder:text-emerald-100/70 focus:placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs opacity-75 hover:opacity-100"
                  >
                    Temizle
                  </button>
                )}
              </div>
            )}

            <div className="flex items-center gap-2">
              {!isKidsMode && (
                <div className="hidden lg:flex items-center bg-white/10 p-0.5 rounded-lg border border-white/15">
                  {[
                    { id: "normal", label: "A" },
                    { id: "large", label: "A+" },
                    { id: "xlarge", label: "A++" }
                  ].map((fs) => (
                    <button
                      key={fs.id}
                      onClick={() => setFontScale(fs.id)}
                      className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${
                        fontScale === fs.id
                          ? "bg-white text-[#0B4F3F]"
                          : "text-emerald-100 hover:text-white"
                      }`}
                      title="Yazı Boyutu"
                    >
                      {fs.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center bg-white/10 p-0.5 rounded-lg border border-white/15">
                {[
                  { id: "light", label: "Beyaz" },
                  { id: "sepia", label: "Sepya" },
                  { id: "dark", label: "Gece" }
                ].map((tm) => (
                  <button
                    key={tm.id}
                    onClick={() => setReadingTheme(tm.id)}
                    className={`px-2 py-1 rounded-md text-xs font-semibold transition-all ${
                      readingTheme === tm.id
                        ? "bg-white text-[#0B4F3F] font-bold"
                        : "text-emerald-100 hover:text-white"
                    }`}
                    title="Okuma Zemini"
                  >
                    {tm.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsKidsMode(!isKidsMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isKidsMode
                    ? "bg-white text-[#0B4F3F]"
                    : "bg-[#B4833E] hover:bg-[#9A6B28] text-white"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{isKidsMode ? "Ana Portala Dön" : "Çocuk Portalı"}</span>
              </button>
            </div>
          </div>

          {/* 5 Ana Kurumsal Sekme Çubuğu */}
          {!isKidsMode && (
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 py-1.5">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = currentTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setCurrentTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                          active
                            ? "bg-[#0B4F3F] text-white"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="hidden md:flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                  {lastVisited && (
                    <button
                      onClick={() => {
                        setCurrentTab(lastVisited.tab);
                        if (lastVisited.subView && lastVisited.tab === "semail-siyer") {
                          setSemailSubView(lastVisited.subView);
                        }
                        if (lastVisited.filterVal && lastVisited.tab === "sahabeler") {
                          setSahabeSearch(lastVisited.filterVal);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/50 text-[#9A6B28] dark:text-amber-300 border border-[#B4833E]/40 px-2.5 py-1 rounded-md font-semibold hover:bg-amber-100 transition-colors"
                      title="Son İncelenen Maddeye Dön"
                    >
                      <span>Kaldığım Yer: {lastVisited.title} →</span>
                    </button>
                  )}
                  <span>Okuma İlerlemesi: <strong className="text-[#0B4F3F] dark:text-emerald-400">%{progressPercent}</strong></span>
                  <span>•</span>
                  <span>Favoriler: <strong className="text-slate-700 dark:text-slate-200">{favorites.length}</strong></span>
                </div>
              </div>
            </div>
          )}
        </header>

        {isKidsMode ? (
          <KidsModeView />
        ) : (
          <main
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 ${
              fontScale === "large" ? "text-base" : fontScale === "xlarge" ? "text-lg" : ""
            }`}
          >
            {/* GLOBAL ARAMA SONUÇ PANELİ */}
            {searchQuery.trim() !== "" && (
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-300 dark:border-slate-700 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      "{searchQuery}" Arama Sonuçları ({globalSearchResults.length})
                    </h2>
                    <p className="text-xs text-slate-500">
                      İlgili maddeye gitmek için sonuca tıklayın.
                    </p>
                  </div>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-semibold text-[#0B4F3F] dark:text-emerald-400 hover:underline"
                  >
                    Aramayı Kapat
                  </button>
                </div>

                {globalSearchResults.length === 0 ? (
                  <p className="text-sm text-slate-500 py-2">Eşleşen kayıt bulunamadı.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {globalSearchResults.map((res, i) => (
                      <button
                        key={`${res.id}-${i}`}
                        onClick={res.onSelect}
                        className="text-left p-4 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F] transition-all space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400">{res.badge}</span>
                          <span className="text-slate-400 truncate">{res.source}</span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{res.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{res.snippet}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* =================================================================
                MODÜL 1: SÜNNET, REHBERLİK, DUALAR & 40 HADİS SEÇKİSİ
               ================================================================= */}
            {currentTab === "gunun-sunneti" && (
              <div className="space-y-6">
                {/* Kurumsal Alt Bölüm Seçici */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Nebevî Sünnet, Rehberlik ve Dualar
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Günün sünneti, duygu durumuna göre rehberlik, sahih nebevî dualar ve temel ahlak hadisleri.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    {[
                      { id: "sunnet", label: "Günün Sünneti & Rehberlik" },
                      { id: "dualar", label: "Nebevî Dualar Rehberi (8)" },
                      { id: "kirkhadis", label: "40 Hadis Seçkisi (8)" }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSunnetSubView(sub.id)}
                        className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                          sunnetSubView === sub.id
                            ? "bg-[#0B4F3F] text-white shadow-2xs"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {sunnetSubView === "dualar" && (
                  <PropheticPrayersSection onOpenCard={(card) => setCardModalData(card)} />
                )}

                {sunnetSubView === "kirkhadis" && (
                  <FortyHadithSection
                    completedItems={completedItems}
                    onToggleComplete={toggleComplete}
                    onOpenCard={(card) => setCardModalData(card)}
                  />
                )}

                {sunnetSubView === "sunnet" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Sol Sütun (7 Birim): Günün Sünneti */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
                    <div className="bg-slate-50 dark:bg-slate-800/70 px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                          Günün Sünneti • {currentSunnah.dayLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            setSunnahIndex((prev) => (prev - 1 + dailySunnahList.length) % dailySunnahList.length)
                          }
                          className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                          title="Önceki Sünnet"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        {dailySunnahList.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              stopSpeaking();
                              setSpeakingSunnah(false);
                              setSunnahIndex(idx);
                            }}
                            className={`w-7 h-7 rounded-md text-xs font-bold transition-all ${
                              sunnahIndex === idx
                                ? "bg-[#0B4F3F] text-white"
                                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => setSunnahIndex((prev) => (prev + 1) % dailySunnahList.length)}
                          className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                          title="Sonraki Sünnet"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {currentSunnah.title}
                        </h2>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => toggleFavorite(currentSunnah.id)}
                            className={`p-2 rounded-lg border ${
                              favorites.includes(currentSunnah.id)
                                ? "bg-amber-50 dark:bg-amber-950/60 border-[#B4833E] text-[#B4833E]"
                                : "border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600"
                            }`}
                            title="Kaydet / Favorilere Ekle"
                          >
                            <Bookmark className="w-4 h-4 fill-current" />
                          </button>
                          <button
                            onClick={() => toggleComplete(currentSunnah.id)}
                            className={`p-2 rounded-lg border ${
                              completedItems.includes(currentSunnah.id)
                                ? "bg-emerald-50 dark:bg-emerald-950/60 border-[#0B4F3F] text-[#0B4F3F] dark:text-emerald-400"
                                : "border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600"
                            }`}
                            title="Okundu İşaretle"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Hadis Metni & Meal Kutusu */}
                      <div className="bg-[#FAF9F6] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 space-y-3">
                        <p className="text-right font-serif text-xl sm:text-2xl text-[#0B4F3F] dark:text-emerald-400 leading-loose">
                          {currentSunnah.arabic}
                        </p>
                        <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 italic border-t border-slate-200/80 dark:border-slate-700 pt-3">
                          "{currentSunnah.translation}"
                        </p>
                      </div>

                      <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <p>
                          <GlossaryText text={currentSunnah.description} />
                        </p>

                        {currentSunnah.vurudStory && (
                          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 rounded-lg p-3.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="font-bold text-[#9A6B28] dark:text-amber-400 uppercase tracking-wider block mb-1">
                              Esbâb-ı Vürûd (Hadisin Arka Planı & Meclis Hatırası)
                            </span>
                            <GlossaryText text={currentSunnah.vurudStory} />
                          </div>
                        )}

                        <div className="bg-slate-50 dark:bg-slate-800/40 border-l-4 border-[#0B4F3F] dark:border-emerald-500 p-4 rounded-r-lg">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
                            Günlük Hayata Tatbik
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            {currentSunnah.application}
                          </p>
                        </div>
                      </div>

                      <PersonalReflectionNote itemId={currentSunnah.id} notes={notes} onSaveNote={handleSaveNote} />

                      <CitationFooter
                        source={`${currentSunnah.source} • ${currentSunnah.publisher}`}
                        speakText={`${currentSunnah.title}. ${currentSunnah.translation}. ${currentSunnah.description}`}
                        rightAction={
                          <button
                            onClick={() =>
                              printTopicHandout({
                                title: currentSunnah.title,
                                badge: currentSunnah.dayLabel,
                                arabic: currentSunnah.arabic,
                                quote: currentSunnah.translation,
                                body: currentSunnah.description,
                                vurud: currentSunnah.vurudStory,
                                practice: currentSunnah.application,
                                source: `${currentSunnah.source} • ${currentSunnah.publisher}`
                              })
                            }
                            className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium border border-slate-200 dark:border-slate-700 transition-colors"
                            title="Ders Föyü Olarak Yazdır (PDF)"
                          >
                            <Printer className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400" />
                            <span>Ders Föyü</span>
                          </button>
                        }
                        onOpenCard={() =>
                          setCardModalData({
                            title: currentSunnah.title,
                            arabic: currentSunnah.arabic,
                            quote: currentSunnah.translation,
                            source: currentSunnah.source
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Sağ Sütun (5 Birim): Duygu ve Durum Rehberi */}
                <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
                  <div className="bg-slate-50 dark:bg-slate-800/70 px-6 py-3.5 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                      Nebevî Rehberlik
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Ruh Haline Göre Sünnet Tavsiyeleri
                    </h3>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="grid grid-cols-3 gap-2">
                      {moodsData.map((m) => {
                        const active = m.id === activeMood.id;
                        return (
                          <button
                            key={m.id}
                            onClick={() => setSelectedMoodId(m.id)}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                              active
                                ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                                : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400"
                            }`}
                          >
                            {m.name}
                          </button>
                        );
                      })}
                    </div>

                    <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{activeMood.title}</h4>
                      {activeMood.arabic && (
                        <p className="text-right font-serif text-base text-[#0B4F3F] dark:text-emerald-400 bg-[#FAF9F6] dark:bg-slate-800/60 p-3 rounded-lg border border-slate-200/80 dark:border-slate-700">
                          {activeMood.arabic}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <GlossaryText text={activeMood.content} />
                      </p>

                      <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#B4833E] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300">
                        <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                          Uygulama Tavsiyesi:
                        </span>
                        {activeMood.advice}
                      </div>

                      <PersonalReflectionNote itemId={activeMood.id} notes={notes} onSaveNote={handleSaveNote} />

                      <CitationFooter
                        source={activeMood.source}
                        speakText={`${activeMood.title}. ${activeMood.content} Tavsiye: ${activeMood.advice}`}
                        onOpenCard={() =>
                          setCardModalData({
                            title: activeMood.title,
                            arabic: activeMood.arabic,
                            quote: activeMood.advice,
                            source: activeMood.source
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
                )}
              </div>
            )}

            {/* =================================================================
                MODÜL 2: AHLAK & ÇAĞDAŞ MESELELER
               ================================================================= */}
            {currentTab === "ahlak-meseleler" && (
              <div className="space-y-6">
                {/* Kurumsal Alt Bölüm Başlığı & Seçici */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      İslam Ahlakı ve Çağdaş Meseleler
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Tematik ahlak ilkeleri, modern hayatın sorunlarına nebevî çözümler ve örnek vaka analizleri.
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    {[
                      { id: "tematik", label: "Tematik Ahlak (6)" },
                      { id: "cagdas", label: "Çağdaş Sorunlar (6)" },
                      { id: "vaka", label: "Vaka Analizi (3)" }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setAhlakSubView(sub.id)}
                        className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                          ahlakSubView === sub.id
                            ? "bg-[#0B4F3F] text-white shadow-2xs"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {ahlakSubView === "tematik" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Tümü",
                        "Ticaret Ahlakı",
                        "Aile Hayatı",
                        "Çocuklarla İletişim",
                        "Adalet ve Merhamet",
                        "Çevre Bilinci",
                        "İlim ve Hikmet"
                      ].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setThematicCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            thematicCategory === cat
                              ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {thematicData
                        .filter((item) => thematicCategory === "Tümü" || item.category === thematicCategory)
                        .map((item) => {
                          const isFav = favorites.includes(item.id);
                          const isDone = completedItems.includes(item.id);
                          return (
                            <div
                              key={item.id}
                              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                                    {item.category}
                                  </span>
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => toggleFavorite(item.id)}
                                      className={`p-1.5 rounded-md border ${
                                        isFav
                                          ? "border-[#B4833E] text-[#B4833E] bg-amber-50 dark:bg-amber-950/50"
                                          : "border-slate-200 dark:border-slate-700 text-slate-400"
                                      }`}
                                      title="Kaydet"
                                    >
                                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                                    </button>
                                    <button
                                      onClick={() => toggleComplete(item.id)}
                                      className={`p-1.5 rounded-md border ${
                                        isDone
                                          ? "border-[#0B4F3F] text-[#0B4F3F] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50"
                                          : "border-slate-200 dark:border-slate-700 text-slate-400"
                                      }`}
                                      title="Okundu İşaretle"
                                    >
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                                  {item.title}
                                </h3>
                                {item.arabic && (
                                  <p className="text-right font-serif text-base text-[#0B4F3F] dark:text-emerald-400 mb-3 bg-[#FAF9F6] dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700">
                                    {item.arabic}
                                  </p>
                                )}
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                  <GlossaryText text={item.text} />
                                </p>
                                <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300">
                                  {item.details}
                                </div>
                              </div>

                              <div>
                                <PersonalReflectionNote itemId={item.id} notes={notes} onSaveNote={handleSaveNote} />
                                <CitationFooter
                                  source={item.source}
                                  speakText={`${item.title}. ${item.text}`}
                                  onOpenCard={() =>
                                    setCardModalData({
                                      title: item.title,
                                      arabic: item.arabic,
                                      quote: item.text,
                                      source: item.source
                                    })
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                {ahlakSubView === "cagdas" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {contemporaryIssuesData.map((item) => {
                      const isDone = completedItems.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400">
                                {item.tag}
                              </span>
                              <button
                                onClick={() => toggleComplete(item.id)}
                                className={`p-1.5 rounded-md border ${
                                  isDone
                                    ? "border-[#0B4F3F] text-[#0B4F3F] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50"
                                    : "border-slate-200 dark:border-slate-700 text-slate-400"
                                }`}
                                title="Okundu İşaretle"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>

                            <div className="space-y-3 text-xs sm:text-sm">
                              <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-600 dark:text-slate-300">
                                <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                                  Günümüzdeki Sorun:
                                </span>
                                {item.dilemma}
                              </div>

                              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                                  Nebevî Ölçü ve Yaklaşım:
                                </span>
                                <GlossaryText text={item.propheticApproach} />
                              </div>

                              <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3 rounded-r-lg text-slate-700 dark:text-slate-200">
                                <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                                  Uygulama Adımı:
                                </span>
                                {item.actionStep}
                              </div>
                            </div>
                          </div>

                          <div>
                            <PersonalReflectionNote itemId={item.id} notes={notes} onSaveNote={handleSaveNote} />
                            <CitationFooter
                              source={item.source}
                              speakText={`${item.title}. ${item.propheticApproach}`}
                              onOpenCard={() =>
                                setCardModalData({
                                  title: item.title,
                                  quote: item.actionStep,
                                  source: item.source
                                })
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {ahlakSubView === "vaka" && <AdultVakaSection />}
              </div>
            )}

            {/* =================================================================
                MODÜL 3: ASHÂB-I KİRÂM (KURUMSAL FİHRİST YERLEŞİMİ - SESLİ OKUMA YOK)
               ================================================================= */}
            {currentTab === "sahabeler" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Sol Sütun (3 Birim): Kurumsal Fihrist & Tasnif Menüsü */}
                <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 space-y-4 lg:sticky lg:top-32">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                      Ansiklopedik Fihrist
                    </span>
                    <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      Ashâb-ı Kirâm Tasnifi
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={sahabeSearch}
                      onChange={(e) => setSahabeSearch(e.target.value)}
                      placeholder="Sahabe ismi ara..."
                      className="bg-transparent text-xs w-full focus:outline-none text-slate-700 dark:text-slate-200"
                    />
                  </div>

                  <div className="space-y-1">
                    {sahabeGroups.map((grp) => {
                      const active = sahabeGroupFilter === grp.key;
                      return (
                        <button
                          key={grp.key}
                          onClick={() => setSahabeGroupFilter(grp.key)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                            active
                              ? "bg-[#0B4F3F] text-white"
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          <span>{grp.label}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              active ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                            }`}
                          >
                            {grp.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sağ Sütun (9 Birim): Sahabe Maddeleri Listesi */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {Object.entries(glossaryAndSahabeData)
                    .filter(([, item]) => item.type === "Sahabe Profili")
                    .filter(([, item]) => sahabeGroupFilter === "Tümü" || item.group === sahabeGroupFilter)
                    .filter(
                      ([, item]) =>
                        !sahabeSearch.trim() ||
                        item.title.toLowerCase().includes(sahabeSearch.toLowerCase()) ||
                        item.badge.toLowerCase().includes(sahabeSearch.toLowerCase()) ||
                        item.desc.toLowerCase().includes(sahabeSearch.toLowerCase())
                    )
                    .map(([key, item]) => {
                      const isFav = favorites.includes(key);
                      return (
                        <div
                          key={key}
                          className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block">
                                  {item.group || "Ashâb-ı Kirâm"}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                                  {item.title}
                                </h3>
                                <span className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400">
                                  {item.badge}
                                </span>
                              </div>
                              <button
                                onClick={() => toggleFavorite(key)}
                                className={`p-1.5 rounded-md border shrink-0 ${
                                  isFav
                                    ? "border-[#B4833E] text-[#B4833E] bg-amber-50 dark:bg-amber-950/50"
                                    : "border-slate-200 dark:border-slate-700 text-slate-400"
                                }`}
                                title="Kaydet"
                              >
                                <Bookmark className="w-3.5 h-3.5 fill-current" />
                              </button>
                            </div>

                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-3">
                              {item.desc}
                            </p>

                            <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                                Örnek Kıssa & Menkıbe:
                              </span>
                              {item.story}
                            </div>

                            {crossReferencesMap[key] && (
                              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                                <span className="text-xs font-semibold text-slate-400">Bakınız (İlgili Maddeler):</span>
                                {crossReferencesMap[key].map((relKey) => (
                                  <button
                                    key={relKey}
                                    onClick={() => handleCrossReferenceClick(relKey)}
                                    className="text-xs font-semibold text-[#0B4F3F] dark:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 transition-colors"
                                  >
                                    {relKey} →
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          <div>
                            <PersonalReflectionNote itemId={key} notes={notes} onSaveNote={handleSaveNote} />
                            <CitationFooter
                              source={item.source}
                              onOpenCard={() =>
                                setCardModalData({
                                  title: item.title,
                                  quote: item.story,
                                  source: item.source
                                })
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* =================================================================
                MODÜL 4: ŞEMÂİL-İ ŞERÎF & SİYER (KURUMSAL ANSİKLOPEDİK YERLEŞİM - SESLİ OKUMA YOK)
               ================================================================= */}
            {currentTab === "semail-siyer" && (
              <div className="space-y-6">
                {/* Kurumsal Alt Bölüm Seçici */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Şemâil-i Şerîf, Siyer Kronolojisi ve Kavramlar
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Hz. Peygamber'in (s.a.v.) şemâili, 24 saatlik günlük yaşantısı, kronolojik hayatı ve temel kavramlar.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    {[
                      { id: "semail", label: "Hilye & Şemâil-i Şerîf" },
                      { id: "beyanname", label: "Veda Hutbesi & Medine Vesikası" },
                      { id: "kronoloji", label: "Siyer Kronolojisi" },
                      { id: "yasam", label: "24 Saatlik Yaşantı" },
                      { id: "kavramlar", label: "Siyer Kavramları" }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSemailSubView(sub.id)}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                          semailSubView === sub.id
                            ? "bg-[#0B4F3F] text-white shadow-2xs"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {semailSubView === "beyanname" && (
                  <UniversalDeclarationsSection onOpenCard={(card) => setCardModalData(card)} />
                )}

                {/* Alt Bölüm 4A: Hilye-i Şerîf & Şemâil */}
                {semailSubView === "semail" && (
                  <div className="space-y-6">
                    <HilyeSerifBoard />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {semailAndSpecialData.map((s) => (
                        <div
                          key={s.id}
                          className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#9A6B28] dark:text-amber-400 block mb-1">
                              {s.category}
                            </span>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{s.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              <GlossaryText text={s.content} />
                            </p>
                          </div>
                          <div>
                            <PersonalReflectionNote itemId={s.id} notes={notes} onSaveNote={handleSaveNote} />
                            <CitationFooter
                              source={s.source}
                              onOpenCard={() =>
                                setCardModalData({
                                  title: s.title,
                                  quote: s.content,
                                  source: s.source
                                })
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Alt Bölüm 4B: Siyer Kronolojisi */}
                {semailSubView === "kronoloji" && (
                  <div className="max-w-4xl mx-auto space-y-5">
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Tümü",
                        "Doğum ve Gençlik",
                        "Mekke Dönemi (Sabır & Tebliğ)",
                        "Medine Dönemi (İnşa & Barış)"
                      ].map((p) => (
                        <button
                          key={p}
                          onClick={() => setChronoPeriodFilter(p)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            chronoPeriodFilter === p
                              ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    <div className="relative pl-6 border-l-2 border-[#0B4F3F]/40 space-y-4">
                      {chronologyData
                        .filter((ch) => chronoPeriodFilter === "Tümü" || ch.period === chronoPeriodFilter)
                        .map((ch, idx) => (
                          <div
                            key={idx}
                            className="relative bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5"
                          >
                            <span className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#0B4F3F] border-2 border-white dark:border-slate-950" />

                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="bg-[#0B4F3F] text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
                                  {ch.year}
                                </span>
                                {ch.period && (
                                  <span className="text-xs font-semibold text-[#9A6B28] dark:text-amber-400">
                                    {ch.period}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-slate-400">{ch.source}</span>
                            </div>

                            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{ch.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              <GlossaryText text={ch.desc} />
                            </p>

                            {ch.modernLesson && (
                              <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#B4833E] p-3 rounded-r-lg text-xs text-slate-700 dark:text-slate-300">
                                <span className="font-semibold text-slate-900 dark:text-slate-100">
                                  Günümüze Mesajı:{" "}
                                </span>
                                {ch.modernLesson}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Alt Bölüm 4C: 24 Saatlik Yaşantı */}
                {semailSubView === "yasam" && (
                  <div className="max-w-4xl mx-auto space-y-4">
                    {dailyRoutineData.map((r, idx) => {
                      const rId = `routine-${idx}`;
                      const isDone = completedItems.includes(rId);
                      return (
                        <div
                          key={idx}
                          className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs"
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
                              {r.time}
                            </span>
                            <button
                              onClick={() => toggleComplete(rId)}
                              className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-md border ${
                                isDone
                                  ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                                  : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>{isDone ? "Tamamlandı" : "İşaretle"}</span>
                            </button>
                          </div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">{r.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <GlossaryText text={r.desc} />
                          </p>
                          <CitationFooter source={r.source} />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Alt Bölüm 4D: Siyer Kavramları Sözlüğü */}
                {semailSubView === "kavramlar" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {Object.entries(glossaryAndSahabeData)
                      .filter(([, item]) => item.type === "Kavram")
                      .map(([key, item]) => (
                        <div
                          key={key}
                          className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400 block mb-1">
                              Siyer Kavramı • {item.badge}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                              {item.desc}
                            </p>
                            <div className="bg-slate-50 dark:bg-slate-800/60 border-l-4 border-[#0B4F3F] p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-0.5">
                                Tarihî Örnek:
                              </span>
                              {item.story}
                            </div>

                            {crossReferencesMap[key] && (
                              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                                <span className="text-xs font-semibold text-slate-400">Bakınız (İlgili Maddeler):</span>
                                {crossReferencesMap[key].map((relKey) => (
                                  <button
                                    key={relKey}
                                    onClick={() => handleCrossReferenceClick(relKey)}
                                    className="text-xs font-semibold text-[#0B4F3F] dark:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 transition-colors"
                                  >
                                    {relKey} →
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          <CitationFooter
                            source={item.source}
                            onOpenCard={() =>
                              setCardModalData({
                                title: item.title,
                                quote: item.story,
                                source: item.source
                              })
                            }
                          />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* =================================================================
                MODÜL 5: EĞİTİM, ÇALIŞMA & MUHASEBE
               ================================================================= */}
            {currentTab === "muhasebe" && (
              <div className="space-y-6">
                {/* Kurumsal Alt Bölüm Seçici */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      Kişisel Çalışma, Ders Halkası Müfredatı ve Değerlendirme
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Haftalık ahlaki muhasebe çetelesi, 8 haftalık aile/okul ders müfredatı ve sertifikalı bilgi değerlendirmesi.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    {[
                      { id: "cetele", label: "Muhasebe & Notlarım" },
                      { id: "vakitler", label: "5 Vakit Sünnet & Tesbih Sayacı" },
                      { id: "mufredat", label: "8 Haftalık Ders Müfredatı" },
                      { id: "degerlendirme", label: "Bilgi Testi & Çalışma Belgesi" }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setMuhasebeSubView(sub.id)}
                        className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                          muhasebeSubView === sub.id
                            ? "bg-[#0B4F3F] text-white shadow-2xs"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {muhasebeSubView === "vakitler" && <FivePrayerAnchorsSection />}

                {muhasebeSubView === "mufredat" && <WeeklyCurriculumSection />}

                {muhasebeSubView === "degerlendirme" && <CorporateQuizAndCertificateSection />}

                {muhasebeSubView === "cetele" && (
                  <div className="space-y-6">
                {/* Üst Kurumsal Özet & Rapor Çubuğu */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Okuma İlerlemesi</span>
                      <span className="text-2xl font-bold text-[#0B4F3F] dark:text-emerald-400">
                        %{progressPercent}
                      </span>
                    </div>
                    <div className="border-l border-slate-200 dark:border-slate-800 pl-6">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Haftalık İstikrar</span>
                      <span className="text-2xl font-bold text-[#9A6B28] dark:text-amber-400">%{habitScore}</span>
                    </div>
                    <div className="border-l border-slate-200 dark:border-slate-800 pl-6">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Kayıtlı Not & Favori</span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {Object.keys(notes).length + favorites.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() =>
                        printReflectionJournal({
                          favoritesCount: favorites.length,
                          completedCount: completedItems.length,
                          habitScore,
                          notes,
                          allItemsMap
                        })
                      }
                      className="inline-flex items-center gap-1.5 bg-[#0B4F3F] hover:bg-[#08382C] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Çalışma Günlüğü Yazdır (PDF)</span>
                    </button>
                    <button
                      onClick={exportUserData}
                      className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Yedek İndir (JSON)</span>
                    </button>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Yedek Yükle</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/json"
                      onChange={handleImportJson}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Haftalık Alışkanlık Çetelesi */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      Haftalık Ahlaki Muhasebe Çetelesi
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Nebevî ilkeleri günlük hayata tatbik etme durumunuzu haftalık olarak işaretleyin.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                          <th className="py-3 pr-4 font-semibold">İlke / Davranış</th>
                          {weekDays.map((d) => (
                            <th key={d} className="py-3 px-2 text-center font-semibold">
                              {d}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                        {defaultHabits.map((h) => (
                          <tr key={h.id}>
                            <td className="py-3 pr-4">
                              <span className="font-semibold text-slate-800 dark:text-slate-100 block">{h.title}</span>
                              <span className="text-xs text-[#0B4F3F] dark:text-emerald-400 font-medium">
                                {h.category}
                              </span>
                            </td>
                            {weekDays.map((d) => {
                              const checked = !!habitLogs[`${h.id}-${d}`];
                              return (
                                <td key={d} className="py-3 px-2 text-center">
                                  <button
                                    onClick={() => toggleHabitDay(h.id, d)}
                                    className={`w-7 h-7 rounded-md inline-flex items-center justify-center border transition-all ${
                                      checked
                                        ? "bg-[#0B4F3F] border-[#0B4F3F] text-white"
                                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-transparent hover:border-[#0B4F3F]"
                                    }`}
                                  >
                                    <Check className="w-4 h-4" />
                                  </button>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Favoriler ve Çalışma Notları */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      Kaydedilen Maddeler ({favorites.length})
                    </h3>
                    {favorites.length === 0 ? (
                      <p className="text-xs text-slate-500">Henüz kaydedilen bir madde bulunmuyor.</p>
                    ) : (
                      <ul className="space-y-2 text-xs sm:text-sm">
                        {favorites.map((favId) => {
                          const title = allItemsMap[favId];
                          if (!title) return null;
                          return (
                            <li
                              key={favId}
                              className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2"
                            >
                              <span className="font-semibold text-slate-800 dark:text-slate-100">{title}</span>
                              <button
                                onClick={() => toggleFavorite(favId)}
                                className="text-slate-400 hover:text-rose-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      Kişisel Çalışma Notlarım ({Object.keys(notes).length})
                    </h3>
                    {Object.keys(notes).length === 0 ? (
                      <p className="text-xs text-slate-500">
                        Maddelerin altındaki "Çalışma Notu Ekle" bağlantısıyla kendi notlarınızı kaydedebilirsiniz.
                      </p>
                    ) : (
                      <div className="space-y-2.5">
                        {Object.entries(notes).map(([id, text]) => (
                          <div
                            key={id}
                            className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 flex items-start justify-between gap-2"
                          >
                            <div>
                              <span className="font-bold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
                                {allItemsMap[id] || "Not"}
                              </span>
                              <p className="leading-relaxed">{text}</p>
                            </div>
                            <button
                              onClick={() => handleSaveNote(id, "")}
                              className="text-slate-400 hover:text-rose-600 shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                  </div>
                )}
              </div>
            )}
          </main>
        )}

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>© 2026 Siyer ve Ahlak Portalı • Diyanet İşleri Başkanlığı ve TDV yayınları kaynak alınmıştır.</p>
            <div className="flex items-center gap-3">
              <span className="text-[#0B4F3F] dark:text-emerald-400 font-semibold">
                Kurumsal Dijital Rehber
              </span>
              <span>•</span>
              <span>Hadislerle İslam & TDV İslâm Ansiklopedisi</span>
            </div>
          </div>
        </footer>

        <QuoteCardModal data={cardModalData} onClose={() => setCardModalData(null)} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}
