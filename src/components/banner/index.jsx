import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as Styled from "./styled";

export default function Banner() {
  const sliderRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 86) {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
            setActiveDotIndex(0);
          }
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, NI) => {
      setActiveDotIndex(NI);
      setProgress(0);
    },
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "160px",
          }}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{
                marginLeft: 40,
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveDotIndex(index);
                if (sliderRef && sliderRef.current) {
                  sliderRef.current.slickGoTo(index);
                }
              }}
            >
              <Styled.Dot>
                {activeDotIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${progress}px `,
                      maxWidth: "60px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: "blue",
                      transition: "width 1s linear",
                      marginBottom: 0,
                    }}
                  />
                )}
              </Styled.Dot>
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <Styled.Container>
      <Slider ref={sliderRef} {...settings}>
        <Styled.Img src="/banner.png" />
        <Styled.Img src="/banner2.png" />
        <Styled.Img src="/banner2.png" />
        <Styled.Img src="/banner2.png" />
      </Slider>
    </Styled.Container>
  );
}
