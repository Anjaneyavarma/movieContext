import React, {useState, useContext, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider =(props)=>{
    const [movies, setMovies] = useState([
        {
            id:'12345',
            Name: 'Blood Daimond',
            price: 'Rs.150'
        },
        {
            id:'175834975',
            Name: 'Titanic',
            price: 'Rs.189'
        },
        {
            id:'35789734',
            Name: 'Catch if you can',
            price: 'Rs.250'
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

}