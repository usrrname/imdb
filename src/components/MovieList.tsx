import { Movie, MovieProviderProps } from "../models/interfaces";

export const MovieList = ({ movies }: MovieProviderProps) => {

  return (
    <div className="movies-browser">
      { movies.map((movie: Movie) => {
        return <div key={movie.id.toString()}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} />
          <p>{movie.original_title}</p>
          <p>{movie.popularity}</p>
          <input type="checkbox"></input>
        </div>
      })
      }
    </div>
  )
}
