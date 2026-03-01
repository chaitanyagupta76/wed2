"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useSectionVisibility } from "@/context/SectionVisibilityContext";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/config/images.json";

const Navbar = () => {
    const { t } = useLanguage();
    const { isSectionEnabled } = useSectionVisibility();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: "home", label: t("navbar.links.0") || "Home" },
        { id: "story", label: t("navbar.links.1") || "Story" },
        { id: "where", label: t("navbar.links.2") || "Where & When" },
        { id: "gallery", label: t("navbar.links.3") || "Gallery" },
    ].filter(link => isSectionEnabled(link.id === "home" ? "hero" : link.id));

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <img
                            src={isScrolled ? images.hero.header_couple : images.hero.header_couple_white}
                            alt="Couple Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl md:text-2xl font-serif font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
                            {t("navbar.logo")}
                        </span>
                        <span className={`text-xs uppercase tracking-widest ${isScrolled ? "text-gray-500" : "text-gray-200"}`}>
                            {t("navbar.textLogo")}
                        </span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`text-sm font-medium uppercase tracking-wider hover:text-teal-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitcher scrolled={isScrolled} />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <LanguageSwitcher scrolled={isScrolled} />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`${isScrolled ? "text-gray-800" : "text-white"}`}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 w-3/4 h-screen bg-white z-[60] shadow-2xl flex flex-col p-8"
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={32} className="text-gray-800" />
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif font-semibold text-gray-800 hover:text-teal-600 block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
