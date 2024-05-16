import React, { useState, useEffect } from "react";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Title from "../Title";
import * as Styled from "./styled";

export default function Card() {
  const [time, setTime] = React.useState(360000);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}D ${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <Styled.BoxCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <>
          <Styled.BoxDiscount>
            <Title text="16%" align="center" family="bold" color="white" />
            <ArrowDropDownIcon sx={{ color: "#fff", marginTop: "-10px" }} />
          </Styled.BoxDiscount>
          <Styled.BlueStrip>
            <BrightnessLowIcon sx={{ color: "#fff" }} />
            <Title
              text="Entrega Ninja"
              align="center"
              color="white"
              family="bold"
              marginLeft="nano"
            />
          </Styled.BlueStrip>
          <Styled.BoxStock>
            <Title text="APENAS" color="kabum" size="micro" align="center" />
            <Title
              text="60"
              color="kabum"
              size="nano"
              align="center"
              family="bold"
            />
            <Title text="UNID." color="kabum" size="micro" align="center" />
          </Styled.BoxStock>
        </>
      ) : (
        <Styled.BoxHide>
          <Title text="DESTAQUE" color="grayDark" />
          <Styled.BoxIconHide>
            <FavoriteBorderIcon sx={{ color: "#B6BBC2" }} />
            <ShoppingCartIcon sx={{ color: "#B6BBC2" }} />
          </Styled.BoxIconHide>
        </Styled.BoxHide>
      )}

      <Styled.BoxImgCard>
        <Styled.ImgCard src="/play.jpg" />
      </Styled.BoxImgCard>
      <Styled.BoxDescr>
        <Title
          text="Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Com Mídia Física"
          align="left"
          size="xxnano"
        />
      </Styled.BoxDescr>
      <Styled.BoxValue>
        <Title
          text="R$ 4.499,90"
          strikethrough="line-through"
          align="left"
          size="xnano"
        />
        <Title text="R$ 3.699,99" color="kabum" family="bold" size="small" />
        <Title text="À vista no PIX" align="left" size="xnano" />
      </Styled.BoxValue>
      {isHovered ? (
        <Styled.BoxTime>
          <Styled.BoxIcon>
            <ElectricBoltIcon sx={{ color: "#fff" }} />
          </Styled.BoxIcon>
          <Styled.BoxTimeText>
            <Title
              text={`TERMINA EM:`}
              color="kabum"
              size="nano"
              align="center"
            />
            <Title
              text={`${formatTime(time)}`}
              color="kabum"
              family="bold"
              size="xxnano"
              align="center"
            />
          </Styled.BoxTimeText>
        </Styled.BoxTime>
      ) : (
        <Styled.BoxTime2>
          <ShoppingCartIcon sx={{ color: "#fff" }} />
          <Styled.BoxTimeText2>
            <Title
              text={`COMPRAR`}
              color="white"
              size="xxnano"
              family="bold"
              align="center"
            />
          </Styled.BoxTimeText2>
        </Styled.BoxTime2>
      )}
    </Styled.BoxCard>
  );
}
