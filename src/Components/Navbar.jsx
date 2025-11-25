import React from 'react'

const Navbar = () => {
  return (
    <div className='h-full py-2 sticky top-0 bg-black flex items-center justify-between px-8'>
      <h1 className='uppercase text-4xl font-bold'>Cixo</h1>
      <div className="">
        <ul className='flex gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar