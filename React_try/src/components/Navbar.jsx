import { useNavigate } from "react-router-dom";
import './navbar.css'
function Navbar() {
  const navigate = useNavigate();

  return (
    <>
    <div className="nav">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/food")}>Food</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/movies")}>Movies</button>
      <button onClick={() => navigate("/recipes")}>Recipes</button>
      </div>
    </>
  );
}

export default Navbar;
