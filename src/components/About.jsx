import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  { value: '10+', label: 'Projects', icon: '🚀' },
  { value: '3+', label: 'Years Learning', icon: '📚' },
  { value: 'MERN', label: 'Stack', icon: '⚡' },
  { value: '100%', label: 'Passionate', icon: '🔥' },
];

const traits = [
  { icon: '🎓', title: 'B.Tech CSE', desc: 'CHARUSAT University · 6th Sem' },
  { icon: '💻', title: 'Full Stack Dev', desc: 'MERN Stack Specialist' },
  { icon: '🌱', title: 'Always Learning', desc: 'Building, breaking & growing' },
  { icon: '🎯', title: 'Career Goal', desc: 'Internship · Full Stack Role' },
];

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const About = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-900/20' : 'bg-blue-200/30'
            }`}
        />
        <div
          className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/30'
            }`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={0}
        >
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full ${isDark
                ? 'bg-blue-900/40 text-blue-400'
                : 'bg-blue-100 text-blue-600'
              }`}
          >
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — short bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={1}
          >
            <p
              className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              I'm a{' '}
              <span className="font-semibold text-gradient">
                Full Stack Developer
              </span>{' '}
              passionate about crafting scalable, user-centric web applications
              using the{' '}
              <span className="font-semibold text-gradient">MERN stack</span>. I
              turn complex ideas into clean, maintainable code — from pixel-perfect
              UIs to robust REST APIs.
            </p>
            <p
              className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Currently in{' '}
              <span
                className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'
                  }`}
              >
                Semester 6 at CHARUSAT University
              </span>
              , I'm actively seeking internships and entry-level roles where I can
              contribute meaningfully and grow with a great team.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                custom={i + 2}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`rounded-2xl p-5 border transition-all duration-300 cursor-default ${isDark
                    ? 'bg-gray-800/60 border-gray-700 hover:border-blue-500/50'
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                  }`}
              >
                <div className="text-3xl mb-2">{t.icon}</div>
                <div
                  className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  {t.title}
                </div>
                <div
                  className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  {t.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={6}
          className={`grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={`flex flex-col items-center py-8 px-4 relative group ${isDark ? 'bg-gray-800/60' : 'bg-white'
                }`}
              whileHover={{ backgroundColor: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(239,246,255,1)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl mb-2">{s.icon}</span>
              <span className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                {s.value}
              </span>
              <span
                className={`text-xs mt-1 font-medium tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                {s.label}
              </span>
              {/* divider */}
              {i < stats.length - 1 && (
                <div
                  className={`absolute right-0 top-6 bottom-6 w-px ${isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
