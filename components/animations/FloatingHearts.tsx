'use client'

import { motion } from 'framer-motion'
import React from 'react'

const FloatingHearts = ({ count = 20 }) => {
  const hearts = Array.from({ length: count })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-400"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            opacity: 1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            opacity: 0,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: 'easeOut',
            delay: Math.random() * 0.5,
          }}
        >
          <span className="text-2xl">💕</span>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
