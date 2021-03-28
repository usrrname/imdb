import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Movie } from './models/interfaces';
import { Home } from './views/Home';

export const App = () => {

  let [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1?results`)
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        setLoading(false);
      });
  }, [setMovies])

  useEffect(() => fetchData(), [fetchData]);

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
            <Home movies={movies} isLoading={isLoading} />
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default App;


