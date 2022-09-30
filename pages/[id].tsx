import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../src/utils/tmdbHelpers";
import { basicFetch } from "../src/utils/fetchFunctions";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Movie, Credits, Crew, Cast } from "../src/utils/types";
import Header from "../src/components/Header/Header";
import MovieInfo from "../src/components/MovieInfo/MovieInfo";
import Grid from "../src/components/Grid/Grid";
import Card from "../src/components/Card/Card";

type Props = {
  movie: Movie;
  directors: Crew[];
  casts: Cast[];
};

const Movie: NextPage<Props> = ({ movie, directors, casts }) => {
  // DEBUG
  console.log(casts);

  return (
    <div>
      <Header title={movie.original_title} logoLink="/" />
      <main>
        <MovieInfo
          thumbUrl={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : "/no_image.jpg"
          }
          rating={movie.vote_average}
          year={movie.release_date.split("-")[0]}
          backgroundImgUrl={
            movie.backdrop_path
              ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
              : "/no_image.jpg"
          }
          title={movie.original_title}
          overview={movie.overview}
          directors={directors}
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Grid title="Actors">
          {casts.map((cast) => (
            <Card
              key={cast.credit_id}
              imgUrl={
                cast.profile_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + cast.profile_path
                  : cast.gender === 2
                  ? "/male-placeholder.jpg"
                  : "/female-placeholder.jpg"
              }
              title={cast.name}
              subtitle={cast.character ? cast.character : "Unknown"}
            />
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Movie;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  const directors = credits.crew.filter((person) => person.job === "Director");
  const casts = credits.cast;

  return {
    props: {
      movie,
      directors,
      casts,
    },
    revalidate: 60 * 60 * 24, // rebuild every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
