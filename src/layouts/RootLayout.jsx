import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'

const RootLayout = () => {
  return (
    <div className='w-[1200px] mx-auto  relative overflow-y-hidden flex'>
        <div className='w-[300px] h-screen px-[13px] flex flex-col py-16 sticky top-0 left-0'>
            <Sidebar/>
        </div>
        <div className='w-[900px] overflow-y-scroll mt-16 relative' style={{scrollbarWidth:"none"}}>
         <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout