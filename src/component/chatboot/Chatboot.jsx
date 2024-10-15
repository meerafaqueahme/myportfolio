// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'



export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm the portfolio chatbot. How can I assist you with information about my web development skills and projects?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return

    setMessages(prev => [...prev, { text: input, sender: 'user' }])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase())
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
    }, 1000)
  }

  const getBotResponse = (input) => {
    if (input.includes('project') || input.includes('portfolio')) {
      return "I've worked on various web projects, including e-commerce sites, social media platforms, and data visualization dashboards. You can find detailed case studies in my portfolio section."
    } else if (input.includes('skill') || input.includes('technology')) {
      return "As a web developer, I'm proficient in HTML, CSS, JavaScript, React, Next js, and NoSQL. I also have experience with TypeScript, GraphQL, and AWS. Check out my skills section for a complete list!"
    } else if (input.includes('contact') || input.includes('hire')) {
      return "I'm always open to new opportunities! You can reach me at meerafaqueahmed440@gmail.com or connect with me on LinkedIn. My GitHub username is 'AfaQue Ahmed Wassan'"
    } else if (input.includes('experience') || input.includes('background')) {
      return "I have 5 years of experience in web development, working with startups and established tech companies. I specialize in creating responsive, accessible, and performant web applications."
    } else {
      return "I'm not sure I understood that. Could you please ask about my projects, skills, experience, or how to contact me?"
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-lg font-semibold">Web Dev Portfolio Chat</h2>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition-colors duration-300"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}