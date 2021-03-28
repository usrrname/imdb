import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Movie } from "../models/interfaces";
import { MoviesContextData } from "../movie-context";

export function useMovieData(): MoviesContextData {

  let [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_POPULARMOVIES_URL}?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false);
      });
  }, [setMovies])

  useEffect(() => fetchMovies(), [fetchMovies]);

  return {
    movies,
    fetchMovies,
    isLoading
  }
}
