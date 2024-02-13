import React, { useState } from "react";
import { Container, WrapperQuote } from "@/components/ViewQuote/styles";
import Banner from "@/components/ViewQuote/Banner";
import { WrapperInfo } from "@/components/ViewQuote/styles";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import logo from "@/assets/icons/white-logo.png";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import emailIcon from "../../assets/icons/email.svg";
import { Button } from "@/components/Common/Button";
import useReSendCode from "@/hooks/QuoteSavings/useReSendCode";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setValidCode } from "@/store/balance";

const ValidateIdentity = ({ isMobile, isTablet }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const reSendCode = useReSendCode();
  const [email, setEmail] = useState("")

  const handleEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleSend = () => {
    reSendCode.reset();
    reSendCode.mutate(email, {
      onSuccess: (res) => {
        dispatch(setValidCode(res.data.code))
        router.push(`/validacion-identidad?source=quote`);
      },
      onError: (err) => {
        err.response.data.map((error) => {
          toast.error(error);
        });
      },
    });
  }

  return (
    <Container>
      <WrapperQuote isMobile={isMobile}>
        <Div justify={isMobile && "center"} height="100%">
          {!isMobile && !isTablet && <Banner />}

          <WrapperInfo justifyMobile={"center"} p="96px 48px 48px 48px">
            <Div width="100%" justify="center" p="24px 0">
              <Image
                alt="logo"
                src={logo}
                height={isMobile ? 32 : 45}
                width={isMobile ? 85 : 120}
              />
            </Div>
            <Text
              size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
            >
              ¿Quién solicito la cotización?
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
              mt="8px"
            >
              Ingresa el correo que registraste en tu solicitud para enviarte
              un código de seguridad y conocer tu cotización.
            </Text>
            <Div m="26px 0 0 0" direction="column" gap="46px">
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
              />
              <Div width="100%" justify="center">
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
          </WrapperInfo>
        </Div>
      </WrapperQuote>
    </Container>
  );
}

export default ValidateIdentity;