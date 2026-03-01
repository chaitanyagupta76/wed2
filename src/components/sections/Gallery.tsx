"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import images from "@/config/images.json";
import content from "@/config/content.json";

const Gallery = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState("all");
    const gallery = content.gallery;

    if (!gallery.enabled) return null;

    const filteredImages = filter === "all"
        ? images.gallery
        : images.gallery.filter(img => img.category === filter);

    return (
        <SectionWrapper id="gallery" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">{t("gallery.title")}</h2>
                    <div className="w-24 h-1 bg-teal-200 mx-auto rounded-full" />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {gallery.filters.map((f, index) => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium uppercase tracking-wider text-sm ${filter === f.id
                                ? "bg-teal-600 border-teal-600 text-white shadow-lg"
                                : "bg-white border-gray-200 text-gray-600 hover:border-teal-200 hover:text-teal-600"
                                }`}
                        >
                            {t(`gallery.filters.${index}`)}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl shadow-md border-4 border-white"
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <h4 className="text-white text-lg font-serif mb-1">{img.title}</h4>
                                    <span className="text-teal-200 text-xs uppercase tracking-widest">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Gallery;
