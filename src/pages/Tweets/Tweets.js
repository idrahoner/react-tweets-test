import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTweets, getAllTweets } from "../../redux";

const PAGINATION_LIMIT = 2;

export default function TweetsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const allTweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  useEffect(() => {
    const getVisibleTweets = (page) => {
      const endPortion = PAGINATION_LIMIT * page;
      const currentPortion = allTweets.slice(0, endPortion);

      if (currentPortion.length === 0) {
        return;
      }

      setVisibleTweets(currentPortion);
    };

    getVisibleTweets(currentPage);
  }, [currentPage, allTweets]);

  return (
    <div>
      <Link to="/">To Home Page</Link>
      <ul>
        {visibleTweets.map(({ id, user, tweets, followers, avatar }) => (
          <li key={id}>
            <img src={avatar} alt="user avatar" />
            <p>{user}</p>
            <p>{tweets}</p>
            <p>{followers}</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setCurrentPage((pervState) => (pervState += 1))}
      >
        Load more
      </button>
    </div>
  );
}
