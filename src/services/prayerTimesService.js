/**
 * Diyanet İşleri Başkanlığı Hesaplama Ölçülerine Uygun Astronomik Namaz Vakitleri Servisi
 * - İmsak (Fajr): 18°
 * - Güneş (Sunrise): -0.833° (atmosferik kırılma)
 * - Öğle (Dhuhr): Zeval + 5 dk temkin
 * - İkindi (Asr): Şâfiî / Diyanet standardı (gölge = 1 + öğle gölgesi)
 * - Akşam (Maghrib): Güneş batımı + 7 dk temkin
 * - Yatsı (Isha): 17°
 * - Ayrıca Kıble Açısı (Kâbe: 21.4225° N, 39.8262° E) ve Hicri Tarih desteği sunar.
 */

export const CITIES_LIST = [
  { name: "İstanbul", country: "Türkiye", lat: 41.0082, lng: 28.9784, tz: 3 },
  { name: "Ankara", country: "Türkiye", lat: 39.9334, lng: 32.8597, tz: 3 },
  { name: "İzmir", country: "Türkiye", lat: 38.4237, lng: 27.1428, tz: 3 },
  { name: "Adana", country: "Türkiye", lat: 37.0, lng: 35.3213, tz: 3 },
  { name: "Adıyaman", country: "Türkiye", lat: 37.7648, lng: 38.2786, tz: 3 },
  { name: "Afyonkarahisar", country: "Türkiye", lat: 38.7507, lng: 30.5567, tz: 3 },
  { name: "Ağrı", country: "Türkiye", lat: 39.7191, lng: 43.0503, tz: 3 },
  { name: "Aksaray", country: "Türkiye", lat: 38.3687, lng: 34.037, tz: 3 },
  { name: "Amasya", country: "Türkiye", lat: 40.6499, lng: 35.8353, tz: 3 },
  { name: "Antalya", country: "Türkiye", lat: 36.8969, lng: 30.7133, tz: 3 },
  { name: "Ardahan", country: "Türkiye", lat: 41.1105, lng: 42.7022, tz: 3 },
  { name: "Artvin", country: "Türkiye", lat: 41.1828, lng: 41.8183, tz: 3 },
  { name: "Aydın", country: "Türkiye", lat: 37.856, lng: 27.8416, tz: 3 },
  { name: "Balıkesir", country: "Türkiye", lat: 39.6484, lng: 27.8826, tz: 3 },
  { name: "Bartın", country: "Türkiye", lat: 41.6344, lng: 32.3375, tz: 3 },
  { name: "Batman", country: "Türkiye", lat: 37.8812, lng: 41.1351, tz: 3 },
  { name: "Bayburt", country: "Türkiye", lat: 40.2552, lng: 40.2249, tz: 3 },
  { name: "Bilecik", country: "Türkiye", lat: 40.1451, lng: 29.9799, tz: 3 },
  { name: "Bingöl", country: "Türkiye", lat: 38.8855, lng: 40.4966, tz: 3 },
  { name: "Bitlis", country: "Türkiye", lat: 38.4006, lng: 42.1095, tz: 3 },
  { name: "Bolu", country: "Türkiye", lat: 40.7392, lng: 31.6089, tz: 3 },
  { name: "Burdur", country: "Türkiye", lat: 37.7203, lng: 30.2908, tz: 3 },
  { name: "Bursa", country: "Türkiye", lat: 40.1885, lng: 29.061, tz: 3 },
  { name: "Çanakkale", country: "Türkiye", lat: 40.1553, lng: 26.4142, tz: 3 },
  { name: "Çankırı", country: "Türkiye", lat: 40.6013, lng: 33.6134, tz: 3 },
  { name: "Çorum", country: "Türkiye", lat: 40.5506, lng: 34.9556, tz: 3 },
  { name: "Denizli", country: "Türkiye", lat: 37.7765, lng: 29.0864, tz: 3 },
  { name: "Diyarbakır", country: "Türkiye", lat: 37.9144, lng: 40.2306, tz: 3 },
  { name: "Düzce", country: "Türkiye", lat: 40.8438, lng: 31.1565, tz: 3 },
  { name: "Edirne", country: "Türkiye", lat: 41.6818, lng: 26.5623, tz: 3 },
  { name: "Elazığ", country: "Türkiye", lat: 38.681, lng: 39.2264, tz: 3 },
  { name: "Erzincan", country: "Türkiye", lat: 39.75, lng: 39.5, tz: 3 },
  { name: "Erzurum", country: "Türkiye", lat: 39.9, lng: 41.27, tz: 3 },
  { name: "Eskişehir", country: "Türkiye", lat: 39.7767, lng: 30.5206, tz: 3 },
  { name: "Gaziantep", country: "Türkiye", lat: 37.0662, lng: 37.3833, tz: 3 },
  { name: "Giresun", country: "Türkiye", lat: 40.9128, lng: 38.3895, tz: 3 },
  { name: "Gümüşhane", country: "Türkiye", lat: 40.4603, lng: 39.4814, tz: 3 },
  { name: "Hakkâri", country: "Türkiye", lat: 37.5833, lng: 43.7333, tz: 3 },
  { name: "Hatay", country: "Türkiye", lat: 36.2023, lng: 36.1613, tz: 3 },
  { name: "Iğdır", country: "Türkiye", lat: 39.9237, lng: 44.045, tz: 3 },
  { name: "Isparta", country: "Türkiye", lat: 37.7648, lng: 30.5566, tz: 3 },
  { name: "Kahramanmaraş", country: "Türkiye", lat: 37.5858, lng: 36.9371, tz: 3 },
  { name: "Karabük", country: "Türkiye", lat: 41.2061, lng: 32.6204, tz: 3 },
  { name: "Karaman", country: "Türkiye", lat: 37.1759, lng: 33.2287, tz: 3 },
  { name: "Kars", country: "Türkiye", lat: 40.6167, lng: 43.1, tz: 3 },
  { name: "Kastamonu", country: "Türkiye", lat: 41.3887, lng: 33.7827, tz: 3 },
  { name: "Kayseri", country: "Türkiye", lat: 38.7312, lng: 35.4787, tz: 3 },
  { name: "Kırıkkale", country: "Türkiye", lat: 39.8468, lng: 33.5153, tz: 3 },
  { name: "Kırklareli", country: "Türkiye", lat: 41.7333, lng: 27.2167, tz: 3 },
  { name: "Kırşehir", country: "Türkiye", lat: 39.1425, lng: 34.1709, tz: 3 },
  { name: "Kilis", country: "Türkiye", lat: 36.7184, lng: 37.1212, tz: 3 },
  { name: "Kocaeli", country: "Türkiye", lat: 40.8533, lng: 29.8815, tz: 3 },
  { name: "Konya", country: "Türkiye", lat: 37.8746, lng: 32.4932, tz: 3 },
  { name: "Kütahya", country: "Türkiye", lat: 39.4167, lng: 29.9833, tz: 3 },
  { name: "Malatya", country: "Türkiye", lat: 38.3552, lng: 38.3095, tz: 3 },
  { name: "Manisa", country: "Türkiye", lat: 38.6191, lng: 27.4289, tz: 3 },
  { name: "Mardin", country: "Türkiye", lat: 37.3212, lng: 40.7245, tz: 3 },
  { name: "Mersin", country: "Türkiye", lat: 36.8, lng: 34.6333, tz: 3 },
  { name: "Muğla", country: "Türkiye", lat: 37.2153, lng: 28.3636, tz: 3 },
  { name: "Muş", country: "Türkiye", lat: 38.7432, lng: 41.5064, tz: 3 },
  { name: "Nevşehir", country: "Türkiye", lat: 38.6244, lng: 34.7239, tz: 3 },
  { name: "Niğde", country: "Türkiye", lat: 37.9667, lng: 34.6833, tz: 3 },
  { name: "Ordu", country: "Türkiye", lat: 40.9839, lng: 37.8764, tz: 3 },
  { name: "Osmaniye", country: "Türkiye", lat: 37.0742, lng: 36.2478, tz: 3 },
  { name: "Rize", country: "Türkiye", lat: 41.0201, lng: 40.5234, tz: 3 },
  { name: "Sakarya", country: "Türkiye", lat: 40.7569, lng: 30.3781, tz: 3 },
  { name: "Samsun", country: "Türkiye", lat: 41.2867, lng: 36.33, tz: 3 },
  { name: "Siirt", country: "Türkiye", lat: 37.9333, lng: 41.95, tz: 3 },
  { name: "Sinop", country: "Türkiye", lat: 42.0231, lng: 35.1531, tz: 3 },
  { name: "Sivas", country: "Türkiye", lat: 39.7477, lng: 37.0179, tz: 3 },
  { name: "Şanlıurfa", country: "Türkiye", lat: 37.1591, lng: 38.7969, tz: 3 },
  { name: "Şırnak", country: "Türkiye", lat: 37.5164, lng: 42.4611, tz: 3 },
  { name: "Tekirdağ", country: "Türkiye", lat: 40.9833, lng: 27.5167, tz: 3 },
  { name: "Tokat", country: "Türkiye", lat: 40.3167, lng: 36.55, tz: 3 },
  { name: "Trabzon", country: "Türkiye", lat: 41.0027, lng: 39.7168, tz: 3 },
  { name: "Tunceli", country: "Türkiye", lat: 39.1079, lng: 39.5401, tz: 3 },
  { name: "Uşak", country: "Türkiye", lat: 38.6823, lng: 29.4082, tz: 3 },
  { name: "Van", country: "Türkiye", lat: 38.4891, lng: 43.4089, tz: 3 },
  { name: "Yalova", country: "Türkiye", lat: 40.65, lng: 29.2667, tz: 3 },
  { name: "Yozgat", country: "Türkiye", lat: 39.8181, lng: 34.8147, tz: 3 },
  { name: "Zonguldak", country: "Türkiye", lat: 41.4564, lng: 31.7987, tz: 3 },
  // İslam Coğrafyası ve Dünya Şehirleri
  { name: "Mekke", country: "Hicaz", lat: 21.4225, lng: 39.8262, tz: 3 },
  { name: "Medine", country: "Hicaz", lat: 24.4672, lng: 39.6112, tz: 3 },
  { name: "Kudüs", country: "Filistin", lat: 31.7767, lng: 35.2345, tz: 2 },
  { name: "Lefkoşa", country: "KKTC", lat: 35.1856, lng: 33.3823, tz: 2 },
  { name: "Bakü", country: "Azerbaycan", lat: 40.4093, lng: 49.8671, tz: 4 },
  { name: "Saraybosna", country: "Bosna-Hersek", lat: 43.8563, lng: 18.4131, tz: 1 },
  { name: "Berlin", country: "Almanya", lat: 52.52, lng: 13.405, tz: 1 },
  { name: "Londra", country: "Birleşik Krallık", lat: 51.5072, lng: -0.1276, tz: 0 }
];

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

