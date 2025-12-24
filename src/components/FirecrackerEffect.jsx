import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FirecrackerEffect = () => {
  const [bursts, setBursts] = useState([])

  useEffect(() => {
    const createBurst = () => {
      const newBurst = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 10,
        color: ['#ff0000', '#ffd700', '#00ff00', '#0080ff', '#ff00ff'][Math.floor(Math.random() * 5)]
      }
      setBursts(prev => [...prev, newBurst])
    }

    const interval = setInterval(createBurst, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="firecracker-scene">
      {bursts.map(burst => (
        <div
          key={burst.id}
          className="firecracker-burst"
          style={{
            left: `${burst.x}%`,
            top: `${burst.y}%`,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="firecracker-particle"
              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0.5],
                x: Math.cos(i * 30 * Math.PI / 180) * 150,
                y: Math.sin(i * 30 * Math.PI / 180) * 150,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut"
              }}
              style={{
                background: burst.color,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default FirecrackerEffect
