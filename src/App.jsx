import React, { useEffect, useState } from 'react'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import {  Route, Router, Routes } from 'react-router-dom'
import Preloader from './Components/Common/PreLoader'
import Navbar from './Components/Navbar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const App = () => {


    


  return (
    <div className="">
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    
    </div>
  )
}

export default App