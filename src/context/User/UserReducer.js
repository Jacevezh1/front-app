const reducer = (globalState, action) => {

    switch (action.type) {

        case "REGISTRO_EXITOSO": 
            return {
                ...globalState,
                authStatus: true
            }
        
        default:
            return globalState;
    }





}



export default reducer;