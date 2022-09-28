import { Movies } from "./types";

// Fetch from TMDB
export const basicFetch = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`${response.status} : ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

// Get data from Next backend
export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
