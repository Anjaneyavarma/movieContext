import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

function Count() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h1>list of movies:{movies.length}</h1>
        </div>
    )
}

export default Count
