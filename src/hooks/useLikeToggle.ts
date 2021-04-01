import { useState, useCallback } from "react";
import { Movie } from "../models/interfaces";
import { MoviesContextData } from "../movie-context";

export function useLikeToggle(): Partial<MoviesContextData> {

  let [likedMoviesList, setlikedMoviesList] = useState<Movie[]>([]);

  const likeMovie = useCallback((movie: Movie): void => {
    let likedMoviesListCopy = [...likedMoviesList];
    movie.liked = true;
    likedMoviesListCopy = likedMoviesListCopy.concat(movie);
    setlikedMoviesList(likedMoviesListCopy);
  }, [likedMoviesList]);

  const unLikeMovie = useCallback((movie: Movie): void => {
    let likedMoviesListCopy = [...likedMoviesList];
    movie.liked = false;

    const index = likedMoviesListCopy.findIndex(m => m.id === movie.id);
    if (index > -1) {
      const beforeIndex = likedMoviesListCopy.slice(0, index);
      const afterIndex = likedMoviesListCopy!.slice(index + 1);
      likedMoviesListCopy = beforeIndex.concat(afterIndex);
    }
    setlikedMoviesList(likedMoviesListCopy);
  }, [likedMoviesList]);

  return {
    likedMoviesList,
    likeMovie,
    unLikeMovie
  };
}