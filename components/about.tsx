'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Delivered', value: '4+' },
    { label: 'Team Members Led', value: '6-8' },
    { label: 'Languages', value: '2' },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a results-driven Software Development Manager with 5+ years of progressive experience in full-stack development and engineering management. I combine strong technical expertise with exceptional leadership and mentoring capabilities.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in architecting scalable solutions, leading high-performing teams, and delivering enterprise-grade SaaS platforms that solve real business problems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I&apos;m a Project Manager & Lead Developer at Dignep Group, overseeing multiple concurrent projects while contributing to technical architecture and system design decisions.
            </p>

            <div className="pt-4 flex gap-4">
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2"
              >
                Download Resume →
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Leadership', items: ['Team Leadership', 'Agile/Scrum', 'Mentoring'] },
              { title: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript'] },
              { title: 'Backend', items: ['Node.js', 'FastAPI', 'REST APIs'] },
              { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
              { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
              { title: 'AI/ML', items: ['Python', 'NumPy', 'Pandas'] },
            ].map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <h4 className="text-lg font-semibold text-purple-300 mb-3">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <span className="text-purple-500">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
