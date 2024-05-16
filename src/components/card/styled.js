import styled from "styled-components";

export const BoxCard = styled.div`
  width: 265px;
  height: 390px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
`;

export const BoxImgCard = styled.div`
  display: flex;
  width: 90%;
  margin-top: 50px;
  border-radius: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const BoxDescr = styled.div`
  width: 90%;
  height: 60px;
  overflow: hidden;
  margin-top: 7px;
`;

export const ImgCard = styled.img`
  width: fit-content;
  height: 150px;
  border-radius: 5px;
`;

export const BoxValue = styled.div`
  width: 90%;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6500;
  width: 20%;
  height: 100%;
`;

export const BoxTime = styled.div`
  display: flex;
  position: absolute;
  width: 95%;
  height: 40px;
  bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ff6500;
`;

export const BoxTimeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const BoxTime2 = styled.div`
  display: flex;
  background-color: #ff6500;
  position: absolute;
  width: 95%;
  height: 40px;
  bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ff6500;
  justify-content: center;
  align-items: center;
`;

export const BoxTimeText2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxDiscount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-color: #ff6500;
  position: absolute;
  top: 7px;
  left: 7px;
`;
export const BoxStock = styled.div`
  display: flex;
  flex-direction: column;
  width: 43px;
  height: 43px;
  border-radius: 5px;
  border: 1px solid #ff6500;
  position: absolute;
  top: 7px;
  left: 57px;
  align-items: center;
  justify-content: center;
`;

export const BlueStrip = styled.div`
  display: flex;
  background: rgb(0, 96, 177);
  width: 220px;
  height: 40px;
  transform: rotate(40deg);
  position: absolute;
  top: 38px;
  left: 90px;
  align-items: center;
  justify-content: center;
`;

export const BoxIconHide = styled.div``;

export const BoxHide = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 10px;
`;
