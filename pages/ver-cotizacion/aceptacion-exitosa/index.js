import React from "react";
import { Header } from "@/components/Common/Header";
import { Div, Text } from "@/styles/Common";
import { Col, Container, WrapperQuote } from "@/styles/Quote";
import Image from "next/image";
import woman from "@/assets/img/woman-accept.svg";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import { useRouter } from "next/router";

const CreationSuceess = ({ isMobile }) => {
  const router = useRouter();

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        <Div justify="center" width="100%">
          <Col align="center">
            <Image
              alt="success"
              src={woman}
              width={isMobile ? 318.19 : 420}
              height={isMobile ? 318.68 : 420.64}
            />
            <Text
              size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h4s}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
              mt="24px"
            >
              ¡Excelente decisión! Estas a pocos pasos de tu nueva póliza
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
              mt="16px"
              mb="46px"
            >
              Para continuar con la emisión de tu nuevo seguro es necesario
              completar algunos datos
            </Text>
            <Button
              font={theme.fonts.family.primaryBold}
              background={theme.colors.yellow500}
              hover={theme.colors.yellow500}
              borderHover={theme.colors.yellow500}
              labelColor={theme.colors.green900}
              size={theme.fonts.size.default2}
              width={"300px"}
              mobileWidth={"100%"}
              height={"40px"}
              radius={"40px"}
            >
              Continuar mi solicitud
            </Button>
          </Col>
        </Div>
      </WrapperQuote>
    </Container>
  );
};

export default CreationSuceess;
