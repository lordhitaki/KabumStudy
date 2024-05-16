import * as React from "react";
import * as Styled from "./styled";

export interface InputProps {
  text: string;
  align?: "center" | "right" | "left";
  size?:
    | "nano"
    | "xnano"
    | "xxnano"
    | "small"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge"
    | "xhuge";
  marginTop?:
    | "nano"
    | "xnano"
    | "xxnano"
    | "small"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge";
  marginLeft?:
    | "nano"
    | "xnano"
    | "xxnano"
    | "small"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge";
  marginRight?:
    | "nano"
    | "xnano"
    | "xxnano"
    | "small"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge";
  marginBottom?:
    | "nano"
    | "xnano"
    | "xxnano"
    | "small"
    | "xsmall"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "huge";
  family?: "light" | "regular" | "bold";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "dark"
    | "darklight"
    | "white"
    | "grayDark"
    | "grayMedium"
    | "title"
    | "blue"
    | "pink"
    | "dimGray";
  strikethrough?: "line-through" | "none";
}

export default function InputAll({ text, colorButton, ...rest }: InputProps) {
  return (
    <Styled.BoxInpt>
      <Styled.Input {...rest}>{text}</Styled.Input>
      <Styled.BtnInput colorButton={colorButton}>
        <Styled.Image src="/kabumArrows.png" />
      </Styled.BtnInput>
    </Styled.BoxInpt>
  );
}
