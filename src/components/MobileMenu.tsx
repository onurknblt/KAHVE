"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isScrolled: boolean;
  pathname: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isScrolled, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "MANIFESTO", href: "/hakkimizda" },
    { name: "GALERİ", href: "/galeri" },
    { name: "LOKASYONLAR", href: "/subeler" },
    { name: "İLETİŞİM", href: "/iletisim" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden flex items-center justify-center border-l-2 px-6 hover:bg-foreground hover:text-background transition-colors duration-200 ${
          isScrolled ? "border-foreground" : "border-transparent"
        }`}
        aria-label="MOBİL MENÜ BAŞLAT"
      >
        <Menu className="h-6 w-6" />
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-[100] flex flex-col"
              style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
              {/* Mobile Header Area */}
              <div
                className="flex h-20 items-stretch justify-between border-b-2 border-foreground shrink-0"
                style={{ backgroundColor: "var(--background)" }}
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center border-r-2 border-foreground px-6 hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  <div className="relative h-10 w-28">
                    <Image
                      src="/logo-cropped.svg"
                      alt="KAHVE"
                      fill
                      className="object-contain object-left dark:invert"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center border-l-2 border-foreground px-8 hover:bg-foreground hover:text-background transition-colors duration-200 group"
                  aria-label="MENÜYÜ KAPAT"
                >
                  <X className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </div>

              {/* Nav Links Stack (Brutalist Rows) */}
              <nav className="flex flex-col flex-1 divide-y-2 divide-foreground overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex justify-between items-center px-8 py-10 group transition-colors duration-300 ${
                        isActive(link.href)
                          ? "bg-foreground text-background"
                          : "hover:bg-foreground hover:text-background"
                      }`}
                    >
                      <span className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter group-hover:scale-[1.02] transition-transform origin-left">
                        {link.name}
                      </span>
                      <span className={`font-mono text-xs font-bold transition-all duration-300 ${
                        isActive(link.href) ? "opacity-100 text-accent" : "opacity-30 group-hover:opacity-100 group-hover:text-accent"
                      }`}>
                        {isActive(link.href) ? "●" : `[0${idx + 1}]`}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* System Actions Area */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto border-t-2 border-foreground bg-foreground text-background flex flex-col"
                >
                  {/* Language Row */}
                  <div className="px-8 py-6 flex justify-between items-center">
                    <span className="font-mono text-xs font-bold uppercase opacity-50 tracking-widest">DİL_SİSTEMİ</span>
                    <div className="flex gap-5 font-mono font-bold text-sm">
                      <span className="border-b-2 border-accent text-accent leading-none pb-0.5">TR</span>
                      <span className="hover:text-accent hover:border-b-2 hover:border-accent transition-all leading-none pb-0.5 border-b-2 border-transparent">RU</span>
                      <span className="hover:text-accent hover:border-b-2 hover:border-accent transition-all leading-none pb-0.5 border-b-2 border-transparent">EN</span>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
