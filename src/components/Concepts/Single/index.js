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
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
                <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleConcept.name}</span>
            </h1>
            <p class="mt-8 text-xl text-gray-500 leading-8">{singleConcept.description}</p>
            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>{singleConcept.body}</p>
            <figure>
                <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873"/>
                <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
            </figure>
            <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
            <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
            </div>
        </div>
        </div>
    </>
    
  )
}


export default SingleConcept;