import { useState } from "react";
import Image from "next/image";
import { WrapperModal } from "./styles";
import { Text, Row, Div, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import close from "@/assets/icons/close.svg";

export const LogoutModal = ({ handleLogout, setShowModal }) => {
  return (
    <WrapperModal>
      <Div justify="flex-end">
        <Image
          alt="close"
          src={close}
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(false)}
        />
      </Div>
      <Col gap="8px">
        <Text
          size={theme.fonts.size.ft}
          color={theme.colors.green900}
          font={theme.fonts.family.primaryBold}
          weight={theme.fonts.weight.bold}
          align="center"
          style={{ width: "100%" }}
        >
          Estás a punto de cerrar sesión en Bangk
        </Text>
        <Text
          size={theme.fonts.size.sm}
          color={theme.colors.neutralGray900}
          font={theme.fonts.family.primary}
          align="center"
          style={{ width: "100%" }}
          mb="24px"
        >
          Para ingresar nuevamente, deberás iniciar sesión con tus credenciales.
        </Text>
        <Button
          background={theme.colors.yellow500}
          border={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
          width={"100%"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"40px"}
          onClick={handleLogout}
        >
          Cerrar sesíon
        </Button>
      </Col>
    </WrapperModal>
  );
};
