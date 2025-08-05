import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');
        const bioStored = localStorage.getItem('userBio');
        const profileImageStored = localStorage.getItem('profileImage') || 'default-image-url.jpg'; // URL par défaut

        if (name && email) {
            setUserName(name);
            setUserEmail(email);
        }

        if (bioStored) {
            setBio(bioStored);
        }

        // Affiche l'image de profil par défaut ou celle stockée
        setProfileImage(profileImageStored);
        setImagePreview(profileImageStored);
    }, []);

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleDelete = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userBio');
        localStorage.removeItem('profileImage');
        localStorage.removeItem('token');
        alert('Voulez-vous vraiment supprimer votre profil ?');
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="w-1/3 bg-white p-4 rounded shadow">
                <h1 className="font-bold text-3xl mb-4 text-center">Profil de l'Utilisateur</h1>
                {imagePreview && (
                    <img src={imagePreview} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4" />
                )}
                <div className="mt-4">
                    <strong>Nom:</strong> {userName}
                </div>
                <div className="mt-4">
                    <strong>Email:</strong> {userEmail}
                </div>
                <div className="mt-4">
                    <strong>Bio:</strong> {bio || "Ecrivez votre bio ici..."}
                </div>
                <div className="mt-6 flex justify-around ">
                    <button onClick={handleEditProfile} className="bg-black text-white px-4 py-2 rounded">
                       Update Profile
                    </button>
                    <button onClick={handleDelete} className="bg-black text-white px-4 py-2 rounded">
                       Delete Profile 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;