
import { useState } from "react";
import { MovieItemProps } from "../models/interfaces";

export const MovieItem = ({ likeMovie, unLikeMovie, movie }: MovieItemProps) => {

  let [like, setLike] = useState<boolean>(false);

  const handleChange = (like: boolean) => {
    !like && movie.liked ? unLikeMovie!(movie) : likeMovie!(movie)
  }

  return (
    <div className="movie-tile">
      <div className="like-btn-wrapper">
        <label htmlFor={movie.id.toString()} className="like-label">
          <input id={movie.id.toString()} className="like-btn" type="checkbox"
            checked={movie.liked}
            onChange={() => { handleChange(like) }}
            onClick={() => { setLike(like = !like) }}></input>
        </label>
      </div>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} /><br></br>

      <small>Title</small>
      <p>{movie.original_title}</p>
      <small>Popularity</small>
      <p>{movie.popularity}</p>
    </div>
  )
}

