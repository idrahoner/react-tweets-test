import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTweets, getAllTweets } from "../../redux";

export default function TweetsPage() {
  const allTweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">To Home Page</Link>
      <ul>
        {allTweets.map(({ id, user, tweets, followers, avatar }) => (
          <li key={id}>
            <p>{user}</p>
            <p>{tweets}</p>
            <p>{followers}</p>
            <img src={avatar} alt="user avatar" />
          </li>
        ))}
      </ul>
    </div>
  );
}
