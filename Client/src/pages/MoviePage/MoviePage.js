import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MovieHero from "../../Components/moviePage/MovieHero/MovieHero";
import MovieReservation from "../../Components/moviePage/MovieReservation/MovieReservation";
import MovieRating from "../../Components/moviePage/MovieRating/MovieRating";
import RelatedMovies from "../../Components/moviePage/RelatedMovies/RelatedMovies";
import { getMovies } from "../../Redux/Actions/movie.actions";
import { getScreenings } from "../../Redux/Actions/screening.actions";
const MoviePage = () => {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.root.location);
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getScreenings());
  }, [location]);
  let { movieID } = useParams();

  const Movie = useSelector((state) =>
    state.movie.movies.find((e) => e._id === movieID)
  );

  const movieScreenings = useSelector((state) =>
    state.screenings.filter((screening) => screening.movieId._id === movieID)
  );

  return (
    <div style={{ backgroundColor: "#020916", minHeight: "100vh" }}>
      <MovieHero Movie={Movie} />
      <MovieReservation movieScreenings={movieScreenings} />
      {/* <MovieRating />
      <RelatedMovies /> */}
    </div>
  );
};

export default MoviePage;
