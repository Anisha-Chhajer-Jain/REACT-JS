import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <div className="grid">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <img src={movie.image?.medium} />
            <h4>{movie.name}</h4>
            <p>Rating: {movie.rating.average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
