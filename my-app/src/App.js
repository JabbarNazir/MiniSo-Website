import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './CSS/BrandSection.css'
import './CSS/Carousel.css'
import './CSS/ChoiceSection.css'
import './CSS/NavBar.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Brand from './Pages/Brand'
import Contact from './Pages/Contact'
import { default as Franchise, default as Investor } from './Pages/Franchise'
import Home from './Pages/Home'
import News from './Pages/News'
import Product from './Pages/Product'
import Special from './Pages/Special'
{
  /* The following line can be included in your src/index.js or App.js file */
}


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/brand' element={<Brand/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/franchise' element={<Franchise/>}/>
    <Route path='/investor' element={<Investor/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/special' element={<Special/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App