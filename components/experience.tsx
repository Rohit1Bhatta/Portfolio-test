'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, Calendar } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: 'Project Manager & Lead Developer',
      company: 'Dignep Group Pvt. Ltd.',
      period: 'March 2025 – Present',
      location: 'Kathmandu',
      highlights: [
        'Lead team of 6-8 developers across multiple concurrent projects',
        'Architected system design for large-scale SaaS platforms (CRM, SIEM, GRC, ERP)',
        'Successfully delivered 4 major SaaS platforms with zero critical post-launch bugs',
        'Reduced average sprint cycle time by 20% through improved planning',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Dignep Group Pvt. Ltd.',
      period: 'April 2024 – February 2025',
      location: 'Kathmandu',
      highlights: [
        'Built and deployed production-grade SaaS platforms using React, Next.js, Node.js',
        'Developed multi-tenant CRMs, SIEM dashboards, and GRC compliance systems',
        'Integrated REST APIs and built reusable component libraries',
        'Contributed to AI Policy Tracker dashboard with interactive visualizations',
      ],
    },
    {
      title: 'Software Engineer (Full-Stack Developer)',
      company: 'SysQube Technologies',
      period: 'January 2023 – March 2024',
      location: 'Kathmandu',
      highlights: [
        'Developed responsive single-page applications using React.js and Redux',
        'Improved application performance by 40% through code splitting and lazy loading',
        'Integrated third-party APIs including payment gateways and authentication services',
        'Collaborated with backend teams to design and consume RESTful APIs',
      ],
    },
    {
      title: 'Remote Frontend Developer Intern',
      company: 'SysQube Technologies',
      period: 'October 2020 – December 2022',
      location: 'Remote',
      highlights: [
        'Contributed to production frontend tasks using React.js and Strapi CMS',
        'Worked with distributed Agile team across multiple time zones',
        'Built responsive UI components following design specifications',
        'Developed strong foundation in web technologies and best practices',
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

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
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2 }}
            style={{ originY: 0 }}
          />

          {/* Experience items */}
          <div className="pl-8 sm:pl-12 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-14 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-slate-900 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <BriefcaseIcon size={16} className="text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-300 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:text-right text-sm">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05), duration: 0.5 }}
                        className="text-gray-300 flex gap-3 text-sm"
                      >
                        <span className="text-purple-400 font-bold flex-shrink-0 mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