function fixAngle(a) {
  let res = a - 360 * Math.floor(a / 360);
  return res < 0 ? res + 360 : res;
}

function fixHour(h) {
  let res = h - 24 * Math.floor(h / 24);
  return res < 0 ? res + 24 : res;
}

function julianDate(year, month, day) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5;
}

function sunPosition(jd) {
  const D = jd - 2451545.0;
  const g = fixAngle(357.529 + 0.98560028 * D);
  const q = fixAngle(280.459 + 0.98564736 * D);
  const L = fixAngle(q + 1.915 * Math.sin(g * DEG2RAD) + 0.02 * Math.sin(2 * g * DEG2RAD));
  const e = 23.439 - 0.00000036 * D;
  const RA =
    Math.atan2(Math.cos(e * DEG2RAD) * Math.sin(L * DEG2RAD), Math.cos(L * DEG2RAD)) * RAD2DEG / 15;
  const eqt = q / 15 - fixHour(RA);
  const decl = Math.asin(Math.sin(e * DEG2RAD) * Math.sin(L * DEG2RAD)) * RAD2DEG;
  return { decl, eqt };
}

function sunAngleTime(jd, lat, angle, direction) {
  const { decl, eqt } = sunPosition(jd);
  const noon = fixHour(12 - eqt);
  const cosVal =
    (-Math.sin(angle * DEG2RAD) - Math.sin(decl * DEG2RAD) * Math.sin(lat * DEG2RAD)) /
    (Math.cos(decl * DEG2RAD) * Math.cos(lat * DEG2RAD));
  const clamped = Math.max(-1, Math.min(1, cosVal));
  const t = (Math.acos(clamped) * RAD2DEG) / 15;
  return noon + (direction === "ccw" ? -t : t);
}

