import React from 'react'
import './app.css'
import Slider from './components/slider'
import Configuration from './components/Configuration'
import Department from './components/Depart'
import { Routes,Route } from 'react-router'
import { BrowserRouter } from 'react-router'


const App = () => {
  return (
    <div className='app'>

      <BrowserRouter>
      <Slider/>
      <Routes>
      <Route path="/" element={< Configuration/>}/>
        <Route path="/Department" element={< Department/>}/>
      </Routes>
       
      </BrowserRouter>
       
       
      
    </div>
  )
}

export default App

