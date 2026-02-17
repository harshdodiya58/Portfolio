import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const SkillCategory = ({ title, color, skills }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-6"
    >
      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <motion.div key={idx} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {skill.level === 'Advanced' ? '85%' : skill.level === 'Intermediate' ? '65%' : '45%'}
              </span>
            </div>
            <motion.div
              className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: skill.level === 'Advanced' ? '85%' : skill.level === 'Intermediate' ? '65%' : '45%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? 'bg-purple-900/20' : 'bg-purple-200/30'
          }`}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            🧠 <span className="text-gradient">My Skillset</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-16"
          ></motion.div>

          <motion.div className="grid md:grid-cols-2 gap-12">
            <SkillCategory
              title="Frontend"
              color="from-blue-500 to-cyan-500"
              skills={portfolioData.skills.frontend}
            />
            <SkillCategory
              title="Backend"
              color="from-purple-500 to-blue-500"
              skills={portfolioData.skills.backend}
            />
            <SkillCategory
              title="Database"
              color="from-pink-500 to-purple-500"
              skills={portfolioData.skills.database}
            />
            <SkillCategory
              title="Tools"
              color="from-green-500 to-blue-500"
              skills={portfolioData.skills.tools}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
