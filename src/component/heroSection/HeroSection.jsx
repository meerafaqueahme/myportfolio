

import { Github, Linkedin, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
export default function HeroSection() {

  const roles = ["Web App Developer", "Game Designer", "Game Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 1000

    const typeEffect = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
      } else {
        setText(currentRole.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }
    }

    const timer = setTimeout(typeEffect, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AfaqueAhmedCV.md';
    link.download = 'AfaqueAhmedCV.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="/profile.jpg"
              alt="pic Not Found"
              className="rounded-full w-32 h-32 mx-auto md:w-80 md:h-80 object-cover shadow-lg border-4 border-pink-500"
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hello, it s Me<br />
              <span className="text-pink-500">AfaQue Ahmed</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-4 text-pink-300 h-16"
            >
              I am a <span className="text-pink-500">{text}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 mb-6 max-w-lg mx-auto md:mx-0"
            >
              A passionate developer dedicated to creating stunning and functional websites and games. 
              With expertise in web development and game design, I blend creativity with technical 
              proficiency to deliver exceptional digital experiences. Explore my portfolio to see my latest 
              projects, learn about my skills, and discover how I can help bring your vision to life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start space-x-4 mb-6"
            >
              <a 
                href="https://www.linkedin.com/in/afaque-ahmed-wassan-b65508272/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
              >
                <Linkedin size={32} />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/meerafaqueahme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
              >
                <Github size={32} />
                <span className="sr-only">GitHub Profile</span>
              </a>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={handleDownload}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </motion.button>
           
          </div>
        </div>
      </div>
    </section>
  )
}