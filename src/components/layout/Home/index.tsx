import React from 'react'
import Navbar from './nav'
import Footer from './footer'

interface IProp {
  children: React.ReactNode
}

const HomeLayout: React.FC<IProp> = ({ children}) => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-mainBg'>
      <Navbar />
      <div className='flex-1'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout