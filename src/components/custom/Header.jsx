import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex items-center justify-between w-full px-5 2xl:px-20 p-4 shadow-lg'>
      <img src="/logo.svg" alt="logo" />
      <div className="">
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
