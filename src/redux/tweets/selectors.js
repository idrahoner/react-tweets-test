import { selectFollowings } from "../followings/selectors";

export const selectAllTweets = (state) => {
  const followingsId = selectFollowings(state);

  console.log("state", state);

  const allTweets = state.tweets.entities.map((tweet) => ({
    ...tweet,
    isFollowed: followingsId.includes(tweet.id) ? true : false,
  }));
  return allTweets;
};
