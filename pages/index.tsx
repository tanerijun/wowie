import type { NextPage } from "next";
import Card from "../src/components/Card/Card";
import Grid from "../src/components/Grid/Grid";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Spinner from "../src/components/Spinner/Spinner";

const Home: NextPage = () => {
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
