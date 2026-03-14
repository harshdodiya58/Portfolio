import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollReveal(0.05);

  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'CHARUSAT (Chandubhai S. Patel Institute of Technology)',
      duration: '2023 - 2027',
      semester: '6th Semester',
      location: '📍 Anand, Gujarat',
      details: 'Core competencies: Data Structures, Algorithms, Web Development, Database Management, Software Engineering',
      icon: '🎓',
      bgColor: '#3b82f6',
    },
    {
      id: 2,
      type: 'education',
      title: 'Diploma in Computer Engineering',
      institution: 'Bhailalbhai & Bhikhabhai Institute of Technology',
      duration: '2021 - 2024',
      semester: 'Diploma Level',
      location: '📍 VV Nagar, Anand, Gujarat',
      details: 'Foundation in Computer Engineering with focus on programming fundamentals, digital electronics, and core engineering concepts.',
      icon: '🏫',
      bgColor: '#6366f1',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`py-20 px-4 transition-colors duration-300 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">ACADEMIC BACKGROUND</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'}`}>
            Education
          </h2>
          <div className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${isDark ? 'opacity-70' : 'opacity-100'}`} />
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 ${isDark ? 'bg-gray-700' : 'bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400'}`}
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'} md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-10 h-10 rounded-full flex items-center justify-center -translate-x-1/2 translate-y-6 ${isDark ? 'bg-gray-900 border-[3px] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white border-[3px] border-blue-500 shadow-md'
                    } z-10`}
                >
                  <span className="text-lg">{item.icon}</span>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pr-24' : 'md:pl-24'}`}
                >
                  <div className={`relative p-8 rounded-2xl transition-all duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-gray-500' : 'bg-white shadow-xl border border-transparent hover:border-blue-200'}`}>

                    {/* Connecting line helper point */}
                    <div className={`hidden md:block absolute top-[2.75rem] w-8 h-[2px] ${index % 2 === 1 ? '-right-8' : '-left-8'} ${isDark ? 'bg-gray-700' : 'bg-blue-300'}`} />

                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${isDark ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                        🎓 {item.duration}
                      </span>
                      {item.semester && <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.semester}</span>}
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.institution}</p>
                    {item.location && <p className={`text-xs mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.location}</p>}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.details}</p>
                    <div className="mt-5 h-1 w-12 rounded-full opacity-80" style={{ backgroundColor: item.bgColor }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
