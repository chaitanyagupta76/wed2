"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getMarriageDate, formatWeddingDate } from "@/utils/dateUtils";
import images from "@/config/images.json";

const Hero = () => {
    const { t, language } = useLanguage();
    const marriageDate = getMarriageDate();
    const formattedDate = formatWeddingDate(marriageDate, language as 'en' | 'te', 'short');
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // The content.hero.enabled check is removed as content.json is no longer imported.
    // Assuming the component should always render or this check is handled elsewhere.

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${images.hero.background})` }}
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Container */}
            <div className="container relative z-10 text-center text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Main Logo/Save the Date */}
                    <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] relative">
                        <img
                            src={images.hero.logo}
                            alt="Save the Date"
                            className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                    </div>

                    {/* Date */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-white text-base sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] font-light mb-4 sm:mb-8 drop-shadow-md"
                    >
                        {formattedDate}
                    </motion.div>

                    {/* Names */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="mt-[-1rem] sm:mt-[-2rem] md:mt-[-4rem]"
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-7xl font-serif drop-shadow-lg tracking-tight">
                            {t("hero.names")}
                        </h3>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.a
                href="#story"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
            >
                <span className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4 group-hover:text-white transition-colors">
                    {t("general.scrollText")}
                </span>
                <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/3 bg-white"
                    />
                </div>
            </motion.a>
        </section>
    );
};

export default Hero;
