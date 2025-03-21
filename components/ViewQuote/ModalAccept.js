import React from "react";
import { WrapperModal } from "./styles";
import { Div, Text, Col } from "@/styles/Common";
import close from "@/assets/icons/close.svg";
import handIcon from "@/assets/icons/handShake.svg";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import CircularProgress from "@mui/material/CircularProgress";

export const ModalAccept = ({
  isMobile,
  handleClose,
  handleAccept,
  isLoading,
}) => {
  return (
    <WrapperModal isMobile={isMobile}>
      <Div justify="flex-end">
        <Image
          alt="close"
          src={close}
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        />
      </Div>
      <Col gap="16px">
        <Div width="100%" justify="center">
          <Image
            alt="handShake"
            src={handIcon}
            height={isMobile ? 48 : 64}
            width={isMobile ? 48 : 64}
          />
        </Div>
        <Text
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft}
          color={theme.colors.green900}
          font={theme.fonts.family.primaryBold}
          weight={theme.fonts.weight.bold}
          align="center"
          style={{ width: "100%" }}
        >
          ¿Quieres aceptar la cotización y continuar con la solicitud de tu
          póliza?
        </Text>
        <Div>
          <Text
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
            align="center"
          >
            Recuerda que tu cotización tiene 2 días de vigencia para ser
            adquirida.
          </Text>
        </Div>
      </Col>
      <Div
        gap={isMobile ? "16px" : "32px"}
        direction={isMobile ? "column" : "row"}
      >
        <Button
          background={theme.colors.yellow500}
          border={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
          width={"241px"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"40px"}
          onClick={handleAccept}
          style={{ order: isMobile ? -1 : 1 }}
          disabled={isLoading}
          startIcon={
            isLoading ? (
              <CircularProgress
                size={20}
                style={{ color: theme.colors.white }}
              />
            ) : null
          }
        >
          Si, aceptar cotización
        </Button>
        <Button
          background={theme.colors.white}
          border={theme.colors.green900}
          hover={theme.colors.white}
          borderHover={theme.colors.green900}
          borderHeight={"3px solid"}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
          width={"241px"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"40px"}
          style={{ order: isMobile ? 1 : -1 }}
          onClick={handleClose}
        >
          No, decidir más tarde
        </Button>
      </Div>
    </WrapperModal>
  );
};
