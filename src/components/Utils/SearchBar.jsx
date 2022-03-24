import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ConceptContext from "../../context/Concept/ConceptContext";
import { HiOutlineX, HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {

  // 1. Estado Global
  const ctx = useContext(ConceptContext);

  const { concepts } = ctx;

  const [searchTerm, setSearchTerm] = useState('')

  const [isSearching, setIsSearching] = useState(true);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    const newFilter = concepts.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    setSearchTerm(newFilter);
  }



  return (
    <> 
      {
        isSearching ?
        <div className='lg:fixed lg:inset-60 z-10 md:fixed md:inset-60 sm:relative mt-28 search-bar-phone overflow-hidden rounded bg-white shadow-2xl shadow-blue-500 transition-all'>
          <HiOutlineX onClick={() => setIsSearching(false)} className='absolute lg:top-3.5 md:top-3.5 left-4 h-5 w-5' />
          <input onChange={handleSearch} type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"/>
          {
          searchTerm.length !== 0 && (
           
           
            <ul class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
              {searchTerm.map((element, key) => {
                return (
                  <ul class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 text-center font-medium italic" id="options" role="listbox">
                    <Link to={`/concepts/${element._id}`} class="cursor-default select-none px-4 py-2 place-items-center2">{element.name}</Link>
                  </ul>  
                  
                )
              })}
            </ul>          
          )
        }
      </div>

      : 
      <HiOutlineSearch onClick={() => setIsSearching(true)} class="h-6 w-6"/>
      
      } 
    </>
  )
}

export default SearchBar;






