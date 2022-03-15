import React from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Posts/Post'
import Concept from './components/Concepts/Concept'
import Layout from './components/Layout'


import PostState from "./context/Post/PostState";


const Router = () => {



  return (
    <>
      <PostState>
        <BrowserRouter>
              <Routes>

                  <Route path="/" element={<Layout />}>

                    <Route index element={<Home />}/>

                    {/* localhost:3000/about */}
                    <Route path="about" element={<About />} />
                          
                    {/* localhost:3000/contact */}
                    <Route path="contact" element={<Contact />} />

                    {/* localhost:3000/recipes */}
                    <Route path="posts" element={<Post />} />

                    {/* localhost:3000/sauces */}
                    <Route path="concepts" element={<Concept />}/>

                  </Route>
                  
              </Routes>
          </BrowserRouter>
      </PostState>
        
    </>
  )
}

export default Router