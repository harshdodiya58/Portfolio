import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [phase, setPhase] = useState('enter'); // enter → pulse → exit

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('pulse'), 800);
        const t2 = setTimeout(() => setPhase('exit'), 2000);
        const t3 = setTimeout(() => onComplete(), 2700);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: phase === 'exit' ? 0 : 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
                        overflow: 'hidden',
                    }}
                >
                    {/* Animated radial glow rings */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.5 + i * 0.4], opacity: [0.6, 0] }}
                            transition={{ duration: 1.8, delay: i * 0.25, ease: 'easeOut' }}
                            style={{
                                position: 'absolute',
                                width: 180,
                                height: 180,
                                borderRadius: '50%',
                                border: `2px solid rgba(139,92,246,${0.5 - i * 0.12})`,
                            }}
                        />
                    ))}

                    {/* Central HD badge */}
                    <motion.div
                        initial={{ scale: 0.1, opacity: 0 }}
                        animate={
                            phase === 'exit'
                                ? { scale: 20, opacity: 0 }
                                : { scale: 1, opacity: 1 }
                        }
                        transition={
                            phase === 'exit'
                                ? { duration: 0.7, ease: 'easeIn' }
                                : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                        }
                        style={{
                            position: 'relative',
                            width: 140,
                            height: 140,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 60px rgba(139,92,246,0.6), 0 0 120px rgba(59,130,246,0.3)',
                        }}
                    >
                        {/* Inner glow */}
                        <div style={{
                            position: 'absolute',
                            inset: 3,
                            borderRadius: '50%',
                            background: 'rgba(0,0,0,0.25)',
                            backdropFilter: 'blur(4px)',
                        }} />
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: '-0.1em' }}
                            animate={{ opacity: 1, letterSpacing: '0.05em' }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            style={{
                                position: 'relative',
                                fontSize: 42,
                                fontWeight: 800,
                                color: '#fff',
                                fontFamily: 'system-ui, sans-serif',
                                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                            }}
                        >
                            HD
                        </motion.span>
                    </motion.div>

                    {/* Loading bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase === 'exit' ? 0 : 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        style={{ position: 'absolute', bottom: 60, width: 160 }}
                    >
                        <div style={{
                            height: 2,
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}>
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                                    borderRadius: 4,
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
