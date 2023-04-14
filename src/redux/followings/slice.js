import { createSlice } from "@reduxjs/toolkit";

const initialState = { followIdList: [] };

const followingsSlice = createSlice({
  name: "followings",
  initialState,
  reducers: {
    follow(state, action) {
      console.log("action.payload: ", action.payload);
      console.log("state", state);
      return {
        ...state,
        followIdList: [...state.followIdList, action.payload],
      };
    },

    unfollow(state, action) {
      return {
        ...state,
        followIdList: state.followIdList.filter((id) => id !== action.payload),
      };
    },
  },
});

export const { follow, unfollow } = followingsSlice.actions;
export const followingsReducer = followingsSlice.reducer;
