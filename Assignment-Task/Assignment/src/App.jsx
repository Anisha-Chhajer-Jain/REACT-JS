
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import './App.css'

function App() {
  const [activePage, setActivePage] = useState("home");
  const [food, setFood] = useState([]);
  const [products, setProducts] = useState([]);
  const [movies, setMovies] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Food API
  useEffect(() => {
    if (activePage === "food") {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(res => res.json())
        .then(data => setFood(data.meals));
    }
  }, [activePage]);

  // Products API
  useEffect(() => {
    if (activePage === "products") {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }
  }, [activePage]);  

  // Movies API (OMDB)
  useEffect(() => {
    if (activePage === "movies") {
      fetch("https://www.omdbapi.com/?s=avengers&apikey=thewdb")
        .then(res => res.json())
        .then(data => setMovies(data.Search));
    }
  }, [activePage]);

  // Recipes API
  useEffect(() => {
    if (activePage === "recipes") {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then(res => res.json())
        .then(data => setRecipes(data.meals));
    }
  }, [activePage]);

  return (
    <div>
      <Nav setActivePage={setActivePage} />

      <div className="container">

        {activePage === "home" && (
          <>
            <h1>React API Project (Without Routing)</h1>
            <p>Navigate using the navbar to view API data.</p>
          </>
        )}

        {activePage === "food" && (
          <>
            <h2>Food Items</h2>
            <div className="grid">
              {food?.map(item => (
                <div className="card" key={item.idMeal}>
                  <img src={item.strMealThumb} />
                  <p>{item.strMeal}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "products" && (
          <>
            <h2>Products</h2>
            <div className="grid">
              {products.map(item => (
                <div className="card" key={item.id}>
                  <img src={item.image} />
                  <p>{item.title}</p>
                  <p className="price">₹ {item.price}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "movies" && (
          <>
            <h2>Movies</h2>
            <div className="grid">
              {movies?.map(movie => (
                <div className="card" key={movie.imdbID}>
                  <img src={movie.Poster} />
                  <p>{movie.Title}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "recipes" && (
          <>
            <h2>Recipes</h2>
            <div className="grid">
              {recipes?.map(recipe => (
                <div className="card" key={recipe.idMeal}>
                  <img src={recipe.strMealThumb} />
                  <p>{recipe.strMeal}</p>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default App;




// import { useEffect, useState } from "react";
// import Nav from "./components/Nav";
// import './App.css'

// function App() {
//   const [activePage, setActivePage] = useState("home");

//   const [food, setFood] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [recipes, setRecipes] = useState([]);

//   // Food API
//   useEffect(() => {
//     if (activePage === "food") {
//       fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
//         .then(res => res.json())
//         .then(data => setFood(data.meals));
//     }
//   }, [activePage]);

//   // Products API
//   useEffect(() => {
//     if (activePage === "products") {
//       fetch("https://fakestoreapi.com/products")
//         .then(res => res.json())
//         .then(data => setProducts(data));
//     }
//   }, [activePage]);

//   // Movies API
//   useEffect(() => {
//     if (activePage === "movies") {
//       fetch("https://www.omdbapi.com/?s=avengers&apikey=thewdb")
//         .then(res => res.json())
//         .then(data => setMovies(data.Search));
//     }
//   }, [activePage]);

//   // Recipes API
//   useEffect(() => {
//     if (activePage === "recipes") {
//       fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
//         .then(res => res.json())
//         .then(data => setRecipes(data.meals));
//     }
//   }, [activePage]);

//   return (
//     <div>
//       <Nav setActivePage={setActivePage} />

//       <div className="container">

//         {activePage === "home" && (
//           <>
//             <h1>React API Project (Without Routing)</h1>
//             <p>Navigate using the navbar to view API data.</p>
//           </>
//         )}

//         {/* FOOD */}
//         {activePage === "food" && food && (
//           <>
//             <h2>Food Items</h2>

//             {/* SINGLE IMAGE */}
//             <img src={food[0]?.strMealThumb} className="single-image" />

//             <div className="grid">
//               {food.map(item => (
//                 <div className="card" key={item.idMeal}>
//                   <p>{item.strMeal}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* PRODUCTS */}
//         {activePage === "products" && (
//           <>
//             <h2>Products</h2>

//             {/* SINGLE IMAGE */}
//             <img src={products[0]?.image} className="single-image" />

//             <div className="grid">
//               {products.map(item => (
//                 <div className="card" key={item.id}>
//                   <p>{item.title}</p>
//                   <p className="price">₹ {item.price}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* MOVIES */}
//         {activePage === "movies" && movies && (
//           <>
//             <h2>Movies</h2>

//             {/* SINGLE IMAGE */}
//             <img src={movies[0]?.Poster} className="single-image" />

//             <div className="grid">
//               {movies.map(movie => (
//                 <div className="card" key={movie.imdbID}>
//                   <p>{movie.Title}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* RECIPES */}
//         {activePage === "recipes" && recipes && (
//           <>
//             <h2>Recipes</h2>

//             {/* SINGLE IMAGE */}
//             <img src={recipes[0]?.strMealThumb} className="single-image" />

//             <div className="grid">
//               {recipes.map(recipe => (
//                 <div className="card" key={recipe.idMeal}>
//                   <p>{recipe.strMeal}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

// export default App;
