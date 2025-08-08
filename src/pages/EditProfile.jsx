import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileUser, updateProfile } from '../API/Authapi';

const EditProfile = () => {
    const [user, setUser] = useState(null)
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

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


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Remplir les champs à partir du profil utilisateur
    useEffect(() => {
        if (user) {
            setUser(user)
        }
    }, [user]);


    const handleUpdateProfile = async () => {
        if (!user) return;
        try {
            const response = await updateProfile(user);
            console.log('Profil mis à jour:', response);
            alert('Proifle mise a jour avec succes')
            navigate('/profile');
        } catch (err) {
            console.log("Une erreur s'est produite lors de la mise à jour !", err);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
            <div className="w-full bg-white p-4 rounded shadow">
                <h1 className="font-bold text-3xl mb-4 text-center">Modifier le Profil</h1>
                {imagePreview && (
                    <img src={imagePreview} alt="Aperçu" className="w-24 h-24 rounded-full mx-auto mb-4" />
                )}
                <div className="mt-4">
                    <label htmlFor='newName' className='float-left'>Nom:</label>
                    <input
                        type="text"
                        id='newName'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={user?.name}
                        onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}

                    />
                </div>
                <div className="mt-4">
                    <label htmlFor='newEmail' className='float-left'>Email:</label>
                    <input
                        type="email"
                        id='newEmail'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={user?.email}
                        onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}

                    />
                </div>
                <div className="mt-4">
                    <label htmlFor='bio' className='float-left'>Bio:</label>
                    <textarea
                        id='bio'
                        className='border border-gray-300 w-full p-2 rounded'
                        value={user?.bio}
                        onChange={(e) => setUser(prev => ({ ...prev, bio: e.target.value }))}
                        placeholder='Ecrivez votre bio ici......'
                    ></textarea>
                </div>
                <div className="mt-4">
                    <label htmlFor='profileImage' className='float-left'>Photo de Profil:</label>
                    <input
                        type="file"
                        id='profileImage'
                        accept="image/*"
                        onChange={handleImageChange}
                        className='border border-gray-300 w-full p-2 rounded'
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <button onClick={handleUpdateProfile} className="bg-black text-white px-4 py-2 rounded">
                        Mettre à jour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;