import React from "react";
import { Link } from "react-router-dom";


import { HiOutlineUserAdd } from 'react-icons/hi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiLogout } from 'react-icons/hi';
import { HiOutlineSearch } from 'react-icons/hi';
import logo from './../../images/logo.png'


const Header = () => {

  


  return (
    <>

      <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex justify-between h-16">

          {/* Mobile Menu */}
          <div class="lg:hidden" id="mobile-menu">
            <div class="pt-2 pb-4 space-y-1">
              <Link to={'/'}>
                 <img class="inline mx-4  h-10 w-auto" src={logo} alt="Workflow"/>
              </Link>
              <div className="inline ml-12"> 
                <Link to={'/about'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> About </Link>
                <Link to={'/posts'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Blogs </Link>
                <Link to={'/concepts'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Concepts </Link>
              </div>
            </div>
          </div> 
         

          {/* Laptop view */}

          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <Link to={'/'} class="border-transparent text-white-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> 
                  <img class="hidden lg:block h-12 w-auto" src={logo} alt="Workflow"/>
                </Link>
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                
                <Link to={'/about'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> About </Link>
                <Link to={'/posts'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Blogs </Link>
                <Link to={'/concepts'} class="border-transparent text-gray-700 hover:border-gray-300 hover:text-sky-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Concepts </Link>

              </div>
            </div>
            <div class="absolute text-gray-700 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button">
                <HiOutlineSearch class="h-5 w-5"/>
              </button>

              <div class="relative text-gray-700 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-8 sm:pr-0 ml-3">
                <button>
                  <Link to={'/register'}>
                    <HiOutlineUserAdd class="h-5 w-5"/>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Header;

