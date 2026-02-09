import { useEffect, useState } from "react";
import './food.css'
function Food() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pizza")
      .then(res => res.json())
      .then(data => setFood(data.meals));
  }, []);

  return (
    <div>
      <h2>Food Items</h2>
      <div className="grid">
        {food?.map(item => (
          <div key={item.idMeal} className="card">
            <img src={item.strMealThumb} width="150" />
            <h4>{item.strMeal}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
