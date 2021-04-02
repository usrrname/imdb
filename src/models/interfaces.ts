export interface Movie {
  poster_path: string,
  adult: boolean,
  overview: string,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number,
  liked?: boolean
}

export type MovieItemProps = {
  movie: Movie;
  likeMovie?: (movie: Movie) => void,
  unLikeMovie?: (movie: Movie) => void
}