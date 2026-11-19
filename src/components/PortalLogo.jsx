import React from 'react';
import portalLogoImg from '../assets/portal-logo.png';

/**
 * Siyer ve Ahlak Portalı — Kurumsal Amblem Bileşeni
 * Selçuklu 8 köşeli yıldız (Rub el Hizb), rahle üzerinde açık kitap ve hilal motifli
 * resmi kurumsal logoyu başlık, altbilgi ve çocuk portalında keskin biçimde sunar.
 */
export function PortalLogo({ className = "w-10 h-10" }) {
  return (
    <div
      className={`${className} rounded-xl bg-white border border-[#B4833E]/60 shadow-xs overflow-hidden flex items-center justify-center p-0.5 shrink-0`}
    >
      <img
        src={portalLogoImg}
        alt="Siyer ve Ahlak Portalı Kurumsal Logosu"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
