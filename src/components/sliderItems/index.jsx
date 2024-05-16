import React from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import * as Styled from "./styled";
import Card from "../card";

export default function Slideritems() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          boxShadow: "0px 2px 2px 4px rgba(0, 0, 0, 0.1)",
          color: "#000",
          borderRadius: "30px",
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          boxShadow: "0px 2px 2px 4px rgba(0, 0, 0, 0.1)",
          color: "#000",
          borderRadius: "30px",
        }}
      />
    ),
  };

  return (
    <Styled.BoxSlider className="slider-container">
      <Slider
        {...settings}
        style={{
          width: "100%",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </Styled.BoxSlider>
  );
}
