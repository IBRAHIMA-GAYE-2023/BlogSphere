import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API/Authapi'; // Assurez-vous que cette fonction renvoie le token

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation des champs
        if (!email || !password) {
            alert('Veuillez remplir tous les champs');
            return;
        }

      
    try {
        const response = await loginUser({ email, password });
        console.log('Connexion réussie:', response);    

        // Stockez le token, le nom et l'email dans localStorage
        localStorage.setItem('token', response.token); // Assurez-vous que le token est renvoyé
        localStorage.setItem('userName', response.user?.name); // Assurez-vous que le champ est correct
        localStorage.setItem('userEmail', response.user?.email); // Assurez-vous que le champ est correct

        // Réinitialiser les champs de formulaire
        setEmail('');
        setPassword('');

        // Redirige vers la page de profil après la connexion réussie
        navigate('/Dashboard'); 
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
    }
};

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-200 p-4'>
            <div className='w-1/3'>
                <h1 className='font-bold text-3xl mb-8 text-center'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <label htmlFor='email' className='block'>Email:</label>
                        <input
                            type="email"
                            id='email'
                            className='border border-gray-300 w-full p-2 rounded'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='password' className='block'>Password:</label>
                        <input
                            type="password"
                            id='password'
                            className='border border-gray-300 w-full p-2 rounded'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='bg-black text-white px-4 py-3 mt-6 rounded-2xl w-full'>Se connecter</button>
                    <p className='mt-4 text-center'><em>Vous n'avez pas de compte?</em> <a href="/Register" className='text-blue-500'>Inscrivez-vous</a></p>
                </form>
            </div>
        </div>
    );
}