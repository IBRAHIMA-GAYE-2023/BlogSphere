import React from 'react'
import RichTextEditor from '../composants/RichTextEditor'
import Navbar from '../composants/Navbar'
import Footer from '../composants/Footer'

export default function Editor() {
  return (
    <div>
        <Navbar/>
        
        <h1 className='text-4xl  font-semibold mt-10 font-serif'>Bienvenue sur votre Editor</h1>
        <RichTextEditor />
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
