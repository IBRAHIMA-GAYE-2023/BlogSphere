import React from 'react';
import { FaHouseUser, FaPenSquare, FaListUl, FaUser } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Supprimer les données de l'utilisateur de localStorage
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');

        // Rediriger vers la page de connexion
        navigate('/login'); // Mettez à jour le chemin selon votre structure de routes
    };
    
    return (
        <div className="flex min-h-screen">
            {/* Menu latéral */}
            <div className="bg-black text-white rounded-md w-1/4 p-4">
                <h1 className="text-2xl font-bold mb-6 text-center">BlogSphere</h1>
                <ul className="flex flex-col mt-20 ml-3">
                    <li className="flex items-center mb-4">
                        <FaHouseUser className="mr-2" />
                        <Link to="/dashboard" className="hover:underline">Accueil</Link>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaPenSquare className="mr-2" />
                        <Link to="/CreateArticle" className="hover:underline">Créer Article</Link>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaListUl className="mr-2" />
                        <Link to="/ArticleList" className="hover:underline">Articles</Link>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaUser className="mr-2" />
                        <Link to="/profile" className="hover:underline">Profil</Link>
                    </li>
                    <li className="flex items-center mb-4 ">
                        <button onClick={handleLogout} className="flex items-center text-white bg-transparent border-0 hover:underline">
                        <FaArrowUpRightFromSquare className="mr-2" />
                            Déconnexion
                        </button>
                    </li>
                </ul>
            </div>

            {/* Contenu principal */}
            <div className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;