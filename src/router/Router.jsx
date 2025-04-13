import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import Error from '../pages/Error.jsx'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<Error/>} />
      </Routes> 
    </div>
  )
}