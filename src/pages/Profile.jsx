import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileUser } from '../API/Authapi'; // Assure-toi que cette fonction renvoie les données du profil

const Profile = () => {
    const [user, setUser] = useState(null); // Utilise useState pour stocker le profil
    const navigate = useNavigate();

    console.log('User', user);
    

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await ProfileUser(); // Appel à l'API
                console.log('Response ', response);
                
                setUser(response.user); // Mets à jour le state avec la réponse
                localStorage.setItem('user', JSON.stringify(response)); // Optionnel : stocke localement
            } catch (error) {
                console.error("Erreur lors de la récupération du profil :", error);
                // Redirection si non connecté ?
                navigate('/login');
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleDelete = () => {
        if (window.confirm('Voulez-vous vraiment supprimer votre profil ?')) {
            localStorage.clear();
            navigate('/login');
        }
    };

    if (!user) {
        return <div className="text-center mt-10">Chargement du profil...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="w-full max-w-md bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">Profil</h1>
                <img
                    src={user.image || 'default-image-url.jpg'}
                    alt="Profil"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p><strong>Nom:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio || "Ajoutez une bio..."}</p>
                <div className="mt-6 flex justify-between">
                    <button onClick={handleEditProfile} className="bg-black text-white px-4 py-2 rounded">
                        Modifier
                    </button>
                    <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
