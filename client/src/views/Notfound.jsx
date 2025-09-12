
import React from 'react';
import { Link } from 'react-router';
import './../index.css';

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <div className="text-7xl mb-4 animate-bounce">🎬😢</div>
      <h1 className="text-4xl font-bold mb-2">404 - Movie Not Found!</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Oops! The movie you're looking for has gone missing <span className="text-2xl">🍿👀</span>.<br/>
        Maybe it's hiding in the popcorn or taking a break at the concession stand!<br/>
        Try searching again or head back to the home page.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
          <span>🏠</span> Back To Home
        </button>
      </Link>
      <div className="mt-8 text-3xl animate-pulse">🍿🎥✨</div>
    </div>
  );
}

export default Notfound;