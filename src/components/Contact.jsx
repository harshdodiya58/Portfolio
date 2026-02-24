import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollReveal(0.1);
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
    <section id="contact" ref={sectionRef} className={`py-20 relative transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/30'
            }`}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Get In Touch</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-16"
          />

          <motion.div
            variants={containerVariants}
            className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8"
          >
            {/* Email */}
            <motion.a
              variants={itemVariants}
              href={`mailto:${portfolioData.email}`}
              className="group"
            >
              <div className={`rounded-2xl border p-8 text-center transition-all ${isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className={`break-all text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{portfolioData.email}</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={itemVariants}
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`rounded-2xl border p-8 text-center transition-all ${isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-600/20'
                  : 'bg-white border-gray-200 hover:border-gray-900 hover:shadow-lg'
                }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${isDark
                    ? 'bg-gradient-to-br from-gray-600 to-gray-800'
                    : 'bg-gradient-to-br from-gray-700 to-gray-900'
                  }`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Check out my code</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={itemVariants}
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`rounded-2xl border p-8 text-center transition-all ${isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-600 hover:shadow-lg'
                }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Connect with me</p>
              </div>
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Feel free to reach out. I'm always open to new opportunities!</p>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className={`text-center mt-12 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              © 2025 {portfolioData.name}. All Rights Reserved.
            </p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Designed and built with ❤️</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
