import React, { useState } from 'react';
import { FilePlus } from 'lucide-react';
import axios from 'axios';
function NewMovie() {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState(['']);
  const [rating, setRating] = useState('');
  const [director, setDirector] = useState('');
  const [language, setLanguage] = useState('');
  const [year, setYear] = useState('');

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const addImageInput = () => {
    setImages([...images, '']);
  };

  const newMovie = async () => {
    await axios.post(`${import.meta.env.VITE_DB_URL}/movies`, {
      title,
      description,
      images,
      rating,
      language,
      year,
      director,
    });
    alert('🍿 Movie added successfully!');
    setDescription('');
    setDirector('');
    setImages(['']);
    setLanguage('');
    setRating('');
    setTitle('');
    setYear('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <div className="flex items-center gap-2 mb-4">
          <FilePlus className="text-red-500" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Add New Movie</h2>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100 resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-semibold">Image URLs</label>
          {images.map((img, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder={`Paste image URL #${idx + 1}`}
                className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
                value={img}
                onChange={(e) => handleImageChange(idx, e.target.value)}
              />
              {idx === images.length - 1 && (
                <FilePlus className="mt-1 cursor-pointer text-red-500" onClick={addImageInput} />
              )}
            </div>
          ))}
          <div className='flex gap-2 overflow-x-auto'>
          {images.map((img, idx) =>
            img ? (
              <img key={idx} src={img} alt={`Preview ${idx + 1}`} className="h-[100px]  w-[100px] object-cover rounded-lg border mt-2" />
            ) : null
          )}
          </div>
        </div>
        <input
          type="text"
          placeholder="Language"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Director"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rating"
          className="border-b-2 border-red-400 focus:border-red-600 outline-none py-2 px-3 text-lg rounded bg-gray-100"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="mt-4 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-lg flex items-center gap-2 justify-center"
          onClick={newMovie}
        >
          <FilePlus size={20} /> Add Movie
        </button>
      </div>
    </div>
  );
}

export default NewMovie;