"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    },
};

export default function ManifestoPage() {
    return (
        <div className="w-full min-h-screen bg-background relative z-10 flex flex-col items-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-8 md:py-16 flex flex-col"
            >
                <motion.h1
                    variants={itemVariants}
                    className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.85] mb-10 md:mb-16 text-foreground"
                >
                    Lezzetin<br />Mirası<span className="text-accent text-5xl md:text-6xl">.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 relative">

                    {/* Left Accent Bar / Typographic Detail */}
                    <div className="hidden md:flex flex-col border-r-2 border-foreground pr-6 relative">
                        <div className="sticky top-32 flex flex-col gap-12">
                            <div>
                                <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-40 select-none block mb-4">
                                    DOKÜMAN_01 / MANİFESTO
                                </span>
                                <div className="w-full h-2 bg-accent mb-4"></div>
                                <span className="font-display font-black text-3xl uppercase tracking-tighter opacity-10 leading-none block">
                                    GERÇEK KAHVE DENEYİMİ.
                                </span>
                            </div>

                            {/* Brutalist Image Wrapper */}
                            <motion.div variants={itemVariants} className="relative w-full aspect-[4/5] border-2 border-foreground shadow-[4px_4px_0_var(--color-rust)] overflow-hidden group bg-foreground">
                                <Image
                                    src="/hakkimizda_resim.webp"
                                    alt="Kurumsal Vizyon"
                                    fill
                                    className="object-cover object-center grayscale opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Content Stream */}
                    <div className="flex flex-col space-y-8 md:space-y-12 font-mono text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose uppercase font-semibold text-foreground">
                        <motion.p variants={itemVariants}>
                            Rusya'da kurulan Kahve Turkish Coffee, <span className="underline decoration-[4px] decoration-accent underline-offset-4">geleneksel Türk kahvesi</span> kültürünün otantik ve zengin mirasına duyulan derin tutkunun bir eseridir. Amacımız, yüzyıllara dayanan demleme tekniklerini, bilinçli kahve tutkunlarının modern beklentileriyle kusursuz bir şekilde harmanlamaktır.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            Dünyanın dört bir yanındaki sürdürülebilir tarım arazilerinden, yalnızca en kaliteli kahve çekirdeklerini özenle seçiyoruz. Kavurma ustalarımız, bu çekirdekleri en derin ve karmaşık lezzet notalarını ortaya çıkaracak hassas profiller kullanarak büyük bir özenle işler.
                        </motion.p>

                        <motion.div variants={itemVariants} className="my-6 md:my-10 pl-4 md:pl-6 border-l-4 md:border-l-[6px] border-accent py-2 md:py-3 relative">
                            <p className="font-display font-black text-xl md:text-3xl lg:text-4xl tracking-tighter leading-[1.1] normal-case bg-transparent">
                                “SUNDUĞUMUZ HER FİNCAN, GEÇMİŞLE BUGÜN ARASINDA BİR KÖPRÜ, AROMAYLA HARMANLANMIŞ ANLIK BİR MOLA YERİDİR.”
                            </p>
                        </motion.div>

                        <motion.p variants={itemVariants}>
                            Herhangi bir Kahve Turkish Coffee şubesinden içeri adım attığınızda, sadece bir müşteri değil, <span className="bg-foreground text-background px-2 py-1 mx-1 shadow-[4px_4px_0_var(--color-rust)] border-[2px] border-foreground inline-block my-1 md:my-0 rotate-1">BİZİM MİSAFİRİMİZ</span> olursunuz. Geleneksel Türk misafirperverliğinin o sıcak ve davetkâr atmosferini yeniden yaratmak için çabalıyor, bizimle geçirdiğiniz zamanın en az kahvemiz kadar unutulmaz olmasını sağlıyoruz.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-12 flex border-t-2 border-foreground items-end justify-between mt-auto">
                            <div className="font-display font-black text-xl md:text-3xl uppercase opacity-20 tracking-tighter">
                                Tavizsiz Kalite.
                            </div>
                            <img
                                src="/imza.svg"
                                alt="İmza"
                                className="w-[150px] md:w-[250px] filter invert dark:invert-0 mix-blend-screen dark:mix-blend-multiply pointer-events-none"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
