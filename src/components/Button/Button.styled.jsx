import styled from "styled-components";

export const RegularButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(p) => p.theme.sizes.buttonWidth};
  height: ${(p) => p.theme.sizes.buttonHeight};
  padding-left: ${(p) => p.theme.space.ml}px;
  padding-right: ${(p) => p.theme.space.ml}px;
  margin-top: ${(p) => p.theme.space.m}px;
  margin-left: auto;
  margin-right: auto;

  border: none;
  border-radius: ${(p) => p.theme.radii.button};
  background-color: ${({ theme, active }) =>
    !active ? theme.colors.regularButtonBg : theme.colors.activeButtonBg};
  box-shadow: ${(p) => p.theme.shadows.button};

  font-family: ${(p) => p.theme.fonts.primary}, sans-serif;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.m}px;
  line-height: ${(p) => p.theme.letterSpacing.regular};
  color: ${(p) => p.theme.colors.primaryText};
  text-transform: uppercase;

  transition: background-color 250ms linear;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.regularButtonBg : theme.colors.activeButtonBg};
  }
`;
