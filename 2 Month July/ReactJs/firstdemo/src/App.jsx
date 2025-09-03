import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from './Components/MainNavBar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Career from './Pages/Carrer'

const App = () => {
  return (
   <BrowserRouter>
   <MainNavBar/>
   <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/about-us' element={<AboutUs/>}/>
    <Route path ='/career' element={<Career/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App