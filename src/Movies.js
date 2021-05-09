import React, {useState, useContext} from 'react';
import Display from './Display';
import {MovieContext} from './MovieContext';

function Movies() {
   const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            
            {movies.map((movie)=>(
                <Display
                    Name={movie.Name}
                    price={movie.price}
                />
            ))}
        </div>
    )
}

export default Movies
