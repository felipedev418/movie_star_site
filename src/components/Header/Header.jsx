import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.svg";
import { getMovies } from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      dispatch(getMovies(search));
      setSearch("");
    }
  };

  return (
    <header className="bg-secondary-color w-full h-[72px] px-10 flex items-center justify-between">
      <div>
        <Link to="/">
          <h1 className="text-font-primary text-xl font-bold">Movie Star</h1>
        </Link>
      </div>
      <div className="w-2/4 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center width-[70%]"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Movies or Shows"
            className="w-full py-[5px] pr-[5px] pl-[10px] border-none outline-none rounded"
          />
          <button
            type="submit"
            className="px-2 text-lg cursor-pointer h-[38px]"
          >
            <i>🔍</i>
          </button>
        </form>
      </div>
      <div>
        <img src={Profile} alt="" className="w-[38px] h-[38px]" />
      </div>
    </header>
  );
};

export default Header;
