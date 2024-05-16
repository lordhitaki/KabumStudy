import styled from "styled-components";

export const BoxInpt = styled.div`
  width: 90%;
  background-color: blue;
  position: relative;
  max-width: 500px;
  max-height: 31px;
  height: 100%;

  @media (max-width: 767px) {
    width: 40%;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    height: 80%;
  }
`;

export const BtnInput = styled.button`
  border: none;
  position: absolute;
  background-color: ${({ theme, colorButton }) =>
    theme.colors[colorButton || "transparent"]};
  top: -36%;
  right: -2%;
  width: 12vw;
  height: 12vw;
  max-width: 50px;
  max-height: 50px;

  @media (max-width: 767px) {
    top: -29%;
    width: 10vw;
    height: 10vw;
  }

  &:hover {
    background-color: ${({ theme, colorButton }) =>
      theme.colors[colorButton || "transparent"]};
    opacity: 1;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Image = styled.img`
  width: 10vw;
  height: 10vw;
  max-width: 55px;
  max-height: 55px;
  @media (max-width: 767px) {
    width: 11vw;
    height: 11vw;
  }
`;
