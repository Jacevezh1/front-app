// Estado Global (Store) con FLUX
// La arquitectura que se utiliza para generar el estado gloal se le conoce como FLUX.

import { useReducer } from 'react'

import ConceptContext from './ConceptContext'
import ConceptReducer from './ConceptReducer'
import axiosClient from "./../../config/axios"




const ConceptState = (props) => {

    // 1. Initial State 
    const initialState = {
        concepts: [], 
        singleConcept: {
            name: "",
            author: "",
            image: "",
            description: "",
            body: "",
            comments: "",
            date: ""
        }
    }


    // 2. Configuracion del REDUCER y creacion del ESTADO GLOBAL ( Reducer son funciones que alteran el ESTADO GLOBAL)

    const [globalState, dispatch] = useReducer(ConceptReducer, initialState)


    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const getConcepts = async () => {

        const res = await axiosClient.get("concepts/readall");

        const list = res.data.data;

        dispatch({
            type: "GET_CONCEPTS",
            payload: list
        })

    }


    const getConcept = async (conceptId) => {

        const res = await axiosClient.get(`concepts/readone/${conceptId}`);

        const selectedConcept = res.data.data;

        dispatch({
            type: "GET_CONCEPT",
            payload: selectedConcept
        })

        return "Done"

    }




    // 4. Retorno
    return (
        <ConceptContext.Provider 
        value={{
            concepts: globalState.concepts,
            singleConcept: globalState.singleConcept,
            getConcepts,
            getConcept
        }}
        >
            {props.children}
        </ConceptContext.Provider>
    )


}


export default ConceptState;