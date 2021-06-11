import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import MovieRowSlider from "../../Components/MovieRowSlider/MovieRowSlider";
import moment from "moment";
import { getMovies } from "../../Redux/Actions/movie.actions";
import { getScreenings } from "../../Redux/Actions/screening.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.root.location);
  const Screenings = useSelector((state) => state.screenings);
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getScreenings());
  }, [location]);
  const MoviesByLocation = Screenings.filter(
     (e) => e.location.trim().toLowerCase() == location.toLowerCase()
  
  ).map((screening) => screening.movieId);
    console.log(MoviesByLocation)
  const x = new Set();
  const thisWeek = MoviesByLocation.filter((e) =>
    moment(e.date).isSame(new Date(), "year")
  ).filter((el) => {
    const duplicate = x.has(el._id);
    x.add(el._id);
    return !duplicate;
  });
  console.log("thisweek",thisWeek)
  const uniqueID = new Set();
  const GenresByLocation = MoviesByLocation.map((movie) => movie.genres)
    .reduce((a, b) => a.concat(b), [])
    .filter((el) => {
      if(el){
        const duplicate = uniqueID.has(el._id);
        uniqueID.add(el._id);
        return !duplicate;
      }
    
    });

  return (
    <div
      style={{
        backgroundColor: "#020916",
        minHeight: "100vh",
      }}
    >
      <HeroCarousel Movies={MoviesByLocation} />
      {thisWeek.length > 0 && (
        <MovieRowSlider title={"This Week"} Movies={thisWeek} />
      )}
      {GenresByLocation.length > 0 &&
        GenresByLocation.map((genre) => (
          <MovieRowSlider
            title={genre.name}
            Movies={MoviesByLocation.filter((movie) =>
              movie.genres.includes(genre)
            )}
          />
        ))}

      <footer>CinemaApp</footer>
    </div>
  );
};

export default HomePage;
