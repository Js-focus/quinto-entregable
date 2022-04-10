import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardInfo from './CardInfo';

const CardPokemon = () => {
    const [pokemons, setPokemons] = useState(null);
    const [page, setPage] = useState(1);
    const limit = 16;
    const secondIndex = page * limit;
    const offset = secondIndex - limit;
    const totalPages = Math.ceil(pokemons?.count/ limit);
    const pagesNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(res => {
            setPokemons(res.data)
        })
    },[offset])
    
    return (
        <>
            {
                pokemons?.results.map(pokemon => (
                    <div key={pokemon.name}>
                        <CardInfo url={pokemon.url} />
                    </div>
                ))
            }
            <div>
                {
                    pagesNumbers.map(page => (
                        <button onClick={() => setPage(page)} key={page}>
                            {page}
                        </button>
                    ))
                }  
            </div>
            
        </>
    );
};

export default CardPokemon;