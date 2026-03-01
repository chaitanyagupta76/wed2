"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // SoundCloud Widget URL from original index.html
    const soundCloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/397907556&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true";

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
        if (iframeRef.current) {
            const widget = (window as any).SC.Widget(iframeRef.current);
            widget.toggle();
        }
    };

    useEffect(() => {
        // Load SoundCloud Widget API script
        const script = document.createElement("script");
        script.src = "https://w.soundcloud.com/player/api.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[80] flex items-center gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-teal-100 flex items-center gap-2"
                    >
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest whitespace-nowrap">
                            {isPlaying ? "Now Playing" : "Music Paused"}
                        </span>
                        <div className="flex gap-1 h-3 items-end">
                            {[0.2, 0.5, 0.8, 0.4].map((delay, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: isPlaying ? [4, 12, 4] : 4 }}
                                    transition={{ duration: 1, repeat: Infinity, delay }}
                                    className="w-0.5 bg-teal-400 rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleMusic}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group ${isPlaying ? "bg-teal-500 text-white" : "bg-white text-teal-600"
                    }`}
            >
                {isPlaying ? (
                    <Volume2 size={24} className="animate-pulse" />
                ) : (
                    <VolumeX size={24} />
                )}

                {/* Pulsing ring */}
                {isPlaying && (
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-4 border-teal-400"
                    />
                )}
            </motion.button>

            {/* Hidden SoundCloud Iframe */}
            <div className="hidden">
                <iframe
                    ref={iframeRef}
                    id="sc-widget"
                    src={soundCloudUrl}
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                ></iframe>
            </div>
        </div>
    );
};

export default BackgroundMusic;
