import React, { useEffect, useState } from "react";
import "./App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    console.log("Fetching products...");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts =
    category === "All" ? products : products.filter((product) => product.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
  
    return 0;
  });

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>
      <select value={category} onChange={(e) => {
        console.log("Selected Category:", e.target.value);
        setCategory(e.target.value);
      }}
      >
        <option value="All">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewellery</option>
        <option value="electronics">Electronics</option>
      </select>

      <select value={sortOption} onChange={(e) => {
        console.log("Selected Sort:", e.target.value);
        setSortOption(e.target.value);
      }}
        style={{ marginLeft: "10px" }}
      >
        <option value="">Sort By Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <div style={{ marginTop: "20px", border: "2px solid #ccc", padding: "10px" }}>
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "2px solid black" }}>
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: "200px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
