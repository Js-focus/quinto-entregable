import React, { useEffect, useState } from 'react';
import CardPokemon from './CardPokemon';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, searchType, getPokemonType } from '../redux/actions';
import axios from 'axios';

const Pokedex = () => {
    const dispatch = useDispatch();
    const searchByType = useSelector(state => state.searchType);

    const [pokemonTypes, setPokemonTypes] = useState(null);
    
    
    const name = useSelector(state => state.userName);
    
    console.log()
    const pokemonType = (urlPokemons) => {
            axios.get(`https://pokeapi.co/api/v2/type/${urlPokemons}/`)
            .then(res => {
            dispatch(getPokemons(res.data))
            })    
    }
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res => setPokemonTypes(res.data.results))
    },[])

    return (
        <div>
            <div>
                <h1>
                    Pokedex
                </h1>      
                <p>
                    Welcome {name}, here you can find your favorite pokemon
                </p>    
            </div> 
            <div>
                <div>
                    pokemon
                    <input 
                    type="checkbox"
                    className='cm-toggle'
                    onChange={e => dispatch(searchType(e.target.checked))}
                    checked={searchByType}
                    />
                    type
                </div>
                { searchByType ? 
                <select 
                name="types" 
                id="pokemonTypes"
                onChange={e => {
                    pokemonType(e.target.value)
                    dispatch(getPokemonType(e.target.value))
                }}
                >
                <option value>All pokemons</option>
                    {
                        pokemonTypes?.map(type => (
                        
                            <option value={ type.name } key={ type.url }>
                                { type.name }
                            </option>
                            
                        ))
                    }
                </select> 
                :
                <input type="text" />
                }
                
            </div>
            <CardPokemon />
        </div>
    );
};

export default Pokedex;<h1>
Que tranza</h1>