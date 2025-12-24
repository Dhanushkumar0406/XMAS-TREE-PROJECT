import React from 'react'
import { motion } from 'framer-motion'
import SnowfallBackground from '../components/SnowfallBackground'

const Scene4Final = () => {
  return (
    <motion.div
      className="scene scene-final"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <SnowfallBackground intensity="light" />

      <div className="final-content">
        <motion.div
          className="final-message"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="final-greeting"
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 215, 0, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.8)',
                '0 0 20px rgba(255, 215, 0, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Christmas to All
          </motion.h1>

          <motion.p
            className="final-signature"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            By Dhanush Kumar
          </motion.p>

          <motion.div
            className="firework-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="firework"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeOut"
                }}
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 10}%`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Scene4Final
