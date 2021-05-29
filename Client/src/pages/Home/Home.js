import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import MovieRowSlider from "../../Components/MovieRowSlider/MovieRowSlider";
import { getMovies } from "../../Redux/Actions/movie.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMovies()), []);

  const Movies = useSelector((state) => state.movie.movies);
  return (
    <div
      style={{
        backgroundColor: "#020916",
        padding: "2rem 0",
      }}
    >
      {<HeroCarousel Movies={Movies} />}
      <MovieRowSlider title={"This Week"} />
      <MovieRowSlider title={"Action"} />
    </div>
  );
};

export default HomePage;
