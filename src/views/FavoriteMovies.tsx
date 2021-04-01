import { MovieList } from "../components/MovieList";
import MovieContext from "../movie-context";
import { useContext } from 'react';

export const FavouriteMovies = () => {
  const { isLoading } = useContext(MovieContext)

  return (
    <div className="app-content">
      {isLoading ? <p>Loading...</p> : <MovieList />}
    </div>
  )
}