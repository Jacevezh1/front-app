import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import ConceptContext from "../../context/Concept/ConceptContext";



const Concept = () => {

  // 1. Estado Global
  const ctx = useContext(ConceptContext);

  const { getConcepts, concepts } = ctx;

  
  // 2. Estado Local
  useEffect(() => {
    getConcepts();
  }, [])


  return (
    <>

      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Concepts</h2>
            <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p class="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
            </div>
          </div>

          

          <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {
            concepts.map((element) => {
              return (
                <>
                  <div>
                    <p class="text-sm text-gray-500">
                      <time datetime="2020-01-29">{element.date.substring(0, 10)}</time>
                    </p>
                    <p class="text-xl font-semibold text-gray-900">{element.name}</p>
                    <p class="mt-3 text-base text-gray-500">{element.description}...</p>
                    <div class="mt-3">
                      <Link to={`/concepts/${element._id}`} class="mt-2 block">
                        <p class="text-base font-semibold text-sky-600 hover:text-cyan-500"> Read More...  </p>
                      </Link>
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
  )
}

export default Concept