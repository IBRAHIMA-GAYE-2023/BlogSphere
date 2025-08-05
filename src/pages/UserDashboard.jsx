// src/components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { getUserDashboardArticles, deleteArticle } from '../api';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    console.log('UserDashboard component rendered', articles);
    

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getUserDashboardArticles();
                setArticles(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles :', error);
            }
        };
        fetchArticles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteArticle(id);
            setArticles(articles.filter(article => article._id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'article :', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Mon Tableau de Bord</h1>
            <ul className="space-y-4">
                {articles.map(article => (
                    <li key={article._id} className="border border-gray-300 rounded p-4">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p>{article.content}</p>
                        <div className="flex justify-between mt-4">
                            <button 
                                onClick={() => handleDelete(article._id)} 
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                            >
                                Supprimer
                            </button>
                            <button 
                                onClick={() => navigate(`/articles/edit/${article._id}`)} 
                                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                            >
                                Modifier
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;