import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import FirecrackerEffect from '../components/FirecrackerEffect'

const Scene3Transition = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="scene scene-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FirecrackerEffect />
    </motion.div>
  )
}

export default Scene3Transition
