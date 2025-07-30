import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav>
    
      <div className='flex justify-end items-cente'>
        <div className="mr-120 text-3xl font-serif font-bold">
        <Link to="/">BlogSphere</Link>
      </div>
     
      <ul className="flex justify-between items-center space-x-4 ">
        <li>
          <Link to="/Home" className="hover:red text-sm">Accueil</Link>
        </li>
         <li>
          <Link to="/Profile" className="hover:red text-sm">Profile</Link>
        </li>
        <li>
          <Link to="/Dashboard" className="hover:red text-sm">Dashboard</Link>
        </li>
         <li>
          <Link to="/Article" className="hover:red text-sm">Article</Link>
        </li>

        <li>
          <Link to="/Editor" className="hover:red text-sm">Editor</Link>
        </li>
  
        <li className="font-bold bg-black text-white px-4 py-2 rounded mb-2">
          <Link to="/Register" className="hover:red">Inscription</Link> 
        </li>
         <li className="font-bold bg-black text-white px-4 py-2 rounded mb-2">
          <Link to="/Login" className="hover:red">Connexion</Link>
        </li>
           
      </ul>
      
       </div>

    </nav>
     <hr  className='mt-2'/>
    </div>
  )
}
