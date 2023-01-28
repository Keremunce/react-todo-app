import React from 'react'
// import { Outlet } from 'react-router-dom'
import Nav from './nav'
import Sidebar from './sidebar'

export default function Layout({children}) {
return (
    <div className='grid grid-cols-12 gap-4 w-full h-full'>
        <Sidebar></Sidebar>
        <div className='w-full  border-red-500 col-span-10'>
            <Nav></Nav>
            
            {/* <Tasks></Tasks> */}
            {/* <Outlet></Outlet> */}
            {children}
        </div>
    </div>
)
}
