import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? 'bg-pink-900/20' : 'bg-pink-200/30'
          }`}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12"
          ></motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <p className={`text-lg leading-relaxed mb-8 whitespace-pre-line text-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {portfolioData.summary}
            </p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">10+</div>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects Completed</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">3+</div>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Learning</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text">∞</div>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Always Growing</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text">100%</div>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Committed</p>
              </motion.div>
            </motion.div>

            {/* Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>🎓 <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</span></p>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{portfolioData.education.degree}</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{portfolioData.education.university}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>📍 <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Status</span></p>
                <p className={`capitalize ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{portfolioData.education.status}</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Semester: {portfolioData.education.currentSemester}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* See Skills CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a
              href="#skills"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              See My Skills
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
