// ==========================================
// GÜVENLİ DEPOLAMA, YEDEKLEME VE API SERVİS KATMANI
// (Faz 2 ASP.NET Core & React Native Uyumlu Şema)
// ==========================================

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

export function speakTurkish(text, onEnd) {
  try {
    if (!window.speechSynthesis) return false;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "tr-TR";
    utterance.rate = 0.96;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    if (onEnd) onEnd();
    return false;
  }
}

export function stopSpeaking() {
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
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
