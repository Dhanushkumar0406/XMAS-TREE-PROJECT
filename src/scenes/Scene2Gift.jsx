import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SnowfallBackground from '../components/SnowfallBackground'
import GiftBoxInteractive from '../components/GiftBoxInteractive'
import ChristmasPerson from '../components/ChristmasPerson'

const Scene2Gift = ({ onComplete }) => {
  const [giftOpened, setGiftOpened] = useState(false)

  const handleGiftOpen = () => {
    setGiftOpened(true)
    setTimeout(() => {
      onComplete()
    }, 3000)
  }

  return (
    <motion.div
      className="scene scene-gift"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SnowfallBackground />

      <div className="scene-content">
        <div className="gift-stage">
          <motion.div
            className="tree-wrapper-small"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src="/image.png" alt="Christmas Tree" className="tree-image-small" />
          </motion.div>

          <motion.div
            className="person-wrapper-small"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ChristmasPerson />
          </motion.div>

          <GiftBoxInteractive onOpen={handleGiftOpen} isOpened={giftOpened} />
        </div>
      </div>
    </motion.div>
  )
}

export default Scene2Gift
