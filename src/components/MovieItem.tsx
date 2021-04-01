
import { MovieItemProps } from "../models/interfaces";

export const MovieItem = ({ likeMovie, unLikeMovie, movie }: MovieItemProps) => {

  return (
    <div className="movie-tile">
      <div key={movie.id.toString()}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} />
        <small>Title</small>
        <p>{movie.original_title}</p>
        <small>Popularity</small>
        <p>{movie.popularity}</p>
        <input type="checkbox"
          checked={movie.liked}
          onClick={() => { movie.liked ? unLikeMovie(movie) : likeMovie(movie) }}></input>
      </div>
    </div>
  )
}

