// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/articles'; // Modifiez selon votre configuration

const getToken = () => {
    return localStorage.getItem('token'); // Récupérez le token d'authentification
};

// Créer un article
export const createArticle = async (formData) => {
    const token = getToken();
    const response = await axios.post(`${API_URL}/ajouter`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return response.data;
};


// Récupérer tous les articles
export const getAllArticles = async () => {
    const token = getToken();
    const response = await axios.get(`${API_URL}/allArticles`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
        },
    });

    return response.data
};

// Récupérer un article par ID
export const getArticleById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const getArticle = async (id) => {
    return await axios.get(`${API_URL}/articles/${id}`);
};

// Mettre à jour un article
export const updateArticle = async (id, formData) => {
    const token = getToken();
    return await axios.put(`${API_URL}/${id}`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

// Supprimer un article
export const deleteArticle = async (id) => {
    const token = getToken();
    return await axios.delete(`${API_URL}/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

// Liker un article
export const likeArticle = async (id) => {
    const token = getToken();
    return await axios.post(`${API_URL}/${id}/like`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

// Disliker un article
export const dislikeArticle = async (id) => {
    const token = getToken();
    return await axios.post(`${API_URL}/${id}/dislike`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

// Ajouter un commentaire
export const addComment = async (articleId, comment) => {
    const response = await axios.post(`/api/comments/${articleId}`, comment);
    return response.data;
};

// Récupérer les commentaires d'un article
export const getCommentsByArticleId = async (articleId) => {
    try {
        const response = await axios.get(`${API_URL}/articles/${articleId}`);
        return response.data; // Retourne les données des commentaires
    } catch (error) {
        console.error('Erreur lors de la récupération des commentaires :', error);
        throw error; // Relancer l'erreur pour la gestion ultérieure
    }
};


// Ajoutez la fonction deleteComment
export const deleteComment = async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`); // Assurez-vous que l'URL est correcte
    return response.data;
};

// Filtrer les articles
export const filterArticles = async (filters) => {
    const { keyword, category } = filters;
    const params = {};
    if (keyword) params.keyword = keyword;
    if (category) params.category = category;
    
    return await axios.get(`${API_URL}/filter`, { params });
};


// Récupérer les articles de l'utilisateur connecté
export const getUserDashboardArticles = async () => {
    const token = getToken();
    return await axios.get(`${API_URL}/user/articles`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};