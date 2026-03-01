"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/config/images.json";
import content from "@/config/content.json";

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(() => content.splash.enabled);
    const config = content.splash;

    useEffect(() => {
        if (!config.enabled) return;

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, config.duration);

        return () => clearTimeout(timer);
    }, [config.enabled, config.duration]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Heart Animations */}
                        <div className="flex space-x-2 mb-4">
                            {[1, 2, 3].map((i) => (
                                <motion.img
                                    key={i}
                                    // @ts-expect-error dynamic key
                                    src={images.story.small_icons[`heart_${i}`]}
                                    alt="Heart"
                                    className="w-6 h-6"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Couple Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-20 h-20 md:w-28 md:h-28"
                        >
                            <img
                                src={images.story.small_icons.small_couple}
                                alt="Couple"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Loading Bar */}
                        <motion.div className="w-48 h-1 bg-gray-100 mt-8 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: config.duration / 1000, ease: "linear" }}
                                className="h-full bg-teal-500"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
