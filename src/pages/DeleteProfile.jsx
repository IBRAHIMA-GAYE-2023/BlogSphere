// src/components/DeleteProfile.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteProfile = () => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const token = localStorage.getItem('token');

        try {
            await axios.delete('http://localhost:5000/api/auth/Profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Supprimez les informations de l'utilisateur de localStorage
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('token');

            alert('Profil supprimé avec succès.');
            navigate('/'); // Redirigez vers la page d'accueil ou de connexion
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            alert('Erreur lors de la suppression du profil.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="w-1/3 bg-white p-4 rounded shadow">
                <h1 className="font-bold text-3xl mb-4 text-center">Supprimer le Profil</h1>
                <p>Êtes-vous sûr de vouloir supprimer votre profil ?</p>
                <button onClick={handleDelete} className='bg-black text-white px-4 py-3 mt-6 rounded-2xl w-full'>Confirmer la suppression</button>
            </div>
        </div>
    );
};

export default DeleteProfile;