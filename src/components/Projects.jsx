import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  const { isDark } = useTheme();
  const [expandedProject, setExpandedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sectionRef, isVisible] = useScrollReveal(0.05);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCardMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full"
      >
        <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 ${isDark
            ? 'bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20'
            : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
          }`}>

          {/* Subtle gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-transparent opacity-60" />

          {/* Content */}
          <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
            {/* Header Section */}
            <div className="mb-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-xl">
                  {['📱', '🎮', '🚗', '🛣️'][index % 4]}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  {project.title}
                </h3>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`text-sm md:text-base leading-relaxed mb-5 flex-grow line-clamp-3 md:line-clamp-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              {project.description}
            </motion.p>

            {/* Tech Stack with animated badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 ${isDark
                      ? 'bg-blue-900/30 text-blue-300 border-blue-700 hover:bg-blue-900/50'
                      : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                    }`}
                >
                  {tech}
                </motion.span>
              ))}
              {project.techStack.length > 4 && (
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${isDark
                    ? 'bg-gray-700 text-gray-400 border-gray-600'
                    : 'bg-gray-100 text-gray-600 border-gray-200'
                  }`}>
                  +{project.techStack.length - 4}
                </span>
              )}
            </motion.div>

            {/* Expandable Details Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className={`text-sm font-semibold mb-4 transition-colors ${isDark
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
                }`}
            >
              {expandedProject === project.id ? '▼ Less Details' : '▶ More Details'}
            </motion.button>

            {/* Expanded Details */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: expandedProject === project.id ? 1 : 0,
                height: expandedProject === project.id ? 'auto' : 0,
              }}
              transition={{ duration: 0.3 }}
              className="mb-5 overflow-hidden"
            >
              <div className={`rounded-lg p-3 border ${isDark
                  ? 'bg-gray-900/50 border-blue-800'
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
                }`}>
                <p className={`text-xs mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Problem:</span> {project.problem}
                </p>
                <p className={`text-xs ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>Solution:</span> {project.solution}
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 text-center text-sm"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-2.5 border-2 font-bold rounded-lg transition-all duration-300 text-center text-sm ${isDark
                    ? 'bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600'
                    : 'bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200'
                  }`}
              >
                Live
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white via-blue-50/50 to-white'
      }`}>
      {/* Elegant gradient background */}
      {!isDark && <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-blue-900/10' : 'bg-blue-300/10'
            }`}
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-purple-900/10' : 'bg-purple-300/10'
            }`}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mb-16"
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark
                ? 'text-white'
                : 'text-gray-900'
              }`}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          {/* Elegant divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <motion.div className={`h-0.5 w-12 ${isDark
                ? 'bg-gradient-to-r from-blue-400/30 to-transparent'
                : 'bg-gradient-to-r from-blue-400/50 to-transparent'
              }`} />
            <motion.div
              className={`w-2 h-2 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div className={`h-0.5 w-12 ${isDark
                ? 'bg-gradient-to-l from-purple-400/30 to-transparent'
                : 'bg-gradient-to-l from-purple-400/50 to-transparent'
              }`} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className={`text-center max-w-2xl mx-auto mb-16 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            Transforming ideas into elegant digital solutions with clean code and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {(portfolioData.projects || []).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl shadow-lg transition-all duration-300"
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
