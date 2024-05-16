import styled from "styled-components";

export interface TitleProps {
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
    | "dimGray"
    | "transparent";
  strikethrough?: "line-through" | "none";
}

export const Title = styled.p`
  font-size: ${(props) => props.theme.font.size[props.size || "small"]};
  color: ${(props) => props.theme.colors[props.color || "primary"]};
  margin-top: ${(props) =>
    props.marginTop ? props.theme.spacings[props.marginTop] : "0px"};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.theme.spacings[props.marginBottom] : "0px"};
  margin-left: ${(props) =>
    props.marginLeft ? props.theme.spacings[props.marginLeft] : "0px"};
  margin-right: ${(props) =>
    props.marginRight ? props.theme.spacings[props.marginRight] : "0px"};
  text-align: ${({ align }) => (align ? align : "left")};
  text-decoration-line: ${({ strikethrough }) =>
    strikethrough ? "line-through" : "none"};
  font-weight: ${(props) => props.theme.font[props.family || "regular"]};
`;
