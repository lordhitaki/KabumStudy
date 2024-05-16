import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width: max-content;
  height: max-content;
`;

export const Dot = styled.div`
  width: 60px;
  height: 10px;
  background-color: ${({ isActive }) => (isActive ? "blue" : "gray")};
  border-radius: 5px;
  cursor: pointer;
`;
