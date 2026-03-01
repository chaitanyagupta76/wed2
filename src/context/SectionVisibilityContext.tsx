"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import content from "@/config/content.json";

interface SectionVisibilityContextType {
    isSectionEnabled: (sectionId: string) => boolean;
    getEnabledSections: () => string[];
}

const SectionVisibilityContext = createContext<SectionVisibilityContextType | undefined>(undefined);

export const SectionVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isSectionEnabled = (sectionId: string) => {
        // @ts-ignore
        const section = content[sectionId];
        return section ? section.enabled !== false : true;
    };

    const getEnabledSections = () => {
        return Object.keys(content).filter(key => isSectionEnabled(key));
    };

    return (
        <SectionVisibilityContext.Provider value={{ isSectionEnabled, getEnabledSections }}>
            {children}
        </SectionVisibilityContext.Provider>
    );
};

export const useSectionVisibility = () => {
    const context = useContext(SectionVisibilityContext);
    if (context === undefined) {
        throw new Error("useSectionVisibility must be used within a SectionVisibilityProvider");
    }
    return context;
};
