import React from 'react'
import Navbar from '../composants/Navbar'
import Footer from '../composants/Footer'
import { Link } from 'react-router-dom'
import CardArticle from '../composants/CardArticle'







export default function Home() {

    const articleData = {
    title: "Monde Informatique",
    imageSrc: "../assets/issmp.jpg", // Remplacez par l'URL de votre image
    description: "Nous somme dans un monde informatique .",
  };
  return (
    
    
    <div className='bg-gray-100 p-0 m-0'>
       {/* <Navbar/> */}
       
        <div className='flex bg-blue-950 text-white justify-between items-center p-4'>
        <div className='font-bold text-3xl ml-4 mt-6 font-serif'>
        <Link to="/">BlogSphere</Link>
        </div>
         
        <div className='flex justify-end items-end ml-auto mr-4 gap-5'>
        <button className='font-bold bg-red-500 text-white px-5 py-2 rounded mb-2 mt-6'>
        <Link to="/Register" className="hover:red">Sign In </Link> 
        </button>
        <button className="font-bold bg-red-500 text-white px-5 py-2 rounded mb-2">
         <Link to="/Login" className="hover:red">Login</Link>
        </button>
        </div>
       
        </div>
       
       
      <h3 className='font-bold text-4xl mt-8 font-serif'>Bienvenue dans mon BlogSphere</h3>
      
        <p className='mt-6'>Votre destination pour des articles captivants et enrichissants. <br /> Explorez notre contenu diversifié et trouvez l'inspiration qui vous convient.</p>
        
      <div className="p-4">
      
      <CardArticle
        title={articleData.title}
        imageSrc={articleData.imageSrc}
        description={articleData.description}
      />
      </div>
      <div>
          <div className="p-4">
      <CardArticle
        title={articleData.title}
        imageSrc={articleData.imageSrc}
        description={articleData.description}
      />
      </div>
      </div>
    
      

      <div className='py-4 mt-83 '>
     <Footer/> 
     </div>
    </div>
    
    


   
  )
}
