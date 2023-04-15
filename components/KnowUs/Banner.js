import React from "react";
import { Text, WrapperBanner } from "./styles";
import image from "../../assets/img/green-background.svg";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";

const Banner = () => {
  return (
    <WrapperBanner image={image}>
      <Div>
        <Text>
          Buscamos la mejor opción en el mercado y...{" "}
          <strong>Bangk! Ahorras en tu cuota</strong>
          <br></br>
          <br></br>
          Buscamos la mejor financiación y...{" "}
          <strong>Bangk! Mejoras tú flujo de caja mensual</strong> <br></br>
          <br></br> Buscamos el mejor aliado y...{" "}
          <strong>
            <span style={{ color: theme.colors.orange }}>Bangk! Es Bangk!</span>
          </strong>
        </Text>
      </Div>
    </WrapperBanner>
  );
};

export default Banner;
