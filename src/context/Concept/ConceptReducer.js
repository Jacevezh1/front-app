
const reducer = (globalState, action) => {


    switch (action.type) {

        case "GET_CONCEPT":
            return {
                ...globalState,
                singleConcept: action.payload
            }
        
        case "GET_CONCEPTS": 
            return {
                ...globalState,
                concepts: action.payload
            }
    
        default:
            return globalState; 
    }



}


export default reducer;