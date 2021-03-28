import { useContext } from "react";
import { Movie } from "../models/interfaces";
import { MoviesContext } from "../movie-context";

export const MovieList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="movies-browser">
      { movies.map((movie: Movie) => {
        return (
          <div key={movie.id.toString()}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} />
            <p>{movie.original_title}</p>
            <p>{movie.popularity}</p>
            <input type="checkbox" onClick={() => { }}></input>
          </div>
        )
      })
      }
    </div>
  )
}
