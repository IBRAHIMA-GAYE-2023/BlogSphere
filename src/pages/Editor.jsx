import React from 'react'
import RichTextEditor from '../composants/RichTextEditor'
import { Link } from 'react-router-dom'
import Navbar from '../composants/Navbar'
import Footer from '../composants/Footer'

export default function Editor() {
  return (
    <div>
       <div className='flex bg-gray-800 text-white justify-between p-0'>
        <div className='font-bold text-3xl ml-4 mt-6'>
          <Link to="/">BlogSphere</Link>
        </div>
        <div className='flex justify-end items-end ml-auto mr-4 gap-5'>
          <button className='font-bold bg-white text-black px-5 py-2 rounded mb-2 mt-6'>
            <Link to="/Register">Sign In</Link>
          </button>
          <button className="font-bold bg-white text-black px-5 py-2 rounded mb-2">
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </div>
        
        <h1 className='text-4xl  font-semibold mt-10 font-serif'>Bienvenue sur votre Editor</h1>
        <p className='mt-2 text-lg'>Utilisez l'éditeur pour créer et formater vos articles. <br />
          Vous pouvez ajouter du texte, des images, des liens et bien plus encore.</p>
        <p className='mt-2 text-sm text-gray-500'>N'oubliez pas de sauvegarder vos modifications régulièrement.</p>
        <p className='mt-2 text-sm text-gray-500'>Pour toute assistance, consultez notre <a href="/help" className='text-blue-500'>page d'aide</a>.</p>
        <p className='mt-2 text-sm text-gray-500'>Merci de faire partie de notre communauté!</p>
        <div className='py-4 mt-10'>
        <Footer/> 
        </div>  
    </div>
    
  )
}
