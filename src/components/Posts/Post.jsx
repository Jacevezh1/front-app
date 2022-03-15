import React, { useEffect, useContext } from 'react'
import PostContext from '../../context/Post/PostContext'
import PostState from '../../context/Post/PostState'


const Post = () => {

  // Estado Global
  const ctx = useContext(PostContext)

  const { getPosts, posts } = ctx
  // Estado Local


  return (
    <>
     
    <p>Listado de Posts</p>

    <button onClick={() => {getPosts()}}>
      Listar posts
    </button>

    <div>
      <h2>
        Listado de Post
      </h2>
      <ul>
        {
          posts.map((element) => {
            return (
              <li key={element._id}>
                <p>{element.author}</p>
                <p>{element.description}</p>
              </li>
            )
          })
        }
      </ul>
    </div>


    </>
  )
}

export default Post