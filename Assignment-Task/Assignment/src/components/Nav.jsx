function Nav({ setActivePage }) {
  return (
    <div className="navbar">
      <h2 className="logo" onClick={() => setActivePage("home")}>
        ReactApp
      </h2>

      <div className="nav-links">
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("food")}>Food</button>
        <button onClick={() => setActivePage("products")}>Products</button>
        <button onClick={() => setActivePage("movies")}>Movies</button>
        <button onClick={() => setActivePage("recipes")}>Recipes</button>
      </div>
    </div>
  );
}

export default Nav;
