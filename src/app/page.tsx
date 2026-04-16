"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const marqueeItems = ["4 ŞUBE", "2 ÜLKE", "2006 YILINDAN BERİ"];

  const manifestoLine1 = "RUSYA VE TÜRKİYE'DEKİ".split(" ");
  const manifestoLine2 = "KAHVE ZİNCİRİ".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="flex flex-col w-full relative z-10 max-w-[1440px] mx-auto border-x-2 border-foreground bg-background">

      {/* HERO SECTION - REFINED GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] md:min-h-[65vh] border-b-2 border-foreground w-full">

        {/* Left Side: Empty Negative Space / Numbering */}
        <div className="hidden lg:flex lg:col-span-1 border-r-2 border-foreground p-4 flex-col justify-end">
          <span className="font-mono text-[10px] font-bold uppercase rotate-180 select-none opacity-40 hover:opacity-100 transition-opacity" style={{ writingMode: 'vertical-rl' }}>
            BÖLÜM 01
          </span>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-7 border-b-2 lg:border-b-0 lg:border-r-2 border-foreground p-5 md:p-8 lg:p-10 flex flex-col justify-center bg-background">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl"
          >
            <motion.div variants={itemVariants} className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-0.5 bg-accent inline-block"></span>
              KURUMSAL STANDARTLAR
            </motion.div>

            <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-6 w-full">
              {manifestoLine1.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="block hover:text-accent transition-colors duration-300 w-full">{word}</motion.span>
              ))}
              <motion.span variants={itemVariants} className="block text-accent mt-2 md:mt-3 w-full">{manifestoLine2.join(" ")}</motion.span>
            </div>

            <motion.p variants={itemVariants} className="font-mono text-xs md:text-sm leading-relaxed max-w-sm opacity-80 mb-6 border-l-2 border-foreground pl-3">
              Sıradanlığa yer yok. Yuvarlak köşeler yok. Milimetrik işlenmiş tasarım, kusursuz seçilmiş çekirdekler ve kurumsal kalitede atmosfer.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side: Interactions & Image abstraction */}
        <div className="lg:col-span-4 bg-foreground text-background border-foreground flex flex-col justify-end p-4 md:p-5 relative overflow-hidden group transition-colors duration-500">

          {/* AESTHETIC BACKGROUND IMAGE */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-50 group-hover:opacity-90 transition-opacity duration-700">
            <Image
              src="/hero_section.webp"
              alt="Hero Seçki"
              fill
              className="object-cover object-center saturate-150 dark:saturate-50 group-hover:saturate-200 dark:group-hover:saturate-100 transition-all duration-1000 scale-110 group-hover:scale-125"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="z-10 relative bg-background text-foreground p-4 md:p-5 border-2 border-foreground shadow-[3px_3px_0_var(--color-rust)] max-w-[200px] md:max-w-[220px] self-start transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-500 mt-auto"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-accent inline-block"></span>
              <h3 className="font-mono text-[10px] font-bold opacity-60 uppercase tracking-widest leading-none mt-1">AKSİYON</h3>
            </div>
            <button type="button" onClick={() => setIsMenuOpen(true)} className="flex items-center gap-3 bg-transparent text-foreground font-display font-bold uppercase text-sm md:text-base border-b-2 border-foreground hover:border-accent hover:text-accent transition-colors duration-300 group/btn w-full justify-between pb-1.5">
              <span>SEÇKİYİ İNCELE</span>
              <ArrowRight className="w-4 h-4 shrink-0 group-hover/btn:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* REFINED MARQUEE */}
      <section className="w-full bg-background border-b-2 border-foreground py-3 md:py-4 overflow-hidden flex relative z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-10 md:gap-12 font-mono font-bold text-sm md:text-base uppercase items-center w-max"
        >
          {Array(8).fill(marqueeItems).flat().map((text, i) => (
            <React.Fragment key={i}>
              <span className="text-foreground opacity-80">{text}</span>
              <span className="w-1.5 h-1.5 bg-accent inline-block"></span>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="w-full bg-background relative z-10 border-b-2 border-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-foreground w-full">

          {/* TR BLOCK */}
          <div className="p-5 md:p-6 lg:p-8 group hover:bg-foreground hover:text-background transition-colors duration-500 flex flex-col justify-between min-h-[300px]">
            <div className="flex justify-between items-start mb-8 lg:mb-12">
              <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-widest opacity-50 uppercase">Bölge 01</span>
              <MapPin className="w-5 h-5 md:w-5 md:h-5 text-accent group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5 uppercase tracking-tighter text-accent">TÜRKİYE</h2>
              <ul className="space-y-2 lg:space-y-3 font-mono font-bold text-xs lg:text-sm opacity-90">
                <li className="flex items-center gap-3 lg:gap-4">
                  <span className="w-6 lg:w-8 h-[1.5px] bg-current opacity-50"></span>
                  TOKAT — Turhal
                </li>
                <li className="flex items-center gap-3 lg:gap-4">
                  <span className="w-6 lg:w-8 h-[1.5px] bg-current opacity-50"></span>
                  TOKAT — Zile
                </li>
              </ul>
            </div>
          </div>

          {/* RU BLOCK */}
          <div className="p-5 md:p-6 lg:p-8 group hover:bg-foreground hover:text-background transition-colors duration-500 flex flex-col justify-between min-h-[300px] bg-background">
            <div className="flex justify-between items-start mb-8 lg:mb-12">
              <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-widest opacity-50 uppercase">Bölge 02</span>
              <MapPin className="w-5 h-5 md:w-5 md:h-5 text-accent group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-5 uppercase tracking-tighter text-accent">RUSYA</h2>
              <ul className="space-y-2 lg:space-y-3 font-mono font-bold text-xs lg:text-sm opacity-90">
                <li className="flex items-center gap-3 lg:gap-4">
                  <span className="w-6 lg:w-8 h-[1.5px] bg-current opacity-50"></span>
                  MAYKOP — Proletarskaya Ulitsa
                </li>
                <li className="flex items-center gap-3 lg:gap-4">
                  <span className="w-6 lg:w-8 h-[1.5px] bg-current opacity-50"></span>
                  MAYKOP — Krasnooktyabrskaya
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIAL DRINKS MODAL */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white max-w-lg w-full p-6 md:p-8 shadow-[8px_8px_0_#B5433C] relative overflow-y-auto max-h-[90vh]"
            >
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 hover:text-[#B5433C] transition-colors"
                aria-label="Menüyü Kapat"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tighter mb-6 border-b-4 border-[#B5433C] pb-2 inline-block">
                ÖZEL ÜRÜNLERİMİZ.
              </h3>

              <ul className="space-y-4 font-mono text-sm md:text-base font-bold uppercase">
                <li className="flex items-center gap-4 border-b-2 border-black/10 dark:border-white/10 pb-3 hover:text-[#B5433C] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#B5433C] inline-block shrink-0"></span>
                  <span className="block text-lg">Fıstık Salep</span>
                </li>
                <li className="flex items-center gap-4 border-b-2 border-black/10 dark:border-white/10 pb-3 hover:text-[#B5433C] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#B5433C] inline-block shrink-0"></span>
                  <span className="block text-lg">Raf Bounty</span>
                </li>
                <li className="flex items-center gap-4 border-b-2 border-black/10 dark:border-white/10 pb-3 hover:text-[#B5433C] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#B5433C] inline-block shrink-0"></span>
                  <span className="block text-lg">Cheesecake</span>
                </li>
                <li className="flex items-center gap-4 border-b-2 border-black/10 dark:border-white/10 pb-3 hover:text-[#B5433C] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#B5433C] inline-block shrink-0"></span>
                  <span className="block text-lg">Lotus Latte</span>
                </li>
                <li className="flex items-center gap-4 border-b-2 border-black/10 dark:border-white/10 pb-3 hover:text-[#B5433C] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#B5433C] inline-block shrink-0"></span>
                  <span className="block text-lg">Juliette</span>
                </li>
              </ul>

              <div className="mt-8 text-center border-t-2 border-black dark:border-white pt-4">
                <span className="font-display font-black tracking-tighter text-3xl opacity-20 select-none">TÜM MENÜ İÇİN BİZİ ZİYARET EDİN.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
