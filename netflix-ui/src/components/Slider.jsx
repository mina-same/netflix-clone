import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 6)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(6, 12)} title="Trending This Week" />
      <CardSlider data={getMoviesFromRange(12, 18)} title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(18, 24)}
        title="Blockbuster Movies"
      />
      <CardSlider
        data={getMoviesFromRange(24, 30)}
        title="Popular on Netflix"
      />
      <CardSlider data={getMoviesFromRange(30, 36)} title="Action Movies" />
      <CardSlider data={getMoviesFromRange(36, 42)} title="Epics Movies" />
      <CardSlider data={getMoviesFromRange(42, 48)} title="Drama Movies" />
      <CardSlider data={getMoviesFromRange(48, 54)} title="comedy Movies" />
      <CardSlider data={getMoviesFromRange(54, 60)} title="Documentary Movies" />
    </Container>
  );
}

const Container = styled.div``;