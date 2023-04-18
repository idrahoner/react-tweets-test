import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux";

export default function FollowButton({ id, isFollowed }) {
  const dispatch = useDispatch();

  if (!isFollowed) {
    return (
      <button type="button" onClick={() => dispatch(follow(id))}>
        Follow
      </button>
    );
  }

  return (
    <button type="button" onClick={() => dispatch(unfollow(id))}>
      Following
    </button>
  );
}
