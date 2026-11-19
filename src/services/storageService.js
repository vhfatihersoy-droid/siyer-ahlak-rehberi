// ==========================================
// GÜVENLİ DEPOLAMA, YEDEKLEME VE API SERVİS KATMANI
// (Faz 2 ASP.NET Core & React Native Uyumlu Şema)
// ==========================================
import { TURKISH_NEURAL_AUDIO_MANIFEST } from '../data/audioManifest';

let activeAudioEl = null;
let speechSessionId = 0;

function hashSpeechText(str) {
  const s = String(str || '').replace(/\s+/g, ' ').trim();
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b1;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 ^= c;
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= c + i;
    h2 = Math.imul(h2, 0x85ebca6b);
  }
  return (h1 >>> 0).toString(36) + '_' + (h2 >>> 0).toString(36);
}

export function normalizeTurkishForSpeech(text) {
  let s = String(text || '');
  s = s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '');
  s = s.replace(/ﷺ/g, ' sallallahu aleyhi ve sellem ');
  s = s.replace(/\(\s*s\.a\.v\.?\s*\)/gi, ' sallallahu aleyhi ve sellem ');
  s = s.replace(/\bs\.a\.v\.?\b/gi, ' sallallahu aleyhi ve sellem ');
  s = s.replace(/\(\s*c\.c\.?\s*\)/gi, ' celle celâluhu ');
  s = s.replace(/\(\s*a\.s\.?\s*\)/gi, ' aleyhisselam ');
  s = s.replace(/\(\s*r\.anh[âa]\.?\s*\)/gi, ' radıyallahu anha ');
  s = s.replace(/\(\s*r\.anhüm[âa]\.?\s*\)/gi, ' radıyallahu anhüma ');
  s = s.replace(/\(\s*r\.anhüm\.?\s*\)/gi, ' radıyallahu anhüm ');
  s = s.replace(
    /(Hatice|Âişe|Aişe|Fâtıma|Fatıma|Ümmü|Hafsa|Zeynep|Safiyye|Sümeyye|Nesîbe|Nesibe|Esmâ|Esma|Meryem|Ümeyme)([^.!?]{0,20})\(\s*r\.a\.?\s*\)/gi,
    '$1$2 radıyallahu anha '
  );
  s = s.replace(/\(\s*r\.a\.?\s*\)/gi, ' radıyallahu anh ');
  s = s.replace(/\br\.a\.?\b/gi, ' radıyallahu anh ');
  s = s.replace(/\bHz\./g, 'Hazreti');
  s = s.replace(/\bb\.\s+([A-ZÇĞİÖŞÜÂÎÛ])/g, 'bin $1');
  s = s.replace(/\bM\.\s*(\d)/g, 'Miladi $1');
  s = s.replace(/\bH\.\s*(\d)/g, 'Hicri $1');
  s = s.replace(/[•|—–]/g, ', ');
  s = s.replace(/[“”"]/g, '');
  s = s.replace(/\s+([.,!?;:])/g, '$1');
  s = s.replace(/,\s*,+/g, ', ');
  s = s.replace(/\.\s*\.+/g, '. ');
  return s.replace(/\s+/g, ' ').trim();
}

function selectBestVoice(langCode) {
  try {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    const targetPrefix = langCode === 'en' ? 'en' : 'tr';
    const matching = voices.filter((v) => (v.lang || '').toLowerCase().startsWith(targetPrefix));
    if (matching.length === 0) return null;

    const scoreVoice = (v) => {
      const name = (v.name || '').toLowerCase();
      let score = 0;
      if (name.includes('natural') || name.includes('neural') || name.includes('online')) score += 100;
      if (name.includes('emel') || name.includes('ahmet') || name.includes('aria') || name.includes('jenny')) score += 60;
      if (name.includes('enhanced') || name.includes('premium') || name.includes('siri')) score += 50;
      if (name.includes('google')) score += 40;
      if (name.includes('yelda') || name.includes('cem') || name.includes('samantha')) score += 20;
      if (!v.localService) score += 15;
      return score;
    };

    return [...matching].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
  } catch {
    return null;
  }
}

function speakWithBrowserFallback(text, onEnd, lang, sessionId) {
  try {
    if (!window.speechSynthesis) {
      if (onEnd) onEnd();
      return false;
    }
    window.speechSynthesis.cancel();

    const cleaned = lang === 'en'
      ? String(text || '').replace(/ﷺ/g, ' peace be upon him ').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '').replace(/\s+/g, ' ').trim()
      : normalizeTurkishForSpeech(text);

    // Split into natural sentence chunks so long stories never cut off in Chrome/Safari
    const rawChunks = cleaned.match(/[^.!?]+[.!?]*/g) || [cleaned];
    const chunks = [];
    let buffer = '';
    for (const part of rawChunks) {
      const p = part.trim();
      if (!p) continue;
      if ((buffer + ' ' + p).length > 180 && buffer) {
        chunks.push(buffer.trim());
        buffer = p;
      } else {
        buffer = buffer ? `${buffer} ${p}` : p;
      }
    }
    if (buffer.trim()) chunks.push(buffer.trim());

    const voice = selectBestVoice(lang);
    const speakNext = (idx) => {
      if (sessionId !== speechSessionId) return;
      if (idx >= chunks.length) {
        if (onEnd) onEnd();
        return;
      }
      const utterance = new SpeechSynthesisUtterance(chunks[idx]);
      utterance.lang = lang === 'en' ? 'en-US' : 'tr-TR';
      if (voice) utterance.voice = voice;
      utterance.rate = lang === 'en' ? 0.96 : 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => speakNext(idx + 1);
      utterance.onerror = () => {
        if (sessionId === speechSessionId && onEnd) onEnd();
      };
      window.speechSynthesis.speak(utterance);
    };

    speakNext(0);
    return true;
  } catch {
    if (onEnd) onEnd();
    return false;
  }
}

