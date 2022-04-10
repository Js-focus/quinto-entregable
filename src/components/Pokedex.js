import React from 'react';
import CardPokemon from './CardPokemon';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const name = useSelector(state => state.userName)
   
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
                    type
                    <input type="checkbox" />
                    pokemon
                </div>
                <input type="text" />
            </div>
            <CardPokemon />
        </div>
    );
};

export default Pokedex;<h1>
Que tranza</h1>