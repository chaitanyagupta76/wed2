"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getMarriageDate, formatWeddingDate } from "@/utils/dateUtils";
import images from "@/config/images.json";

const LiveStream = () => {
    const { t, language } = useLanguage();
    const marriageDate = getMarriageDate();
    const dateLong = formatWeddingDate(marriageDate, language as 'en' | 'te', 'long');

    return (
        <SectionWrapper id="live" className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Image with Fixed Effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${images.countdown.background})` }}
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-85 bg-teal-900"
            />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-3 px-6 py-2 bg-red-600 text-white rounded-full animate-pulse mb-4">
                        <span className="w-3 h-3 bg-white rounded-full" />
                        <span className="font-bold uppercase tracking-widest text-sm">Live</span>
                    </div>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-serif drop-shadow-md">
                        {t("liveStream.title")}
                    </h2>

                    <div className="w-24 h-0.5 bg-white/40 mx-auto" />

                    <p className="text-white text-base sm:text-xl md:text-2xl font-light italic max-w-2xl mx-auto px-4">
                        {language === 'te'
                            ? `మేము ${dateLong}న లైవ్ వస్తాము.`
                            : `We will be live on ${dateLong}.`
                        }
                    </p>

                    <div className="pt-8">
                        <motion.div
                            className="inline-block p-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            <button className="px-8 sm:px-12 py-3 sm:py-4 bg-teal-900 text-white rounded-full font-bold uppercase tracking-widest hover:bg-transparent transition-colors text-sm sm:text-base">
                                {language === 'en' ? 'Pending Link' : 'లింక్ కోసం వేచి ఉండండి'}
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default LiveStream;
