import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.08,
      y: -8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const SkillCategory = ({ title, skills, color }) => (
    <motion.div
      variants={itemVariants}
      className="glass rounded-2xl p-8 smooth-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl font-bold mr-4`}
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {title[0]}
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillCardVariants}
            whileHover="hover"
            className="glass-dark rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-800 font-semibold">{skill.name}</span>
              <motion.span
                className="text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                {skill.level}
              </motion.span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level === 'Advanced' ? '90' : skill.level === 'Intermediate' ? '70' : '50'}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-20 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient">Technical Skills</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-12"
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillCategory 
              title="Frontend" 
              skills={portfolioData.skills.frontend}
              color="from-blue-500 to-cyan-500"
            />
            <SkillCategory 
              title="Backend" 
              skills={portfolioData.skills.backend}
              color="from-purple-500 to-blue-500"
            />
            <SkillCategory 
              title="Database" 
              skills={portfolioData.skills.database}
              color="from-pink-500 to-purple-500"
            />
            <SkillCategory 
              title="Tools" 
              skills={portfolioData.skills.tools}
              color="from-green-500 to-blue-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
