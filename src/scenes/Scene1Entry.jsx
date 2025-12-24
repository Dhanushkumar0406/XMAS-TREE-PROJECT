import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import SnowfallBackground from '../components/SnowfallBackground'
import ChristmasPerson from '../components/ChristmasPerson'

const Scene1Entry = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 5000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="scene scene-entry"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <SnowfallBackground />

      {/* Decorative Stars */}
      <div className="stars-decoration">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="star-particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${15 + Math.sin(i) * 30}%`,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      <div className="scene-content">
        <motion.div
          className="entry-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="main-title"
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 0, 0, 0.5)',
                '0 0 40px rgba(255, 0, 0, 0.8)',
                '0 0 20px rgba(255, 0, 0, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="glow-text">Happy Christmas 2025</span>
          </motion.h1>
          <h2 className="name-title">Dhanush Kumar</h2>
          <p className="date">25/12/2025</p>
        </motion.div>

        <div className="entry-stage">
          <motion.div
            className="tree-wrapper"
            initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Twinkling lights around tree */}
            <div className="tree-lights-wrapper">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="tree-light-dot"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    background: i % 3 === 0 ? '#ff0000' : i % 3 === 1 ? '#ffd700' : '#00ff00',
                  }}
                />
              ))}
            </div>
            <img src="/image.png" alt="Christmas Tree" className="tree-image-scene" />
          </motion.div>

          <motion.div
            className="person-wrapper"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.2,
              type: "spring",
              stiffness: 120
            }}
          >
            <ChristmasPerson />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="decorative-gifts"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="gift-icon">🎁</span>
          <span className="gift-icon">🎁</span>
          <span className="gift-icon">🎁</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Scene1Entry
