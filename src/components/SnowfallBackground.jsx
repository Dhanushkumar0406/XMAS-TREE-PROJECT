import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const SnowfallBackground = ({ intensity = 'normal' }) => {
  const flakeCount = intensity === 'light' ? 30 : 50

  const snowflakes = useMemo(() => {
    return [...Array(flakeCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.7,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5
    }))
  }, [flakeCount])

  return (
    <div className="snowfall-bg">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="snowflake-particle"
          initial={{ y: -10, x: 0 }}
          animate={{
            y: '100vh',
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            ease: "linear",
            delay: flake.delay,
            x: {
              duration: flake.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          style={{
            left: `${flake.left}%`,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default SnowfallBackground
