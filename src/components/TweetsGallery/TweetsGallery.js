import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTweets, follow, unfollow } from "../../redux";
import { PAGINATION_LIMIT } from "helpers";

export default function TweetsGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const allTweets = useSelector(selectCurrentTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    const endLimit = PAGINATION_LIMIT * currentPage;
    const visibleTweetsList = allTweets.slice(0, endLimit);

    setVisibleTweets(visibleTweetsList);
    setIsEndOfPage(visibleTweetsList.length === allTweets.length);
  }, [currentPage, allTweets]);

  return (
    <>
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
    </>
  );
}
