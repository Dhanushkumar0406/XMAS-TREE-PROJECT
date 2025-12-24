import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Snowfall from './Snowfall'
import ChristmasTree from './ChristmasTree'
import GiftBox from './GiftBox'
import confetti from 'canvas-confetti'

const ChristmasPage = () => {
  const [isGiftOpened, setIsGiftOpened] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleGiftClick = () => {
    if (isGiftOpened) return

    setIsGiftOpened(true)

    // Trigger confetti explosion
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 }

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    // Show message after gift animation
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
  }

  return (
    <div className="christmas-container">
      <Snowfall />

      {/* Animated lights border */}
      <div className="lights-border">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="light"
            style={{
              animationDelay: `${i * 0.1}s`,
              left: `${(i / 30) * 100}%`
            }}
          />
        ))}
      </div>

      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          className="header"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="main-title">
            <span className="glow-text">Happy Christmas 2025</span>
          </h1>
          <h2 className="name-title">Dhanush Kumar</h2>
          <p className="date">25/12/2025</p>
        </motion.div>

        {/* Christmas Tree */}
        <ChristmasTree />

        {/* Gift Box */}
        <GiftBox
          isOpened={isGiftOpened}
          onClick={handleGiftClick}
        />

        {/* Reveal Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="reveal-message"
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <motion.div
                className="message-content"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                    '0 0 40px rgba(255, 215, 0, 0.8)',
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="surprise-text">
                  Merry Christmas, Dhanush Kumar 🎄🎁
                </p>
                <motion.div
                  className="sparkle-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="sparkle"
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ChristmasPage
