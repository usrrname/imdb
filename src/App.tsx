import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './views/Home';
import { useMovieData } from './hooks/useMovieData';
import { MoviesContext } from './movie-context';

export const App = () => {

  const moviesContextValue = useMovieData();

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/liked">Liked</Link></li>
        </ul>
      </nav>
      <Switch>
        <div>
          <Route path='/liked'>
            <h2>Liked</h2>
          </Route>
          <Route path='/'>
            <MoviesContext.Provider value={moviesContextValue} >
              <Home />
            </MoviesContext.Provider>

          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default App;


