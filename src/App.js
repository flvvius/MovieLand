import { useEffect, useRef, useState } from 'react';
import React from 'react';
import './App.css';
import img from './SearchImage.png';
import MovieCard from './MovieCard';

const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;
const API_KEY = '5d4b19b020de0bb4d6aedb8b6fab900d';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}${title}&api_key=${API_KEY}`);
    const data = await response.json();

    setMovies(data.results);
    setSearchTerm("");
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [searchTerm])

  // useEffect(() => {
  //   searchMovies('Spiderman')
  // }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter')
      searchMovies(searchTerm);
  } 

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder='Search for movies' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <img 
          alt='search' 
          src={img} 
          onClick={() => {searchMovies(searchTerm)}} 
        />
      </div>
      
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map(movie => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (<div className='empty'>
            <h2>No movies found</h2>
          </div>)
      }

    </div>
  );
}

export default App;
