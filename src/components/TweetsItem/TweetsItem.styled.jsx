import styled from "styled-components";

export const TweetItem = styled.li`
  position: relative;
  width: ${(p) => p.theme.sizes.tweetWidth};
  height: ${(p) => p.theme.sizes.tweetHeight};
  background: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.tweet};
  box-shadow: ${(p) => p.theme.shadows.tweet};
`;

export const GoitLogo = styled.img`
  position: absolute;
  top: ${(p) => p.theme.space.sm}px;
  left: ${(p) => p.theme.space.sm}px;
`;

export const TweetsLogo = styled.img`
  margin-top: ${(p) => p.theme.space.ml}px;
  margin-right: auto;
  margin-left: auto;
`;

export const Separator = styled.div`
  position: relative;
  width: ${(p) => p.theme.sizes.separatorWidth};
  height: ${(p) => p.theme.sizes.separatorHeight};
  margin-top: ${(p) => p.theme.space.s}px;
  background-color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) => p.theme.shadows.separator};
`;

export const AvatarFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(p) => p.theme.sizes.avatarFrame};
  height: ${(p) => p.theme.sizes.avatarFrame};
  padding: ${(p) => p.theme.space.xxxs}px;
  background-color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) => p.theme.shadows.avatarFrame};
  border-radius: ${(p) => p.theme.radii.circle};
  overflow: hidden;
  transform: translate(-50%, -50%);
`;

export const UserAvatar = styled.img`
  border-radius: ${(p) => p.theme.radii.circle};
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.space.xs}px;
  margin-top: ${(p) => p.theme.space.xl}px;

  font-size: ${(p) => p.theme.fontSize.l}px;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  line-height: ${(p) => p.theme.letterSpacing.regular};
  color: ${(p) => p.theme.colors.accent};
`;
