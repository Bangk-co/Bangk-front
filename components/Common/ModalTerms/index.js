import React from "react";
import { WrapperInfo, WrapperModal } from "./styles";
import { Div, Text } from "@/styles/Common";
import close from "@/assets/icons/close.svg"
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "../Button";

export const ModalTerms = ({ isMobile, handleClose, handleAccept }) => {
  return (
    <WrapperModal>
      <Div justify="flex-end">
        <Image alt="close" src={close} style={{ cursor: "pointer" }} onClick={handleClose} />
      </Div>
      <Text
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft}
        color={theme.colors.green900}
        weight={theme.fonts.weight.bold}
        style={{ textAlign: "-webkit-center", width: "100%" }}
      >
        Tratamiento de mis datos
      </Text>
      <WrapperInfo>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet finibus erat, et bibendum nisi. Ut ut enim eu odio faucibus finibus. Praesent tristique, neque et mattis lobortis, nulla ipsum imperdiet dui, vitae pretium dui diam ut magna. Sed eu purus sollicitudin, auctor urna sit amet, bibendum augue. Phasellus quis felis ut turpis consequat posuere. Integer sit amet justo ac mi finibus semper sed quis purus. Donec tincidunt tellus sem, sit amet imperdiet leo mattis non. Sed sollicitudin felis a venenatis hendrerit. Maecenas ultricies mollis odio vitae vestibulum. Fusce a ex id sapien suscipit suscipit sed vel nunc. 
          Cras interdum tortor in metus tempor scelerisque. Nullam dapibus mi diam, vel ornare eros mollis at. Curabitur volutpat semper lacinia. Integer dapibus tellus leo, et consectetur quam ultricies non. Nulla justo lorem, faucibus ut tellus non, convallis varius sapien. Nam a auctor velit. In maximus vitae enim vel facilisis. Suspendisse potenti. Etiam porta suscipit urna, bibendum viverra libero aliquam eget. Suspendisse iaculis dictum tellus a ultricies. Nulla cursus, mi et rhoncus rhoncus, nisi elit tincidunt sem, a tempus ipsum lacus eget leo. Pellentesque convallis, arcu cursus semper blandit, mauris eros pretium ante, eget sollicitudin turpis diam vitae nulla. Integer quis sem ut tortor rhoncus cursus. Donec eleifend quam tortor, eu tincidunt dui condimentum eu. Ut nulla sem, lobortis eu semper nec, convallis eu massa. Donec eleifend quam tortor, eu tincidunt dui condimentum eu. Ut nulla sem, lobortis eu semper nec, convallis eu massa.
          <br></br>
          <br></br>
          Cras interdum tortor in metus tempor scelerisque. Nullam dapibus mi diam, vel ornare eros mollis at. Curabitur volutpat semper lacinia. Integer dapibus tellus leo, et consectetur quam ultricies non.
        </Text>
      </WrapperInfo>
      <Button
        background={theme.colors.yellow500}
        border={theme.colors.yellow500}
        hover={theme.colors.yellow500}
        borderHover={theme.colors.yellow500}
        labelColor={theme.colors.green900}
        labelWeight={theme.fonts.weight.bold}
        size={theme.fonts.size.default2}
        width={"100%"}
        mobileWidth={"100%"}
        height={"40px"}
        radius={"40px"}
        onClick={handleAccept}
      >
        Acepto el tratamiento de mis datos
      </Button>
    </WrapperModal>
  )
}