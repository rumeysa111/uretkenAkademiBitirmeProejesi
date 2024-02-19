import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Gezilecek from './pages/Gezilecek'

import Parklar from './pages/Parklar'
import Istek from './pages/Istek'


function SiteRoutes() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Gezilecek' element={<Gezilecek />} />
  
        
            <Route path='/Parklar' element={<Parklar />} />
            <Route path='/istek' element={<Istek />} />

          </Routes> 
    </div>
  )
}

export default SiteRoutes
