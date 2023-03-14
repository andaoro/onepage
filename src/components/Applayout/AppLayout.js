import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const AppLayout = ({children}) => {
  return (
    <div className='flex flex-col bg-orange-100'>
        <Navbar/>
        <div className='py-6'> 
            {children}
        </div>
    </div>
  )
}
