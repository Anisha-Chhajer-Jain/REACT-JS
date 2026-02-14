import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slices/movieSlice";
import "./movie.css";

export default function Movie() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div className="product-container"><h2>Loading movies...</h2></div>;
  }

  if (error) {
    return <div className="product-container"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="product-container">
      {movies.slice(0, 20).map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.primaryImage}
            alt={item.primaryTitle}
            className="product-img"
          />

          <div className="product-info">
            <h2 className="title">{item.primaryTitle}</h2>

            <p className="category">
              {item.type} • {item.startYear}
            </p>

            <p className="description">
              {item.description?.slice(0, 100)}
            </p>

            <div className="rating">
              <p>⭐ Rating: {item.averageRating ?? "N/A"}</p>
              <p>🕒 {item.runtimeMinutes} min</p>
            </div>

            <div className="genres">
              {item.genres?.map((g, index) => (
                <span key={index}>{g}</span>
              ))}
            </div>

            <button className="btn">Watch Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}