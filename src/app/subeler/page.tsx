"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, ArrowUpRight, Clock, Map } from "lucide-react";

export default function LocationsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const locations = {
    tr: [
      {
        id: "TR-01",
        name: "TOKAT / ZİLE",
        address: "Yunusemre, Dinçerler Cd. No:71, 60400 Zile/Tokat",
        hours: "10.00-00.00",
        coordinates: "40.3015° N, 35.8885° E",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Yunusemre,+Dinçerler+Cd.+No:71,+60400+Zile/Tokat"
      },
      {
        id: "TR-02",
        name: "TOKAT / TURHAL",
        address: "Cumhuriyet, Cumhuriyet Cd. no:162 D:2A, 60300 Turhal/Tokat",
        hours: "10.00-00.00",
        coordinates: "40.3883° N, 36.0827° E",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Cumhuriyet,+Cumhuriyet+Cd.+no:162+D:2A,+60300+Turhal/Tokat"
      }
    ],
    ru: [
      {
        id: "RU-01",
        name: "MAYKOP / PROLETARSKAYA",
        address: "Proletarskaya Ulitsa, 269, Maykop, Rusya, 385000",
        hours: "08.00-00.00",
        coordinates: "44.6065° N, 40.1065° E",
        mapLink: "https://www.google.com/maps?q=44.60997948239388,40.095266463912246"
      },
      {
        id: "RU-02",
        name: "MAYKOP / KRASNO",
        address: "Krasnooktyabrskaya Ulitsa, 269, Maykop, Rusya, 385000",
        hours: "08.00-00.00",
        coordinates: "44.6080° N, 40.1080° E",
        mapLink: "https://www.google.com/maps?q=44.608701778141665,40.10150044585826"
      }
    ]
  };

  return (
    <div className="flex flex-col relative z-10 w-full min-h-screen max-w-[1440px] mx-auto border-x-2 border-foreground bg-background">

      {/* HERO SECTION */}
      <section className="w-full flex-col flex border-b-2 border-foreground bg-transparent">
        <motion.div
          className="p-6 md:p-10 flex flex-col justify-end min-h-[30vh] lg:min-h-[35vh]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-foreground mb-5"
          >
            LOKASYONLAR.
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 max-w-2xl">
            <span className="w-12 md:w-16 h-[2px] bg-accent inline-block shrink-0"></span>
            <p className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-foreground opacity-90 leading-relaxed">
              BİR MİMARİ PLAN. DÖRT HİZMET NOKTASI.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="w-full bg-background border-b-2 border-foreground">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x-2 divide-foreground w-full"
        >

          {/* TÜRKİYE COLUMN */}
          <div className="flex flex-col w-full border-b-2 lg:border-b-0 border-foreground">
            {/* Region Header */}
            <div className="p-4 lg:p-6 border-b-2 border-foreground bg-foreground text-background flex justify-between items-center group">
              <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">TÜRKİYE</h2>
              <MapPin className="w-5 h-5 md:w-6 md:h-6 shrink-0 opacity-80" />
            </div>

            {/* Branches List */}
            <div className="flex flex-col divide-y-2 lg:divide-y-0 lg:grid lg:grid-rows-2 h-full">
              {locations.tr.map((loc, i) => (
                <motion.div key={loc.id} variants={itemVariants} className={`p-4 lg:p-6 flex flex-col group relative overflow-hidden hover:bg-asphalt hover:text-white transition-colors duration-500 min-h-[250px] ${i === 0 ? "lg:border-b-2 border-foreground" : ""}`}>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-5 lg:mb-6 gap-2">
                    <span className="font-mono text-[9px] md:text-[10px] font-bold bg-foreground text-background group-hover:bg-accent group-hover:text-white transition-colors py-1 px-2 md:py-1.5 md:px-2.5 shadow-[2px_2px_0_var(--color-rust)] group-hover:shadow-[4px_4px_0_var(--color-base-white)]">
                      {loc.id}
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] opacity-50 tracking-widest uppercase py-1">KOORD/ {loc.coordinates}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl lg:text-2xl uppercase tracking-tighter mb-3">{loc.name}</h3>

                  <ul className="font-mono text-sm md:text-sm space-y-3 mb-10 opacity-90">
                    <li className="flex items-start gap-2">
                      <Map className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span className="leading-snug">{loc.address}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span className="leading-snug">OP. SAATLERİ: {loc.hours}</span>
                    </li>
                  </ul>

                  <div className="mt-auto pt-4">
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="w-full flex justify-between items-center bg-transparent text-current border-[2px] border-current p-3 md:p-4 font-mono font-bold uppercase text-sm lg:text-base md:hard-shadow hover:!bg-accent hover:!text-white hover:!border-accent hover:!hard-shadow-accent-hover transition-all duration-300">
                      HARİTADA GÖR
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300 transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RUSYA COLUMN */}
          <div className="flex flex-col w-full">
            {/* Region Header */}
            <div className="p-4 lg:p-6 border-b-2 border-foreground bg-foreground text-background flex justify-between items-center group">
              <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">RUSYA</h2>
              <MapPin className="w-5 h-5 md:w-6 md:h-6 shrink-0 opacity-80" />
            </div>

            {/* Branches List */}
            <div className="flex flex-col divide-y-2 lg:divide-y-0 lg:grid lg:grid-rows-2 h-full">
              {locations.ru.map((loc, i) => (
                <motion.div key={loc.id} variants={itemVariants} className={`p-4 lg:p-6 flex flex-col group relative overflow-hidden hover:bg-asphalt hover:text-white transition-colors duration-500 min-h-[250px] ${i === 0 ? "lg:border-b-2 border-foreground" : ""}`}>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-5 lg:mb-6 gap-2">
                    <span className="font-mono text-[9px] md:text-[10px] font-bold bg-foreground text-background group-hover:bg-accent group-hover:text-white transition-colors py-1 px-2 md:py-1.5 md:px-2.5 shadow-[2px_2px_0_var(--color-rust)] group-hover:shadow-[4px_4px_0_var(--color-base-white)]">
                      {loc.id}
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] opacity-50 tracking-widest uppercase py-1">KOORD/ {loc.coordinates}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl lg:text-2xl uppercase tracking-tighter mb-3">{loc.name}</h3>

                  <ul className="font-mono text-sm md:text-sm space-y-3 mb-10 opacity-90">
                    <li className="flex items-start gap-2">
                      <Map className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span className="leading-snug">{loc.address}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span className="leading-snug">OP. SAATLERİ: {loc.hours}</span>
                    </li>
                  </ul>

                  <div className="mt-auto pt-4">
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="w-full flex justify-between items-center bg-transparent text-current border-[2px] border-current p-3 md:p-4 font-mono font-bold uppercase text-sm lg:text-base md:hard-shadow hover:!bg-accent hover:!text-white hover:!border-accent hover:!hard-shadow-accent-hover transition-all duration-300">
                      HARİTADA GÖR
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300 transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
