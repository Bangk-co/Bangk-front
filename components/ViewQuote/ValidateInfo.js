import React from "react";
import { WrapperInfo, WrapperQuote } from "./styles";
import { Div, Text } from "@/styles/Common";
import Banner from "./Banner";
import Image from "next/image";
import logo from "@/assets/icons/white-logo.png";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { theme } from "@/styles/theme";
import emailIcon from "../../assets/icons/email.svg";

export const ValidateInfo = ({ email, handleSend, reSendCode }) => {
  return (
    <WrapperQuote>
      <Div height="100%">
        <Banner />

        <WrapperInfo p="96px 48px 48px 48px">
          <Div width="100%" justify="center" p="24px 0">
            <Image
              alt="logo"
              src={logo}
              height={45}
              width={120}
            />
          </Div>
          <Text
            size={theme.fonts.size.h3}
            color={theme.colors.white}
            font={theme.fonts.family.primaryBold}
          >
            ¿Quién solicito la cotización?
          </Text>
          <Div m="26px 0 0 0" direction="column" gap="46px">
            <TextField
              label={"Correo electrónico*"}
              placeholder={"Escribir correo electrónico"}
              labelFont={theme.fonts.family.primaryMedium}
              labelColor={theme.colors.white}
              labelSize={theme.fonts.size.sm}
              labelWeight={theme.fonts.weight.medium}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              width={"100%"}
              height={"40px"}
              radius={"4px"}
              background={theme.colors.primary25}
              border={theme.colors.primary25}
              prefixIcon={
                <Image alt="email" src={emailIcon} width={16} height={16} />
              }
              value={email}
              disabled
            />
            <Div width="100%" justify="center">
              <Button
                font={theme.fonts.family.primaryBold}
                labelColor={theme.colors.green900}
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
        </WrapperInfo>
    </Div>
  </WrapperQuote>
  )
}