function asrTime(jd, lat, factor = 1) {
  const { decl, eqt } = sunPosition(jd);
  const noon = fixHour(12 - eqt);
  const angle = -Math.atan(1 / (factor + Math.tan(Math.abs(lat - decl) * DEG2RAD))) * RAD2DEG;
  const cosVal =
    (-Math.sin(angle * DEG2RAD) - Math.sin(decl * DEG2RAD) * Math.sin(lat * DEG2RAD)) /
    (Math.cos(decl * DEG2RAD) * Math.cos(lat * DEG2RAD));
  const clamped = Math.max(-1, Math.min(1, cosVal));
  const t = (Math.acos(clamped) * RAD2DEG) / 15;
  return noon + t;
}

export function formatHourMinutes(decimalHours) {
  const totalMinutes = Math.round(fixHour(decimalHours) * 60);
  const hours = Math.floor(totalMinutes / 60) % 24;
  const mins = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

/**
 * Diyanet İşleri Başkanlığı standardına göre belirtilen tarih ve konum için 6 vakti hesaplar.
 */
export function calculateDiyanetPrayerTimes(date, lat, lng, tzOffset) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const jDate = julianDate(year, month, day) - lng / (15 * 24);
  const { eqt } = sunPosition(jDate + 0.5);
  const noon = fixHour(12 - eqt);

  const tzAdjust = tzOffset - lng / 15;

  // Diyanet açıları ve temkin payları
  const imsakRaw = sunAngleTime(jDate + 5 / 24, lat, 18, "ccw") + tzAdjust;
  const gunesRaw = sunAngleTime(jDate + 6 / 24, lat, 0.833, "ccw") + tzAdjust - 7 / 60;
  const ogleRaw = noon + tzAdjust + 5 / 60;
  const ikindiRaw = asrTime(jDate + 15 / 24, lat, 1) + tzAdjust + 4 / 60;
  const aksamRaw = sunAngleTime(jDate + 18 / 24, lat, 0.833, "cw") + tzAdjust + 7 / 60;
  const yatsiRaw = sunAngleTime(jDate + 20 / 24, lat, 17, "cw") + tzAdjust;

  return {
    imsak: { key: "imsak", label: "İmsak", hours: fixHour(imsakRaw), time: formatHourMinutes(imsakRaw) },
    gunes: { key: "gunes", label: "Güneş", hours: fixHour(gunesRaw), time: formatHourMinutes(gunesRaw) },
    ogle: { key: "ogle", label: "Öğle", hours: fixHour(ogleRaw), time: formatHourMinutes(ogleRaw) },
    ikindi: { key: "ikindi", label: "İkindi", hours: fixHour(ikindiRaw), time: formatHourMinutes(ikindiRaw) },
    aksam: { key: "aksam", label: "Akşam", hours: fixHour(aksamRaw), time: formatHourMinutes(aksamRaw) },
    yatsi: { key: "yatsi", label: "Yatsı", hours: fixHour(yatsiRaw), time: formatHourMinutes(yatsiRaw) }
  };
}

