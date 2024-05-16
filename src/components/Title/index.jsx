import * as React from "react";
import * as Styled from "./styled";

export interface TitleProps {
  text: string;
  align?: "center" | "right" | "left";
  size?:
    | "micro"
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
    | "tertiary"
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

export default function Title({ text, ...rest }: TitleProps) {
  return (
    <>
      <Styled.Title {...rest}>{text}</Styled.Title>
    </>
  );
}
