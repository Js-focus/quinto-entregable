const INITIAL_STATE = {
    userName : "",
    isLog : false
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
            case "SET_USER_NAME":
            return{
                ...state,
                userName: action.payload,
                isLog: !state.isLog
            } 
        default:
                return state;
    }
}

export default reducer;