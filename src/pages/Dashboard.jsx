import React from 'react'
import Navbar from '../composants/Navbar'
import { useState } from 'react';

export default function Dashboard() {
 ;

  return (
    <div>
      {/* <Navbar/> */}
      <h1>Bienvenue dans dans Dashboard</h1>
      <div className={`{bg-gray-800 text-white fixed top-0 left-0 h-full flex flex-col justify-between 
        ${isOpen ? 'w52' : 'w20'} duration-300`}>
      <div  className='text-3xl font-bold text-center mt-4'>
          {/* logo */}
        
            <span className='text-white'>BlogSphere</span>
      </div>
      </div>
    </div>
  )
}
