import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between w-full'>
      <div>
        <Image
        src='/logo.png'
        alt='logo'
        width={500}
        height={500}/>
      </div>
    </nav>
  )
}

export default Navbar
