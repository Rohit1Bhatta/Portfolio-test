'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Context API', 'Tailwind CSS', 'Jest', 'React Testing Library'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'FastAPI', 'Strapi', 'REST APIs', 'Microservices', 'GraphQL'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Git', 'CI/CD Pipelines', 'Kubernetes'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'Firebase'],
    },
    {
      category: 'Leadership & Management',
      skills: ['Team Leadership', 'Agile/Scrum', 'Sprint Planning', 'Mentoring', 'Stakeholder Communication', 'Project Management'],
    },
    {
      category: 'AI/ML & Data',
      skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'ML Pipelines'],
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card background glow */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"
              />

              {/* Card */}
              <motion.div
                className="relative p-6 sm:p-8 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/20 h-full backdrop-blur-sm"
                whileHover={{
                  y: -4,
                  borderColor: 'rgb(168, 85, 247)',
                }}
              >
                {/* Category Title */}
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400" />
                  {category.category}
                </motion.h3>

                {/* Skills */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{
                        delay: (categoryIndex * 0.05) + (skillIndex * 0.03),
                      }}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                      }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-900/40 to-purple-900/20 border border-purple-500/30 text-purple-300 text-sm font-medium transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
