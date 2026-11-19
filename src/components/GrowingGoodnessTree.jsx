import React from 'react';

/**
 * Canlı Büyüyen Vektörel (SVG) İyilik Ağacı
 * Çocuğun kazandığı yıldızlara göre 5 aşamada gerçekten dal çıkarır, yapraklanır, çiçek ve meyve açar.
 */
export function GrowingGoodnessTree({ stars = 0, className = "w-24 h-24" }) {
  const level =
    stars < 35 ? 1 : stars < 75 ? 2 : stars < 120 ? 3 : stars < 170 ? 4 : 5;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`İyilik Ağacı Seviye ${level}`}
    >
      {/* Yumuşak Gökyüzü / Bahçe Dairesi */}
      <circle cx="60" cy="60" r="56" fill="#F4F8F6" stroke="#B4833E" strokeWidth="1.8" strokeOpacity="0.45" />

      {/* Seviye 5: Altın Hare & Güneş Işıltısı */}
      {level >= 5 && (
        <>
          <circle cx="60" cy="48" r="36" fill="#FEF3C7" fillOpacity="0.55" />
          <circle cx="24" cy="28" r="2.2" fill="#B4833E" />
          <circle cx="95" cy="30" r="2.2" fill="#B4833E" />
          <circle cx="88" cy="18" r="1.5" fill="#0B4F3F" fillOpacity="0.4" />
        </>
      )}

      {/* Toprak Tepesi */}
      <path d="M22 98C34 89 86 89 98 98C90 107 30 107 22 98Z" fill="#8C6D4F" />
      <path d="M28 96C42 90 78 90 92 96" stroke="#0B4F3F" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.35" />

      {/* Seviye 1: Minik Fidan */}
      {level === 1 && (
        <g>
          <path d="M60 95V72" stroke="#0B4F3F" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M60 77C50 75 45 67 48 61C55 61 60 68 60 77Z" fill="#15803D" />
          <path d="M60 74C70 72 75 64 72 58C65 58 60 65 60 74Z" fill="#0B4F3F" />
        </g>
      )}

      {/* Seviye 2+: Gövde ve Dallar */}
      {level >= 2 && (
        <g>
          <path
            d="M56 96C57 82 57 68 58 55H62C63 68 63 82 64 96H56Z"
            fill="#6D4C3D"
          />
          <path d="M59 68L45 56" stroke="#6D4C3D" strokeWidth="3" strokeLinecap="round" />
          <path d="M61 65L76 53" stroke="#6D4C3D" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {/* Seviye 2: Genç Ağaç Yaprakları */}
      {level === 2 && (
        <g>
          <circle cx="60" cy="46" r="16" fill="#0B4F3F" />
          <circle cx="44" cy="54" r="11" fill="#15803D" />
          <circle cx="76" cy="52" r="12" fill="#166534" />
        </g>
      )}

      {/* Seviye 3+: Zengin Taç Yaprakları */}
      {level >= 3 && (
        <g>
          <circle cx="60" cy="42" r="22" fill="#0B4F3F" />
          <circle cx="40" cy="52" r="16" fill="#15803D" />
          <circle cx="80" cy="52" r="16" fill="#166534" />
          <circle cx="52" cy="30" r="13" fill="#0F6B55" />
          <circle cx="70" cy="32" r="12" fill="#15803D" />

          {/* Çiçekler */}
          <circle cx="46" cy="44" r="3.4" fill="#FDF2F8" />
          <circle cx="46" cy="44" r="1.3" fill="#F59E0B" />
          <circle cx="73" cy="41" r="3.4" fill="#FDF2F8" />
          <circle cx="73" cy="41" r="1.3" fill="#F59E0B" />
          <circle cx="60" cy="27" r="3.4" fill="#FDF2F8" />
          <circle cx="60" cy="27" r="1.3" fill="#F59E0B" />
        </g>
      )}

      {/* Seviye 4+: Altın Meyveler ve Minik Kuş */}
      {level >= 4 && (
        <g>
          <circle cx="38" cy="55" r="3.6" fill="#F59E0B" stroke="#FFFBEB" strokeWidth="1" />
          <circle cx="63" cy="47" r="3.8" fill="#F59E0B" stroke="#FFFBEB" strokeWidth="1" />
          <circle cx="82" cy="55" r="3.6" fill="#F59E0B" stroke="#FFFBEB" strokeWidth="1" />
          <circle cx="53" cy="36" r="3.2" fill="#FBBF24" stroke="#FFFBEB" strokeWidth="1" />
          {/* Minik Kuş Silüeti */}
          <path d="M84 34C87 31 91 31 93 34C91 35 89 35 87 35L84 34Z" fill="#B4833E" />
        </g>
      )}

      {/* Seviye 5: Çiçekli Bahçe Süsleri */}
      {level >= 5 && (
        <g>
          <circle cx="34" cy="92" r="2.8" fill="#F59E0B" />
          <circle cx="86" cy="92" r="2.8" fill="#F59E0B" />
          <circle cx="43" cy="90" r="2.2" fill="#F472B6" />
          <circle cx="77" cy="90" r="2.2" fill="#F472B6" />
        </g>
      )}
    </svg>
  );
}
