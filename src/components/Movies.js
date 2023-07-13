import React from "react";
import { movies } from "../data";


function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* Iterate over each movie in the `movies` array */}
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <h2>{movie.time}</h2>
          {/* Iterate over each genre in the `genres` array of the current movie */}
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;

