"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { sendEmailAction } from "../actions/sendEmail";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isKvkkOpen, setIsKvkkOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await sendEmailAction(formData);

    if (result.error) {
      setStatus("error");
    } else {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleChange = () => {
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <main className="min-h-screen pt-16 md:pt-24 pb-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-6 md:mb-12 border-b-2 border-black dark:border-white pb-6"
      >
        <motion.h1 variants={itemVariants} className="text-[8vw] leading-none md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter font-display mb-3 lg:mb-4">
          İLETİŞİM HATTI.
        </motion.h1>
        <motion.p variants={itemVariants} className="font-mono text-sm md:text-lg uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          Önerileriniz, şikayetleriniz ve iş birliği talepleriniz için buradayız.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-black dark:border-white">
        {/* Sol Blok: Koordinatlar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-white p-5 md:p-8 xl:p-12 flex flex-col justify-between bg-neutral-100 dark:bg-neutral-900"
        >
          <div className="space-y-8 md:space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Protokol [01] // E-Posta
              </h2>
              <a
                href="mailto:info@kahveturkishcoffee.com"
                className="group flex items-center font-display text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold uppercase tracking-tight hover:text-[#B5433C] transition-colors break-all"
              >
                info@kahveturkishcoffee.com
                <ArrowUpRight className="ml-2 w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" strokeWidth={3} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Protokol [02] // Şebeke
              </h2>
              <a
                href="tel:+905053744013"
                className="group flex items-center font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold uppercase tracking-tight hover:text-[#B5433C] transition-colors"
              >
                +90 505 374 40 13
                <ArrowUpRight className="ml-2 w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" strokeWidth={3} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <blockquote className="font-display text-base md:text-lg xl:text-xl font-bold tracking-tight max-w-sm leading-snug border-l-4 border-[#B5433C] pl-4 italic">
                “İletişimdeki en önemli şey söylenmemiş olanı duymaktır.”
                <cite className="block font-mono text-[10px] font-bold not-italic uppercase tracking-widest opacity-60 mt-2">
                  — Peter Drucker
                </cite>
              </blockquote>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 xl:mt-16 pt-6 border-t-2 border-black dark:border-white flex flex-col gap-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-50">Instagram / Şubelerimiz</span>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/kahve_trcoffee/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B5433C] hover:-translate-x-1 transition-all">
                → @kahve_trcoffee <span className="opacity-40 font-normal normal-case">Maykop (Proletarskaya)</span>
              </a>
              <a href="https://www.instagram.com/kahveturkishcoffee.rus/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B5433C] hover:-translate-x-1 transition-all">
                → @kahveturkishcoffee.rus <span className="opacity-40 font-normal normal-case">Maykop (Krasnooktyabrskaya)</span>
              </a>
              <a href="https://www.instagram.com/zilekahveturkishcoffee/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B5433C] hover:-translate-x-1 transition-all">
                → @zilekahveturkishcoffee <span className="opacity-40 font-normal normal-case">Tokat (Zile)</span>
              </a>
              <a href="https://www.instagram.com/kahveturkishcoffee/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#B5433C] hover:-translate-x-1 transition-all">
                → @kahveturkishcoffee <span className="opacity-40 font-normal normal-case">Tokat (Turhal)</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Sağ Blok: Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-5 md:p-8 xl:p-12 bg-white dark:bg-black"
        >
          <form onSubmit={handleSubmit} onChange={handleChange} className="flex flex-col h-full justify-between space-y-8">
            <div className="space-y-4 md:space-y-6">
              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="name" className="font-mono text-[10px] md:text-xs font-bold uppercase mb-1.5">Kimlik [Ad Soyad]</label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-2 border-black dark:border-white p-3 md:p-4 font-mono text-sm md:text-base focus:outline-none focus:bg-[#B5433C] focus:text-white focus:border-[#B5433C] dark:focus:border-[#B5433C] transition-colors rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:placeholder:text-white/50"
                  placeholder="Zorunlu Alan"
                  disabled={status === 'loading'}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="email" className="font-mono text-[10px] md:text-xs font-bold uppercase mb-1.5">Ağ [E-Posta]</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-2 border-black dark:border-white p-3 md:p-4 font-mono text-sm md:text-base focus:outline-none focus:bg-[#B5433C] focus:text-white focus:border-[#B5433C] dark:focus:border-[#B5433C] transition-colors rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:placeholder:text-white/50"
                  placeholder="ornek@domain.com"
                  disabled={status === 'loading'}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="phone" className="font-mono text-[10px] md:text-xs font-bold uppercase mb-1.5">Hat [Telefon]</label>
                <input
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-transparent border-2 border-black dark:border-white p-3 md:p-4 font-mono text-sm md:text-base focus:outline-none focus:bg-[#B5433C] focus:text-white focus:border-[#B5433C] dark:focus:border-[#B5433C] transition-colors rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:placeholder:text-white/50"
                  placeholder="+90 5__ ___ __ __"
                  disabled={status === 'loading'}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="subject" className="font-mono text-[10px] md:text-xs font-bold uppercase mb-1.5">Konu [Kategori]</label>
                <input
                  required
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full bg-transparent border-2 border-black dark:border-white p-3 md:p-4 font-mono text-sm md:text-base focus:outline-none focus:bg-[#B5433C] focus:text-white focus:border-[#B5433C] dark:focus:border-[#B5433C] transition-colors rounded-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:placeholder:text-white/50"
                  placeholder="İş Birliği / Şikayet / Diğer"
                  disabled={status === 'loading'}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="message" className="font-mono text-[10px] md:text-xs font-bold uppercase mb-1.5">Veri [İleti]</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-2 border-black dark:border-white p-3 md:p-4 font-mono text-sm md:text-base focus:outline-none focus:bg-[#B5433C] focus:text-white focus:border-[#B5433C] dark:focus:border-[#B5433C] transition-colors rounded-none resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:placeholder:text-white/50"
                  placeholder="Mesajınızı buraya girin..."
                  disabled={status === 'loading'}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="flex gap-3 items-start mt-2">
                <input
                  type="checkbox"
                  id="kvkk"
                  name="kvkk"
                  required
                  className="mt-0.5 w-4 h-4 md:w-5 md:h-5 accent-[#B5433C] cursor-pointer shrink-0 rounded-none border-2 border-foreground"
                />
                <label htmlFor="kvkk" className="font-mono text-[10px] md:text-xs leading-tight opacity-80 cursor-pointer">
                  <button type="button" onClick={() => setIsKvkkOpen(true)} className="underline underline-offset-4 hover:text-[#B5433C] font-bold">KVKK Aydınlatma ve Rıza Metni</button>'ni okudum ve kabul ediyorum.
                </label>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-2 flex flex-col gap-3">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#10B981] text-black border-2 border-black p-4 md:p-6 shadow-[4px_4px_0_var(--color-rust)] flex items-center justify-center text-center w-full"
                >
                  <span className="font-display text-xl md:text-3xl font-black uppercase tracking-tight">[✓] MESAJ ALINDI.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#B5433C] text-white border-2 border-black dark:border-white p-4 md:p-6 shadow-[4px_4px_0_var(--color-rust)] flex items-center justify-center text-center w-full"
                >
                  <span className="font-display text-xl md:text-3xl font-black uppercase tracking-tight">[!] HATA OLUŞTU.</span>
                </motion.div>
              )}

              {status !== 'success' && (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white p-4 md:p-6 font-display text-2xl md:text-4xl font-black uppercase tracking-tight hover:invert transition-all rounded-none shadow-[4px_4px_0_var(--color-rust)] disabled:opacity-70 disabled:hover:invert-0 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'İLETİLİYOR...' : 'GÖNDER'}
                </button>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* KVKK MODAL */}
      <AnimatePresence>
        {isKvkkOpen && (
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
                onClick={() => setIsKvkkOpen(false)}
                className="absolute top-4 right-4 hover:text-[#B5433C] transition-colors"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter mb-4 border-b-2 border-black dark:border-white pb-2">
                KVKK Aydınlatma ve Rıza Metni
              </h3>
              <p className="font-mono text-xs leading-relaxed opacity-80 text-justify">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, bizimle iletişim formu aracılığıyla paylaştığınız Ad Soyad, E-posta, Telefon Numarası vb. kişisel verileriniz, taleplerinizin değerlendirilmesi, işlenmesi ve tarafınıza geri dönüş sağlanması amacıyla şirketimiz tarafından işlenmektedir. Kişisel verileriniz yasal mevzuata uygun şekilde korunmakta olup, açık rızanız olmaksızın yetkisiz üçüncü şahıslarla paylaşılmamaktadır.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
