import { createSlice } from "@reduxjs/toolkit";
import { getAllTweets } from "./operations";

const tweetsInitialState = { entities: [], isLoading: false, error: null };

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: tweetsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllTweets.pending, (state, action) => {
        return { ...state, isLoading: true, error: null };
      })
      .addCase(getAllTweets.fulfilled, (state, action) => {
        return { ...state, entities: action.payload, isLoading: false };
      })
      .addCase(getAllTweets.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      }),
});

export const tweetsReducer = tweetsSlice.reducer;
