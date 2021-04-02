import { createContext, ReactNode } from 'react';
import { Movie } from './models/interfaces';

export type MovieProviderProps = {
  children: ReactNode,
}
export interface MoviesContextData {
  movies: Movie[],
  isLoading: boolean,
  likedMoviesList: Movie[],
  likeMovie: (movie: Movie) => void,
  unLikeMovie: (movie: Movie) => void
}

const defaultValue: MoviesContextData = {
  movies: [],
  isLoading: false,
  likedMoviesList: [],
  likeMovie: (movie: Movie) => { },
  unLikeMovie: (movie: Movie) => { },
}

const MovieContext = createContext<MoviesContextData>(defaultValue);

export default MovieContext;
export const MovieContextProvider = MovieContext.Provider;
export const MovieContextConsumer = MovieContext.Consumer;

