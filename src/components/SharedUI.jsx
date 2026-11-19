import React, { useState, useEffect } from 'react';
import { X, BookMarked, Image, Edit3, Volume2, VolumeX } from 'lucide-react';
import { glossaryAndSahabeData } from '../data/siyerData';
import { speakTurkish, stopSpeaking } from '../services/storageService';
import { useLanguage } from '../services/i18n';

export function GlossaryText({ text }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!text) return null;

  const keys = Object.keys(glossaryAndSahabeData);
  const escapedKeys = keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedKeys.join('|')})`, 'g');
  const parts = text.split(regex);

  return (
    <>
      <span>
        {parts.map((part, idx) => {
          const entry = glossaryAndSahabeData[part];
          if (entry) {
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(entry);
                }}
                className="inline font-medium text-[#0B4F3F] dark:text-emerald-400 border-b border-dotted border-[#0B4F3F]/60 dark:border-emerald-400/60 hover:text-[#08382C] dark:hover:text-emerald-300 transition-colors cursor-pointer"
                title="Ansiklopedi maddesini görüntüle"
              >
                {part}
              </button>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
      </span>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-xl max-w-lg w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#0B4F3F] dark:text-emerald-400">
              <span>{selectedItem.type}</span>
              {selectedItem.group && (
                <>
                  <span>•</span>
                  <span className="text-slate-500 dark:text-slate-400">{selectedItem.group}</span>
                </>
              )}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{selectedItem.title}</h3>
            <p className="text-xs font-medium text-[#9A6B28] dark:text-amber-400 mb-4">{selectedItem.badge}</p>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{selectedItem.desc}</p>

            <div className="bg-slate-50 dark:bg-slate-800/70 border-l-4 border-[#0B4F3F] dark:border-emerald-500 p-3.5 rounded-r-lg text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">Tarihî Kayıt / Örnek:</span>
              {selectedItem.story}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Kaynak: {selectedItem.source}</span>
              <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400">TDV İslâm Ansiklopedisi</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function CitationFooter({ source, onOpenCard, speakText, rightAction }) {
  const { lang, t } = useLanguage();
  const [speaking, setSpeaking] = useState(false);

  const handleToggleSpeak = () => {
    if (!speakText) return;
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      speakTurkish(speakText, () => setSpeaking(false), lang);
    }
  };

  return (
    <div className="mt-5 pt-3.5 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
      <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
        <BookMarked className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400 shrink-0" />
        <span>{source}</span>
      </div>
      <div className="flex items-center gap-1">
        {rightAction}
        {speakText && (
          <button
            onClick={handleToggleSpeak}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-medium transition-colors ${
              speaking
                ? "bg-rose-600 text-white"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            {speaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{speaking ? t("Durdur", "Stop") : t("Dinle", "Listen")}</span>
          </button>
        )}
        {onOpenCard && (
          <button
            onClick={onOpenCard}
            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded-md font-medium transition-colors"
            title={t("Alıntı Kartı İndir", "Download Quote Card")}
          >
            <Image className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400" />
            <span>{t("Kart", "Card")}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export function PersonalReflectionNote({ itemId, notes, onSaveNote }) {
  const { t } = useLanguage();
  const existing = notes[itemId] || "";
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(existing);

  useEffect(() => {
    setDraft(notes[itemId] || "");
  }, [notes, itemId]);

  const handleSave = () => {
    onSaveNote(itemId, draft.trim());
    setIsEditing(false);
  };

  return (
    <div className="mt-3">
      {!isEditing && !existing && (
        <button
          onClick={() => setIsEditing(true)}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-[#0B4F3F] dark:hover:text-emerald-400 font-medium transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{t("Çalışma Notu Ekle", "Add Reflection Note")}</span>
        </button>
      )}

      {!isEditing && existing && (
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-200 flex items-start justify-between gap-2">
          <div>
            <span className="font-semibold text-[#0B4F3F] dark:text-emerald-400 block mb-0.5">
              {t("Kişisel Not:", "Personal Note:")}
            </span>
            <p className="leading-relaxed">{existing}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1"
            title={t("Notu Düzenle", "Edit Note")}
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {isEditing && (
        <div className="bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg p-3 space-y-2">
          <textarea
            rows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t("Bu maddeyle ilgili kişisel çalışma notunuzu yazın...", "Write your personal reflection note here...")}
            className="w-full text-xs bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-md p-2 focus:outline-none focus:border-[#0B4F3F]"
          />
          <div className="flex items-center justify-end gap-2">
            {existing && (
              <button
                onClick={() => {
                  onSaveNote(itemId, "");
                  setIsEditing(false);
                }}
                className="text-xs text-rose-600 hover:underline px-2 py-1"
              >
                {t("Sil", "Delete")}
              </button>
            )}
            <button
              onClick={() => setIsEditing(false)}
              className="text-xs text-slate-500 hover:text-slate-700 px-2.5 py-1"
            >
              {t("İptal", "Cancel")}
            </button>
            <button
              onClick={handleSave}
              className="text-xs bg-[#0B4F3F] text-white px-3 py-1 rounded-md font-medium hover:bg-[#08382C]"
            >
              {t("Kaydet", "Save")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
