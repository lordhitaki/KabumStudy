import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: blue;
`;

export const BoxCreate = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 4%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 11vh;
  padding: 0 10vw;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
    & > ${BoxCreate} {
      display: none;
    }
  }
`;

export const BoxDraw = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Logo = styled.img`
  width: 18vw;
  height: auto;
  max-width: 120px;
`;

export const BoxText = styled.div``;

export const BoxTextPart = styled.div`
  display: flex;
`;

export const Link = styled.a`
  font-size: 0.8vw;
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

export const BoxFastLink = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BtIcon = styled.button`
  border: none;
  background-color: ${({ theme, colorButton }) =>
    theme.colors[colorButton || "transparent"]};
  &:hover {
    background-color: ${({ theme, colorButton }) =>
      theme.colors[colorButton || "transparent"]};
    opacity: 1;
  }

  &:active {
    transform: translateY(1px);
  }
`;
