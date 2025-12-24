import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    // Generate snowflakes with random properties
    const flakes = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.7,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 5
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="snowflake"
          initial={{ y: -10, x: 0 }}
          animate={{
            y: '100vh',
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: flake.animationDuration,
            repeat: Infinity,
            ease: "linear",
            delay: flake.delay,
            x: {
              duration: flake.animationDuration / 2,
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

export default Snowfall
