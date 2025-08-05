// src/components/CreateArticle.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createArticle } from '../api';

const CreateArticle = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [image, setImage] = useState(null);
    const [isDraft, setIsDraft] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createArticle({
                title,
                content,
                isDraft
            });

            console.log('Response', response);
            navigate('/ArticleList');
        } catch (error) {
            console.error('Erreur lors de la création de l\'article :', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Créer un Article</h1>
            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <textarea
                placeholder="Contenu"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            {/* <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mb-4"
            /> */}

            <label className="flex items-center mb-4">
                <input
                    type="checkbox"
                    checked={isDraft}
                    onChange={() => setIsDraft(!isDraft)}
                    className="mr-2"
                />
                Enregistrer comme brouillon
            </label>
            <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600">
                Créer l'Article
            </button>
        </form>
    );
};

export default CreateArticle;