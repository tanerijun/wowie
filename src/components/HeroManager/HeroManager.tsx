import { useEffect, useState } from "react";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../utils/tmdbHelpers";
import { Movie } from "../../utils/types";
import Hero from "../Hero/Hero";

type Props = {
  movies: Movie[];
};

export default function HeroManager({ movies }: Props) {
  const [movieIndex, setMovieIndex] = useState(0);
  const movie = movies[movieIndex];

  useEffect(() => {
    let n = 0;

    if (movieIndex + 1 < movies.length) {
      n = 1;
    } else {
      n = -movies.length + 1;
    }

    const movieInterval = setInterval(() => {
      setMovieIndex((oldMovieIndex) => oldMovieIndex + n);
    }, 10000);

    return () => clearInterval(movieInterval);
  }, [movieIndex, movies.length]);

  return (
    <>
      <Hero
        key={movie.id}
        id={movie.id}
        imgUrl={
          movie.backdrop_path
            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
            : "/no_image.jpg"
        }
        title={movie.title}
        text={movie.overview}
      />
    </>
  );
}
