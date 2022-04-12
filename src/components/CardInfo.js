import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardInfo = ({url}) => {
    const [pokemon, setpokemon] = useState(null);
    
    useEffect(()=> {
        axios.get(url)
        .then(res => setpokemon(res.data))
    },[url])

    
    return (
        <Link to={`/pokedex/${pokemon?.id}`}>
            
            <img src={pokemon?.sprites.other?.home.front_default} alt="" />
            <ul> 
                <h3> {pokemon?.name} </h3>
                <li><b>Types:</b> {pokemon?.types[0]?.type.name} {pokemon?.types[1]?.type.name} </li>
                <li><b>hp:</b> {pokemon?.stats[0]?.base_stat} </li>
                <li><b>attack:</b> {pokemon?.stats[1].base_stat}</li>
                <li><b>defense:</b>{pokemon?.stats[2].base_stat}</li>
                <li><b>speed:</b> {pokemon?.stats[5].base_stat}</li>
            </ul>
        </Link>
        
    );
};

export default CardInfo;