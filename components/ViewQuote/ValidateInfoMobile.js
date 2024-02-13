import React, { useState } from "react";
import { WrapperInfo, WrapperQuote } from "./styles";
import { Div, Text } from "@/styles/Common";
import Banner from "./Banner";
import Image from "next/image";
import logo from "@/assets/icons/white-logo.png";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { theme } from "@/styles/theme";
import emailIcon from "../../assets/icons/email.svg";

export const ValidateInfoMobile = ({ isMobile, email, handleEmail, handleSend, reSendCode }) => {
  const [currentView, setCurrentView] = useState(1)

  const handleGo = () => {
    setCurrentView(2)
  }

  return (
    <>
      {currentView === 1 && (
        <Banner isMobile={isMobile} handleGo={handleGo} />
      )}

      {currentView === 2 && (
        <WrapperInfo justifyMobile={"center"} p="96px 48px 48px 48px">
          <Div direction="column" height="100%" justify="space-between">
            <Div direction="column">
              <Div width="100%" justify="center" p="24px 0">
                <Image
                  alt="logo"
                  src={logo}
                  height={32}
                  width={85}
                />
              </Div>
              <Text
                size={theme.fonts.size.h5}
                color={theme.colors.white}
                font={theme.fonts.family.primaryBold}
              >
                ¿Quién solicito la cotización?
              </Text>
              <Text
                size={theme.fonts.size.sm}
                color={theme.colors.white}
                mt="8px"
              >
                Ingresa el correo que registraste en tu solicitud para enviarte
                un código de seguridad y conocer tu cotización.
              </Text>
              <TextField
                label={"Correo electrónico*"}
                placeholder={"Escribir correo electrónico"}
                labelFont={theme.fonts.family.primaryMedium}
                labelColor={theme.colors.white}
                labelSize={theme.fonts.size.sm}
                labelWeight={theme.fonts.weight.medium}
                width={"100%"}
                height={"40px"}
                radius={"4px"}
                background={theme.colors.primary25}
                border={theme.colors.primary25}
                prefixIcon={
                  <Image alt="email" src={emailIcon} width={16} height={16} />
                }
                value={email}
                onChange={handleEmail}
                style={{ marginTop: "26px" }}
              />
            </Div>
            <Div>
              <Div width="100%" justify="center" m="46px 0 0 0">
                <Button
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.default2}
                  background={theme.colors.yellow500}
                  hover={theme.colors.yellow500}
                  borderHover={theme.colors.yellow500}
                  width={"300px"}
                  height={"40px"}
                  disabled={email === "" || reSendCode.isLoading}
                  onClick={handleSend}
                >
                  Enviar código
                </Button>
              </Div>
            </Div>
          </Div>
        </WrapperInfo>
      )}
    </>
  )
}