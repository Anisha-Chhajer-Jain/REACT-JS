import { useState,useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Fakestore from './components/Fakestore.jsx'
import Food from './components/Food.jsx'
import Movie from './components/Movie.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <Nav></Nav>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/fakestore' element={<Fakestore />}></Route>
      <Route path='/food' element={<Food />}></Route>
      <Route path='/movie' element={<Movie />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
     
    </>
  )
}

export default App