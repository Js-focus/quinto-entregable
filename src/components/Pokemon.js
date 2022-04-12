import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then( res => setPokemon(res.data))
    },[id])

    console.log(pokemon)
    return (
        <div>
            <div>
                <div>
                    <img src={pokemon?.sprites.other?.dream_world.front_default} alt="" />
                    <div>
                        <aside>
                            <h2>{pokemon?.weight}</h2>
                            <p>Weight</p>
                        </aside>
                        <aside>
                            <h2>{pokemon?.height}</h2>
                            <p>Height</p>
                        </aside>
                    </div>
                    <div>
                        <h1>{pokemon?.name}</h1>
                        <div>
                            "# "
                            "66"
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Type</h1>
                        <div>
                            {pokemon?.types.map(type => (
                                <div key={type.slot}>
                                    <p>{type.type?.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1>Abilities</h1>
                        <div>
                            {pokemon?.abilities.map(ability => (
                                <div key={ability.slot}>
                                    <p>{ability.ability?.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Pokemon;