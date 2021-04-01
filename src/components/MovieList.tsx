
import { Movie } from "../models/interfaces";
import Context from "../movie-context";
import React, { useContext } from 'react';
import { MovieItem } from "./MovieItem";

export const MovieList: React.FC = () => {

  const { movies, likeMovie, unLikeMovie } = useContext(Context);

  return (
    <div className="movies-browser">
      { movies.map((movie: Movie) => {
        return (
          <MovieItem movie={movie} likeMovie={likeMovie} unLikeMovie={unLikeMovie}></MovieItem>
        )
      })
      }
    </div>
  )
}

