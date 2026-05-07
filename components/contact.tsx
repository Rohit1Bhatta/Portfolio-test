'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhatta7rohit@outlook.com',
      href: 'mailto:bhatta7rohit@outlook.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9865376752',
      href: 'tel:+977-9865376752',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                />

                {/* Card */}
                <motion.div
                  className="relative p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/20 h-full flex flex-col items-center text-center backdrop-blur-sm"
                  whileHover={{
                    y: -4,
                    borderColor: 'rgb(168, 85, 247)',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 p-3 rounded-lg bg-gradient-to-br from-purple-600/40 to-purple-400/20"
                  >
                    <Icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wide">
                    {info.label}
                  </h3>
                  <p className="text-white font-semibold hover:text-purple-300 transition-colors">
                    {info.value}
                  </p>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 sm:p-10 rounded-lg bg-gradient-to-r from-purple-900/40 to-purple-900/20 border border-purple-500/30 text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Whether you have a project in mind or just want to discuss opportunities, I&apos;d love to hear from you.
          </p>
          <motion.a
            href="mailto:bhatta7rohit@outlook.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/20 text-purple-400 hover:text-purple-300 hover:border-purple-500/40 transition-all"
                title={social.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
