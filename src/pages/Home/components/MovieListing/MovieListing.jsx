import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../../../../App.css";
import { settings } from "../../../../common/setting";
import {
  getAllMovies,
  getAllShows,
  isLoading,
} from "../../../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(isLoading);

  const renderMovies = movies.Search ? (
    movies.Search.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
  ) : (
    <div className="error">
      <h3>Loading...</h3>
    </div>
  );

  const renderShows = shows.Search ? (
    shows.Search.map((show) => <MovieCard key={show.imdbID} {...show} />)
  ) : (
    <div className="error">
      <h3>Loading...</h3>
    </div>
  );

  return (
    <main>
      {loading ? (
        <div className="h-[calc(100vh_-_72px)] flex items-center justify-center">
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <div className="my-5">
            <h2 className="text-font-seconday mb-[10px] font-[400] text-2xl">
              Movies
            </h2>
            <div>
              <Slider {...settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-font-seconday mb-[10px] font-[400] text-2xl">
              Shows
            </h2>
            <Slider {...settings}>{renderShows}</Slider>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieListing;
