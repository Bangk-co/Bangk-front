import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import { useRouter } from "next/router";
import { WrapperCarBangk } from "./styles";
import star from "@/assets/img/starOrange.png";
import car from "@/assets/img/carIlustration.png";
import { Button } from "../Common/Button";

const CarBangk = ({ isMobile }) => {
  const router = useRouter();

  const insuranceCards = [
    {
      secureColor: theme.colors.gray100,
      background: theme.colors.green,
      title: "POR KILÓMETROS",
      titleColor: theme.colors.orange500,
      buttonColor: theme.colors.yellow,
      buttonText: theme.colors.green,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/seguro-por-kilometro");
      },
    },
    {
      secureColor: theme.colors.gray100,
      background: theme.colors.orange500,
      title: "TODO RIESGO",
      titleColor: theme.colors.green,
      buttonColor: theme.colors.green,
      buttonText: theme.colors.yellow,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/todo-riesgo");
      },
    },
    {
      secureColor: theme.colors.white,
      background: theme.colors.yellow,
      title: "DAÑOS A TERCEROS",
      titleColor: theme.colors.green,
      buttonColor: theme.colors.orange500,
      buttonText: theme.colors.green,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/danos-a-terceros");
      },
    },
    {
      secureColor: theme.colors.green,
      background: theme.colors.light4,
      title: "BANGK-MOTOS",
      titleColor: theme.colors.orange500,
      buttonColor: theme.colors.orange500,
      buttonText: theme.colors.green,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/bangk-motos");
      },
    },
  ];

  return (
    <Div direction={isMobile ? "column" : "row"} width="100%">
      <WrapperCarBangk isMobile={isMobile}>
        <Row width="100%" align="left">
          <Button
            width={"200px"}
            font={theme.fonts.family.primaryBold}
            size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
            background={theme.colors.green}
            labelColor={theme.colors.white}
            border={"transparent"}
            hover={theme.colors.green}
            borderHover={theme.colors.green}
            onClick={() => {
              router.push("/ahorra-en-tus-seguros/car-bangk");
            }}
          >
            Quiero saber{" "}
            <span
              style={{
                color: theme.colors.orange,
                marginLeft: "5px",
              }}
            >
              {" "}
              mas!
            </span>
          </Button>
        </Row>
        <Image
          alt="car"
          src={car}
          width={isMobile ? 300 : "100%"}
          height={isMobile ? 193 : "100%"}
        />
        <Text
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
          font={theme.fonts.family.primaryBold}
          mb="10px"
          align="center"
        >
          CAR-
          <span
            style={{
              color: theme.colors.green,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            BANGK!
          </span>
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
          align="center"
          style={{ width: "80%" }}
        >
          En Bangk queremos revolucionarlo todo. ¡Incluso la forma en que te
          mueves!
        </Text>
      </WrapperCarBangk>

      <Col
        p={isMobile ? "60px 40px" : "80px 100px"}
        width={isMobile ? "100%" : "50%"}
      >
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primaryBold}
          style={{ width: "80%" }}
        >
          Conoce
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="20px"
          style={{ lineHeight: 1.1 }}
        >
          Nuestros seguros
        </Text>
        {insuranceCards.map((insurance, index) => (
          <Div
            key={index}
            width={"100%"}
            height={"auto"}
            p="20px 40px"
            background={insurance.background}
            radius="20px"
            direction="column"
            m="0 0 20px 0"
            style={{ position: "relative" }}
          >
            <Text
              color={insurance.secureColor}
              size={
                isMobile ? theme.fonts.size.default2 : theme.fonts.size.default
              }
              font={theme.fonts.family.primary}
              mb={isMobile ? "25px" : "14px"}
            >
              SEGURO
            </Text>
            <Text
              color={insurance.titleColor}
              size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.h2}
              font={theme.fonts.family.primaryBold}
              mb="30px"
              dangerouslySetInnerHTML={{
                __html: insurance.title,
              }}
            />
            <Button
              height={"40px"}
              font={theme.fonts.family.primaryBold}
              size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
              background={insurance.buttonColor}
              labelColor={insurance.buttonText}
              border={"transparent"}
              hover={insurance.buttonColor}
              borderHover={insurance.buttonColor}
              onClick={insurance.onClick}
              style={{
                position: "absolute",
                top: "20px", // Ajusta la distancia desde el borde superior
                right: "20px", // Ajusta la distancia desde el borde derecho
              }}
            >
              Conoce más
            </Button>
          </Div>
        ))}
      </Col>
    </Div>
  );
};

export default CarBangk;
