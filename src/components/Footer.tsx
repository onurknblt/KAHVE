"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-24 md:mt-32 border-t-[12px] border-double border-[#B5433C] dark:border-[#3D1A1A] bg-black dark:bg-[#1A0A0A] text-white dark:text-[#E8D5C4] relative z-10 w-full overflow-hidden">

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-white/20 dark:divide-white/10 border-b-[3px] border-white/20 dark:border-white/10 w-full relative z-10">

        {/* SECTION 1 */}
        <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 dark:opacity-80 mb-6">FELSEFE</h3>
            <p className="font-display font-medium text-xl leading-snug">
              Sunduğumuz her fincan, geçmişle bugün arasında bir köprü, aromayla harmanlanmış anlık bir mola yeridir.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest opacity-50 dark:opacity-80 mb-6">HARİTA</h3>
            <ul className="grid grid-cols-2 gap-4 font-mono font-bold text-[10px] sm:text-xs uppercase">
              <li><Link href="/" className="flex justify-center items-center py-4 border-[3px] border-white/30 dark:border-black/40 hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-[#B5433C] transition-all shadow-[4px_4px_0_#FFF] dark:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">ANA SAYFA</Link></li>
              <li><Link href="/hakkimizda" className="flex justify-center items-center py-4 border-[3px] border-white/30 dark:border-black/40 hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-[#B5433C] transition-all shadow-[4px_4px_0_#FFF] dark:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">MANIFESTO</Link></li>
              <li><Link href="/subeler" className="flex justify-center items-center py-4 border-[3px] border-white/30 dark:border-black/40 hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-[#B5433C] transition-all shadow-[4px_4px_0_#FFF] dark:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">LOKASYONLAR</Link></li>
              <li><Link href="/galeri" className="flex justify-center items-center py-4 border-[3px] border-white/30 dark:border-black/40 hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-[#B5433C] transition-all shadow-[4px_4px_0_#FFF] dark:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">GALERİ</Link></li>
              <li className="col-span-2"><Link href="/iletisim" className="flex justify-center items-center py-4 border-[3px] border-white/30 dark:border-black/40 hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-[#B5433C] transition-all shadow-[4px_4px_0_#FFF] dark:shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">İLETİŞİM</Link></li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B5433C] dark:text-[#B5433C] mb-6 border-b-2 border-white/20 dark:border-white/10 pb-2 inline-block">BİZİ TAKİP EDİN</h3>
            <div className="grid grid-cols-1 gap-3 font-mono text-[10px] lg:text-xs">
              <a href="https://www.instagram.com/kahve_trcoffee/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center p-3 sm:p-4 border-[3px] border-white/20 dark:border-white/10 hover:border-white dark:hover:border-white/50 hover:bg-white hover:text-black dark:hover:bg-white/10 shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                <span className="font-black">MAYKOP (PROLETARSKAYA)</span>
              </a>
              <a href="https://www.instagram.com/kahveturkishcoffee.rus/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center p-3 sm:p-4 border-[3px] border-white/20 dark:border-white/10 hover:border-white dark:hover:border-white/50 hover:bg-white hover:text-black dark:hover:bg-white/10 shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                <span className="font-black">MAYKOP (KRASNO)</span>
              </a>
              <a href="https://www.instagram.com/zilekahveturkishcoffee/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center p-3 sm:p-4 border-[3px] border-white/20 dark:border-white/10 hover:border-white dark:hover:border-white/50 hover:bg-white hover:text-black dark:hover:bg-white/10 shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                <span className="font-black">TOKAT (ZİLE)</span>
              </a>
              <a href="https://www.instagram.com/kahveturkishcoffee/" target="_blank" rel="noopener noreferrer" className="flex justify-between items-center p-3 sm:p-4 border-[3px] border-white/20 dark:border-white/10 hover:border-white dark:hover:border-white/50 hover:bg-white hover:text-black dark:hover:bg-white/10 shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                <span className="font-black">TOKAT (TURHAL)</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[300px] border-t-[3px] md:border-t-0 border-white/20 dark:border-white/10 relative">
          <div>
            <div className="font-display font-black text-3xl md:text-4xl tracking-tighter uppercase leading-[0.9] text-black dark:text-white bg-[#B5433C] dark:bg-[#B5433C]/20 dark:border-[3px] dark:border-[#B5433C] p-4 inline-block shadow-[6px_6px_0_rgba(255,255,255,0.3)]">
              Sadece <br />Gerçek<br />Kahve.
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase opacity-50 mt-12 mb-0 border-t-2 border-white/20 dark:border-white/10 pt-4">
            © 2026 KAHVE TURKISH COFFEE <br />TÜM HAKLARI SAKLIDIR.
          </p>
        </div>

      </div>

      {/* GIANT LOGO BACKDROP */}
      <div className="w-full flex items-center justify-center pt-12 pb-6 overflow-hidden relative z-0 opacity-10">
        <p className="font-display text-[6.5vw] leading-none font-bold tracking-tighter text-center select-none text-white whitespace-nowrap">
          KAHVE<span className="text-[#B5433C]"> TURKISH COFFEE</span>
        </p>
      </div>
    </footer>
  );
};