/**
 * Verilen konum için Kâbe'ye (21.4225° N, 39.8262° E) olan Kıble açısını derece olarak hesaplar.
 */
export function calculateQiblaAngle(lat, lng) {
  const kaabaLat = 21.4225 * DEG2RAD;
  const kaabaLng = 39.8262 * DEG2RAD;
  const userLat = lat * DEG2RAD;
  const userLng = lng * DEG2RAD;
  const dLng = kaabaLng - userLng;

  const y = Math.sin(dLng);
  const x = Math.cos(userLat) * Math.tan(kaabaLat) - Math.sin(userLat) * Math.cos(dLng);
  const bearing = fixAngle(Math.atan2(y, x) * RAD2DEG);
  return Math.round(bearing);
}

/**
 * Şu anki saate göre aktif vakti ve sıradaki vakte kalan süreyi (ss:dd:sn) döndürür.
 */
export function getNextPrayerStatus(now, lat, lng, tzOffset) {
  const todayTimes = calculateDiyanetPrayerTimes(now, lat, lng, tzOffset);
  const ordered = [
    todayTimes.imsak,
    todayTimes.gunes,
    todayTimes.ogle,
    todayTimes.ikindi,
    todayTimes.aksam,
    todayTimes.yatsi
  ];

  const nowSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  let currentPrayer = todayTimes.yatsi;
  let nextPrayer = null;
  let diffSeconds = 0;

  for (let i = 0; i < ordered.length; i++) {
    const [h, m] = ordered[i].time.split(":").map(Number);
    const pSec = h * 3600 + m * 60;
    if (pSec > nowSec) {
      nextPrayer = ordered[i];
      currentPrayer = i === 0 ? todayTimes.yatsi : ordered[i - 1];
      diffSeconds = pSec - nowSec;
      break;
    }
  }

  if (!nextPrayer) {
    // Yatsı sonrası -> yarının imsak vakti
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const tomorrowTimes = calculateDiyanetPrayerTimes(tomorrow, lat, lng, tzOffset);
    nextPrayer = tomorrowTimes.imsak;
    currentPrayer = todayTimes.yatsi;
    const [h, m] = nextPrayer.time.split(":").map(Number);
    diffSeconds = 24 * 3600 - nowSec + h * 3600 + m * 60;
  }

  const hh = String(Math.floor(diffSeconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((diffSeconds % 3600) / 60)).padStart(2, "0");
  const ss = String(diffSeconds % 60).padStart(2, "0");

  return {
    todayTimes,
    ordered,
    currentPrayer,
    nextPrayer,
    countdown: `${hh}:${mm}:${ss}`
  };
}

/**
 * Hicri tarihi Türkçe biçimde döndürür.
 */
export function getHijriDateTurkish(date = new Date()) {
  try {
    return new Intl.DateTimeFormat("tr-TR-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  } catch {
    return "Hicrî Takvim";
  }
}

/**
 * Önümüzdeki 7 günün imsakiye tablosunu üretir.
 */
export function getSevenDaySchedule(startDate, lat, lng, tzOffset) {
  const list = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
    const t = calculateDiyanetPrayerTimes(d, lat, lng, tzOffset);
    list.push({
      dateLabel: d.toLocaleDateString("tr-TR", { day: "numeric", month: "short", weekday: "short" }),
      isToday: i === 0,
      times: t
    });
  }
  return list;
}
