// src/components/CommentSection.js
import React from 'react';

const CommentSection = ({ comments }) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Commentaires</h3>
            <ul className="space-y-2">
                {comments.map((comment, index) => (
                    <li key={index} className="border border-gray-200 rounded p-2">
                        {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;