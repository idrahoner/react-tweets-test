import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentTweets } from "../../redux";
import { PAGINATION_LIMIT } from "helpers";
import TweetsItem from "components/TweetsItem";
import LoadMoreButton from "components/LoadMoreButton";
import { GalleryContainer, Gallery } from "./TweetsGallery.styled";

export default function TweetsGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const allTweets = useSelector(selectCurrentTweets);

  useEffect(() => {
    const endLimit = PAGINATION_LIMIT * currentPage;
    const visibleTweetsList = allTweets.slice(0, endLimit);

    setVisibleTweets(visibleTweetsList);
    setIsEndOfPage(visibleTweetsList.length === allTweets.length);
  }, [currentPage, allTweets]);

  const handleLoadMore = () => setCurrentPage((pervState) => (pervState += 1));

  return (
    <GalleryContainer>
      <Gallery>
        {visibleTweets.map((tweet) => (
          <TweetsItem key={tweet.id} {...tweet} />
        ))}
      </Gallery>
      {!isEndOfPage && <LoadMoreButton onLoadMore={handleLoadMore} />}
    </GalleryContainer>
  );
}
