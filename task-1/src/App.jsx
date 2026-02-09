import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./pages/Products.jsx";
import Home from "./pages/Posts.jsx";
import Others from "./pages/Users.jsx";
import Navbar from "./pages/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/posts" element={<Home />} />
        <Route path="/products" element={<About />} />
        <Route path="/users" element={<Others />} />
      </Routes>
    </>
  );
}

export default App;