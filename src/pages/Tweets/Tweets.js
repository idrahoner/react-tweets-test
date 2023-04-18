import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../../redux";

import FilterSelector from "components/FilterSelector";
import TweetsGallery from "components/TweetsGallery";

export default function TweetsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">To Home Page</Link>
      <br />
      <FilterSelector />
      <TweetsGallery />
    </div>
  );
}
