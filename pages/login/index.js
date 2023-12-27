import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import {
  BackgroundContainer,
  WrapperImage,
  WrapperForm,
  LoginCard,
} from "@/components/Login/styles";
import { Text, Row, Col } from "@/styles/Common";
import woman from "../../assets/img/surprised-woman-orange.svg";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import email from "../../assets/icons/email.svg";
import profile from "../../assets/icons/profile.svg";
import lock from "../../assets/icons/lock.svg";

const ContactUs = ({ isMobile, isTablet }) => {
  return (
    <BackgroundContainer>
      <WrapperImage>
        <Image
          alt="surprised-women"
          src={woman}
          width={isMobile ? 337 : 600}
          height={isMobile ? 336 : 600}
        />
      </WrapperImage>
      <WrapperForm>
        <LoginCard>
          <Image alt="logo" src={logo} width={120} height={45} />
          <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
            <Row gap="5px">
              <Text>Configura tu </Text>
              <Text color={theme.colors.orange}> Cuenta</Text>
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0">
              <TextField
                radius="1px"
                width="100%"
                height="48px"
                label="Correo"
                prefixIcon={
                  <Image alt="email" src={email} width={16} height={16} />
                }
              />
            </Row>
            <Row width="100%" justify="center">
              <TextField
                radius="1px"
                width="100%"
                height="48px"
                label="Nombre Completo"
                prefixIcon={
                  <Image alt="email" src={profile} width={16} height={16} />
                }
              />
            </Row>
            <Row width="100%" justify="center">
              <TextField
                radius="1px"
                width="100%"
                height="48px"
                label="Contraseña"
                type="password"
                prefixIcon={
                  <Image alt="email" src={lock} width={16} height={16} />
                }
              />
            </Row>
            <Row width="100%" justify="center">
              <TextField
                radius="1px"
                width="100%"
                height="48px"
                label="Confirmar Contraseña"
                type="password"
                prefixIcon={
                  <Image alt="email" src={lock} width={16} height={16} />
                }
              />
            </Row>
            <Row width="100%" justify="center">
              <Button width="325px">Crear tu cuenta</Button>
            </Row>
          </Col>
        </LoginCard>
      </WrapperForm>
    </BackgroundContainer>
  );
};

export default ContactUs;
