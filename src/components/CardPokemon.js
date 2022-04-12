import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardInfo from './CardInfo';
import { getPokemons } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CardPokemon = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const searchByType = useSelector(state => state.searchType);
    const contPokemonType = pokemons?.pokemon?.map((pokemon, index) => {
        return index;
    })
   
    //Esto es para la Paginacion
    const [page, setPage] = useState(1);
    const limit = 16;
    const secondIndex = page * limit;
    const offset = secondIndex - limit;
    const totalPages = Math.ceil((searchByType ? contPokemonType?.length : pokemons.count)/ limit);
    const pagesNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }
    
    useEffect(() => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(res => dispatch(getPokemons(res.data)))
        
    },[offset, dispatch])
    
    return (
        <>
            { searchByType ? 
                pokemons.pokemon?.map(pokemons => (
                    <div key={ pokemons.pokemon.name}>
                        <CardInfo url={pokemons.pokemon.url} />
                    </div>
                ))
            :
                pokemons.results?.map(pokemon => (
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