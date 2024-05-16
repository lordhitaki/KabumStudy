import { styled } from "styled-components";

export const Box = styled.div``;

export const BoxList = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
  overflowy: "auto";
`;

export const BoxVerify = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

export const BoxButton = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: center;
`;
