
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MovieContextProvider } from './movie-context';
import { useMovieData } from './hooks/useMovieData';
import { useLikeToggle } from './hooks/useLikeToggle';
import { MovieList } from './components/MovieList';
import { LikedMoviesList } from './components/LikedMovieList';

export const App = () => {
  let { movies, isLoading } = useMovieData();
  let { likeMovie, unLikeMovie, likedMoviesList } = useLikeToggle();

  const value: any = {
    movies,
    isLoading,
    likeMovie,
    likedMoviesList,
    unLikeMovie
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/liked">Liked</Link></li>
        </ul>
      </nav>
      <Switch>
        <div className="app-content">
          <MovieContextProvider value={value}>
            <Route exact path='/'>
              {isLoading ? <p>Loading...</p> : <MovieList />}
            </Route>
            <Route exact path='/liked'>
              {likedMoviesList && likedMoviesList.length > 0 ? <LikedMoviesList /> : <p>You don't have any faved movies!</p>}
            </Route>
          </MovieContextProvider>
        </div>

      </Switch>
    </Router>
  )
}

export default App;
