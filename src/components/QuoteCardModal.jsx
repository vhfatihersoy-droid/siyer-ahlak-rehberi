import React, { useState, useEffect, useRef } from 'react';
import { Image, X, Download, Share2 } from 'lucide-react';

export function QuoteCardModal({ data, onClose }) {
  const [theme, setTheme] = useState("emerald");
  const [aspect, setAspect] = useState("square");
  const [showArabic, setShowArabic] = useState(true);
  const [showOrnament, setShowOrnament] = useState(true);
  const [fontStyle, setFontStyle] = useState("serif");
  const canvasRef = useRef(null);

  const themes = {
    emerald: {
      name: "Zümrüt Yeşili",
      bg1: "#064e3b",
      bg2: "#022c22",
      text: "#ffffff",
      accent: "#6ee7b7",
      sub: "#d1fae5",
      border: "rgba(255,255,255,0.2)"
    },
    sand: {
      name: "Sıcak Kum & Krem",
      bg1: "#fbf9f5",
      bg2: "#f3ede2",
      text: "#1c1917",
      accent: "#047857",
      sub: "#57534e",
      border: "rgba(4,120,87,0.25)"
    },
    midnight: {
      name: "Gece Laciverti",
      bg1: "#0f172a",
      bg2: "#1e293b",
      text: "#f8fafc",
      accent: "#fbbf24",
      sub: "#cbd5e1",
      border: "rgba(251,191,36,0.28)"
    },
    roseGold: {
      name: "Bordo & Altın",
      bg1: "#4c0519",
      bg2: "#2e020e",
      text: "#fff1f2",
      accent: "#fcd34d",
      sub: "#fecdd3",
      border: "rgba(252,211,77,0.28)"
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    const ctx = canvas.getContext("2d");
    const width = 1080;
    const height = aspect === "square" ? 1080 : 1350;
    canvas.width = width;
    canvas.height = height;

    const t = themes[theme];
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, t.bg1);
    grad.addColorStop(1, t.bg2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = t.border;
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, width - 96, height - 96);

    if (showOrnament) {
      ctx.strokeStyle = t.accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(66, 66, width - 132, height - 132);

      const corners = [
        [66, 66],
        [width - 66, 66],
        [66, height - 66],
        [width - 66, height - 66]
      ];
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fillStyle = t.bg1;
        ctx.fill();
        ctx.strokeStyle = t.accent;
        ctx.lineWidth = 3;
        ctx.stroke();
      });
    }

    const family = fontStyle === "serif" ? "Georgia, serif" : "system-ui, -apple-system, sans-serif";

    ctx.fillStyle = t.accent;
    ctx.font = `bold 25px system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("SİYER & AHLAK REHBERİ", width / 2, 135);

    let currentY = 220;

    if (showArabic && data.arabic) {
      ctx.fillStyle = t.accent;
      ctx.font = `44px Georgia, serif`;
      ctx.fillText(data.arabic, width / 2, currentY);
      currentY += 75;
    }

    ctx.fillStyle = t.text;
    ctx.font = `bold 44px ${family}`;
    const titleLines = wrapText(ctx, data.title, width - 190);
    titleLines.forEach((line) => {
      ctx.fillText(line, width / 2, currentY);
      currentY += 58;
    });

    currentY += 28;
    ctx.fillStyle = t.sub;
    ctx.font = `33px ${family}`;
    const bodyLines = wrapText(ctx, `"${data.quote}"`, width - 190);
    bodyLines.slice(0, 10).forEach((line) => {
      ctx.fillText(line, width / 2, currentY);
      currentY += 50;
    });

    ctx.fillStyle = t.accent;
    ctx.font = "bold 24px system-ui, sans-serif";
    ctx.fillText(`Kaynak: ${data.source}`, width / 2, height - 135);

    ctx.fillStyle = t.sub;
    ctx.font = "20px system-ui, sans-serif";
    ctx.fillText("Siyer ve Ahlak Portalı • Sahih Kaynaklı Dijital Rehber", width / 2, height - 95);
  }, [data, theme, aspect, showArabic, showOrnament, fontStyle]);

  function wrapText(ctx, text, maxWidth) {
    const words = (text || "").split(" ");
    const lines = [];
    let currentLine = "";
    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i] + " ";
      if (ctx.measureText(testLine).width > maxWidth && i > 0) {
        lines.push(currentLine.trim());
        currentLine = words[i] + " ";
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine.trim());
    return lines;
  }

  const handleDownload = () => {
    try {
      const canvas = canvasRef.current;
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `siyer-ahlak-karti-${Date.now()}.png`;
      a.click();
    } catch {
      alert("Görsel indirilirken bir tarayıcı kısıtlaması oluştu.");
    }
  };

  const handleShare = async () => {
    try {
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], "siyer-ahlak-karti.png", { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: data.title,
            text: `${data.quote} (${data.source})`,
            files: [file]
          });
        } else if (navigator.share) {
          await navigator.share({
            title: data.title,
            text: `"${data.quote}" — Kaynak: ${data.source}`
          });
        } else {
          handleDownload();
        }
      });
    } catch {
      handleDownload();
    }
  };

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white dark:bg-stone-900 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-stone-200 dark:border-stone-700 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800 mb-5">
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Gelişmiş Görsel Alıntı Kartı Stüdyosu</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-800">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-stone-100 dark:bg-stone-800 rounded-2xl p-4 flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full max-w-[300px] h-auto rounded-xl shadow-lg border border-stone-200 dark:border-stone-700" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">Renk Teması</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(themes).map(([key, t]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      theme === key
                        ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 ring-2 ring-emerald-600/20"
                        : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">Kart Boyutu</label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setAspect("square")}
                    className={`p-2 rounded-xl text-xs font-semibold border ${
                      aspect === "square"
                        ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300"
                        : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    Kare (1:1)
                  </button>
                  <button
                    onClick={() => setAspect("portrait")}
                    className={`p-2 rounded-xl text-xs font-semibold border ${
                      aspect === "portrait"
                        ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300"
                        : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    Hikaye (4:5)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">Yazı Tipi</label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setFontStyle("serif")}
                    className={`p-2 rounded-xl text-xs font-semibold border ${
                      fontStyle === "serif"
                        ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300"
                        : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    Klasik Serif
                  </button>
                  <button
                    onClick={() => setFontStyle("sans")}
                    className={`p-2 rounded-xl text-xs font-semibold border ${
                      fontStyle === "sans"
                        ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300"
                        : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    Modern Sans
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => setShowOrnament(!showOrnament)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                  showOrnament
                    ? "bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300"
                    : "border-stone-200 dark:border-stone-700 text-stone-500"
                }`}
              >
                {showOrnament ? "✓ Köşe Tezhip Çerçevesi" : "Köşe Tezhip Çerçevesi"}
              </button>
              {data.arabic && (
                <button
                  onClick={() => setShowArabic(!showArabic)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    showArabic
                      ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300"
                      : "border-stone-200 dark:border-stone-700 text-stone-500"
                  }`}
                >
                  {showArabic ? "✓ Arapça Hat Metni" : "Arapça Hat Metni"}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-lg shadow-emerald-700/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>PNG Olarak İndir</span>
              </button>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 bg-stone-800 dark:bg-stone-700 hover:bg-stone-900 text-white py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Paylaş</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
