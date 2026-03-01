"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import images from "@/config/images.json";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Fixed Effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${images.footer.background})` }}
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-80"
                style={{ backgroundColor: 'rgb(0, 0, 0)' }}
            />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center space-y-8"
                >
                    <div className="flex justify-center gap-6 mb-8">
                        <motion.img
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            src={images.story.small_icons.heart_2}
                            alt="Heart"
                            className="w-8 h-8"
                        />
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            src={images.story.small_icons.heart_1}
                            alt="Heart"
                            className="w-10 h-10"
                        />
                        <motion.img
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            src={images.story.small_icons.heart_3}
                            alt="Heart"
                            className="w-8 h-8"
                        />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight max-w-4xl mx-auto px-4">
                        {t("footer.text")}
                    </h2>

                    <div className="pt-12 border-t border-white/20 mt-16 max-w-lg mx-auto">
                        <span className="text-white/60 font-serif tracking-widest uppercase text-sm">
                            Made for Venkatesh & Srilatha
                        </span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
