import React from "react";
import { Header } from "@/components/Common/Header";
import { Container, Div, Text } from "@/styles/Common";
import { Col, WrapperQuote } from "@/styles/Quote";
import Image from "next/image";
import woman from "@/assets/img/woman-success.svg"
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import { useRouter } from "next/router";

const CreationSuceess = ({ isMobile }) => {
  const router = useRouter()

  const handleBangk = () => {
    router.push("/")
  }

  return (
    <Container style={{ background: isMobile && theme.colors.green }}>
      <Header isMobile={isMobile} />
      <WrapperQuote style={{ height: "100vh" }}>
        <Div justify="center" width="100%">
          <Col align="center">
            <Image alt="success" src={woman} />
            <Text
              size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h3}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
              mt="24px"
            >
              ¡Hemos recibido tu información!
              Dentro de las próximas <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>24 horas</span> estaremos analizando tu caso.
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
              mt="16px"
              mb="46px"
            >
              Pronto te notificaremos a tu correo para que conozcas tu cotización y los ahorros que puedes lograr con Bangk
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
              onClick={handleBangk}
            >
              Ir a Bangk.com
            </Button>
          </Col>
        </Div>
      </WrapperQuote>
    </Container>
  )
}

export default CreationSuceess