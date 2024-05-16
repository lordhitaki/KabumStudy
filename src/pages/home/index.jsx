import React, { useState, useEffect } from "react";

import Header from "../../components/header";
import Banner from "../../components/banner";

import * as Styled from "./styled";
import Menu from "../../components/menu";
import Title from "../../components/Title";
import Slideritems from "../../components/sliderItems";

export default function Home() {
  const [time, setTime] = useState(360000);

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
    <Styled.Container>
      <Header />
      <Menu />
      <Styled.Body>
        <Banner />
        <Styled.BarPromo>
          <Title
            text="PROMO NINJA"
            color="white"
            family="bold"
            size="large"
            marginLeft="small"
          />
          <Title
            text={`TERMINA EM ${formatTime(time)}`}
            color="white"
            family="bold"
            size="large"
            marginRight="small"
          />
        </Styled.BarPromo>
        <Styled.BoxBody>
          <Styled.BoxSlick>
            <Slideritems />
          </Styled.BoxSlick>
        </Styled.BoxBody>
        <Styled.MidSectionImg>
          <Styled.ImgMid src="/img1.png" />
          <Styled.ImgMid src="/img2.png" />
        </Styled.MidSectionImg>
      </Styled.Body>
    </Styled.Container>
  );
}
