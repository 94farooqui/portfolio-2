import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar'

const RootLayout = () => {
  return (
    <div className='w-[1200px] mx-auto  relative overflow-y-hidden flex'>
        <div className='w-[300px] h-screen px-[13px] flex flex-col justify-center'>
            <Sidebar/>
        </div>
        <div className='w-[900px] overflow-y-scroll'>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout