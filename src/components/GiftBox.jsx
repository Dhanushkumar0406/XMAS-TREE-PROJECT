import React from 'react'
import { motion } from 'framer-motion'

const GiftBox = ({ isOpened, onClick }) => {
  return (
    <motion.div
      className="gift-container"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div
        className="gift-box"
        onClick={onClick}
        whileHover={!isOpened ? { scale: 1.05, y: -5 } : {}}
        whileTap={!isOpened ? { scale: 0.95 } : {}}
        animate={
          isOpened
            ? {
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 }
              }
            : {
                y: [0, -8, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
        }
      >
        {/* Gift Box Lid */}
        <motion.div
          className="gift-lid"
          animate={
            isOpened
              ? {
                  rotateX: -120,
                  y: -80,
                  z: 50,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              : {}
          }
        >
          <div className="lid-top"></div>
          <div className="ribbon-horizontal"></div>
        </motion.div>

        {/* Gift Box Base */}
        <div className="gift-base">
          <div className="box-front"></div>
          <div className="box-back"></div>
          <div className="box-left"></div>
          <div className="box-right"></div>
          <div className="ribbon-vertical"></div>
          <div className="ribbon-bow">🎀</div>
        </div>

        {/* Light burst effect when opened */}
        {isOpened && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="light-ray"
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 3,
                  opacity: 0,
                  rotate: i * 45
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
                style={{
                  transform: `rotate(${i * 45}deg)`
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Click instruction */}
      {!isOpened && (
        <motion.p
          className="click-instruction"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Click to open your gift! 🎁
        </motion.p>
      )}
    </motion.div>
  )
}

export default GiftBox
