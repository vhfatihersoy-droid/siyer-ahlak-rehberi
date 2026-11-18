import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { siyerLocationsData } from '../data/siyerData';
import { GlossaryText, CitationFooter } from './SharedUI';

export function SiyerMapSection({ onOpenCard }) {
  const [selectedLocId, setSelectedLocId] = useState("mekke");
  const [periodFilter, setPeriodFilter] = useState("Tümü");

  const filteredLocations = siyerLocationsData.filter(
    (loc) => periodFilter === "Tümü" || loc.period === periodFilter
  );

  const activeIndex = filteredLocations.findIndex((l) => l.id === selectedLocId);
  const currentLocation =
    filteredLocations[activeIndex >= 0 ? activeIndex : 0] || siyerLocationsData[0];

  const handleStep = (dir) => {
    const idx = filteredLocations.findIndex((l) => l.id === currentLocation.id);
    const nextIdx = (idx + dir + filteredLocations.length) % filteredLocations.length;
    setSelectedLocId(filteredLocations[nextIdx].id);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">İnteraktif Siyer & Hicret Haritası</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">Hicaz coğrafyasındaki tarihi duraklara tıklayarak olayları ve ahlaki dersleri inceleyin.</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["Tümü", "Mekke Dönemi", "Hicret Rotası", "Medine Dönemi"].map((p) => (
            <button
              key={p}
              onClick={() => {
                setPeriodFilter(p);
                const firstMatch = siyerLocationsData.find((l) => p === "Tümü" || l.period === p);
                if (firstMatch) setSelectedLocId(firstMatch.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                periodFilter === p
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-[#F3EFE6] dark:bg-stone-900 rounded-3xl p-4 sm:p-6 border border-stone-200/90 dark:border-stone-700 shadow-inner relative overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-[380px] sm:h-[440px] select-none">
            <path d="M 0,0 L 22,0 Q 28,35 32,65 T 42,100 L 0,100 Z" fill="#DCEEF3" opacity="0.85" />
            <text x="8" y="55" fontSize="3.2" fill="#5B8FA3" fontWeight="bold" transform="rotate(-72 8,55)">
              KIZILDENİZ
            </text>

            <path d="M 33,20 Q 43,45 48,85" fill="none" stroke="#DFD5C2" strokeWidth="3" strokeLinecap="round" strokeDasharray="1,3" />
            <text x="58" y="46" fontSize="3.3" fill="#9C8E78" fontWeight="bold">
              HİCAZ BÖLGESİ
            </text>

            <path
              d="M 42,74 L 39,79 Q 29,60 37,33"
              fill="none"
              stroke="#047857"
              strokeWidth="0.9"
              strokeDasharray="1.8,1.5"
            />

            {filteredLocations.map((loc) => {
              const isSelected = loc.id === currentLocation.id;
              return (
                <g
                  key={loc.id}
                  onClick={() => setSelectedLocId(loc.id)}
                  className="cursor-pointer"
                >
                  {isSelected && (
                    <circle cx={loc.x} cy={loc.y} r="4.5" fill="#047857" opacity="0.25" />
                  )}
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r={isSelected ? "2.4" : "1.8"}
                    fill={isSelected ? "#047857" : "#D97706"}
                    stroke="#ffffff"
                    strokeWidth="0.6"
                  />
                  <text
                    x={loc.x + 3}
                    y={loc.y + 1}
                    fontSize={isSelected ? "3.2" : "2.6"}
                    fontWeight={isSelected ? "bold" : "600"}
                    fill={isSelected ? "#10b981" : "#78716c"}
                  >
                    {loc.name.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="mt-2 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 px-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block"></span> Seçili Durak</span>
              <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block"></span> Tarihi Mekân</span>
            </div>
            <span>Kesikli Yeşil Çizgi: Hicret Rotası</span>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200/80 dark:border-stone-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                {currentLocation.period} • {currentLocation.year}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleStep(-1)}
                  className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300"
                  title="Önceki Durak"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleStep(1)}
                  className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300"
                  title="Sonraki Durak"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">{currentLocation.name}</h3>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
              <GlossaryText text={currentLocation.summary} />
            </p>

            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/80 rounded-2xl p-4 text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
              <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-1">Bu Mekândan Alınacak Ahlaki Ders:</span>
              {currentLocation.moralLesson}
            </div>
          </div>

          <CitationFooter
            source={currentLocation.source}
            speakText={`${currentLocation.name}. ${currentLocation.summary} Ahlaki Ders: ${currentLocation.moralLesson}`}
            onOpenCard={() =>
              onOpenCard({
                title: currentLocation.name,
                quote: currentLocation.moralLesson,
                source: currentLocation.source
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
