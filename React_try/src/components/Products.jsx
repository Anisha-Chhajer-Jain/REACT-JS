import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="grid">
        {products.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} width="100" />
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
