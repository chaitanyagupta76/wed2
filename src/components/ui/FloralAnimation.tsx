"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloralAnimation = () => {
    const [leaves, setLeaves] = useState<{ id: number; x: number; delay: number; duration: number; size: number; drift: number; rotateDir: number }[]>([]);

    useEffect(() => {
        // Generate initial leaves
        const initialLeaves = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            delay: Math.random() * 10,
            duration: 15 + Math.random() * 10,
            size: 20 + Math.random() * 30,
            drift: Math.random() * 10 - 5,
            rotateDir: Math.random() > 0.5 ? 1 : -1
        }));
        setLeaves(initialLeaves);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            <AnimatePresence>
                {leaves.map((leaf) => (
                    <motion.div
                        key={leaf.id}
                        initial={{ y: -100, x: `${leaf.x}%`, opacity: 0, rotate: 0 }}
                        animate={{
                            y: ["0vh", "110vh"],
                            x: [`${leaf.x}%`, `${leaf.x + leaf.drift}%`],
                            opacity: [0, 1, 1, 0],
                            rotate: [0, 360 * leaf.rotateDir]
                        }}
                        transition={{
                            duration: leaf.duration,
                            repeat: Infinity,
                            delay: leaf.delay,
                            ease: "linear"
                        }}
                        className="absolute"
                        style={{ width: leaf.size, height: leaf.size }}
                    >
                        {/* Simple Leaf SVG Shape */}
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-teal-100 opacity-40">
                            <path d="M50 0 C70 30 100 50 50 100 C0 50 30 30 50 0 Z" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloralAnimation;
