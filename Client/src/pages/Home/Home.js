import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import MovieRowSlider from "../../Components/MovieRowSlider/MovieRowSlider";
import { getMovies } from "../../Redux/Actions/movie.actions";
import { getScreenings } from "../../Redux/Actions/screening.actions";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getScreenings());
  }, [dispatch]);
  const location = useSelector((state) => state.root.location);
  const Screenings = useSelector((state) => state.screenings);

  const Movies = Screenings.filter(
    (e) => e.location.trim() === location.toLowerCase()
  ).map((screening) => screening.movieId);

  return (
    <div
      style={{
        backgroundColor: "#020916",
      }}
    >
      <HeroCarousel Movies={Movies} />
      <MovieRowSlider title={"This Week"} Movies={Movies} />
      <MovieRowSlider title={"Action"} Movies={Movies} />
    </div>
  );
};

export default HomePage;
