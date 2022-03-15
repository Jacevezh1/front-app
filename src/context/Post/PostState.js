// Estado Global (Store) con FLUX
// La arquitectura que se utiliza para generar el estado gloal se le conoce como FLUX.

import { useReducer } from 'react';

import PostContext from './PostContext'
import PostReducer from './PostReducer'
import axiosClient from './../../config/axios'
import { Action } from 'history';






const PostState = (props) => {

    // 1. Set Initial State 
    const initialState = {
        posts: [], 
        hola: "mundo"

    }

    // 2. Configuracion del REDUCER y creacion del ESTADO GLOBAL ( Reducer son funciones que alteran el ESTADO GLOBAL)
    const [globalState, dispatch] = useReducer(PostReducer, initialState)



    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL

    const getPosts = async () => {
        
        const res = await axiosClient.get("posts/readall");

        const list = res.data.data

        dispatch({
            type: "GET_POSTS",
            payload: list
        })

    }




  return (  

    <PostContext.Provider 
    value={{
        posts: globalState.posts,
        getPosts,  
        
    }}
    >
        {props.children}
    </PostContext.Provider>
    
  )
}

export default PostState