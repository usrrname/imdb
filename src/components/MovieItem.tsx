
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { MovieItemProps } from "../models/interfaces";


export const MovieItem = ({ movie, likeMovie, unLikeMovie }: MovieItemProps) => {

  let [like, setLike] = useState<boolean>(false);

  // instead of creating 2 separate MovieItems, match and change input element by route
  const match = useRouteMatch({ path: '/', exact: true });
  const matchLiked = useRouteMatch({ path: '/liked', exact: true });

  const handleChange = () => {
    !like && movie.liked ? unLikeMovie!(movie) : likeMovie!(movie)
  };

  return (
    <div className="movie-tile">
      <div className="like-btn-wrapper">

        {match &&
          <label htmlFor={movie.id.toString()} className="like-label">
            <input id={movie.id.toString()} className="like-btn" type="checkbox"
              checked={movie.liked}
              onChange={() => handleChange()}
              onClick={() => setLike(!!like)}></input>
          </label>
        }

        {matchLiked &&
          <label htmlFor={movie.id.toString()} className="like-label">
            <input id={movie.id.toString()} className="like-btn" type="checkbox"
              checked={movie.liked}
              onChange={() => handleChange()}
              onClick={() => { setLike(!like) }}
            ></input>
          </label>
        }
      </div>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.overview} /><br></br>
      <div className="movie-description">
        <small>Title</small>
        <p>{movie.title}</p>
        <small>Popularity</small>
        <p>{movie.popularity}</p>
      </div>
    </div >
  )
}

