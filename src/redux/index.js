import { actions } from "./actions";
const INITIAL_STATE = {
    userName : "",
    isLog : false,
    pokemons : {},
    searchType: false,
    pokemonType: ""
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
            case actions.set_user_name:
                return{
                    ...state,
                    userName: action.payload,
                    isLog: !state.isLog
                }
            case actions.getPokemons:
                return{
                    ...state,
                    pokemons: action.payload
                }     
            case actions.searchType:
                return{
                    ...state,
                    searchType: action.payload
                }    
            case actions.getPokemonType:
                return{
                    ...state,
                    pokemonType: action.payload
                }    
        default:
                return state;
    }
}

export default reducer;