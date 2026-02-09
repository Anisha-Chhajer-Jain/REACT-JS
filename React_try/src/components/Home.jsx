import { useNavigate } from "react-router-dom";
import "./home.css"
function Home() {
    const navigate = useNavigate();
    return (
        <>
                <div className="box">
                    <button onClick={() => navigate("/food")} className="card-1"></button>
                    <p onClick={() => navigate("/products")} className="card-1"></p>
                    <p onClick={() => navigate("/movies")} className="card-1"></p>
                    <p onClick={() => navigate("/recipes")} className="card-1"></p>
                </div>
        </>
    );
}

export default Home;
