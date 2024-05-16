import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CelebrationIcon from "@mui/icons-material/Celebration";
import InventoryIcon from "@mui/icons-material/Inventory";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PixIcon from "@mui/icons-material/Pix";

import * as Styled from "./styled";
import Btn from "../button";
import Title from "../Title";

export default function Draw() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const click = async () => {
    console.log("clicou");
  };

  return (
    <Styled.Box>
      <Button onClick={toggleDrawer(true)}>
        <FormatAlignJustifyIcon color="info" />
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Styled.BoxVerify>
          <Title text="Olá. Faça seu login" size="medium" color="white" />
        </Styled.BoxVerify>
        <Styled.BoxList>
          <List>
            {[
              "Minha conta",
              "Meus dados",
              "Meus pedidos",
              "Avaliações",
              "Protocolos e atendimento",
              "Favoritos",
              "Sorteio",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 7 === 0 ? (
                      <HomeIcon />
                    ) : index % 7 === 1 ? (
                      <PersonIcon />
                    ) : index % 7 === 2 ? (
                      <ShoppingBasketIcon />
                    ) : index % 7 === 3 ? (
                      <ThumbUpAltIcon />
                    ) : index % 7 === 4 ? (
                      <QuestionAnswerIcon />
                    ) : index % 7 === 5 ? (
                      <FavoriteIcon />
                    ) : (
                      <CardGiftcardIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Monte seu PC", "Oferta do dia", "Lançamentos", "OpenBox"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{ color: "white" }}>
                      {index % 4 === 0 ? (
                        <ComputerIcon />
                      ) : index % 4 === 1 ? (
                        <LocalOfferIcon />
                      ) : index % 4 === 2 ? (
                        <CelebrationIcon />
                      ) : (
                        <InventoryIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} style={{ color: "white" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Mais Procurados", "Acabaram de chegar"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 2 === 0 ? (
                      <ModeStandbyIcon />
                    ) : (
                      <ElectricBoltIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Seja Prime", "Baixe o App", "Gift Card"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 3 === 0 ? (
                      <StarBorderPurple500Icon />
                    ) : index % 3 === 1 ? (
                      <PixIcon />
                    ) : (
                      <CardGiftcardIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Styled.BoxList>
        <Styled.BoxButton>
          <Btn text={"LOGIN"} colorButton={"kabum"} onClick={click} />
          <Btn text={"CADASTRO"} />
        </Styled.BoxButton>
      </Drawer>
    </Styled.Box>
  );
}
