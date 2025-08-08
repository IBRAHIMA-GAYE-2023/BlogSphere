import React from 'react';
import CardArticle from '../composants/CardArticle'; // Assurez-vous que le chemin est correct
import Footer from '../composants/Footer';
import { Link } from 'react-router-dom';
import ArticleCard1 from '../composants/ArticleCard1';

export default function Home() {
  return (
    <div className='bg-gray-100 '>
      
      <div className='flex bg-gray-800 text-white justify-between p-0'>
        <div className='font-bold text-3xl ml-4 mt-6'>
          <Link to="/">BlogSphere</Link>
        </div>
        <div className='flex justify-end items-end ml-auto mr-4 gap-5'>
          <button className='font-bold bg-white text-black px-8 py-2 rounded-full hover:bg-gray-300 transition duration-300 mb-2 mt-6'>
            <Link to="/Register">Sign In</Link>
          </button>
          <button className="font-bold bg-white text-black px-8 py-2 rounded-full hover:bg-gray-300 transition duration-300 mb-2">
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </div>

      <h3 className='font-bold text-4xl mt-8 '>Bienvenue dans mon BlogSphere</h3>
      <p className='mt-6'>Votre destination pour des articles captivants et enrichissants. <br /> Explorez notre contenu diversifié et trouvez l'inspiration qui vous convient.</p>
      <h3 className='mt-15 font-bold text-3xl text-left ml-10'>Les articles recents..</h3>
      
     <div className="flex  items-start"> {/* Alignement à gauche */}
        <CardArticle />
        
      </div>

      <div className='py-4 mt-8'>
        <Footer /> 
      </div>
    </div>
  );
}