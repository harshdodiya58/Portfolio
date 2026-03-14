import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const Certificates = () => {
    const { isDark } = useTheme();
    const [sectionRef, isVisible] = useScrollReveal(0.05);

    const certificates = [
        {
            id: 1,
            type: 'certificate',
            title: 'Data Structures & Algorithms with Java',
            institution: 'NPTEL - National Programme on Technology Enhanced Learning',
            duration: 'Certified',
            details: 'Comprehensive course covering DSA concepts, problem-solving, and Java implementation with real-world applications.',
            icon: '📜',
            bgColor: '#10b981',
        },
        {
            id: 2,
            type: 'certificate',
            title: 'Design & Analysis of Algorithms',
            institution: 'NPTEL - National Programme on Technology Enhanced Learning',
            duration: 'Certified',
            details: 'Advanced algorithmic concepts including complexity analysis, sorting, searching, and dynamic programming techniques.',
            icon: '🔬',
            bgColor: '#06b6d4',
        },
        {
            id: 3,
            type: 'certificate',
            title: 'Full Stack Development Specialization',
            institution: 'Coursera',
            duration: 'Certified',
            details: 'Complete full-stack web development course covering Frontend (React), Backend (Node.js), and Database design (MongoDB).',
            icon: '🌐',
            bgColor: '#f97316',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="certificates"
            ref={sectionRef}
            className={`py-20 px-4 transition-colors duration-300 relative ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white'}`}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${isDark
                            ? 'text-white'
                            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                            }`}
                    >
                        Certificates
                    </h2>
                    <div
                        className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${isDark ? 'opacity-70' : 'opacity-100'
                            }`}
                    />
                    <p
                        className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                    >
                        Validating technical skills and continuous learning
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certificates.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, translateY: -5 }}
                            className={`p-6 rounded-2xl transition-all duration-300 h-full flex flex-col ${isDark
                                ? 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                                : 'bg-white shadow-lg border border-transparent hover:shadow-xl hover:border-blue-200'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
                                        ? 'bg-purple-900/40 text-purple-300'
                                        : 'bg-purple-100 text-purple-700'
                                        }`}
                                >
                                    📜 Certificate
                                </span>
                                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {item.duration}
                                </span>
                            </div>

                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {item.title}
                            </h3>

                            <p className={`text-sm font-medium mb-4 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.institution}
                            </p>

                            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.details}
                            </p>

                            <div
                                className="mt-auto h-1 w-12 rounded-full opacity-80"
                                style={{ backgroundColor: item.bgColor }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
