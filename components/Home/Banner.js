import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import {
  Message,
  Title,
  Wrapper,
  WrapperImage,
  WrapperStar,
  WrapperText,
} from "./styles";
import man from "../../assets/img/surprised-man.svg";
import star from "../../assets/icons/orange-star.svg";
import text from "../../assets/icons/text.png";
import { theme } from "@/styles/theme";
import { Button } from "../Button";
import { wappLink } from "@/utilities/options";
import { useRouter } from "next/router";

const Banner = ({ isMobile }) => {
  const router = useRouter();

  const handleQuote = () => {
    router.push("/cotiza-tu-ahorro")
  }

  return (
    <Wrapper>
      <Row style={{ width: "100%" }}>
        <Col lg={16} md={14} xs={12}>
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
              width={isMobile ? 178 : 560}
              height={isMobile ? 14 : 44}
            />
          </WrapperText>
          <Button onClick={handleQuote}>Ahorra ya!</Button>
        </Col>
        <Col lg={8} md={10} xs={10} style={{ alignSelf: "center" }}>
          <WrapperStar>
            <Image alt="star" src={star} width={48} height={48} />
          </WrapperStar>
          <WrapperImage>
            <Image
              alt="surprised-man"
              src={man}
              width={isMobile ? 167 : 467}
              height={isMobile ? 167 : 466}
            />
          </WrapperImage>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Banner;
