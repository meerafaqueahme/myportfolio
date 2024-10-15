/* eslint-disable react/prop-types */

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Play, Pause } from 'lucide-react'

// Sample project data with video URLs
const projects = [
  {
    id: 1,
    title: "SoNic-Game",
    description: "Crafting Sonic Worlds: 3D Models & Environments Designed in Maya, Developed in Unity",
    image: "game-image.JPG",
    video: "/game.mp4"
  },
  {
    id: 2,
    title: "Weather App",
    description: "The Weather Forecast App is a sleek and responsive weather application designed to provide up-to-date weather information using a mock API. Built with React.js and styled with Tailwind CSS, the app demonstrates real-world functionality with data-fetching logic, conditional rendering, and dynamic UI updates",
    image: "/weather-app.JPG",
    video: "/weather-app-demo.mp4"
  },
  {
    id: 3,
    title: "Password Generator App",
    description: "This app is a fast, secure, and customizable solution for generating strong passwords. Built with React.js and styled using Tailwind CSS, it allows users to create complex passwords with adjustable length and character options (including symbols, numbers, uppercase, and lowercase letters)",
    image: "/pasword.JPG",
    video: "/password-generator-demo.mp4"
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts and nutrition",
    image: "/E-commerce.JPG",
    video: "/fitness-tracker-demo.mp4"
  }
]

export default function ProjectsPage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    setIsPlaying(!isPlaying)
    const video = document.getElementById(`video-${project.id}`)
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {isPlaying ? (
          <video
            id={`video-${project.id}`}
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
          <div className="flex flex-col justify-center items-center h-full text-white p-4">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        
            <p className="text-center">{project.description}</p>
          </div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={toggleVideo}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </motion.div>
      <motion.div 
        className="absolute bottom-4 left-4 bg-primary text-primary-foreground rounded-full p-2"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={24} />
      </motion.div>
    </motion.div>
  
  )
}