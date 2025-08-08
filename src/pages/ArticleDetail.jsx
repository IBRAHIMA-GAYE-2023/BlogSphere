import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, addComment, getCommentsByArticleId, deleteComment, likeArticle, dislikeArticle } from '../api';
import CommentSection from './CommentSection';

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
            const response = await addComment(id, { content: newComment });
            setComments((prevComments) => [response.data, ...prevComments]); // Ajoutez le commentaire renvoyé par l'API
            setNewComment('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du commentaire :', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(commentId);
            setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId)); // Supprimez le commentaire localement
        } catch (error) {
            console.error('Erreur lors de la suppression du commentaire :', error);
        }
    };

    const handleLike = async () => {
        try {
            await likeArticle(id);
            setArticle((prev) => ({ ...prev, likesCount: prev.likesCount + 1 }));
        } catch (error) {
            console.error('Erreur lors de l\'ajout du like :', error);
        }
    };

    const handleDislike = async () => {
        try {
            await dislikeArticle(id);
            setArticle((prev) => ({
                ...prev,
                likesCount: Math.max(0, prev.likesCount - 1),
            }));
        } catch (error) {
            console.error('Erreur lors de l\'ajout du dislike :', error);
        }
    };

    if (!article) return <div>Chargement...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{article.title}</h1>
            <p className="mt-4">{article.content}</p>
            <div className="mt-4 flex flex-col items-start">
                <div className="flex items-center mt-9">
                    <button onClick={handleLike} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2">
                        👍Like
                    </button>
                    <button onClick={handleDislike} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Dislike
                    </button>
                </div>
                <span className="mr-4 mt-4 text-xl">Likes: {article.likesCount}</span>
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
                <button type="submit" className="bg-blue-500 text-white py-2 p-6 rounded hover:bg-blue-600">
                    Commenter
                </button>
            </form>
            <CommentSection comments={comments} onDeleteComment={handleDeleteComment} />
        </div>
    );
};

export default ArticleDetail;