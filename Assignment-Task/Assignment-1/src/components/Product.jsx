import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); 

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Product Search</h1>

      <input type="text" placeholder="Search products" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
