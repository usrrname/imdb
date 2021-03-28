import React from "react"
import { MovieList } from "../components/MovieList"
import { Movie } from "../models/interfaces"

type MovieProviderProps = {
  movies: Movie[],
  isLoading: boolean;
}

export const Home = ({ movies, isLoading }: MovieProviderProps) => {
  return (
    <div className="app-content">
      {isLoading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  )
}