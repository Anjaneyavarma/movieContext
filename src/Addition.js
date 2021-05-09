import React, { useState, useContext } from 'react';
import {MovieContext} from './MovieContext';

function Addition() {
    const [Name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const addMovie=(e)=>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {Name: Name, price: price}])
    }

    return (
        <div>
            <form onSubmit={addMovie}>
                <input
                    placeholder='movie name'
                    type='text'
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    placeholder='price'
                    type='text'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Addition
