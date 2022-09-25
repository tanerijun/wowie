import type { NextPage } from "next";
import { useState } from "react";
import Card from "../src/components/Card/Card";
import Grid from "../src/components/Grid/Grid";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Spinner from "../src/components/Spinner/Spinner";
import { useFetchMovies } from "../src/hooks/useFetchMovies";
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../src/utils/tmdbHelpers";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <div>
      <Header setQuery={setQuery} />
      <main>
        {!query && data && data.pages && (
          <Hero
            imgUrl={
              data.pages[0].results[0].backdrop_path
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.pages[0].results[0].backdrop_path}`
                : "/no_image.jpg"
            }
            title={data.pages[0].results[0].title}
            text={data.pages[0].results[0].overview}
          />
        )}

        <Grid
          title={
            query
              ? `Search results: ${data?.pages[0].total_results}`
              : "Popular Movies"
          }
        >
          {data &&
            data.pages &&
            data.pages.map((page) =>
              page.results.map((movie) => (
                <div key={movie.id}>
                  <Card
                    imgUrl={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : "/no_image.jpg"
                    }
                    title={movie.original_title}
                  />
                </div>
              ))
            )}
        </Grid>
        <Spinner />
      </main>
    </div>
  );
};

export default Home;
