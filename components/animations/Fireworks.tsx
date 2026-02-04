'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newFirework = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 60,
      }
      setFireworks((prev) => [...prev, newFirework])

      setTimeout(() => {
        setFireworks((prev) => prev.filter((f) => f.id !== newFirework.id))
      }, 1500)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const colors = ['#e84855', '#ff6b9d', '#ffd700', '#ff69b4', '#ff1493']
  const particles = 12

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {fireworks.map((firework) =>
        Array.from({ length: particles }).map((_, i) => {
          const angle = (i / particles) * Math.PI * 2
          const distance = 200
          const x = Math.cos(angle) * distance
          const y = Math.sin(angle) * distance

          return (
            <motion.div
              key={`${firework.id}-${i}`}
              className="absolute"
              initial={{
                left: `${firework.x}%`,
                top: `${firework.y}%`,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x,
                y,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors[i % colors.length] }}
              />
            </motion.div>
          )
        })
      )}
    </div>
  )
}

export default Fireworks
