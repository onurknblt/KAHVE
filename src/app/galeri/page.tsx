"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" }
  },
};

const galleryData = [
  { src: "/gallery/1e16a6f3-cbae-495e-9543-bbbb30b746d1.webp", className: "col-span-2 md:col-span-2 row-span-2" },
  { src: "/gallery/36e31103-593d-4cf7-b83b-82875276383b.webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/3bea37fe-2821-4bb1-915c-7a482d7655b9.webp", className: "col-span-1 md:col-span-1 row-span-2" },
  { src: "/gallery/5e3d4265-a042-4085-8451-ec0e9ec601ea.webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/7076d832-48b3-445a-ba13-e0845f348c40.webp", className: "col-span-2 md:col-span-2 row-span-1" },
  { src: "/gallery/8329b6f5-1616-4219-a7ee-6ffbae9b0091.webp", className: "col-span-1 md:col-span-1 row-span-2" },
  { src: "/gallery/cfb3ed7f-027d-4969-aa8e-0f016417984b.webp", className: "col-span-2 md:col-span-2 lg:col-span-3 row-span-2" },
  { src: "/gallery/d225d728-43ad-4d7b-b212-8145f90c5c90.webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/d540ab1e-8b7e-484c-823f-91d36814a2a8.webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/e5bce71e-20cb-4927-bd50-08b7baf3ca40.webp", className: "col-span-2 md:col-span-2 row-span-1" },
  { src: "/gallery/f9e75995-71f1-4ffa-8f07-6654cd3a2bbf.webp", className: "col-span-1 md:col-span-1 row-span-2" },
  { src: "/gallery/görsel_3.webp", className: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/gallery/image (1).webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/turhal_6.webp", className: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/gallery/turhal_8.webp", className: "col-span-2 md:col-span-4 lg:col-span-4 row-span-2" }
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryData.length - 1));
    }
    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev !== null && prev < galleryData.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < galleryData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryData.length - 1));
  };

  return (
    <>
      <div className="w-full min-h-screen bg-background relative z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-8 md:py-16 flex flex-col"
        >
          {/* Header Content */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-10 flex flex-col items-start border-b-2 border-foreground pb-6 w-full relative">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest opacity-40 select-none block mb-4">
              DÜZEN_03 / GALERİ
            </span>
            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] text-foreground mb-4">
              GÖRSEL<br />MANİFESTO<span className="text-accent text-5xl md:text-[5rem]">.</span>
            </h1>
            <div className="flex w-full items-end justify-between border-t-2 border-foreground/20 pt-4 mt-2">
              <p className="font-mono font-bold text-sm md:text-base uppercase tracking-widest opacity-90 text-background bg-foreground px-3 py-1.5 inline-block shadow-[4px_4px_0_var(--color-rust)]">
                Atmosferimizle Tanışın."
              </p>
              <span className="hidden md:block font-mono text-base font-black opacity-30 tracking-tighter">
                15 KARE
              </span>
            </div>
          </motion.div>

          {/* Brutalist Grid System */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-6 auto-rows-[160px] sm:auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[340px]">
            {galleryData.map((item, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className={`relative group block ${item.className} z-10 hover:z-20 cursor-pointer`}
                onClick={() => setSelectedIndex(i)}
              >
                {/* Hover yapıldığında kutuyu hareket ettirip gölge bırakacağız */}
                <div className="w-full h-full relative border-2 border-foreground bg-foreground overflow-hidden transition-all duration-0 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_var(--color-rust)] dark:group-hover:shadow-[4px_4px_0_var(--color-rust)] will-change-transform rounded-none">
                  <Image
                    src={item.src}
                    alt={`Manifesto Frame ${i + 1}`}
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover object-center saturate-50 contrast-[1.10] opacity-90 group-hover:saturate-100 group-hover:contrast-100 group-hover:opacity-100 transition-none duration-0"
                  />
                  {/* Kırmızı/Kiremit filtre izlenimi */}
                  <div className="absolute inset-0 bg-accent mix-blend-color opacity-0 group-hover:opacity-20 transition-none duration-0 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Indicator */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-16 border-t-[2px] border-foreground pt-6 flex justify-between items-center text-foreground font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-50 relative">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent animate-pulse"></div>
              GERÇEKTE DAHA ETKİLEYİCİ...
            </span>
            <span className="px-2 py-1 border-2 border-foreground/50">SON.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Fullscreen Brutalist Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Header Frame */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center bg-transparent z-[110] pointer-events-none">
              <span className="font-mono font-bold text-foreground text-xs md:text-sm uppercase opacity-50 tracking-widest border-2 border-foreground px-3 py-1 bg-background pointer-events-auto">
                [ {(selectedIndex + 1).toString().padStart(3, '0')} / {galleryData.length.toString().padStart(3, '0')} ]
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                className="p-1.5 md:p-2 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors pointer-events-auto transform hover:scale-95 duration-100"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-3 md:left-6 flex items-center z-[110] pointer-events-none">
              <button
                onClick={handlePrev}
                className="p-2 md:p-3 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors pointer-events-auto shadow-[4px_4px_0_var(--color-rust)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none duration-100 group"
              >
                <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform duration-100" strokeWidth={3} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-3 md:right-6 flex items-center z-[110] pointer-events-none">
              <button
                onClick={handleNext}
                className="p-2 md:p-3 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors pointer-events-auto shadow-[4px_4px_0_var(--color-rust)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none duration-100 group"
              >
                <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-100" strokeWidth={3} />
              </button>
            </div>

            {/* Dynamic Image Canvas */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0, filter: "saturate(50%)" }}
              animate={{ scale: 1, opacity: 1, filter: "saturate(100%)" }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="relative w-[85vw] md:w-[75vw] xl:w-[65vw] h-[60vh] md:h-[75vh] border-2 border-foreground bg-foreground overflow-hidden shadow-[8px_8px_0_var(--color-rust)] z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryData[selectedIndex].src}
                alt={`Manifesto Detail Frame ${selectedIndex + 1}`}
                fill
                unoptimized
                quality={100}
                className="object-cover md:object-contain object-center pointer-events-none"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
