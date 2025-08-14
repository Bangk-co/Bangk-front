import React from "react";
import { Div, Text } from "@/styles/Common";
import { WrapperModal, WrapperIcon } from "./styles";
import alert from "@/assets/icons/alert-yellow2.svg";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";

export const ModalAgeError = ({ handleClose, handleRemovePet, invalidPetsNames, invalidPetsIndex }) => {
  return (
    <WrapperModal>
      <WrapperIcon>
        <Image src={alert} alt="alert" />
      </WrapperIcon>
      <Text
        font={theme.fonts.family.primaryMedium}
        color={theme.colors.yellow800}
        size={theme.fonts.size.h5s}
      >
        Mascota no asegurable
      </Text>
      <Text
        font={theme.fonts.family.primary}
        color={theme.colors.black200}
        size={theme.fonts.size.h6}
        style={{ textAlign: "center" }}
        mt="20px"
      >
        Lo sentimos, {" "}
        <span style={{ fontFamily: theme.fonts.family.primaryBold }}>{invalidPetsNames}</span>
        {" "} no {invalidPetsIndex.length > 1 ? "son asegurables" : "es asegurable"} debido a que su edad no está dentro del rango permitido.
      </Text>
      <Div m="30px 0 0 0" gap="24px">
        <Button
          width="124px"
          height="40px"
          background={theme.colors.white}
          labelColor={theme.colors.orange500}
          border={theme.colors.orange500}
          hover={theme.colors.white}
          onClick={handleClose}
        >
          Volver
        </Button>
        <Button
          width="124px"
          height="40px"
          background={theme.colors.orange1000}
          labelColor={theme.colors.white}
          hover={theme.colors.orange1000}
          border={theme.colors.orange1000}
          onClick={() => handleRemovePet(invalidPetsIndex)}
        >
          Quitar
        </Button>
      </Div>
    </WrapperModal>
  )
};
