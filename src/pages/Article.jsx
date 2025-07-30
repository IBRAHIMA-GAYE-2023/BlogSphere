// Articles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Articles Publiés</h1>
            <div>
                {articles.map((article, index) => (
                    <div key={index} className="article">
                        <h2>{article.title}</h2>
                        {article.imageUrl && <img src={article.imageUrl} alt="Article" />}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;