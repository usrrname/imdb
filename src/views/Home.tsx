
import React, { useContext } from "react";
import { MovieList } from "../components/MovieList";
import { MoviesContext } from "../movie-context";

export const Home = () => {
  const { isLoading } = useContext(MoviesContext);
  return (
    <div className="app-content">
      {isLoading ? <p>Loading...</p> : <MovieList />}
    </div>
  )
}