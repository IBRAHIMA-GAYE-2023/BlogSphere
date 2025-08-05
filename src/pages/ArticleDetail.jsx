// src/components/ArticleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, addComment, getCommentsByArticleId } from '../api';
import CommentSection from './CommentSection'; // Créez ce composant pour gérer les commentaires

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await getArticleById(id);
                setArticle(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'article :', error);
            }
        };
        fetchArticle();
    }, [id]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsByArticleId(id);
                setComments(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des commentaires :', error);
            }
        };
        fetchComments();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            await addComment(id, { content: newComment });
            setComments([...comments, { content: newComment }]);
            setNewComment('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du commentaire :', error);
        }
    };

    if (!article) return <div>Chargement...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{article.title}</h1>
            <p>{article.content}</p>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Likes: {article.likesCount}</h3>
                <h3 className="text-lg font-semibold">Dislikes: {article.dislikesCount}</h3>
            </div>
            <form onSubmit={handleCommentSubmit} className="mt-4">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Ajouter un commentaire"
                    required
                    className="border border-gray-300 rounded p-2 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Commenter
                </button>
            </form>
            <CommentSection comments={comments} />
        </div>
    );
};

export default ArticleDetail;