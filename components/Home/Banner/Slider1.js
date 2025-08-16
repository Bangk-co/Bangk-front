import React from "react";
import {
  Message,
  Title,
  Wrapper,
  WrapperImage,
  WrapperStar,
  WrapperText,
} from "../styles";
import { Div } from "@/styles/Common";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Col } from "antd";
import man from "@/assets/img/surprised-man.svg";
import star from "@/assets/icons/orange-star.svg";
import text from "@/assets/icons/text.png";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

export const Slider1 = ({ isMobile }) => {
  const router = useRouter();

  const handleQuote = () => {
    router.push("/cotiza-tu-ahorro");
  };

  return (
    <Wrapper>
      <Div
        style={{ width: "100%" }}
        direction={isMobile ? "column" : "row"}
        justify={!isMobile && "space-between"}
      >
        <Div direction="column">
          <Title>Misma cobertura</Title>
          <Title color={theme.colors.yellow}>Menos cuota!</Title>
          <Message>
            Buscamos el mejor precio posible para el seguro de vida de tus
            deudas y de incendio y terremoto, así ahorras en la cuota mensual
            que pagas al banco sin cambiar la cobertura
          </Message>
          <WrapperText>
            <Image
              alt="text"
              src={text}
              width={isMobile ? 250 : 560}
              height={isMobile ? 19 : 44}
            />
          </WrapperText>
          <Button
            height={isMobile && "25px"}
            width={isMobile && "150px"}
            size={isMobile && theme.fonts.size.default2}
            onClick={handleQuote}
          >
            Ahorra ya!
          </Button>
        </Div>
        <Col lg={8} md={10} xs={10} style={{ alignSelf: "center" }}>
          <WrapperStar>
            <Image alt="star" src={star} width={48} height={48} />
          </WrapperStar>
          <WrapperImage>
            <Image
              alt="surprised-man"
              src={man}
              width={isMobile ? 140 : 413}
              height={isMobile ? 140 : 412}
            />
          </WrapperImage>
        </Col>
      </Div>
    </Wrapper>
  );
};
