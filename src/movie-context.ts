import { createContext } from 'react';
import { Movie } from './models/interfaces';


export interface MoviesContextData {
  movies: Movie[]
  isLoading: boolean,
  fetchMovies: () => void,
}

export const moviesContextDefault: MoviesContextData = {
  movies: [],
  isLoading: true,
  fetchMovies: () => null
}

export const MoviesContext = createContext<MoviesContextData>(moviesContextDefault)

