import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-2 shadow-lg flex justify-between items-center px-2'>
      <img src="/logo.svg" alt="logo" />
      <div className="">
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
