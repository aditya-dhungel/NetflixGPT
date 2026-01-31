import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    loading: false,
    error: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
      state.error = null;
      state.loading = false;
    },
    setGptLoading: (state, action) => {
      state.loading = action.payload;
    },
    setGptError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  clearGptResults,
  setGptLoading,
  setGptError,
} = gptSlice.actions;

export default gptSlice.reducer;
