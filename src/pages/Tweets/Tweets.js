import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentTweets,
  selectFilter,
  getAllTweets,
  follow,
  unfollow,
  changeFilterStatus,
} from "../../redux";
import { FILTER_STATUS, PAGINATION_LIMIT } from "../../helpers";

export default function TweetsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const allTweets = useSelector(selectCurrentTweets);
  const filterStatus = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  useEffect(() => {
    const endLimit = PAGINATION_LIMIT * currentPage;
    const visibleTweetsList = allTweets.slice(0, endLimit);

    setVisibleTweets(visibleTweetsList);
    setIsEndOfPage(visibleTweetsList.length === allTweets.length);
  }, [currentPage, allTweets]);

  return (
    <div>
      <Link to="/">To Home Page</Link>
      <br />
      <select
        name="filter"
        value={filterStatus}
        onChange={(event) => {
          dispatch(changeFilterStatus(event.target.value));
        }}
      >
        <option value={FILTER_STATUS.all}>All</option>
        <option value={FILTER_STATUS.follow}>Follow</option>
        <option value={FILTER_STATUS.followings}>Followings</option>
      </select>
      <ul>
        {visibleTweets.map(
          ({ id, user, tweets, followers, avatar, isFollowed }) => (
            <li key={id}>
              <img src={avatar} alt="user avatar" />
              <p>{user}</p>
              <p>{tweets}</p>
              <p>{followers}</p>
              {!isFollowed ? (
                <button type="button" onClick={() => dispatch(follow(id))}>
                  Follow
                </button>
              ) : (
                <button type="button" onClick={() => dispatch(unfollow(id))}>
                  Following
                </button>
              )}
            </li>
          )
        )}
      </ul>
      {!isEndOfPage && (
        <button
          type="button"
          onClick={() => setCurrentPage((pervState) => (pervState += 1))}
        >
          Load more
        </button>
      )}
    </div>
  );
}
