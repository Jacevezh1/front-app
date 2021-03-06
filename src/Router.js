import React from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Post from './components/Posts/Post'
import Concept from './components/Concepts/Concept'
import Layout from './components/Layout'
import Single from "./components/Posts/Single";
import SingleConcept from "./components/Concepts/Single/index";

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Profile from './components/User/Profile'

import PostState from "./context/Post/PostState";
import UserState from "./context/User/UseState";
import ConceptState from "./context/Concept/ConceptState";
import NotFound from './components/Error/NotFound'

import Auth from './routes/Auth'
import PrivateRoute from './routes/Private'


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
                      <Route path="register" element={<Auth component={Register} />} />

                      {/* localhost:3000/iniciar-sesion */}
                      <Route path="login" element={<Auth component={Login} />} />

                      <Route path="profile" element={<PrivateRoute component={Profile} />} />

                      {/* localhost:3000/about */}
                      <Route path="about" element={<About />} />

                      {/* localhost:3000/sauces */}
                      <Route path="concepts" element={<Concept />}/>

                      {/* localhost:3000/recipes */}
                      <Route path="posts" element={<Post />} />

                      {/* localhost:3000/recipes */}
                      <Route path="posts/:id" element={<Single />}/>

                      <Route path="*" element={<NotFound />}/>

                      {/* localhost:3000/sauces */}
                      <Route path="concepts/:id" element={<SingleConcept />}/>

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