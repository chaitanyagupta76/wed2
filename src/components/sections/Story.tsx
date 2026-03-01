"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getMarriageDate, formatWeddingDate } from "@/utils/dateUtils";
import images from "@/config/images.json";
import content from "@/config/content.json"; // Assuming content is imported from here

const Story = () => {
    const { t, language } = useLanguage();
    const marriageDate = getMarriageDate(1);
    const dateLong = formatWeddingDate(marriageDate, language as 'en' | 'te', 'long');

    // Relative dates
    const metDate = formatWeddingDate(getMarriageDate(-7), language as 'en' | 'te', 'long');
    const knottedDate = formatWeddingDate(getMarriageDate(-6), language as 'en' | 'te', 'long');
    const engagementDate = formatWeddingDate(getMarriageDate(-5), language as 'en' | 'te', 'long');

    const relativeDates = [metDate, knottedDate, engagementDate, dateLong];

    const story = content.story;

    if (!story.enabled) return null;

    return (
        <SectionWrapper id="story" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                        {language === "en" ? "Our" : "మా"}
                        <img src={images.story.title_icon} alt="Heart" className="w-10 h-10 md:w-12 md:h-12 inline-block mx-2" />
                        {language === "en" ? "Story" : "కథ"}
                    </h2>
                </div>

                {/* Timeline Line (Desktop) */}
                <div className="absolute left-1/2 top-[300px] bottom-0 w-0.5 bg-gray-100 hidden md:block -translate-x-1/2" />

                {/* Timeline Events */}
                <div className="space-y-16 sm:space-y-24 md:space-y-32 relative">
                    {story.events.map((event, index) => {
                        const isEven = index % 2 === 0;
                        const itemImages = [
                            images.story.first_met,
                            images.story.knotted,
                            images.story.engagement,
                            images.story.wedding_day
                        ];
                        const iconKey = ["couple_1", "couple_2", "small_couple_third", "small_couple"][index];

                        return (
                            <div key={event.id} className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-12">
                                {/* Image Side */}
                                <motion.div
                                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}
                                >
                                    <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                                        <img
                                            src={itemImages[index]}
                                            alt={event.title.en}
                                            className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-teal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                                            <span className="text-xl font-serif font-bold">{t(`story.events.${index}.title`)}</span>
                                            <span className="text-sm tracking-widest uppercase">{t(`story.events.${index}.location`)}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Central Icon with Floating Hearts */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
                                    <div className="relative group">
                                        {/* Couple Icon */}
                                        <div className="bg-white p-3 rounded-full shadow-lg border border-gray-100">
                                            <img
                                                // @ts-expect-error iconKey is dynamic
                                                src={images.story.small_icons[iconKey]}
                                                alt="Icon"
                                                className="w-16 h-16 object-contain"
                                            />
                                        </div>

                                        {/* Heart Decorations */}
                                        <motion.img
                                            animate={{ y: [-10, -30, -10], opacity: [0, 1, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                            src={images.story.small_icons.heart_1}
                                            className="absolute -top-4 left-0 w-4 h-4"
                                        />
                                        <motion.img
                                            animate={{ y: [-15, -40, -15], opacity: [0, 1, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                            src={images.story.small_icons.heart_2}
                                            className="absolute -top-8 -right-2 w-5 h-5"
                                        />
                                        <motion.img
                                            animate={{ y: [-5, -25, -5], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                            src={images.story.small_icons.heart_3}
                                            className="absolute top-0 -left-6 w-4 h-4"
                                        />
                                    </div>
                                </div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:order-2 items-center md:items-start text-center md:text-left" : "md:order-1 items-center md:items-end text-center md:text-right"}`}
                                >
                                    <div className="bg-teal-50/50 p-5 sm:p-8 rounded-3xl border border-teal-100/50 backdrop-blur-sm max-w-lg w-full relative overflow-hidden">
                                        {/* Mobile stencil icon - top left corner */}
                                        <div className="float-left mr-3 mb-1 md:hidden">
                                            <div className="bg-white p-1.5 rounded-full shadow-md border border-teal-100">
                                                <img
                                                    // @ts-expect-error iconKey is dynamic
                                                    src={images.story.small_icons[iconKey]}
                                                    alt="Icon"
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <span className="text-teal-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 block">{relativeDates[index]}</span>
                                        <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-2">{t(`story.events.${index}.title`)}</h3>
                                        <h5 className="text-teal-500 font-serif italic mb-4">{t(`story.events.${index}.subtitle`)}</h5>
                                        <p className="text-gray-600 leading-relaxed italic line-clamp-4">
                                            {t(`story.events.${index}.description`)}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Story;
