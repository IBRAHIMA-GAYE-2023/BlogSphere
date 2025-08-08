import axios from "axios";

const API_URL_AUTH = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL_AUTH}/registre`, userData);
    return response.data; 
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL_AUTH}/login`, userData);
    return response.data; 
};

// export const loginUser = async (credentials) => {
//     const response = await axios.post(`${API_URL_AUTH}/login`, credentials ,{
        
//         headers: {
//             'Content-Type': 'application/json',
//               method: 'POST',
//         },
//         body: JSON.stringify(credentials),
//     });

//     if (!response.ok) {
//         throw new Error('Erreur de connexion');
//     }

//     const data = await response.json();
//     return data; // Assurez-vous que cela contient le token, le nom et l'email
// };




export const ProfileUser = async () => {
    try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`${API_URL_AUTH}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
        throw error; // Tu peux aussi relancer l'erreur si tu veux la gérer ailleurs
    }
};

export const updateProfile = async (userData) => {

    const token = localStorage.getItem('token');

    const response = await axios.put(`${API_URL_AUTH}/profile`, userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

