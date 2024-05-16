import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import * as Styled from "./styled";
import Title from "../Title";

export default function Menu() {
  const [checked, setChecked] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [selectedDepartment, setSelectedDepartment] = React.useState("");

  console.log(selectedDepartment);
  const handleMouseEnter = () => {
    setChecked(true);
  };

  const handleMouseLeave = () => {
    setChecked(false);
    setVisible(false);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (department) => {
    setSelectedDepartment(department);
    setVisible(true);
  };

  const ItemsDepartamentos = {
    Hardware: (
      <Styled.BtDp>
        <Title text="Hardware" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Periféricos: (
      <Styled.BtDp>
        <Title text="Perifericos" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Computadores: (
      <Styled.BtDp>
        <Title text="Computadores" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Games: (
      <Styled.BtDp>
        <Title text="Games" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Celular: (
      <Styled.BtDp>
        <Title text="Celular & Smarthphone" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    TV: (
      <Styled.BtDp>
        <Title text="TV" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Audio: (
      <Styled.BtDp>
        <Title text="Áudio" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Projetores: (
      <Styled.BtDp>
        <Title text="Projetores" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Espaço: (
      <Styled.BtDp>
        <Title text="Espaço" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Escritorio: (
      <Styled.BtDp>
        <Title text="Escritorio" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Casa: (
      <Styled.BtDp>
        <Title text="Casa" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Tablets: (
      <Styled.BtDp>
        <Title text="Tablet" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Cameras: (
      <Styled.BtDp>
        <Title text="Cameras" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Energia: (
      <Styled.BtDp>
        <Title text="Energia" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Conectividade: (
      <Styled.BtDp>
        <Title text="Conectividade" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Geek: (
      <Styled.BtDp>
        <Title text="Geek" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Eletrodomesticos: (
      <Styled.BtDp>
        <Title text="Eletrodomesticos" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Eletroportateis: (
      <Styled.BtDp>
        <Title text="Eletroportateis" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Ar: (
      <Styled.BtDp>
        <Title text="Ar" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Automação: (
      <Styled.BtDp>
        <Title text="Automação" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Telefonia: (
      <Styled.BtDp>
        <Title text="Telefonia" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Robotica: (
      <Styled.BtDp>
        <Title text="Robotica" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Serviços: (
      <Styled.BtDp>
        <Title text="Serviços" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Beneficio: (
      <Styled.BtDp>
        <Title text="Beneficio" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Moda: (
      <Styled.BtDp>
        <Title text="Moda" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Ferramentas: (
      <Styled.BtDp>
        <Title text="Ferramentas" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
    Cuidados: (
      <Styled.BtDp>
        <Title text="Cuidados" size="xxnano" />
        <ArrowForwardIosIcon
          style={{ fontSize: 14, color: "black", fontWeight: "normal" }}
        />
      </Styled.BtDp>
    ),
  };

  const icon = (
    <Paper
      sx={{
        position: "absolute",
        zIndex: 1,
        maxHeight: "450px",
        backgroundColor: "white",
        marginTop: 3,
        left: 0,
        display: "flex",
        flexDirection: "row",
      }}
      elevation={4}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.BoxFirstDp>
        <Styled.BtDp onClick={() => handleClick("Hardware")}>
          <Title text="Hardware" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Periféricos")}>
          <Title text="Periféricos" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Computadores")}>
          <Title text="Computadores" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Games")}>
          <Title text="Games" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Celular")}>
          <Title text="Celular & Smartphone" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("TV")}>
          <Title text="TV" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Audio")}>
          <Title text="Áudio" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Projetores")}>
          <Title text="Projetores" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Espaço")}>
          <Title text="Espaço Gamer" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Escritorio")}>
          <Title text="Escritório" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Casa")}>
          <Title text="Casa Inteligente" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Tablets")}>
          <Title text="Tablets, Ipads e E-readers" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Cameras")}>
          <Title text="Câmeras e Drones" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Energia")}>
          <Title text="Energia" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Conectividade")}>
          <Title text="Conectividade" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Geek")}>
          <Title text="Geek" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Eletrodomesticos")}>
          <Title text="Eletrodomésticos" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Eletroportateis")}>
          <Title text="Eletroportáteis" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Ar")}>
          <Title text="Ar e Ventilação" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Automação")}>
          <Title text="Automação" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Telefonia")}>
          <Title text="Telefonia Fixa" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Robotica")}>
          <Title text="Robótica" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Serviços")}>
          <Title text="Serviços Digitais" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Beneficio")}>
          <Title text="Benefício" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Moda")}>
          <Title text="Moda" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Ferramentas")}>
          <Title text="Ferramentas" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
        <Styled.BtDp onClick={() => handleClick("Cuidados")}>
          <Title text="Cuidados Pessoais" size="xxnano" />
          <ArrowForwardIosIcon
            style={{ fontSize: "14", color: "black", fontWeight: "normal" }}
          />
        </Styled.BtDp>
      </Styled.BoxFirstDp>
      {visible ? (
        <Styled.BoxFirstDp>
          <Styled.BtnItem href="#">
            <Title
              text={`Veja tudo de ${selectedDepartment}`}
              color="tertiary"
            />
          </Styled.BtnItem>
          {visible && ItemsDepartamentos[selectedDepartment]}
        </Styled.BoxFirstDp>
      ) : null}
      <Styled.BoxImg>
        <Styled.Img src="/imgPromo.jpeg" size="xxnano" />
      </Styled.BoxImg>
    </Paper>
  );

  return (
    <Styled.Container>
      <Styled.BoxItem className="department">
        <Box sx={{ height: "100%", display: "flex" }}>
          <FormControlLabel
            control={
              <Title
                text={
                  checked ? (
                    <Styled.BoxIcon>
                      DEPARTAMENTOS
                      <KeyboardArrowUpIcon />
                    </Styled.BoxIcon>
                  ) : (
                    <Styled.BoxIcon>
                      DEPARTAMENTOS
                      <KeyboardArrowDownIcon />
                    </Styled.BoxIcon>
                  )
                }
                family="bold"
                color="white"
                marginLeft="xsmall"
                marginRight="xxnano"
                checked={checked}
                onChange={handleChange}
              />
            }
            onMouseEnter={handleMouseEnter}
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Fade in={checked}>{icon}</Fade>
          </Box>
        </Box>
      </Styled.BoxItem>

      <Styled.BoxItem>
        <Title
          text="MONTE SEU PC"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="OFERTA DO DIA"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="CUPONS"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="ENTREGAS FLASH"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="OPENBOX"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="BAIXE O APP"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="PRIME NINA"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="VENDA NO KANUM!"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
      <Styled.BoxItem>
        <Title
          text="MULHERES NO GAME"
          marginLeft="xxnano"
          marginRight="xxnano"
          family="bold"
          color="white"
        />
      </Styled.BoxItem>
    </Styled.Container>
  );
}
