// src/components/EditArticle.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, updateArticle } from '../api';

const EditArticle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [image, setImage] = useState(null);
    const [isDraft, setIsDraft] = useState(false);
    // const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await getArticleById(id);
                const article = response.data;
                setTitle(article.title);
                setContent(article.content);
                // setImage(article.coverImage);
                setIsDraft(article.isDraft);
                // setCategory(article.category);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'article :', error);
            }
        };
        fetchArticle();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            content,
            isDraft
        }

        try {

            await updateArticle(id, formData);
            navigate(`/articles/${id}`); // Redirige vers le tableau de bord
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'article :', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Modifier l'Article</h1>
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
            {/* <input
                type="text"
                placeholder="Catégorie"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="border border-gray-300 rounded p-2 mb-4 w-full"
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
                Mettre à Jour l'Article
            </button>
        </form>
    );
};

export default EditArticle;