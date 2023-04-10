import React from "react";
import Image from "next/image";
import {
  Col3,
  Col4,
  Text1Bangk,
  Text2Bangk,
  TitleBangk,
  WrapperBangk,
} from "./styles";
import greenCoin from "../../assets/icons/green-coin.svg";
import { theme } from "@/styles/theme";
import { Button } from "../Button";

const Bangk = () => {
  return (
    <WrapperBangk>
      <Col3>
        <TitleBangk>
          BAAN
          <span
            style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold " }}
          >
            GGGGG<br></br>GGKKKKK!!!!
          </span>
        </TitleBangk>
        <Text1Bangk>
          El equivalente financiero<br></br> al <strong>Big Bang.</strong>
        </Text1Bangk>
        <Text2Bangk>
          Las posibilidades financieras están siempre ahí, simplemente no sabías
          dónde buscarlas y cómo compararlas.<br></br>
          <br></br>
          <br></br>
          <strong>Nuestro trabajo es hacerlo para ti!</strong> <br></br>
          <br></br>Buscamos la mejor opción en el mercado y... Bangk ! Ahorras
          en tu cuota<br></br>
          <br></br> Buscamos la mejor financiación y... Bangk ! Mejora tús
          flujos mensuales<br></br>
          <br></br> Buscamos el mejor aliado y...Bangk! Es Bangk!
        </Text2Bangk>
        <Button>Conoce más</Button>
      </Col3>
      <Col4>
        <Image alt="coin" src={greenCoin} />
      </Col4>
    </WrapperBangk>
  );
};

export default Bangk;
