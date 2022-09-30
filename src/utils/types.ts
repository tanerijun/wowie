// Models the return object from TMDB API calls

type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  release_date: string;
};

type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type Cast = {
  character: string;
  credit_id: string;
  name: string;
  profile_path: string;
  gender: 0 | 1 | 2 | 3; // Not specified, female, male, non-binary
};

type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type { Cast, Credits, Crew, Movie, Movies };
