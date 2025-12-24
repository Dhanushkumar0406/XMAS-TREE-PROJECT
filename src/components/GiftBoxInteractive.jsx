import React from 'react'
import { motion } from 'framer-motion'

const GiftBoxInteractive = ({ onOpen, isOpened }) => {
  return (
    <div className="gift-interactive-container">
      {!isOpened && (
        <motion.p
          className="gift-hint"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click the gift! 🎁
        </motion.p>
      )}

      <motion.div
        className="gift-box-interactive"
        onClick={!isOpened ? onOpen : undefined}
        animate={!isOpened ? {
          y: [0, -10, 0],
          scale: [1, 1.02, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: !isOpened ? Infinity : 0,
          ease: "easeInOut"
        }}
        whileHover={!isOpened ? {
          scale: 1.05,
          filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))'
        } : {}}
        style={{ cursor: !isOpened ? 'pointer' : 'default' }}
      >
        <motion.div
          className="gift-lid-interactive"
          animate={isOpened ? {
            rotateX: -120,
            y: -100,
            z: 50,
          } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="lid-top-interactive"></div>
          <div className="ribbon-h"></div>
        </motion.div>

        <div className="gift-base-interactive">
          <div className="gift-front"></div>
          <div className="ribbon-v"></div>
          <div className="bow">🎀</div>
        </div>

        {isOpened && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="light-burst"
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 4,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: i * 0.05
                }}
                style={{
                  transform: `rotate(${i * 45}deg)`
                }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="sparkle-particle"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 18 * Math.PI / 180) * 100,
                  y: Math.sin(i * 18 * Math.PI / 180) * 100,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut"
                }}
              >
                ✨
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </div>
  )
}

export default GiftBoxInteractive
