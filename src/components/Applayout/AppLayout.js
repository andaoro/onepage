import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const AppLayout = ({children}) => {
  return (
    <div className='appContainer bg-orange-100'>
        <Navbar/>
        <div className='bodyContainer py-6'> 
            {children}
        </div>
    </div>
  )
}
