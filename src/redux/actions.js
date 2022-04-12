export const actions = {
    set_user_name: "SET_USER_NAME",
    getPokemons: "GET_POKEMON",
    searchType: "SEARCH_TYPE",
    getPokemonType: "GET_POKEMON_TYPE"
}

//1 crear la propiedad en el objeto actions
//2 Remplazamos el action en estring en el reducer por la propiedad que creamos en el paso anterior
//3 crear la funcion en el archivo actions
//4 despachar en el componente la funcion creada en el paso 3
export const set_user_name = (name) =>({
    type: actions.set_user_name,
    payload: name   
})
export const getPokemons = (pokemons) => ({
    type: actions.getPokemons,
    payload: pokemons
})
export const searchType = (change) => ({
    type: actions.searchType,
    payload: change
})
export const getPokemonType = (type) => ({
    type: actions.getPokemonType,
    payload: type
})


