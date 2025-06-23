import React from "react";
import { WrapperToast, IconWrapper } from "./styles";
import Image from "next/image";
import { Div, Text } from "@/styles/Common";
import errorWarning from "@/assets/icons/error-warning.svg";
import { theme } from "@/styles/theme";

export const CustomErrorToast = ({ message }) => {
  return (
    <WrapperToast>
      <Div width="10%">
        <IconWrapper>
          <Image alt="error" src={errorWarning} width={24} height={24} />
        </IconWrapper>
      </Div>
      <Div width="90%">
        <Text
          color={theme.colors.gray150}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primary}
        >
          {message}
        </Text>
      </Div>
    </WrapperToast>
  )
}