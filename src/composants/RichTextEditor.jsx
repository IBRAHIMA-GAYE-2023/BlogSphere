import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RichTextEditor() {
    const [editorHtml, setEditorHtml] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState(null);
    const navigate = useNavigate();

    const handleChange = (html) => {
        setEditorHtml(html);
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', editorHtml);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('http://localhost:5000/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/Article');
        } catch (error) {
            console.error('Error publishing article:', error);
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='w-1/2 mx-auto mt-10'>
                <input
                    type="text"
                    placeholder="Titre de l'article"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className='border p-2 w-full mb-4'
                />
                <ReactQuill
                    value={editorHtml}
                    onChange={handleChange}
                    modules={RichTextEditor.modules}
                    formats={RichTextEditor.formats}
                    placeholder="Écrivez votre contenu ici..."
                />
                <button type="submit" className='bg-black text-white px-70 py-2 mt-4 rounded'>Publier</button>
            </form>
        </div>
    )
}

RichTextEditor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
    ]
};

RichTextEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align'
];  