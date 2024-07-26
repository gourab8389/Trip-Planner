import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='w-full h-screen px-5 py-2'>
      <div className="h-full w-full flex flex-col items-center gap-5 ">
        <p className='md:text-5xl text-xl font-extrabold text-center'><span className='text-yellow-900'>Discover Your Next Adventure with AI:</span> Personslized itineraries at your Fingertips</p>
        <p className='text-lg text-slate-800 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interestes and budget.</p>
        <Button>Get Started.It's free</Button>
      </div>
    </div>
  )
}

export default Hero
