import React from "react";
import { WrapperToast, IconWrapper } from "./styles";
import Image from "next/image";
import { Text } from "@/styles/Common";
import errorWarning from "@/assets/icons/error-warning.svg";
import { theme } from "@/styles/theme";

export const CustomErrorToast = ({ message }) => {
  return (
    <WrapperToast>
      <IconWrapper>
        <Image alt="error" src={errorWarning} width={24} height={24} />
      </IconWrapper>
      <Text
        color={theme.colors.gray150}
        size={theme.fonts.size.default2}
        font={theme.fonts.family.primary}
      >
        {message}
      </Text>
    </WrapperToast>
  )
}