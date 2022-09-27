import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Card from "../src/components/Card/Card";
import ErrorPage from "../src/components/ErrorPage/ErrorPage";
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

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchNextPage();
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div onScroll={handleScroll}>
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
              ? `Search results: ${
                  data?.pages[0].total_results
                    ? data.pages[0].total_results
                    : "0"
                }`
              : "Popular Movies"
          }
        >
          {data &&
            data.pages &&
            data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <a>
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                          : "/no_image.jpg"
                      }
                      title={movie.original_title}
                    />
                  </a>
                </Link>
              ))
            )}
        </Grid>

        {(isLoading || isFetching) && <Spinner />}
      </main>
    </div>
  );
};

export default Home;
