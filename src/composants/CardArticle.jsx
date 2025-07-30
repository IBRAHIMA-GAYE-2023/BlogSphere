import React, { useState } from 'react';

export default function CardArticle({ title, imageSrc, description }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleComment = () => {
    const comment = prompt("Entrez votre commentaire :");
    if (comment) {
      setComments([...comments, comment]);
      alert('Commentaire ajouté !');
    }
  };

  return (
    <div className="bg-white shadow mr-200">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-md mb-2" />
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          👍 {likes} Likes
        </button>
        <button
          onClick={handleComment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Commenter
        </button>
      </div>
      <button
        onClick={() => alert('Voir plus de contenu !')}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Voir plus
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-600">{comment}</p>
        ))}
      </div>
    </div>
  );
}