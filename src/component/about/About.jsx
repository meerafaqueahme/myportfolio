"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false)
  const [showLoremIpsum, setShowLoremIpsum] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const loremIpsumRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleScrollClick = () => {
    setShowLoremIpsum(true)
    setTimeout(() => {
      loremIpsumRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bgimage.jpeg')",
          filter: "brightness(0.6)",
        }}
        aria-hidden="true"
      />
      <motion.div 
        className="relative z-10 max-w-3xl p-8 bg-black bg-opacity-50 rounded-lg shadow-xl mb-16"
        style={{ opacity, y }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-orange-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me 
        </motion.h1>
        <motion.p
          className={`text-lg leading-relaxed ${
            isHovered ? 'text-orange-200' : 'text-orange-400'
          } transition-colors duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello! I am Afaque Ahmed, a passionate web developer and designer with expertise in crafting dynamic and engaging websites and web applications. I specialize in HTML, CSS, and JavaScript, building interactive front-end experiences with React and leveraging the powerful Next.js framework to create high-performance full-stack applications.
          <br /><br />
          With a keen eye for design and a commitment to writing clean, efficient code, I focus on delivering responsive, user-friendly interfaces that bring ideas to life on the web. I am always eager to learn and grow in the ever-evolving world of web development, staying up to date with the latest technologies and best practices.
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={handleScrollClick}
      >
        <p className="text-white text-sm">Scroll down to explore more</p>
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full mt-2 mx-auto"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full mx-auto mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
      {showLoremIpsum && (
        <motion.div
          ref={loremIpsumRef}
          className="relative z-10 max-w-3xl p-8 bg-black bg-opacity-50 rounded-lg shadow-xl mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-orange-400">
          Hello, I’m a , passionate game developer specializing in Unity and a creative game designer skilled in Maya. My work bridges the technical and artistic aspects of game creation, blending immersive gameplay mechanics with visually compelling designs. Whether I’m programming core features or crafting captivating 3D environments, I aim to deliver engaging and polished experiences.

In addition to developing interactive games, I bring expertise from multiple areas, including web development, AI, and generative design. Always eager to explore new technologies, I thrive on solving creative challenges and continuously expanding my skill set.
          </p>
        </motion.div>
      )}
    </div>
  )
}