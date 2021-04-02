
import { Movie } from "../models/interfaces";
import Context from "../movie-context";
import React, { useContext } from 'react';
import { MovieItem } from "./MovieItem";

export const LikedMoviesList: React.FC = () => {

  const { likedMoviesList, likeMovie, unLikeMovie } = useContext(Context);

  return (
    <>
      <h2>Your Favourite Movies</h2>
      <div className="movies-browser">
        {likedMoviesList.map((movie: Movie) => {
          return (
            <MovieItem movie={movie} key={movie.id} likeMovie={likeMovie} unLikeMovie={unLikeMovie}></MovieItem>
          )
        })
        }
      </div>
    </>
  )
}
