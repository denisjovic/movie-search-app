import React from 'react';

const SearchMovie = () => {
  return (
    <div>
      <form className='form'>
        <label className='label' htmlFor='query'>
          Movie name:
        </label>
        <input
          type='text'
          name='query'
          id='query'
          placeholder='i.e Jurassic Park'
          className='input'
        />
        <button className='btn'>Search</button>
      </form>
    </div>
  );
};

export default SearchMovie;
