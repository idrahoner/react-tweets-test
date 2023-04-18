import { createSelector } from "@reduxjs/toolkit";
import { selectFollowings } from "../followings/selectors";
import { selectFilter } from "../filter/selectors";
import { FILTER_STATUS } from "../../helpers";

export const selectAllTweets = (state) => state.tweets.entities;

export const selectCurrentTweets = createSelector(
  [selectAllTweets, selectFollowings, selectFilter],
  (tweets, followingsIdList, filterStatus) => {
    const tweetsWithFollowingsStatus = tweets.map((tweet) => ({
      ...tweet,
      isFollowed: followingsIdList.includes(tweet.id) ? true : false,
    }));

    switch (filterStatus) {
      case FILTER_STATUS.follow:
        return tweetsWithFollowingsStatus.filter((tweet) => !tweet.isFollowed);
      case FILTER_STATUS.followings:
        return tweetsWithFollowingsStatus.filter((tweet) => tweet.isFollowed);
      default:
        return tweetsWithFollowingsStatus;
    }
  }
);
