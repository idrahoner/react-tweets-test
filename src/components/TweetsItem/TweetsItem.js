import FollowButton from "components/FollowButton";
import {
  TweetItem,
  GoitLogo,
  TweetsLogo,
  Separator,
  AvatarFrame,
  UserAvatar,
  UserData,
} from "./TweetsItem.styled";
import { formatNumber } from "helpers";
import goitLogo from "images/goitLogo.png";
import tweetsLogo from "images/tweetsLogo.png";

export default function TweetsItem({
  id,
  avatar,
  tweets,
  followers,
  isFollowed,
}) {
  return (
    <TweetItem>
      <GoitLogo src={goitLogo} alt="goit logo" />
      <TweetsLogo src={tweetsLogo} alt="tweets logo" />
      <Separator>
        <AvatarFrame>
          <UserAvatar src={avatar} alt="user avatar" />
        </AvatarFrame>
      </Separator>
      <UserData>
        <p>{formatNumber(tweets)} tweets</p>
        <p>{formatNumber(followers)} followers</p>
      </UserData>
      <FollowButton id={id} isFollowed={isFollowed} />
    </TweetItem>
  );
}
