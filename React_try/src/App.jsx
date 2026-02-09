import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Food from "./components/Food";
import Products from "./components/Products";
import Movies from "./components/Movies";
import Recipes from "./components/Recipes";
import './App.css'

function App() {
  return (
    <>
      <br/>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/products" element={<Products />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
