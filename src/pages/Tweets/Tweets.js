import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../../redux";

import FilterSelector from "components/FilterSelector";
import TweetsGallery from "components/TweetsGallery";
import { GoBackButton } from "./Tweets.styled";

export default function TweetsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);

  return (
    <div>
      <GoBackButton to="/">To Home Page</GoBackButton>
      <br />
      <FilterSelector />
      <TweetsGallery />
    </div>
  );
}
