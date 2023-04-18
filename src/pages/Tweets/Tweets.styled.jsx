import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: ${(p) => p.theme.sizes.buttonHeight};
  padding-left: ${(p) => p.theme.space.ml}px;
  padding-right: ${(p) => p.theme.space.ml}px;
  margin-top: ${(p) => p.theme.space.m}px;
  margin-left: auto;
  margin-right: auto;

  border: none;
  border-radius: ${(p) => p.theme.radii.button};
  background-color: ${(p) => p.theme.colors.regularButtonBg};
  box-shadow: ${(p) => p.theme.shadows.button};

  font-family: ${(p) => p.theme.fonts.primary}, sans-serif;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.m}px;
  line-height: ${(p) => p.theme.letterSpacing.regular};
  color: ${(p) => p.theme.colors.primaryText};
  text-decoration: none;
  text-transform: uppercase;

  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.activeButtonBg};
  }
`;
