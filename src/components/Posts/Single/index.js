import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


import PostContext from '../../../context/Post/PostContext'


 

const Single = () => {

    const ctx = useContext(PostContext)
    const {getPost, singlePost} = ctx;

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getPost(id)
    })

    // USER PENDIENTE

  return (
    <>

      
      <div class="relative py-16 bg-white overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        </div>
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto">
            <h1>
              <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Introducing</span>
              <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singlePost.name}</span>
            </h1>
            <img src={singlePost.image} alt="salsa" className="h-64 w-full object-cover bg-auto rounded-lg shadow-xl mx-1 my-12 border-2 border-sky-700/[.55] shadow-lg shadow-sky-700/50" />
            <p class="mt-8 text-xl text-gray-500 leading-8"><strong>{singlePost.description}</strong></p>
          </div>
          <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>{singlePost.body}</p>
          </div>
        </div>
      </div>




    </>
  )
}

export default Single;