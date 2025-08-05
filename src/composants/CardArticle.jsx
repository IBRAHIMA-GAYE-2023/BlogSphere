import React from 'react';
import issmp from '../assets/issmp.png';
import hotte from '../assets/hotte.jpg';
import agri from '../assets/agri.jpg';
import BROCHURE from '../assets/Brochure.jpg';
import FLYER from '../assets/Flyer.jpg';
import TcAgri from '../assets/TcAgri.jpg';
import { FaCommentDots, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CardArticle() {

    const navigate = useNavigate();

    const handleLike = () => {
        alert('Veuillez vous connecter d\'abord !');
        navigate('/Login'); // Redirige vers la page de connexion

    };

    const handleComment = () => {
        alert('Veuillez vous connecter d\'abord !');
        navigate('/Login'); // Redirige vers la page de connexion

    };


    const articles = [
        { id: 1, tiltle: 'Monde Informatique', image: issmp, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus in justo efficitur tempus. Curabitur vel sapien ut libero dictum pulvinar. Phasellus vestibulum magna nec tellus pharetra, ut suscipit arcu consequat. Fusce id ante at velit dapibus scelerisque. Integer tincidunt.. ', },
        { id: 2, tiltle: 'Hotel de Evasion', image: hotte, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus in justo efficitur tempus. Curabitur vel sapien ut libero dictum pulvinar. Phasellus vestibulum magna nec tellus pharetra, ut suscipit arcu consequat. Fusce id ante at velit dapibus scelerisque. Integer tincidunt.. ', },
        { id: 3, tiltle: 'Projet de Goudronnage pour un Meilleur Accès', image: FLYER, content: 'Le projet de goudronnage vise à améliorer l’état des routes pour faciliter les déplacements. Il contribue au développement économique et social de la région. Une meilleure voirie réduit les accidents et favorise les ', },
        { id: 4, tiltle: 'L’Agriculture, Pilier de la Vie', image: agri, content: 'Lorem ipsum dolor sit amL’agriculture joue un rôle essentiel dans l’alimentation et le développement des sociétés. Elle permet de nourrir les populations tout en soutenant les économies rurales. Grâce aux innovations, elle devient plus durable et respectueuse de l’environnement..', },
        { id: 5, tiltle: 'Projet de Construction d’un Pont Moderne', image: BROCHURE, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus in justo efficitur tempus. Curabitur vel sapien ut libero dictum pulvinar. Phasellus vestibulum magna nec tellus pharetra, ut suscipit arcu consequat. Fusce id ante at velit dapibus scelerisque. Integer tincidunt.. ', },
        { id: 6, tiltle: 'L’Agriculture et Realité', image: TcAgri, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus in justo efficitur tempus. Curabitur vel sapien ut libero dictum pulvinar. Phasellus vestibulum magna nec tellus pharetra, ut suscipit arcu consequat. Fusce id ante at velit dapibus scelerisque. Integer tincidunt.. ', }
    ]


    return (
        <div className='grid grid-cols-3'>
            {articles.map((article, i) => (
                <div key={i} className="bg-white shadow-lg rounded-lg p-4 m-4 text-left"> {/* Text aligné à gauche */}
                    <h2 className="text-xl font-bold mt-2"> {article.tiltle}</h2>
                    <img className="w-80 rounded-md" src={article.image} alt="Bro Code" />
                    <p className="text-gray-700 mt-1">{article.content}</p>
                    <div className='flex space-x-4 mt-2 text-white'>
                        <button onClick={handleLike} className='bg-gray-500 rounded-lg px-4 p-2'> <FaHeart /> </button>
                        <button onClick={handleComment} className='bg-gray-500 rounded-lg px-8 p-2'> <FaCommentDots/> </button>
                        <button className='bg-gray-500 rounded-lg px-4 p-2'>Lire plus...</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
