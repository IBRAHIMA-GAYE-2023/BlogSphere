import React from 'react';

const CardArticle = ({ title, image, description }) => {
  const handleLike = () => {
    alert('Veuillez vous connecter d\'abord !');
  };

  const handleComment = () => {
    alert('Veuillez vous connecter d\'abord !');
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLike}
        >
          Like
        </button>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleComment}
        >
          Commenter
        </button>
        <button 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Voir plus
        </button>
      </div>
    </div>
  );
};

const CardArticles = () => {
  const articles = [
    {
      title: 'Article 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description de l\'article 1'
    },
    {
      title: 'Article 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description de l\'article 2'
    },
    // Ajoutez d'autres articles ici
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article, index) => (
        <CardArticle 
          key={index} 
          title={article.title} 
          image={article.image} 
          description={article.description} 
        />
      ))}
    </div>
  );
};

export default CardArticles;