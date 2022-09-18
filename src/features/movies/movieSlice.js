import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { API_KEY } from "../../api/MovieApiKey";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (search) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${API_KEY}&s=${search}&type=movie`
      );
      return response.data;
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
  }
);

export const getShows = createAsyncThunk("movies/getShows", async (search) => {
  try {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${search}&type=series`
    );
    return response.data;
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
});

export const getMoviesOrSeriesDetails = createAsyncThunk(
  "movies/getMoviesOrSeriesDetails",
  async (id) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${API_KEY}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedData: {},
  isLoading: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedData: (state) => {
      state.selectedData = {};
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, movies: action.payload };
    },
    [getShows.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, shows: action.payload };
    },
    [getMoviesOrSeriesDetails.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, selectedData: action.payload };
    },
  },
});

export const { removeSelectedData } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedData = (state) => state.movies.selectedData;
export const isLoading = (state) => state.movies.isLoading;
export default movieSlice.reducer;
