import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/custom/Hero'
import { MaxWrapper } from './components/custom/MaxWidthWrapper'

function App() {

  return (
    <MaxWrapper>
      <Hero />
    </MaxWrapper>

  )
}

export default App
