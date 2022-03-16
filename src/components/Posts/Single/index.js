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

      





    </>
  )
}

export default Single