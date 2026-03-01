"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import images from "@/config/images.json";

const RSVP = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="rsvp" className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Image with Fixed Effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${images.giftRegistry.background})` }}
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-80"
                style={{ backgroundColor: 'rgb(180, 210, 200)' }}
            />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-serif drop-shadow-md">
                        {t("rsvp.title")}
                    </h2>
                    <div className="w-24 h-0.5 bg-white/40 mx-auto" />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-teal-800 rounded-full font-bold uppercase tracking-widest shadow-xl hover:bg-gray-100 transition-colors text-sm sm:text-base"
                    >
                        {t("rsvp.button")}
                    </motion.button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default RSVP;
