import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const roles = [
  'Full Stack Developer',
  'MERN Stack Expert',
  'UI/UX Enthusiast',
  'Problem Solver',
];

const TypeWriter = ({ isDark }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span
      className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
    >
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-6 ml-0.5 align-middle bg-purple-500"
      />
    </span>
  );
};

const Hero = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0, x: 60 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleResumeDownload = () => {
    if (portfolioData.resumeUrl && portfolioData.resumeUrl !== '#') {
      window.open(portfolioData.resumeUrl, '_blank');
    } else {
      alert('Resume link will be added soon!');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'
        }`}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-blue-900/20' : 'bg-blue-200/30'
            }`}
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/30'
            }`}
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 ${isDark ? 'bg-pink-900/10' : 'bg-pink-100/40'
            }`}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${isDark
                  ? 'bg-blue-900/40 text-blue-300 border border-blue-800'
                  : 'bg-blue-50 text-blue-600 border border-blue-200'
                  }`}
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 rounded-full bg-green-400 inline-block"
                />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight ${isDark ? 'text-white' : 'text-gray-900'
                }`}
            >
              Hi, I'm{' '}
              <span className="text-gradient">{portfolioData.name}</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl mb-6 h-8"
            >
              <TypeWriter isDark={isDark} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg max-w-xl mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                } lg:pr-4`}
            >
              Passionate about turning ideas into interactive, user-friendly
              websites that bridge design and functionality. Currently pursuing
              B.Tech CSE at CHARUSAT University.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <motion.button
                onClick={handleResumeDownload}
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.button>

              <motion.a
                href="#contact"
                onClick={handleContactClick}
                className={`px-7 py-3 border-2 font-semibold rounded-xl transition-all duration-300 ${isDark
                  ? 'border-gray-500 text-gray-300 hover:bg-gray-800 hover:border-gray-400'
                  : 'border-gray-700 text-gray-700 hover:bg-gray-50'
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-5 justify-center lg:justify-start">
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
                href={`mailto:${portfolioData.email}`}
                whileHover={{ scale: 1.2, y: -3 }}
                className={`transition-colors ${isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            variants={imageVariants}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  opacity: 0.6,
                  filter: 'blur(6px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Outer gradient border ring */}
              <div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-[3px]"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                }}
              >
                {/* Inner image container */}
                <div
                  className={`w-full h-full rounded-full overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'
                    }`}
                >
                  <img
                    src="/profile.jpg"
                    alt="Harsh Dodiya"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:white;font-size:5rem;font-weight:bold;font-family:sans-serif;">
                          HD
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>


            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`flex flex-col items-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
          >
            <span className="text-xs mb-2 font-medium tracking-widest uppercase">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