export const safeStorage = {
  get: (key, fallback) => {
    try {
      const val = window.localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, val) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch {
      // Sandbox ortamlarında sessizce geç
    }
  }
};

export function speakTurkish(text, onEnd, lang = "tr") {
  stopSpeaking();
  const currentSession = ++speechSessionId;
  let finished = false;

  const finishOnce = () => {
    if (finished || currentSession !== speechSessionId) return;
    finished = true;
    if (onEnd) onEnd();
  };

  // 1. Öncelik: Stüdyo kalitesinde gerçek insan doğallığında Türkçe Nöral MP3 (AhmetNeural & EmelNeural)
  if (lang !== "en") {
    const hash = hashSpeechText(text);
    const neuralSrc = TURKISH_NEURAL_AUDIO_MANIFEST[hash];
    if (neuralSrc) {
      try {
        const audio = new Audio(neuralSrc);
        audio.preload = "auto";
        activeAudioEl = audio;

        audio.onended = () => {
          if (activeAudioEl === audio) activeAudioEl = null;
          finishOnce();
        };

        audio.onerror = () => {
          if (activeAudioEl === audio) activeAudioEl = null;
          if (currentSession === speechSessionId) {
            speakWithBrowserFallback(text, finishOnce, lang, currentSession);
          }
        };

        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            if (activeAudioEl === audio) activeAudioEl = null;
            if (currentSession === speechSessionId) {
              speakWithBrowserFallback(text, finishOnce, lang, currentSession);
            }
          });
        }
        return true;
      } catch {
        // Fallback below
      }
    }
  }

  // 2. Yedek / İngilizce: Telaffuz düzeltmeli + en doğal cihaz sesi seçicili akıcı sentez
  return speakWithBrowserFallback(text, finishOnce, lang, currentSession);
}

export function stopSpeaking() {
  speechSessionId++;
  try {
    if (activeAudioEl) {
      activeAudioEl.onended = null;
      activeAudioEl.onerror = null;
      activeAudioEl.pause();
      activeAudioEl.currentTime = 0;
      activeAudioEl = null;
    }
  } catch {
    // ignore
  }
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } catch {
    // ignore
  }
  try {
    window.dispatchEvent(new Event("siyer-audio-stop"));
  } catch {
    // ignore
  }
}

