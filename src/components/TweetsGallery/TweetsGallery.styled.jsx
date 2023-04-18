import styled from "styled-components";

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.space.l}px;
  list-style: none;
`;
