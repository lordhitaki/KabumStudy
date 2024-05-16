import styled from "styled-components";

export const Button = styled.button`
  width: 90%;
  color: ${({ theme, color }) => theme.colors[color || "transparent"]};
  background-color: ${({ theme, colorButton }) =>
    theme.colors[colorButton || "transparent"]};
  border-radius: 5px;
  height: 45px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, colorButton }) =>
      theme.colors[colorButton || "transparent"]};
    opacity: 0.8;
  }

  &:active {
    transform: translateY(1px);
  }
`;
