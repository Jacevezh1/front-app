import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import PostContext from "../../context/Post/PostContext";


const Post = () => {
  // Estado Global
  const ctx = useContext(PostContext);

  const { getPosts, posts } = ctx;
  
  // Estado Local 
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <div class="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-700 sm:text-4xl">From the blog</h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
            </div>
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
             
              {   
                posts.map((element) => {

                  return (
                    <>
                      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-sky-700/[.55] shadow-lg shadow-sky-700/50">
                        <div class="flex-shrink-0">
                          <Link to={`/posts/${element._id}`} >
                            <img src={element.image} alt="salsa" className="h-48 w-full object-cover" />
                          </Link>
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                          <div class="flex-1">
                            <p class="text-sm font-medium text-sky-600">
                              <Link to={'.'} class="hover:underline"> Article </Link>
                            </p>
                            <Link to={'.'} class="block mt-2">
                               <p class="text-xl font-semibold text-gray-900">{element.name}</p>
                              <p class="mt-3 text-base text-gray-500">{element.description}</p>
                            </Link>
                          </div>
                          <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                              <Link to={'.'}>
                                <span class="sr-only">{element.author}</span>
                                <img class="h-10 w-10 rounded-full" src={element.ownerlogo} alt=""/>
                              </Link>
                            </div>
                            <div class="ml-3">
                              <p class="text-sm font-medium text-gray-900">
                                <Link to={'.'} class="hover:underline"> {element.author} </Link>
                              </p>
                              <div class="flex space-x-1 text-sm text-gray-500">
                                <time datetime="2020-02-12"> {element.date.substring(0, 10)} </time>
                                <span aria-hidden="true"> &middot; </span>
                                <span> {element.reading} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </>
  );
};

export default Post;




{/* <p>Listado de Posts</p>

<button
  onClick={() => {
    getPosts();
  }}
>
  Listar posts
</button>

<div>
  <h2>Listado de Post</h2>
  <ul>
    {posts.map((element) => {
      return (
        <li key={element._id}>
          <h3>
            <Link to={`/posts/${element._id}`}>{element.description}</Link>
          </h3>
          <p>{element.author}</p>
          <p>{element.description}</p>
        </li>
      );
    })}
  </ul>
</div> */}