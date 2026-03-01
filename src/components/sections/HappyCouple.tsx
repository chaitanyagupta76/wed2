"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getMarriageDate, formatWeddingDate } from "@/utils/dateUtils";
import images from "@/config/images.json";

const HappyCouple = () => {
    const { t, language } = useLanguage();
    const marriageDate = getMarriageDate();
    const dateLong = formatWeddingDate(marriageDate, language as 'en' | 'te', 'long');

    return (
        <section id="couple" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Fixed Effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${images.happyCouple.background})` }}
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-90"
                style={{ backgroundColor: 'rgb(180, 210, 200)' }}
            />

            <div className="container mx-auto px-4 relative z-10 py-20 text-white">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-6 sm:mb-8 drop-shadow-md">
                        {t("happyCouple.sectionTitle")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                    {/* Groom */}
                    <motion.div
                        initial={{ x: "-30%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden shadow-2xl border-4 border-white/50">
                            <img
                                src={images.happyCouple.groom}
                                alt="Groom"
                                className="w-full h-full object-cover grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
                                <h6 className="text-xl sm:text-3xl md:text-4xl font-serif leading-tight">
                                    {t("happyCouple.groom.firstName")}<br />
                                    <span className="font-light opacity-80">{t("happyCouple.groom.lastName")}</span>
                                </h6>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bride */}
                    <motion.div
                        initial={{ x: "30%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden shadow-2xl border-4 border-white/50">
                            <img
                                src={images.happyCouple.bride}
                                alt="Bride"
                                className="w-full h-full object-cover grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-right">
                                <h6 className="text-xl sm:text-3xl md:text-4xl font-serif leading-tight">
                                    {t("happyCouple.bride.firstName")}<br />
                                    <span className="font-light opacity-80">{t("happyCouple.bride.lastName")}</span>
                                </h6>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Invitation Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-4 sm:mb-6">{t("happyCouple.invitation")}</h3>
                    <p className="text-base sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed whitespace-pre-line drop-shadow-sm">
                        {language === 'te'
                            ? `${dateLong}న\nచైతన్య గుప్తా & మాలికా దేవి\nఆర్యా వైశ్య కళ్యాణ మండపం, ఆకివీడు.`
                            : `On the ${dateLong}\nChaitanya Gupta & Malika Devi\nArya vysya kalyana mandapam, Akividu.`
                        }
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HappyCouple;
