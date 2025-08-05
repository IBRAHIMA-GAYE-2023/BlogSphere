import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
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
            {/* Contenu principal */}
            <div className="flex-1 p-4 bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Tableau de Bord</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="font-semibold">Total Articles</h2>
                        <p className="text-2xl">0</p> {/* Exemple de données réelles */}
                    </div>
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="font-semibold">Total Commentaires</h2>
                        <p className="text-2xl">0</p> {/* Exemple de données réelles */}
                    </div>
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="font-semibold">Utilisateurs Actifs</h2>
                        <p className="text-2xl">0</p> {/* Exemple de données réelles */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;