import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies, getShows } from "../../features/movies/movieSlice";
import MovieListing from "./components/MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  const movieText = "Harry";
  const showText = "Superman";

  useEffect(() => {
    dispatch(getMovies(movieText));
    dispatch(getShows(showText));
  }, []);

  return (
    <div>
      <div>
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
