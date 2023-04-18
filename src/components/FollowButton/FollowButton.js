import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux";
import Button from "components/Button";

export default function FollowButton({ id, isFollowed }) {
  const dispatch = useDispatch();

  if (!isFollowed) {
    return (
      <Button type="button" onClick={() => dispatch(follow(id))}>
        Follow
      </Button>
    );
  }

  return (
    <Button type="button" onClick={() => dispatch(unfollow(id))} active>
      Following
    </Button>
  );
}
