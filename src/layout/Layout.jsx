import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    
    return (
        <div className="flex min-h-screen">
            {/* Menu latéral */}
            <div className="bg-black text-white rounded-md w-1/4 p-2">
                <h1 className="text-2xl font-bold mb-4 ">BlogSphere</h1>
                <ul className='mt-20'>
                     <li className="mb-2">
                        <Link to="/dashboard" className="hover:underline">Acceuil</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/CreateArticle" className="hover:underline">Creer Article</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/ArticleList" className="hover:underline">Articles</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/profile" className="hover:underline">Profile</Link>
                    </li>
                    <li className="mb-2">
                        <button className="hover:underline text-white bg-transparent border-0">Déconnexion</button>
                    </li>
                    {/* Ajoutez d'autres liens ici */}
                </ul>
            </div>

            {/* Contenu principal */}
            <div className="flex-1 p-4 bg-gray-100">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;