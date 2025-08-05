// src/components/ArticleList.js
import React, { useEffect, useState } from 'react';
import { getAllArticles, filterArticles } from '../api';
import { useNavigate } from 'react-router-dom';

const ArticleList = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    console.log('Articles', articles);
    

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getAllArticles();
                console.log('Response', response);
                
                setArticles(response);
            } catch (error) {
                console.error('Erreur lors de la récupération des articles :', error);
            }
        };
        fetchArticles();
    }, []);

    const handleFilter = async () => {
        try {
            const response = await filterArticles({ keyword, category });
            setArticles(response.data);
        } catch (error) {
            console.error('Erreur lors du filtrage des articles :', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Liste des Articles</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Rechercher par mot-clé"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="border border-gray-300 rounded p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Catégorie"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <button onClick={handleFilter} className="bg-blue-500 text-white py-2 rounded mt-2 w-full">
                    Filtrer
                </button>
            </div>
            <ul className="space-y-4">
                {articles.map(article => (
                    <li key={article._id} className="border border-gray-300 rounded p-4">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p>{article.content}</p>
                        <button 
                            onClick={() => navigate(`/articles/${article._id}`)} 
                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        >
                            Détails
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;