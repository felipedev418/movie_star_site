import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  return (
    <Link to={`/movie/${imdbID}`}>
      <div className="bg-secondary-color cursor-pointer transition-all duration-300 hover:scale-[1.1] mx-3 rounded">
        <div>
          <div className="h-[300px]">
            <img
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/350"
              }
              alt={Title}
              className="w-full h-full"
            />
          </div>
          <div className="h-[150px] p-5">
            <div className="text-font-primary">
              <h4 className="text-[20px] text-[400] mb-[10px]">{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
