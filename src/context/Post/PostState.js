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
        singlePost: {
            name: "",
            author: "",
            image: "",
            description: "",
            body: "",
            comments: ""
        }

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


    const getPost = async (postId) => {

        const res = await axiosClient.get(`posts/readone/${postId}`)

        const selectedPost = res.data.data;

        dispatch({
            type: "GET_SAUCE",
            payload: selectedPost
        })

        return "Done"
    }




  return (  

    <PostContext.Provider 
    value={{
        posts: globalState.posts,
        singlePost: globalState.singlePost,
        getPosts, 
        getPost 
        
    }}
    >
        {props.children}
    </PostContext.Provider>
    
  )
}

export default PostState;