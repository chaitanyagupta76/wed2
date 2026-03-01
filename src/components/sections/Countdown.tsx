"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getMarriageDate } from "@/utils/dateUtils";
import images from "@/config/images.json";
import content from "@/config/content.json";

const Countdown = () => {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = getMarriageDate().getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!content.countdown.enabled) return null;

    const timeUnits = [
        { label: "days", value: timeLeft.days },
        { label: "hours", value: timeLeft.hours },
        { label: "minutes", value: timeLeft.minutes },
        { label: "seconds", value: timeLeft.seconds }
    ];

    return (
        <SectionWrapper id="countdown" className="relative py-20 sm:py-32 overflow-hidden">
            {/* Background Image with Fixed Effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${images.countdown.background})` }}
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-80"
                style={{ backgroundColor: 'rgb(180, 210, 200)' }}
            />

            <div className="container relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl sm:text-4xl md:text-6xl font-serif mb-8 sm:mb-12 drop-shadow-md"
                >
                    {t("countdown.title")}
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl mb-3 sm:mb-4 group hover:bg-white/20 transition-all">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tabular-nums">
                                    {unit.value.toString().padStart(2, '0')}
                                </span>
                            </div>
                            <span className="text-teal-200 uppercase tracking-[0.3em] text-xs font-bold">
                                {unit.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Countdown;
