import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxItem = styled.div`
  height: 23px;
  position: relative;
  margin-left: 2px;
  &:hover {
    background-color: ${(props) => props.theme.colors.kabum};
  }
  &:first-child {
    background-color: ${(props) => props.theme.colors.kabum};
  }
`;

export const BtnItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxFirstDp = styled.div`
  max-height: 500px;
  width: 240px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 265px;
  height: 450px;
`;

export const BoxImg = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtDp = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.whiteDark};
  }
  padding: 7px;
`;

export const BoxSecondDp = styled.div`
  max-height: 500px;
  width: 240px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
`;
