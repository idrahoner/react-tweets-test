import { createSlice } from "@reduxjs/toolkit";
import { FILTER_STATUS } from "../../helpers";

const initialState = FILTER_STATUS.all;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleFilterStatus(state, action) {
      return action.payload;
    },
  },
});

export const { toggleFilterStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
