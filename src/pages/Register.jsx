import React, { useState } from 'react';
import Navbar from '../composants/Navbar';
import { useNavigate } from 'react-router-dom'; // 
import { registerUser } from '../API/Authapi';

export default function Register() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    } else if (!email.includes('@')) {
      alert('Veuillez entrer un email valide');
      return;
    } else if (password.length < 6) {
      alert('Le mot de passe doit contenir au moins 6 caractères');
      return;
    } else {
      alert('Inscription réussie');
      navigate('/Login'); 
    }

    try{
      const response = await registerUser({ prenom, email, password });
      console.log('Inscription reussie:', response);
      setPrenom('');
      setEmail('');
      setPassword('');

    }catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    }


  };
  return (
    <div>
       
      <div className='min-h-screen flex items-center justify-center bg-gray-200 p-4'>
    <div className='w-1/3'>
        <h1 className='font-bold text-3xl mb-5 text-center'>Inscription</h1>
        <form action="handleSubmit" onSubmit={handleSubmit}>
            <div className='mt-4'>
                <label htmlFor='prenom' className='block'>Prénom:</label>
                <input
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    type="text"
                    id='prenom'
                    className='border border-gray-300 w-full p-2 rounded'
                    required
                />
            </div>
            <div className='mt-4'>
                <label htmlFor='email' className='block'>Email:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id='email'
                    className='border border-gray-300 w-full p-2 rounded'
                    required
                />
            </div>
            <div className='mt-4'>
                <label htmlFor='password' className='block'>Password:</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id='password'
                    className='border border-gray-300 w-full p-2 rounded'
                    required
                />
            </div>
            <div className='mt-4'>
                <label htmlFor='confirmPassword' className='block'>Confirmer le mot de passe:</label>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    id='confirmPassword'
                    className='border border-gray-300 w-full p-2 rounded'
                    required
                />
            </div>
               <div className='mt-4'>
           <label htmlFor='role' className='block text-gray-700'>Rôle:</label>
            <select
             id='role'
             className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2'
           >
        <option value=""></option>
        <option value="">Utilisateur</option>
        <option value="auteur">Auteur</option>
        <option value="blogueur">Blogueur</option>
        <option value="developpeur">Développeur</option>
         </select>
        </div>
            <button type="submit" className='bg-black text-white px-10 py-3 mt-5 rounded-2xl w-full'>S'inscrire</button>
            <p className='mt-4 text-center'>
                <em>Vous avez déjà un compte? </em>
                <a href="/Login" className='text-blue-500'>Connectez-vous</a>
            </p>
        </form>
    </div>
</div>
    </div>
  )
}
