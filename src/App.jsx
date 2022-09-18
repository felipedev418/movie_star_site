import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, MovieDetails, PageNotFound } from "./pages";

const App = () => {
  return (
    <div>
      <Header />
      <div className="m-auto w-4/5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
