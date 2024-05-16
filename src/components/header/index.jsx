import * as React from "react";

import Draw from "../../components/drawer";
import InputAll from "../../components/input";
import Title from "../Title";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import * as Styled from "./styled";

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.BoxDraw>
          <Draw />
        </Styled.BoxDraw>
        <Styled.BoxLogo>
          <Styled.Logo src="/kabum.png" />
        </Styled.BoxLogo>
        <InputAll />
        <Styled.BoxCreate>
          <AccountCircleIcon
            sx={{
              color: "#C4C4C4",
              width: "3vw",
              height: "auto ",
              maxWidth: "36px",
            }}
          />
          <Styled.BoxText>
            <Styled.BoxTextPart>
              <Title
                text="Faça "
                marginRight="xxnano"
                marginLeft="xxnano"
                color="secondary"
              ></Title>
              <Styled.Link href="#">LOGIN </Styled.Link>
              <Title
                text="ou"
                marginLeft="xxnano"
                marginRight="xxnano"
                color="secondary"
              />
            </Styled.BoxTextPart>
            <Styled.BoxTextPart>
              <Title
                text="crie seu"
                marginLeft="xxnano"
                marginRight="xxnano"
                color="secondary"
              />
              <Styled.Link href="">CADASTRO</Styled.Link>
            </Styled.BoxTextPart>
          </Styled.BoxText>
        </Styled.BoxCreate>
        <Styled.BoxFastLink>
          <Styled.BtIcon>
            <AccessibilityIcon
              sx={{
                color: "#C4C4C4",
                width: "3vw",
                height: "auto ",
                maxWidth: "30px",
              }}
            />
          </Styled.BtIcon>
          <Styled.BtIcon>
            <SupportAgentIcon
              sx={{
                color: "#C4C4C4",
                width: "3vw",
                height: "auto ",
                maxWidth: "30px",
              }}
            />
          </Styled.BtIcon>
          <Styled.BtIcon>
            <FavoriteIcon
              sx={{
                color: "#C4C4C4",
                width: "3vw",
                height: "auto ",
                maxWidth: "30px",
              }}
            />
          </Styled.BtIcon>
          <Styled.BtIcon>
            <ShoppingCartIcon
              sx={{
                color: "#C4C4C4",
                width: "3vw",
                height: "auto ",
                maxWidth: "30px",
              }}
            />
          </Styled.BtIcon>
        </Styled.BoxFastLink>
      </Styled.Header>
    </Styled.Container>
  );
}
