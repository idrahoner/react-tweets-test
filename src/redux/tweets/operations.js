import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64380757c1565cdd4d643fdc.mockapi.io";

export const getAllTweets = createAsyncThunk(
  "tweets/getAllTweets",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/api/users");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
