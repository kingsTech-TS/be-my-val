'use client'

import { motion } from 'framer-motion'
import React from 'react'

const FloatingBalloons = ({ count = 15 }) => {
  const balloons = Array.from({ length: count })
  const colors = ['#e84855', '#ff6b9d', '#ffd700', '#ff69b4', '#ff1493', '#c1666b']

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            scale: 1,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            ease: 'easeIn',
            delay: Math.random() * 0.5,
          }}
        >
          <div
            className="w-8 h-10 rounded-full border-2 border-current relative"
            style={{ color: colors[i % colors.length] }}
          >
            <div className="absolute top-full left-1/2 w-px h-8 -translate-x-1/2 border-l border-current" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingBalloons
