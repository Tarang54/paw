import React from 'react'
import Logo from "./../../assets/logo.png"

function Header() {
  return (
    <div className='flex flex-row justify-between px-8 items-center rounded-lg border-b-[1px] border-gray-500'>
      <div className="">
        <a href="/"><img src={Logo} width="97px" height="97px" alt="" /></a>
      </div>
      <div className="flex flex-row list-none">
        <a href="#" className='px-4'><li>Home</li></a>
        <a href="#" className='px-4'><li>About Us</li></a>
        <a href="#" className='px-4'><li>Features</li></a>
        <a href="#" className='px-4'><li>Demo</li></a>
        <a href="#" className='px-4'><li>Contact Us</li></a>
      </div>
    </div>
  )
}

export default Header
