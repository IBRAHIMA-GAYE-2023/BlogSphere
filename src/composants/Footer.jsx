import React from 'react';
import { FaEnvelopeSquare, FaFacebook, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-8">
            <hr className="border-gray-600" />
             <p>&copy; {new Date().getFullYear()} Mon Projet. Tous droits réservés.</p>
            <div className="flex justify-between mt-8">
                <h6 className='text-gray-400 text-xl'>BloSphere</h6>
               
                <p className='flex space-x-4 text-gray-400 align-center'>
                    <a href="/privacy-policy" className="hover:underline text-sm">Acceuil</a>      
                    <a href="/terms-of-service" className=" hover:underline text-sm">A propos</a>  
                     <a href="/terms-of-service" className=" hover:underline text-sm">Profile</a> 
                    <a href="/terms-of-service" className="hover:underline text-sm">contact</a>
                    <a href="/terms-of-service" className="hover:underline text-sm">Service</a>
                    <a href="/terms-of-service" className="hover:underline text-sm">aide</a>
                </p>
                
               
                <p className='flex text-2xl space-x-4 text-gray-400 align-center'> 
                
                <span> <FaEnvelopeSquare/></span>
                <span> <FaFacebook/></span>
                <span> <FaPhoneAlt/></span>
                </p>
               
             
                   
            </div>
           
        </footer>
    );
};

export default Footer;