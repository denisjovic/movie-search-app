import React, { useState } from 'react';
import MovieCard from './MovieCard';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=bdcf1fb7aa0d5a4895b44366fbaa92e3&language=en-US&query=${query}&page=1&include_adult=false`;
  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(url);
      let data = await response.json();
      setMovieData(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const showMovie = movieData
    .filter((movie) => movie.poster_path)
    .map((movie) => {
      return <MovieCard movie={movie} key={movie.id} />;
    });

  return (
    <div>
      <form className='form' onSubmit={searchMovie}>
        <label className='label' htmlFor='query'>
          Movie name:
        </label>
        <input
          type='text'
          name='query'
          id='query'
          placeholder='i.e Jurassic Park'
          className='input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn'>Search</button>
      </form>
      <div className='card-list'>{showMovie}</div>
    </div>
  );
};

export default SearchMovie;
