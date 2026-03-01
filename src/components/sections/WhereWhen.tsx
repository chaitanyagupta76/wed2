"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getMarriageDate, formatWeddingDate } from "@/utils/dateUtils";
import content from "@/config/content.json";

const WhereWhen = () => {
    const { t, language } = useLanguage();
    const ww = content.whereAndWhen;
    const marriageDate = getMarriageDate();
    const dateLong = formatWeddingDate(marriageDate, language as 'en' | 'te', 'long');

    if (!ww.enabled) return null;

    return (
        <SectionWrapper id="where" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif text-gray-800 mb-4"
                    >
                        {t("whereAndWhen.title")}
                    </motion.h2>
                    <div className="w-20 h-1 bg-teal-600 mx-auto mb-4" />
                    <p className="text-lg text-gray-500 italic font-light">{dateLong}</p>
                </div>

                {/* Venue Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Marriage Venue */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                    >
                        <div
                            className="p-10 text-center text-white"
                            style={{ backgroundColor: 'rgb(3, 128, 141)' }}
                        >
                            <div className="text-5xl mb-4">💒</div>
                            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                                {t("whereAndWhen.hall.title")}
                            </h4>
                            <div className="w-12 h-0.5 bg-white/40 mx-auto mb-3" />
                            <p className="text-lg font-light tracking-wider leading-relaxed">
                                {t("whereAndWhen.hall.address")}
                            </p>
                        </div>
                        {/* Embedded Google Map */}
                        <div className="h-[250px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15295.944726893024!2d81.3780932!3d16.5830556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c8d3e0a6e65f%3A0x2d24ff0b744dd0a2!2sAkividu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="p-4 text-center bg-gray-50">
                            <a
                                href="https://www.google.com/maps/search/Arya+Vysya+Function+Hall+Akividu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900 transition-colors"
                            >
                                📍 {language === 'en' ? 'Open in Google Maps' : 'గూగుల్ మ్యాప్స్‌లో తెరవండి'}
                            </a>
                        </div>
                    </motion.div>

                    {/* Reception Venue */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                    >
                        <div
                            className="p-10 text-center text-white"
                            style={{ backgroundColor: 'rgb(3, 128, 141)' }}
                        >
                            <div className="text-5xl mb-4">🎉</div>
                            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                                {t("whereAndWhen.reception.title")}
                            </h4>
                            <div className="w-12 h-0.5 bg-white/40 mx-auto mb-3" />
                            <p className="text-lg font-light tracking-wider leading-relaxed">
                                {t("whereAndWhen.reception.address")}
                            </p>
                        </div>
                        {/* Embedded Google Map */}
                        <div className="h-[250px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15309.11234218471!2d81.6807894!3d16.7496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bb730fa57e53%3A0xa85a1b53fd0b4a2f!2sTanuku%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="p-4 text-center bg-gray-50">
                            <a
                                href="https://www.google.com/maps/search/Vasavi+Kalyana+Mandapam+Tanuku"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900 transition-colors"
                            >
                                📍 {language === 'en' ? 'Open in Google Maps' : 'గూగుల్ మ్యాప్స్‌లో తెరవండి'}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhereWhen;
