import React from 'react';

const CommentSection = ({ comments, onDeleteComment }) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Commentaires</h3>
            <ul className="space-y-2">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <li key={comment._id} className="border border-gray-200 rounded p-2">
                            <strong>{comment.author.username}</strong>
                            <p>{comment.content}</p>
                            <button onClick={() => onDeleteComment(comment._id)} className="text-red-500 hover:text-red-700">
                                Supprimer
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">Aucun commentaire</li>
                )}
            </ul>
        </div>
    );
};

export default CommentSection;