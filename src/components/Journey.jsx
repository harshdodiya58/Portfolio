import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Journey = () => {
  const { isDark } = useTheme();

  const journey = [
    {
      id: 1,
      type: 'education',
      title: 'Diploma in Information Technology',
      institution: 'Bhailalbhai & Bhikhabhai Institute of Technology',
      duration: 'Completed-2024',
      semester: 'Diploma Level',
      location: '📍 VV Nagar, Anand, Gujarat',
      details: 'Foundation in IT with focus on programming fundamentals, database basics, and web technologies.',
      icon: '🏫',
      bgColor: '#6366f1',
    },
    {
      id: 2,
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
      id: 3,
      type: 'certificate',
      title: 'Data Structures & Algorithms with Java',
      institution: 'NPTEL - National Programme on Technology Enhanced Learning',
      duration: 'Certified',
      details: 'Comprehensive course covering DSA concepts, problem-solving, and Java implementation with real-world applications.',
      icon: '📜',
      bgColor: '#10b981',
    },
    {
      id: 4,
      type: 'certificate',
      title: 'Design & Analysis of Algorithms',
      institution: 'NPTEL - National Programme on Technology Enhanced Learning',
      duration: 'Certified',
      details: 'Advanced algorithmic concepts including complexity analysis, sorting, searching, and dynamic programming techniques.',
      icon: '🔬',
      bgColor: '#06b6d4',
    },
    {
      id: 5,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="journey"
      className={`py-20 px-4 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
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
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark
                ? 'text-white'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            }`}
          >
            My Journey
          </h2>
          <div
            className={`h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ${
              isDark ? 'opacity-70' : 'opacity-100'
            }`}
          />
          <p
            className={`mt-4 text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            From learning to building, exploring new technologies and creating impact
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Vertical Line */}
          <div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 ${
              isDark ? 'bg-gray-700' : 'bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400'
            }`}
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'} md:flex ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot - Hidden */}

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                        : 'bg-white shadow-lg border border-transparent hover:shadow-xl hover:border-blue-200'
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === 'education'
                            ? isDark
                              ? 'bg-blue-900/40 text-blue-300'
                              : 'bg-blue-100 text-blue-700'
                            : item.type === 'certificate'
                            ? isDark
                              ? 'bg-green-900/40 text-green-300'
                              : 'bg-green-100 text-green-700'
                            : isDark
                            ? 'bg-purple-900/40 text-purple-300'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {item.type === 'education' ? '🎓 Education' : item.type === 'certificate' ? '📜 Certificate' : '⭐ Achievement'}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p
                      className={`text-sm font-medium mb-3 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.institution}
                      {item.semester && ` • ${item.semester}`}
                    </p>

                    {/* Location */}
                    {item.location && (
                      <p
                        className={`text-xs mb-3 ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        {item.location}
                      </p>
                    )}

                    {/* Details */}
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {item.details}
                    </p>

                    {/* Accent Bar */}
                    <div
                      className="mt-4 h-1 w-12 rounded-full opacity-80"
                      style={{ backgroundColor: item.bgColor }}
                    />
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

export default Journey;
