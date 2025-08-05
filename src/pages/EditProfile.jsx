import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
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
            setNewName(name);
            setNewEmail(email);
        }

        if (bioStored) {
            setBio(bioStored);
        }

        // Affiche l'image de profil par défaut ou celle stockée
        setProfileImage(profileImageStored);
        setImagePreview(profileImageStored);
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleUpdate = () => {
        localStorage.setItem('userName', newName);
        localStorage.setItem('userEmail', newEmail);
        localStorage.setItem('userBio', bio);
        if (profileImage) {
            localStorage.setItem('profileImage', imagePreview);
        }

        alert('Profil mis à jour avec succès !');
        navigate('/profile');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="w-1/3 bg-white p-4 rounded shadow">
                <h1 className="font-bold text-3xl mb-4 text-center">Modifier le Profil</h1>
                {imagePreview && (
                    <img src={imagePreview} alt="Aperçu" className="w-24 h-24 rounded-full mx-auto mb-4" />
                )}
                <div className="mt-4">
                    <label htmlFor='newName' className='block'>Nom:</label>
                    <input
                        type="text"
                        id='newName'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor='newEmail' className='block'>Email:</label>
                    <input
                        type="email"
                        id='newEmail'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor='bio' className='block'>Bio:</label>
                    <textarea
                        id='bio'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder='Ecrivez votre bio ici......'
                    ></textarea>
                </div>
                <div className="mt-4">
                    <label htmlFor='profileImage' className='block'>Photo de Profil:</label>
                    <input
                        type="file"
                        id='profileImage'
                        accept="image/*"
                        onChange={handleImageChange}
                        className='border border-gray-300 w-full p-2 rounded'
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <button onClick={handleUpdate} className="bg-black text-white px-4 py-2 rounded">
                        Mettre à jour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;