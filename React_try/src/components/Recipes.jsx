import { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then(res => res.json())
      .then(data => setRecipes(data.meals));
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <div className="grid">
        {recipes.map(item => (
          <div key={item.idMeal} className="card">
            <img src={item.strMealThumb} width="150" />
            <h4>{item.strMeal}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Recipes;
