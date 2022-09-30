import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../src/components/Card/Card";
import ErrorPage from "../src/components/ErrorPage/ErrorPage";
import Grid from "../src/components/Grid/Grid";
import Header from "../src/components/Header/Header";
import HeroManager from "../src/components/HeroManager/HeroManager";
import Spinner from "../src/components/Spinner/Spinner";
import { useFetchMovies } from "../src/hooks/useFetchMovies";
import { useInView } from "../src/hooks/useInView";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../src/utils/tmdbHelpers";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [observedRef, isInView] = useInView();
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  useEffect(() => {
    if (isInView) {
      fetchNextPage();
    }
  }, [isInView, fetchNextPage]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Head>
        <title>WOWIE - Movie Database</title>
        <meta name="description" content="A movie database powered by TMDB" />
      </Head>
      <div className="h-screen overflow-y-scroll">
        <Header setQuery={setQuery} logoLink="#top" />
        <main id="top">
          {!query && data && data.pages && (
            <HeroManager movies={data.pages[0].results} />
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
                        title={movie.title}
                        ref={observedRef}
                      />
                    </a>
                  </Link>
                ))
              )}
          </Grid>

          {(isLoading || isFetching) && <Spinner />}
        </main>
      </div>
    </>
  );
};

export default Home;
