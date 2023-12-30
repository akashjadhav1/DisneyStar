import React,{useContext, useEffect} from 'react'

import { useNavigate } from 'react-router-dom'

import Carousel from './Carousel'
import Navbar from './Navbar'
import Footer from './Footer'




function HomePage({searchResults}) {

const navigate = useNavigate()
useEffect(()=>{
  if(!localStorage.getItem('userToken')){
    navigate('/login')
  }
},[]) 
  return (
    <div>
     <Navbar searchResults={searchResults}/>
     <Carousel searchResults={searchResults}/>
     <Footer/>
    </div>
  )
}

export default HomePage
