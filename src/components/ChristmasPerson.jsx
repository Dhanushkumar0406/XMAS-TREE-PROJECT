import React from 'react'
import { motion } from 'framer-motion'

const ChristmasPerson = () => {
  return (
    <motion.div
      className="christmas-person"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="santa-character">
        <motion.div
          className="santa-emoji"
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎅
        </motion.div>
        <motion.div
          className="wave-hand"
          animate={{
            rotate: [0, 15, 0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          👋
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ChristmasPerson
