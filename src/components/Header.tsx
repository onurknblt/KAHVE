"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "MANIFESTO", href: "/hakkimizda" },
    { name: "GALERİ", href: "/galeri" },
    { name: "LOKASYONLAR", href: "/subeler" },
    { name: "İLETİŞİM", href: "/iletisim" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 border-b-2 ${
        isScrolled
          ? "border-foreground bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-20 items-stretch justify-between">

        {/* LOGO AREA */}
        <Link href="/" className={`flex items-center border-r-2 px-6 md:px-10 hover:bg-foreground hover:text-background transition-colors duration-200 group ${isScrolled ? "border-foreground" : "border-transparent"}`}>
          <div className="relative h-10 w-28 md:h-12 md:w-36">
            <Image
              src="/logo-cropped.svg"
              alt="KAHVE Turkish Coffee"
              fill
              className="object-contain object-left dark:invert"
              priority
            />
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex flex-1 items-stretch">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-6 lg:px-8 border-r-2 font-mono font-bold uppercase text-sm transition-colors duration-200 group h-full ${
                isActive(link.href)
                  ? "border-foreground bg-foreground text-background"
                  : "border-transparent hover:border-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              <span className="tracking-widest">{link.name}</span>
              {isActive(link.href) ? (
                <span className="w-1.5 h-1.5 bg-accent ml-3 inline-block"></span>
              ) : (
                <span className="w-1.5 h-1.5 bg-accent ml-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-stretch">

          <div className={`hidden md:flex items-center border-l-2 px-6 lg:px-10 gap-6 font-mono text-xs uppercase font-bold text-foreground transition-colors duration-500 ${isScrolled ? "border-foreground" : "border-transparent"}`}>
            <span className="opacity-50">DİL</span>
            <div className="flex gap-4">
              <span className="border-b-2 border-accent text-accent cursor-default pb-1">TR</span>
              <span className="hover:text-accent transition-colors cursor-pointer pb-1">RU</span>
              <span className="hover:text-accent transition-colors cursor-pointer pb-1">EN</span>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center border-l-2 px-6 md:px-10 hover:bg-foreground hover:text-background transition-colors duration-200 group ${isScrolled ? "border-foreground" : "border-transparent"}`}
            aria-label="TEMA DEĞİŞTİR"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5 group-hover:text-accent transition-colors duration-200" />
              ) : (
                <Moon className="h-5 w-5 group-hover:text-accent transition-colors duration-200" />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>

          {/* MOBILE MENU TRIGGER */}
          <MobileMenu isScrolled={isScrolled} pathname={pathname} />
        </div>
      </div>
    </header>
  );
};
