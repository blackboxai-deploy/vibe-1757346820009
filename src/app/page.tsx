'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString())
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            Welcome to my simple Hello World application!
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This is a modern, responsive page built with Next.js and styled with Tailwind CSS. 
            It features beautiful gradients, smooth animations, and clean typography.
          </p>
        </div>

        {/* Current Time Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Current Time
          </p>
          <p className="text-2xl font-bold text-gray-800 font-mono">
            {currentTime || 'Loading...'}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Footer */}
        <div className="pt-12">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}