import React from "react";
import * as Styled from "./styled";
import Title from "../Title";

export default function Btn({
  text,
  disabled,
  colorButton, // Cambié el nombre de la propiedad de colorBTN a colorButton
  color,
  border,
  icon,
  ...rest
}) {
  return (
    <Styled.Button
      {...rest}
      colorButton={colorButton}
      color={color}
      disabled={disabled}
      border={border}
    >
      <Title
        text={text}
        color={color || "white"}
        family="bold"
        size="xsmall"
        align="center"
      />
    </Styled.Button>
  );
}
