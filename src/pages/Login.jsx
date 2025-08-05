import React, { useState } from 'react';
import Navbar from '../composants/Navbar';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API/Authapi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    } else if (!email.includes('@')) {
      alert('Veuillez entrer un email valide');
      return;
    } else if (password.length < 6) {
      alert('Le mot de passe doit contenir au moins 6 caractères');
      return;
    } else {
      alert('Connexion réussie');
      navigate('/Dashboard'); 
    }

    
    try{
      const response = await loginUser({email, password });
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
    <div className=''>
       {/* <Navbar/> */}
      
      <div className='min-h-screen flex items-center justify-center bg-gray-200 p-4'>
    <div className='w-1/3'>
        <h1 className='font-bold text-3xl mb-8 text-center'>Login</h1>
        <form action="handleSubmit" onSubmit={handleSubmit}>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id='password'
                    className='border border-gray-300 w-full p-2 rounded'
                    required
                />
            </div>

           
            <button type="submit" className='bg-black text-white px-4 py-3 mt-6 rounded-2xl w-full'>Se connecter</button>
            <p className='mt-4 text-center'><em>Vous n'avez pas de compte?</em> <a href="/Register" className='text-blue-500'>Inscrivez-vous</a></p>
        </form>
    </div>
</div>
    </div>
  )
}