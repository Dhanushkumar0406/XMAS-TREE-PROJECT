import React from 'react'
import { motion } from 'framer-motion'

const ChristmasTree = () => {
  return (
    <motion.div
      className="tree-container"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Twinkling lights overlay */}
      <div className="tree-lights">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="tree-light"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              backgroundColor: i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#ffd700' : '#4ecdc4'
            }}
          />
        ))}
      </div>

      {/* Christmas Tree Image */}
      <motion.div
        className="tree-image-wrapper"
        animate={{
          filter: [
            'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
            'drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))',
            'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="/image.png"
          alt="Christmas Tree"
          className="tree-image"
        />
      </motion.div>

      {/* Floating ornaments */}
      <motion.div
        className="floating-ornament ornament-1"
        animate={{
          y: [-5, 5, -5],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🔴
      </motion.div>
      <motion.div
        className="floating-ornament ornament-2"
        animate={{
          y: [5, -5, 5],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        🟡
      </motion.div>
      <motion.div
        className="floating-ornament ornament-3"
        animate={{
          y: [-3, 3, -3],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        ⭐
      </motion.div>
    </motion.div>
  )
}

export default ChristmasTree
