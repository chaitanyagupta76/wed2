"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import content from "@/config/content.json";

type Language = "en" | "te";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "te")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = (path: string) => {
        const keys = path.split(".");
        let result: any = content;
        for (const key of keys) {
            if (result[key] !== undefined) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result[language] || result["en"] || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
