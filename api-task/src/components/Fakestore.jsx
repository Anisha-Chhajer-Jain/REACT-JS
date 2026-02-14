import "./fake.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/fakestoreSlice";

export default function Fakestore() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.fakestore);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="product-container"><h2>Loading products</h2></div>;
  }

  if (error) {
    return <div className="product-container"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="product-container">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="product-img"
          />

          <div className="product-info">
            <h2 className="title">{item.title}</h2>

            <p className="category">{item.category}</p>

            <p className="description">
              {item.description.slice(0, 100)}...
            </p>

            <div className="rating">
              ⭐ {item.rating.rate} <span>({item.rating.count} reviews)</span>
            </div>

            <div className="price">₹ {item.price}</div>

            <button className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}