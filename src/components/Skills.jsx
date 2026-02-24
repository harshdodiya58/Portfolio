import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i = 0) => ({
      y: 0, opacity: 1,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  const SkillCategory = ({ title, color, skills, customDelay }) => (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      custom={customDelay}
      className="space-y-5"
    >
      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-center mb-1.5">
              <span className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
              <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level === 'Advanced' ? '85%' : skill.level === 'Intermediate' ? '65%' : '45%'}
              </span>
            </div>
            <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <motion.div
                className={`h-full bg-gradient-to-r ${color} rounded-full`}
                initial={{ width: 0 }}
                animate={isVisible ? {
                  width: skill.level === 'Advanced' ? '85%' : skill.level === 'Intermediate' ? '65%' : '45%'
                } : { width: 0 }}
                transition={{ duration: 1.2, delay: customDelay * 0.1 + idx * 0.08, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-24 relative transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Background blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/30'}`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full ${isDark ? 'bg-purple-900/40 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
            What I know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            🧠 <span className="text-gradient">My Skillset</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <SkillCategory title="Frontend" color="from-blue-500 to-cyan-500" skills={portfolioData.skills.frontend} customDelay={1} />
          <SkillCategory title="Backend" color="from-purple-500 to-blue-500" skills={portfolioData.skills.backend} customDelay={2} />
          <SkillCategory title="Database" color="from-pink-500 to-purple-500" skills={portfolioData.skills.database} customDelay={3} />
          <SkillCategory title="Tools" color="from-green-500 to-blue-500" skills={portfolioData.skills.tools} customDelay={4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
