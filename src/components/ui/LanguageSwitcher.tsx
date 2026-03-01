"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
    scrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ scrolled }) => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "te" : "en");
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all duration-300 group ${scrolled
                    ? "border-teal-100 text-teal-600 hover:bg-teal-50 bg-teal-50/50"
                    : "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
        >
            <Globe size={16} className={`transition-transform duration-500 ${language === "te" ? "rotate-180" : ""}`} />
            <span className="text-xs font-bold tracking-tighter w-4 text-center">
                {language === "en" ? "EN" : "TE"}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
