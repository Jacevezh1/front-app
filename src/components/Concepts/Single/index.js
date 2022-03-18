import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import ConceptContext from '../../../context/Concept/ConceptContext'




const SingleConcept = () => {

    // 1. Concept Context
    const ctx = useContext(ConceptContext);
    const { getConcept, singleConcept } = ctx;

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getConcept(id)
    })


  return (
    <>
        <div class="relative py-16 bg-white overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase">Introducing</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleConcept.name}</span>
            </h1>
            <p class="mt-8 text-xl text-gray-500 leading-8 text-center">{singleConcept.description}</p>
            </div>
            <figure className='my-8'>
                <img class="w-full rounded-lg" src={singleConcept.image} alt="" width="1310" height="873"/>
            </figure>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>{singleConcept.body}</p>
            </div>
        </div>
        </div>
    </>
    
  )
}


export default SingleConcept;