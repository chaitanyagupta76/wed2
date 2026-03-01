"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";

const GiftRegistry = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="gifts" className="py-16 sm:py-24 bg-white">
            <div className="container text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800">
                        {t("giftRegistry.title")}
                    </h2>
                    <div className="w-20 h-1 bg-teal-600 mx-auto" />
                    <p className="text-base sm:text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto italic">
                        {t("giftRegistry.description")}
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default GiftRegistry;
