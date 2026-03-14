import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ScrollProgress = () => {
    const { isDark } = useTheme();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollPercentage(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    // Handle click to scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center gap-2">
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg cursor-pointer backdrop-blur-sm ${isDark ? 'bg-gray-800/80 text-white border border-gray-700' : 'bg-white/80 text-blue-600 border border-blue-100'
                    }`}
            >
                <svg className="w-5 h-5 absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>

                {/* SVG Circle Progress */}
                <svg className="w-full h-full absolute -rotate-90">
                    <circle
                        cx="24" cy="24" r="22"
                        className={`${isDark ? 'stroke-gray-700' : 'stroke-gray-200'}`}
                        strokeWidth="2" fill="none"
                    />
                    <motion.circle
                        cx="24" cy="24" r="22"
                        className="stroke-blue-500"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="138"
                        style={{ strokeDashoffset: useSpring(scrollYProgress, { stiffness: 400, damping: 90 }).get() * -138 + 138 }}
                    />
                </svg>
            </motion.button>

            <span className={`text-[10px] font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {scrollPercentage}%
            </span>
        </div>
    );
};

export default ScrollProgress;
