import React from 'react';

const Footer = () => {
    return (
        <footer>
            <hr className="border-gray-600" />
            <div className="text-center mt-2">
                <p>&copy; {new Date().getFullYear()} Mon Projet. Tous droits réservés.</p>
                <p className='flex space-x-4 text-gray-400 align-center'>
                    <a href="/privacy-policy" className="hover:underline text-sm">Acceuil</a>      
                    <a href="/terms-of-service" className=" hover:underline text-sm">A propos</a>  
                     <a href="/terms-of-service" className=" hover:underline text-sm">Profile</a> 
                    <a href="/terms-of-service" className="hover:underline text-sm">aide</a>
                    <a href="/terms-of-service" className="hover:underline text-sm">aide</a>
                    <a href="/terms-of-service" className="hover:underline text-sm">aide</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;