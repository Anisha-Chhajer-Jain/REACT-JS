import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../store/slices/foodSlice';

export default function Food() {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (loading) {
    return <div className="product-container"><h2>Loading meals...</h2></div>;
  }

  if (error) {
    return <div className="product-container"><h2>Error: {error}</h2></div>;
  }
  return (
    <div className="product-container">
      {meals.map((item) => (
        <div className="product-card" key={item.idMeal}>
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="product-img"
          />

          <div className="product-info">
            <h2 className="title">{item.strMeal}</h2>

            <p className="category">{item.strCategory}</p>

            <p className="description">
              {item.strInstructions.slice(0, 100)}...
            </p>

            <div className="rating"><p>⭐ Ingredients:</p>
              <p>{item.strIngredient1}</p> <p>({item.strIngredient2})</p>
            </div>

            <button className="btn">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  )
}