import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Scene1Entry from './scenes/Scene1Entry'
import Scene2Gift from './scenes/Scene2Gift'
import Scene3Transition from './scenes/Scene3Transition'
import Scene4Final from './scenes/Scene4Final'

function App() {
  const [currentScene, setCurrentScene] = useState(1)

  const handleSceneComplete = (nextScene) => {
    setCurrentScene(nextScene)
  }

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <Scene1Entry key="scene1" onComplete={() => handleSceneComplete(2)} />
        )}
        {currentScene === 2 && (
          <Scene2Gift key="scene2" onComplete={() => handleSceneComplete(3)} />
        )}
        {currentScene === 3 && (
          <Scene3Transition key="scene3" onComplete={() => handleSceneComplete(4)} />
        )}
        {currentScene === 4 && (
          <Scene4Final key="scene4" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
