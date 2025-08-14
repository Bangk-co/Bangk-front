import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Header } from "@/components/Common/Header";
import { Div, Text } from "@/styles/Common";
import { Container, WrapperQuote } from "@/styles/Quote";
import woman from "@/assets/img/woman-success.svg";
import wappIcon from "@/assets/icons/whatsapp-original.svg";
import { theme } from "@/styles/theme";
import { resetInitData, setOtpDate } from "@/store/balance";
import { BackButton } from "@/components/Quote/BackButton";
import { Button } from "@/components/Common/Button";
import { setSelectedRequestInformation } from "@/store/requests";
import { useRouter } from "next/router";
import { whatsappNumber } from "@/utilities/helpers";

const ContinueQuoting = ({ isMobile }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleWapp = () => {
    const phoneNumber = whatsappNumber;
    const message = 'Hola! quiero cotizar mi seguro de vida deudores';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');

    dispatch(resetInitData());
    dispatch(setOtpDate(null));
  };

  const handleBack = () => {
    router.push("/");
    dispatch(resetInitData());
    dispatch(setSelectedRequestInformation({}));
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote style={{ minHeight: "calc(100vh - 66px)" }}>
        {!isMobile && (
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        )}
        <Div
          direction={isMobile ? "column" : "row"}
          height={isMobile ? "100%" : "80vh"}
          gap={isMobile ? "48px" : "0"}
        >
          <Div
            width={isMobile ? "100%" : "40%"}
            p={isMobile ? "0px" : "0 82px"}
            style={{ alignSelf: "center" }}
          >
            <Image alt="woman" src={woman} width={isMobile ? 314 : 421} />
          </Div>
          <Div
            direction="column"
            width={isMobile ? "100%" : "60%"}
            align="center"
            gap="12px"
            style={{ alignSelf: "center" }}
          >
            <Text
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h4}
              weight={theme.fonts.weight.bold}
              align="center"
              style={{ width: isMobile ? "100%" : "720px" }}
            >
              Continúa con el proceso de cotización de tu seguro haciendo clic
              aquí para comunicarte con uno de nuestros asesores.
            </Text>
            <Image
              alt="wapp"
              src={wappIcon}
              width={"48px"}
              onClick={handleWapp}
              style={{ cursor: "pointer" }}
            />
          </Div>
        </Div>
        {isMobile && (
          <Div m="64px 0 0 0">
            <Button
              font={theme.fonts.family.primaryBold}
              background={theme.colors.green900}
              border={theme.colors.yellow500}
              hover={theme.colors.terciary50}
              borderHover={theme.colors.yellow500}
              colorHover={theme.colors.green900}
              labelColor={theme.colors.yellow500}
              size={theme.fonts.size.default2}
              borderHeight={"3px solid"}
              width={"100%"}
              mobileWidth={"56px"}
              height={"40px"}
              onClick={handleBack}
            >
              Volver a Bangk.co
            </Button>
          </Div>
        )}
      </WrapperQuote>
    </Container>
  );
};

export default ContinueQuoting;
