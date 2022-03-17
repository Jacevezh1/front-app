import React from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Post from './components/Posts/Post'
import Concept from './components/Concepts/Concept'
import Layout from './components/Layout'
import Single from "./components/Posts/Single";
import SingleConcept from "./components/Concepts/Concept";

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

import PostState from "./context/Post/PostState";
import UserState from "./context/User/UseState";
import ConceptState from "./context/Concept/ConceptState";


const Router = () => {



  return (

    <>

      <UserState>
        <PostState>
          <ConceptState>
            <BrowserRouter>
            
                <Routes>

                    <Route path="/" element={<Layout />}>

                      <Route index element={<Home />}/>

                      {/* localhost:3000/registro */}
                      <Route path="register" element={<Register />} />

                      {/* localhost:3000/iniciar-sesion */}
                      <Route path="login" element={<Login />} />

                      {/* localhost:3000/about */}
                      <Route path="about" element={<About />} />

                      {/* localhost:3000/sauces */}
                      <Route path="concepts" element={<Concept />}/>

                      {/* localhost:3000/sauces */}
                      <Route path="concepts/:id" element={<SingleConcept />}/>

                      {/* localhost:3000/recipes */}
                      <Route path="posts" element={<Post />} />

                      {/* localhost:3000/recipes */}
                      <Route path="posts/:id" element={<Single />}/>

                    </Route>
                    
                </Routes>
            </BrowserRouter>
          </ConceptState>
        </PostState>
      </UserState>
      
    </>

  )
}

export default Router