export function exportUserData() {
  const payload = {
    version: "2.0.0",
    exportedAt: new Date().toISOString(),
    favorites: safeStorage.get("siyer_favorites", []),
    completed: safeStorage.get("siyer_completed", []),
    notes: safeStorage.get("siyer_notes", {}),
    habits: safeStorage.get("siyer_habits", {}),
    kidsStars: safeStorage.get("siyer_kids_stars", 20),
    kidsTasks: safeStorage.get("siyer_kids_tasks", []),
    kidsStories: safeStorage.get("siyer_kids_stories", [])
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `siyer-tefekkur-yedek-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function printReflectionJournal({ favoritesCount, completedCount, habitScore, notes, allItemsMap }) {
  const win = window.open("", "_blank", "width=850,height=900");
  if (!win) return;

  const noteEntries = Object.entries(notes || {});
  const notesHtml =
    noteEntries.length === 0
      ? `<p style="color:#78716c;font-style:italic;">Henüz kaydedilmiş kişisel tefekkür notu bulunmuyor.</p>`
      : noteEntries
          .map(([id, text]) => {
            const title = allItemsMap?.[id] || id;
            return `<div style="border:1px solid #e7e5e4;border-radius:12px;padding:14px;margin-bottom:12px;background:#fafaf9;">
              <div style="font-weight:bold;color:#065f46;font-size:13px;margin-bottom:4px;">${title}</div>
              <div style="color:#292524;font-size:14px;line-height:1.6;">${text}</div>
            </div>`;
          })
          .join("");

  win.document.write(`<!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <title>Siyer & Ahlak Rehberi - Kişisel Tefekkür Günlüğü</title>
    <style>
      body { font-family: Georgia, serif; color: #1c1917; max-width: 720px; margin: 40px auto; padding: 0 20px; }
      h1 { color: #064e3b; margin-bottom: 4px; }
      .sub { color: #57534e; font-size: 13px; margin-bottom: 24px; border-bottom: 2px solid #064e3b; padding-bottom: 12px; }
      .stats { display: flex; gap: 16px; margin-bottom: 28px; }
      .stat-box { flex: 1; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 14px; border-radius: 12px; text-align: center; font-family: sans-serif; }
      .stat-val { font-size: 22px; font-weight: bold; color: #065f46; }
      .stat-lbl { font-size: 12px; color: #047857; }
    </style>
  </head>
  <body>
    <h1>Siyer & Ahlak Rehberi — Tefekkür Günlüğüm</h1>
    <div class="sub">Kişisel Siyer ve Ahlak Muhasebe Raporu • Tarih: ${new Date().toLocaleDateString("tr-TR")}</div>
    <div class="stats">
      <div class="stat-box"><div class="stat-val">${completedCount}</div><div class="stat-lbl">Tamamlanan Okuma</div></div>
      <div class="stat-box"><div class="stat-val">%${habitScore}</div><div class="stat-lbl">Haftalık İstikrar Skoru</div></div>
      <div class="stat-box"><div class="stat-val">${favoritesCount}</div><div class="stat-lbl">Favori İçerik</div></div>
    </div>
    <h2 style="font-size:18px;color:#064e3b;">Kişisel Tefekkür Notlarım (${noteEntries.length})</h2>
    ${notesHtml}
    <script>window.onload = () => { window.print(); };</script>
  </body>
  </html>`);
  win.document.close();
}

export function printTopicHandout({
  title,
  badge = "Siyer ve Ahlak Ders Föyü",
  arabic = "",
  quote = "",
  body = "",
  vurud = "",
  practice = "",
  discussion = "",
  source = "Siyer ve Ahlak Portalı • Temel Kaynakça"
}) {
  const win = window.open("", "_blank", "width=850,height=920");
  if (!win) return;

  win.document.write(`<!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <title>${title} - Kurumsal Ders Föyü</title>
    <style>
      body { font-family: Georgia, serif; color: #0f172a; max-width: 740px; margin: 36px auto; padding: 0 24px; line-height: 1.65; }
      .header { border-bottom: 3px solid #0B4F3F; padding-bottom: 14px; margin-bottom: 22px; display: flex; justify-content: space-between; align-items: flex-end; font-family: sans-serif; }
      .brand { font-size: 12px; font-weight: bold; color: #0B4F3F; text-transform: uppercase; letter-spacing: 1px; }
      .badge { background: #0B4F3F; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: bold; }
      h1 { font-size: 24px; color: #0B4F3F; margin: 8px 0 4px 0; }
      .quote-box { background: #FAF9F6; border: 1px solid #cbd5e1; border-left: 5px solid #0B4F3F; border-radius: 8px; padding: 16px; margin: 18px 0; }
      .arabic { font-size: 24px; text-align: right; color: #0B4F3F; margin-bottom: 10px; }
      .quote { font-style: italic; font-size: 15px; color: #1e293b; }
      .section { margin: 18px 0; padding: 14px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; }
      .sec-title { font-family: sans-serif; font-size: 12px; font-weight: bold; color: #9A6B28; text-transform: uppercase; margin-bottom: 6px; }
      .footer { margin-top: 28px; padding-top: 12px; border-top: 1px solid #cbd5e1; font-family: sans-serif; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; }
    </style>
  </head>
  <body>
    <div class="header">
      <div>
        <div class="brand">Siyer ve Ahlak Portalı • Ders Halkası Broşürü</div>
        <h1>${title}</h1>
      </div>
      <div class="badge">${badge}</div>
    </div>

    ${
      arabic || quote
        ? `<div class="quote-box">
            ${arabic ? `<div class="arabic">${arabic}</div>` : ""}
            ${quote ? `<div class="quote">"${quote}"</div>` : ""}
          </div>`
        : ""
    }

    ${
      body
        ? `<div class="section">
            <div class="sec-title">Konu Açıklaması & Nebevî Ölçü</div>
            <div>${body}</div>
          </div>`
        : ""
    }

    ${
      vurud
        ? `<div class="section">
            <div class="sec-title">Hadisin Arka Planı (Esbâb-ı Vürûd & Meclis Hatırası)</div>
            <div>${vurud}</div>
          </div>`
        : ""
    }

    ${
      practice
        ? `<div class="section">
            <div class="sec-title">Günlük Hayata Tatbik & Uygulama Adımı</div>
            <div>${practice}</div>
          </div>`
        : ""
    }

    ${
      discussion
        ? `<div class="section">
            <div class="sec-title">Aile ve Ders Halkası Müzakere Sorusu</div>
            <div style="font-style:italic;">"${discussion}"</div>
          </div>`
        : ""
    }

    <div class="section" style="height: 85px;">
      <div class="sec-title">Kişisel Çalışma ve Ders Notlarım</div>
    </div>

    <div class="footer">
      <span>Kaynak: ${source}</span>
      <span>Tarih: ${new Date().toLocaleDateString("tr-TR")}</span>
    </div>
    <script>window.onload = () => { window.print(); };</script>
  </body>
  </html>`);
  win.document.close();
}
