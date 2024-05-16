import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3e3e3;
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  align-items: center;
  padding: 0 !important;
`;

export const BoxDraw = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
export const BoxLogo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Logo = styled.img`
  width: 158;
  height: 64px;
`;

export const BarPromo = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.colors.tertiary};
  align-items: center;
  justify-content: space-between;
`;

export const BoxBody = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
`;

export const BoxSlick = styled.div`
  width: 90%;
  margin-top: 20px;
`;

export const MidSectionImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  margin-top: 100px;
`;

export const ImgMid = styled.img`
  width: 592px;
  height: 100%;
  margin-right: 20px;
  margin-left: 30px;
`;
