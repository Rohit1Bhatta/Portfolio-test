'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/10 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-500">RB</div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-purple-300">About</a>
            <a href="#experience" className="text-gray-300 hover:text-purple-300">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-300">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-300">Contact</a>
          </div>
          <a href="#contact" className="bg-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        {/* Background blur elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium inline-block mb-6">
            Welcome to my portfolio
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mt-6 mb-6 text-white leading-tight">
            Rohit Bhatta
          </h1>

          <p className="text-3xl font-bold mb-6 text-purple-400">
            Software Development Manager
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building enterprise-scale SaaS platforms with React, Next.js, and Node.js. 
            Leading high-performing development teams to deliver exceptional results.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['React', 'Next.js', 'Node.js', 'Python', 'AWS'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-200 text-sm cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 rounded-lg font-bold hover:bg-purple-500/10"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <svg className="w-6 h-6 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg mb-4">
                I&apos;m a Software Development Manager with 5+ years of experience building enterprise-scale applications. 
                My passion lies in creating elegant solutions to complex problems and leading teams to deliver exceptional software.
              </p>
              <p className="text-gray-300 text-lg">
                When I&apos;m not coding or managing, I&apos;m exploring new technologies and mentoring junior developers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                <h3 className="text-purple-300 font-bold mb-2">Full-Stack Development</h3>
                <p className="text-gray-400 text-sm">React, Next.js, Node.js, Python, databases</p>
              </div>
              <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                <h3 className="text-purple-300 font-bold mb-2">Team Leadership</h3>
                <p className="text-gray-400 text-sm">Managing 5+ engineers, sprint planning, mentorship</p>
              </div>
              <div className="p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                <h3 className="text-purple-300 font-bold mb-2">System Design</h3>
                <p className="text-gray-400 text-sm">Scalable architecture, microservices, cloud deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Senior Full Stack Developer / Development Manager',
                company: 'Kyte Inc (Contractor)',
                period: '2022 - Present',
                desc: 'Led development of AI-powered supply chain platform'
              },
              {
                title: 'Senior Software Engineer',
                company: 'Swivl Inc',
                period: '2020 - 2022',
                desc: 'Built video analytics and recording platform'
              },
              {
                title: 'Software Engineer',
                company: 'Thoughtworks',
                period: '2019 - 2020',
                desc: 'Developed enterprise solutions for diverse clients'
              },
              {
                title: 'Junior Developer',
                company: 'Infosys',
                period: '2017 - 2019',
                desc: 'Started career building full-stack applications'
              }
            ].map((exp, i) => (
              <div key={i} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-purple-300 font-semibold mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI Supply Chain Platform',
                desc: 'Enterprise AI platform for supply chain optimization',
                tech: ['React', 'Node.js', 'Python', 'AWS']
              },
              {
                title: 'Video Analytics Platform',
                desc: 'Real-time video analysis and recording system',
                tech: ['React', 'WebRTC', 'Node.js', 'PostgreSQL']
              },
              {
                title: 'Microservices Architecture',
                desc: 'Scalable microservices platform for client solutions',
                tech: ['Docker', 'Kubernetes', 'Node.js', 'MongoDB']
              },
              {
                title: 'Mobile App Dashboard',
                desc: 'Analytics dashboard for mobile applications',
                tech: ['React Native', 'Express', 'Firebase']
              }
            ].map((proj, i) => (
              <div key={i} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300">{proj.title}</h3>
                <p className="text-gray-300 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-purple-600/30 text-purple-200 text-sm rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-gray-300 text-lg mb-12">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:hello@rohit.dev" className="p-4 bg-purple-600/30 border border-purple-500/30 rounded-lg hover:bg-purple-600/50 transition-all">
              <Mail size={24} className="text-purple-300" />
            </a>
            <a href="#" className="p-4 bg-purple-600/30 border border-purple-500/30 rounded-lg hover:bg-purple-600/50 transition-all">
              <Linkedin size={24} className="text-purple-300" />
            </a>
            <a href="#" className="p-4 bg-purple-600/30 border border-purple-500/30 rounded-lg hover:bg-purple-600/50 transition-all">
              <Github size={24} className="text-purple-300" />
            </a>
          </div>
          <a href="mailto:hello@rohit.dev" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50">
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-8 px-4 text-center text-gray-400">
        <p>© 2026 Rohit Bhatta. All rights reserved.</p>
      </footer>
    </div>
  );
}
