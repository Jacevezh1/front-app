

const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_POSTS": 
            return {
                ...globalState,
                posts: action.payload
            }
    
        default:
            return globalState;
    }




}


export default reducer;