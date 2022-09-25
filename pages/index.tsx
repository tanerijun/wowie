import type { NextPage } from "next";
import { useState } from "react";
import Card from "../src/components/Card/Card";
import Grid from "../src/components/Grid/Grid";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Spinner from "../src/components/Spinner/Spinner";
import { useFetchMovies } from "../src/hooks/useFetchMovies";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Grid />
        <Card />
        <Spinner />
      </main>
    </div>
  );
};

export default Home;
