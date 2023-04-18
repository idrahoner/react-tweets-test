import FollowButton from "components/FollowButton";

export default function TweetsItem({
  id,
  avatar,
  user,
  tweets,
  followers,
  isFollowed,
}) {
  return (
    <li>
      <img src={avatar} alt="user avatar" />
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{followers}</p>
      <FollowButton id={id} isFollowed={isFollowed} />
    </li>
  );
}
