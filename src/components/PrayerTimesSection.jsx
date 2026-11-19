import React, { useState, useMemo } from 'react';
import { Clock, Compass, MapPin, Navigation, Calendar, Printer } from 'lucide-react';
import {
  CITIES_LIST,
  calculateQiblaAngle,
  getHijriDateTurkish,
  getSevenDaySchedule
} from '../services/prayerTimesService';

function getDirectionLabel(deg) {
  const dirs = ["Kuzey", "Kuzeydoğu", "Doğu", "Güneydoğu", "Güney", "Güneybatı", "Batı", "Kuzeybatı"];
  return dirs[Math.round(deg / 45) % 8];
}

export function PrayerTimesMiniBar({ city, status, onOpenFullView }) {
  if (!status) return null;

  return (
    <div className="bg-[#FAF9F6] dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Sol: Şehir ve Sıradaki Vakit Geri Sayım */}
        <button
          onClick={onOpenFullView}
          className="inline-flex items-center gap-2 text-left hover:opacity-85 transition-opacity"
          title="Tüm Namaz Vakitlerini ve 7 Günlük İmsakiyeyi Aç"
        >
          <span className="inline-flex items-center gap-1 font-bold text-[#0B4F3F] dark:text-emerald-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{city.name}</span>
          </span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-600 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">{status.nextPrayer.label}</strong> vaktine:
          </span>
          <span className="font-mono font-extrabold text-[#9A6B28] dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-[#B4833E]/30">
            {status.countdown}
          </span>
        </button>

        {/* Orta/Sağ: 6 Vakit Özeti */}
        <div className="hidden lg:flex items-center gap-1.5">
          {status.ordered.map((p) => {
            const isNext = status.nextPrayer.key === p.key;
            const isCurrent = status.currentPrayer.key === p.key;
            return (
              <button
                key={p.key}
                onClick={onOpenFullView}
                className={`px-2.5 py-0.5 rounded-md transition-all flex items-center gap-1.5 ${
                  isCurrent
                    ? "bg-[#0B4F3F] text-white font-bold"
                    : isNext
                    ? "bg-amber-50 dark:bg-amber-950/60 text-[#9A6B28] dark:text-amber-300 border border-[#B4833E]/40 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span>{p.label}</span>
                <span className="font-mono">{p.time}</span>
              </button>
            );
          })}
        </div>

        {/* Mobil/Tablet Kısayol */}
        <button
          onClick={onOpenFullView}
          className="lg:hidden text-[#0B4F3F] dark:text-emerald-400 font-bold hover:underline"
        >
          Tüm Vakitler →
        </button>
      </div>
    </div>
  );
}

export function PrayerTimesDashboard({ city, onSelectCity, now, status }) {
  const [cityFilter, setCityFilter] = useState("");
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState("");

  const qiblaAngle = useMemo(() => calculateQiblaAngle(city.lat, city.lng), [city.lat, city.lng]);
  const hijriDate = useMemo(() => getHijriDateTurkish(now), [now.toDateString()]);
  const gregorianDate = now.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long"
  });

  const weeklySchedule = useMemo(
    () => getSevenDaySchedule(now, city.lat, city.lng, city.tz),
    [now.toDateString(), city.lat, city.lng, city.tz]
  );

  const quickCities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Konya", "Mekke", "Medine", "Kudüs"];

  const filteredCities = useMemo(() => {
    const q = cityFilter.trim().toLowerCase();
    if (!q) return CITIES_LIST;
    return CITIES_LIST.filter(
      (c) => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)
    );
  }, [cityFilter]);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setLocError("Tarayıcınız konum servisini desteklemiyor.");
      return;
    }
    setLocating(true);
    setLocError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const tz = -new Date().getTimezoneOffset() / 60;
        onSelectCity({
          name: "Bulunduğum Konum (GPS)",
          country: "Otomatik Konum",
          lat: Number(pos.coords.latitude.toFixed(4)),
          lng: Number(pos.coords.longitude.toFixed(4)),
          tz
        });
        setLocating(false);
      },
      () => {
        setLocError("Konum izni alınamadı. Şehir listesinden ilinizi seçebilirsiniz.");
        setLocating(false);
      },
      { timeout: 8000 }
    );
  };

  const printWeeklyImsakiye = () => {
    const win = window.open("", "_blank");
    if (!win) return;
    const rowsHtml = weeklySchedule
      .map(
        (day) => `
      <tr style="${day.isToday ? "background:#f0fdf4;font-weight:bold;" : ""}">
        <td>${day.dateLabel}</td>
        <td>${day.times.imsak.time}</td>
        <td>${day.times.gunes.time}</td>
        <td>${day.times.ogle.time}</td>
        <td>${day.times.ikindi.time}</td>
        <td>${day.times.aksam.time}</td>
        <td>${day.times.yatsi.time}</td>
      </tr>`
      )
      .join("");

    win.document.write(`
      <html lang="tr">
      <head>
        <title>7 Günlük Namaz Vakitleri — ${city.name}</title>
        <style>
          body { font-family: Georgia, serif; max-width: 780px; margin: 36px auto; color: #1e293b; }
          .head { border-bottom: 3px solid #0B4F3F; padding-bottom: 12px; margin-bottom: 20px; }
          h1 { color: #0B4F3F; margin: 0 0 6px; font-size: 22px; }
          .meta { font-size: 13px; color: #64748b; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: center; }
          th { background: #0B4F3F; color: #fff; }
          .foot { margin-top: 24px; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="head">
          <h1>Siyer ve Ahlak Portalı • 7 Günlük Namaz Vakitleri (${city.name})</h1>
          <div class="meta">${gregorianDate} • ${hijriDate} • Kıble Açısı: ${qiblaAngle}° (${getDirectionLabel(qiblaAngle)})</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tarih</th><th>İmsak</th><th>Güneş</th><th>Öğle</th><th>İkindi</th><th>Akşam</th><th>Yatsı</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div class="foot">Diyanet İşleri Başkanlığı hesaplama açıları (İmsak 18°, Yatsı 17° ve temkin vakitleri) esas alınmıştır.</div>
        <script>window.print();</script>
      </body>
      </html>
    `);
    win.document.close();
  };

  const prayerMeta = {
    imsak: { subtitle: "Sabah & Seher Vakti", desc: "Fecr-i sâdık ile başlar, sabah namazının vaktidir." },
    gunes: { subtitle: "Güneşin Doğuşu", desc: "Sabah namazı vaktinin sonu, işrak hazırlığıdır." },
    ogle: { subtitle: "Zeval Sonrası", desc: "Güneşin tepe noktasını aşmasıyla girer." },
    ikindi: { subtitle: "Asr-ı Evvel", desc: "Günün bereketli ikinci yarısı ve ikindi vaktidir." },
    aksam: { subtitle: "Güneşin Batışı", desc: "Güneşin ufkun altına inmesiyle girer." },
    yatsi: { subtitle: "Gece & Vitir Vakti", desc: "Şafağın kaybolmasıyla başlar, teheccüde uzanır." }
  };

  return (
    <div className="space-y-6">
      {/* ÜST KURUMSAL KART: GERİ SAYIM, HİCRİ TARİH & KIBLE AÇISI */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div className="bg-[#0B4F3F] text-white px-6 py-5 border-b-2 border-[#B4833E] grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-5 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-200 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{city.name} • {city.country}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Namaz Vakitleri & İmsakiye
            </h3>
            <p className="text-xs text-emerald-100/90">
              {gregorianDate} • <strong className="text-amber-200">{hijriDate}</strong>
            </p>
          </div>

          <div className="lg:col-span-4 bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-center">
            <span className="text-xs text-emerald-100 uppercase tracking-wider block">
              Sıradaki Vakit: <strong className="text-amber-300">{status.nextPrayer.label} ({status.nextPrayer.time})</strong>
            </span>
            <div className="text-3xl font-mono font-extrabold text-white tracking-wider mt-1">
              {status.countdown}
            </div>
            <span className="text-xs text-emerald-100/80 block mt-0.5">
              Aktif Vakit: {status.currentPrayer.label}
            </span>
          </div>

          <div className="lg:col-span-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs text-emerald-100 uppercase tracking-wider block">Kıble Açısı</span>
              <span className="text-lg font-extrabold text-amber-300">{qiblaAngle}°</span>
              <span className="text-xs text-emerald-100/85 block">{getDirectionLabel(qiblaAngle)}</span>
            </div>
            <div
              className="w-12 h-12 rounded-full bg-white/15 border border-amber-300/60 flex items-center justify-center shrink-0"
              title={`Kıble Yönü: Kuzeyden saat yönünde ${qiblaAngle}°`}
            >
              <Navigation
                className="w-5 h-5 text-amber-300 transition-transform duration-500"
                style={{ transform: `rotate(${qiblaAngle}deg)` }}
              />
            </div>
          </div>
        </div>

        {/* ŞEHİR SEÇİCİ & KONUM ARAÇ ÇUBUĞU */}
        <div className="p-5 bg-[#FAF9F6] dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={CITIES_LIST.some((c) => c.name === city.name) ? city.name : "__custom__"}
                onChange={(e) => {
                  const found = CITIES_LIST.find((c) => c.name === e.target.value);
                  if (found) onSelectCity(found);
                }}
                className="px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#0B4F3F]"
              >
                {!CITIES_LIST.some((c) => c.name === city.name) && (
                  <option value="__custom__">{city.name}</option>
                )}
                {filteredCities.map((c) => (
                  <option key={`${c.name}-${c.country}`} value={c.name}>
                    {c.name} ({c.country})
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                placeholder="81 il içinde filtrele..."
                className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#0B4F3F] w-44"
              />

              <button
                onClick={handleLocateMe}
                disabled={locating}
                className="inline-flex items-center gap-1.5 bg-[#0B4F3F] hover:bg-[#08382C] text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{locating ? "Konum Alınıyor..." : "Konumumu Bul (GPS)"}</span>
              </button>
            </div>

            <button
              onClick={printWeeklyImsakiye}
              className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-200 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#0B4F3F] dark:text-emerald-400" />
              <span>7 Günlük İmsakiye Yazdır (PDF)</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1">Hızlı Seçim:</span>
            {quickCities.map((qName) => {
              const isSelected = city.name === qName;
              return (
                <button
                  key={qName}
                  onClick={() => {
                    const found = CITIES_LIST.find((c) => c.name === qName);
                    if (found) onSelectCity(found);
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition-all ${
                    isSelected
                      ? "bg-[#0B4F3F] text-white border-[#0B4F3F]"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[#0B4F3F]"
                  }`}
                >
                  {qName}
                </button>
              );
            })}
          </div>

          {locError && <p className="text-xs text-[#9A6B28] font-semibold">{locError}</p>}
        </div>

        {/* 6 VAKİT KARTLARI GRID */}
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {status.ordered.map((p) => {
            const isCurrent = status.currentPrayer.key === p.key;
            const isNext = status.nextPrayer.key === p.key;
            const meta = prayerMeta[p.key];
            return (
              <div
                key={p.key}
                className={`rounded-xl p-4 border transition-all flex flex-col justify-between space-y-2 ${
                  isCurrent
                    ? "bg-[#0B4F3F] text-white border-[#0B4F3F] shadow-sm"
                    : isNext
                    ? "bg-amber-50/70 dark:bg-amber-950/30 border-2 border-[#B4833E] text-slate-900 dark:text-slate-100"
                    : "bg-[#FAF9F6] dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isCurrent ? "text-amber-300" : "text-[#0B4F3F] dark:text-emerald-400"
                    }`}
                  >
                    {p.label}
                  </span>
                  {isCurrent && (
                    <span className="text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                      Şimdi
                    </span>
                  )}
                  {!isCurrent && isNext && (
                    <span className="text-xs font-bold bg-[#B4833E] text-white px-2 py-0.5 rounded-full">
                      Sıradaki
                    </span>
                  )}
                </div>

                <div className="text-2xl font-mono font-extrabold tracking-tight">{p.time}</div>

                <p
                  className={`text-xs leading-snug ${
                    isCurrent ? "text-emerald-100/90" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {meta.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 7 GÜNLÜK İMSAKİYE TABLOSU */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#0B4F3F] dark:text-emerald-400" />
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {city.name} İçin 7 Günlük Namaz Vakitleri (Haftalık İmsakiye)
            </h4>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Diyanet Hesaplama Yöntemi (İmsak 18° • Yatsı 17° • Temkinli)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Tarih</th>
                <th className="py-2.5 px-3 font-semibold text-center">İmsak</th>
                <th className="py-2.5 px-3 font-semibold text-center">Güneş</th>
                <th className="py-2.5 px-3 font-semibold text-center">Öğle</th>
                <th className="py-2.5 px-3 font-semibold text-center">İkindi</th>
                <th className="py-2.5 px-3 font-semibold text-center">Akşam</th>
                <th className="py-2.5 px-3 font-semibold text-center">Yatsı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {weeklySchedule.map((row, i) => (
                <tr
                  key={i}
                  className={
                    row.isToday
                      ? "bg-emerald-50/70 dark:bg-emerald-950/40 font-bold text-[#0B4F3F] dark:text-emerald-300"
                      : "text-slate-700 dark:text-slate-300"
                  }
                >
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    {row.dateLabel} {row.isToday ? "• Bugün" : ""}
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.imsak.time}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.gunes.time}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.ogle.time}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.ikindi.time}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.aksam.time}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{row.times.yatsi.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
