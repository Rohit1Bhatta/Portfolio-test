'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: 'Onely CRM - NDIS Australia',
      description: 'Multi-tenant CRM platform for Australian disability service providers with role-based workflows, real-time dashboards, and seamless API integrations. Led team of 5 developers through full development lifecycle.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      link: 'https://onely.com.au/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      title: 'SayCure - SIEM Platform',
      description: 'Real-time security information and event management dashboard with DSL-based filtering, OpenSearch integration, customizable widgets, and log analytics. Managed sprint planning and feature prioritization.',
      technologies: ['React', 'TypeScript', 'OpenSearch', 'Python', 'Docker'],
      link: 'https://saycure.io/',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      title: 'Certifyi - GRC Platform',
      description: 'ISO 27001-aligned governance, risk, and compliance platform with policy management, risk assessment, audit workflows, and role-based access control. Architected system design and led development team.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Azure'],
      link: 'https://certifyi.ai/',
      color: 'from-emerald-600 to-emerald-400',
    },
    {
      title: 'Orkest HQ - ERP System',
      description: 'Enterprise resource planning system with integrated HR, Finance, and Inventory modules. Provided full SDLC leadership from requirements gathering to deployment.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      color: 'from-purple-600 to-purple-400',
    },
    {
      title: 'AI Policy Tracker',
      description: 'Interactive dashboard tracking global AI regulations and policies with real-time updates and comparative analytics. Built with modern React patterns and Python backend.',
      technologies: ['React', 'Python', 'REST APIs', 'Data Visualization'],
      link: 'https://aipolicytracker.org/',
      color: 'from-pink-600 to-pink-400',
    },
    {
      title: 'EEG-fMRI Parkinson\'s Detection',
      description: 'Machine learning pipeline integrating multimodal EEG and fMRI neuroimaging data to improve early Parkinson\'s disease diagnosis accuracy. Developed data preprocessing, feature extraction, and classification models.',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Scikit-learn', 'Pandas'],
      color: 'from-orange-600 to-orange-400',
    },
  ];

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

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
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
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                whileHover={{ opacity: 0.2 }}
              />

              {/* Card */}
              <motion.div
                className="relative p-6 sm:p-8 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/20 h-full flex flex-col backdrop-blur-sm"
                whileHover={{
                  y: -8,
                  borderColor: 'rgb(168, 85, 247)',
                }}
              >
                {/* Header with color accent */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`flex-1 w-12 h-1 rounded-full bg-gradient-to-r ${project.color}`}
                  />
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-4 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/20">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-900/40 to-purple-900/20 border border-purple-500/30 rounded text-purple-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
