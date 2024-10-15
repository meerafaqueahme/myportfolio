// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
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
    },
  };

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Contact</h3>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>03280581676</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <a href="mailto:meerafaqueahme440@gmail.com" className="hover:underline">
                meerafaqueahme440@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Social</h3>
            <div className="flex items-center space-x-2">
              <Linkedin size={20} />
              <a
                href="https://linkedin.com/in/afaque-ahmed-wassan-b65508272"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Github size={20} />
              <a
                href="https://github.com/meerafaqueahme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Address</h3>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>Gulshan-e-Iqbal, Karachi</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-white/10 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Afaque Ahmed. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;