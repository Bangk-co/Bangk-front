import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Modal } from "@mui/material";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperMedBangk, WrapperModal } from "./styles";
import { Button } from "../Common/Button";
import medLogo from "@/assets/img/med-logo-green.svg";
import button from "@/assets/img/buttonMedBangk.png";
import close from "@/assets/icons/close.svg";

const MedBangk = ({ isMobile }) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handleClickPhone = () => {
    window.location.href = "tel:1234567890";
  };

  return (
    <WrapperMedBangk isMobile={isMobile}>
      <Modal open={showModal}>
        <WrapperModal>
          <Div justify="flex-end">
            <Image
              alt="close"
              src={close}
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(false)}
            />
          </Div>
          <Col gap="8px" height="100%" justify="center">
            <Text
              size={theme.fonts.size.ft}
              color={theme.colors.green900}
              font={theme.fonts.family.primaryMedium}
              align="center"
            >
              Comunícate al
            </Text>
            <Text
              size={theme.fonts.size.h4}
              color={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              align="center"
              //TODO change tel
            >
              123 456 78 90
            </Text>
          </Col>
        </WrapperModal>
      </Modal>
      <Div
        justify={"space-between"}
        align={isMobile && "center"}
        width="100%"
        m={isMobile ? "0 0 230px 0" : "0 0 430px 0"}
        direction={isMobile ? "column" : "row"}
        background={isMobile && theme.colors.white}
        p={isMobile && "10px"}
        gap={isMobile && "20px"}
        style={{
          boxShadow: isMobile && "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
          borderRadius: isMobile && "20px",
        }}
      >
        <Button
          height={"40px"}
          font={theme.fonts.family.primaryBold}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          background={theme.colors.green1000}
          border={"transparent"}
          hover={theme.colors.green1000}
          borderHover={theme.colors.green1000}
          onClick={() => {
            router.push("/ahorra-en-tus-seguros/med-bangk");
          }}
        >
          Conoce más
        </Button>
        <Text
          color={theme.colors.green1000}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
          align="center"
        >
          A un mensaje, llamada, notificación <br />
          de distancia cuidarte se hace fácil.
        </Text>
      </Div>
      <Div
        justify={"space-between"}
        align={isMobile && "center"}
        width="100%"
        direction={isMobile ? "column" : "row"}
        background={isMobile && theme.colors.white}
        p={isMobile && "10px"}
        gap={isMobile && "20px"}
        style={{
          boxShadow: isMobile && "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
          borderRadius: isMobile && "20px",
        }}
      >
        <Col>
          <Text
            color={theme.colors.orange}
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
            font={theme.fonts.family.primaryMedium}
          >
            Nuevo
          </Text>
          <Image
            src={medLogo}
            alt="medBangk"
            width={isMobile ? 217 : 380}
            height={isMobile ? 51 : 90}
          />
        </Col>
        <Col
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isMobile) {
              handleClickPhone();
            } else {
              setShowModal(true);
            }
          }}
        >
          <Image
            src={button}
            alt="button"
            width={isMobile ? 80 : 120}
            height={isMobile ? 80 : 120}
          />
          <Text
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
            font={theme.fonts.family.primaryBold}
            align="center"
          >
            Asistencia
          </Text>
        </Col>
      </Div>
    </WrapperMedBangk>
  );
};

export default MedBangk;
