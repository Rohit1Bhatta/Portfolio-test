'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-md border-b border-purple-500/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.a
          href="#"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
        >
          <span className="text-purple-500">→</span> RB
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          variants={containerVariants}
          className="hidden md:flex items-center gap-1"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              className="px-4 py-2 text-gray-300 hover:text-purple-300 transition-colors relative group"
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-purple-400 hover:text-purple-300 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* CTA Button - Desktop */}
        <motion.a
          variants={itemVariants}
          href="#contact"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
        >
          Get In Touch
        </motion.a>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-black/95 border-t border-purple-500/10"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="px-4 py-4 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-300 hover:text-purple-300 hover:bg-purple-900/20 rounded-lg transition-all"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            variants={itemVariants}
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
