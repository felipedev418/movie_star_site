import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMoviesOrSeriesDetails,
  getSelectedData,
  removeSelectedData,
} from "../../../../features/movies/movieSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const movie = useSelector(getSelectedData);

  useEffect(() => {
    dispatch(getMoviesOrSeriesDetails(imdbID));

    return () => {
      dispatch(removeSelectedData());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly py-10 text-font-primary font-[400]">
      {Object.keys(movie).length > 1 ? (
        <>
          <div className="flex-[1]">
            <h2 className="text-lg lg:text-[40px] text-font-primary">
              {movie.Title}
            </h2>
            <div className="pl-[3px] mt-5 text-font-seconday flex">
              <span className="text-sm lg:text-base mr-5">
                IMDB Rating <i>⭐</i>: {movie.imdbRating}
              </span>
              <span className="text-sm lg:text-base mr-5">
                IMDB Votes <i>👍</i>: {movie.imdbVotes}
              </span>
              <span className="text-sm lg:text-base mr-5">
                IMDB Runtime <i>🎬</i>: {movie.Runtime}
              </span>
              <span className="text-sm lg:text-base mr-5">
                IMDB Year <i>📆</i>: {movie.Year}
              </span>
            </div>
            <p className="mt-5 leading-6 mb-5 lg:mb-0 lg:leading-[1.8rem]">
              {movie.Plot}
            </p>
            <div className="mb-4 lg:mb-0">
              <div>
                <span className="py-[10px] text-font-primary font-semibold mr-4 lg:mr-5 inline-block">
                  Director
                </span>
                <span className="text-font-seconday text-sm lg:text-base">
                  {movie.Director}
                </span>
              </div>
              <div>
                <span className="py-[10px] text-font-primary font-semibold mr-4 lg:mr-5 inline-block">
                  Starts
                </span>
                <span className="text-font-seconday text-sm lg:text-base">
                  {movie.Actors}
                </span>
              </div>
              <div>
                <span className="py-[10px] text-font-primary font-semibold mr-4 lg:mr-5 inline-block">
                  Genres
                </span>
                <span className="text-font-seconday text-sm lg:text-base">
                  {movie.Genre}
                </span>
              </div>
              <div>
                <span className="py-[10px] text-font-primary font-semibold mr-4 lg:mr-5 inline-block">
                  Languanges
                </span>
                <span className="text-font-seconday text-sm lg:text-base">
                  {movie.Language}
                </span>
              </div>
              <div>
                <span className="py-[10px] text-font-primary font-semibold mr-4 lg:mr-5 inline-block">
                  Awards
                </span>
                <span className="text-font-seconday text-sm lg:text-base">
                  {movie.Awards}
                </span>
              </div>
            </div>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>Loading...</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
