import React from "react";
import { ErrorClient } from "./styles";
import Image from "next/image";
import { Text } from "@/styles/Common";
import errorToast from "@/assets/icons/error-toast.svg";
import { theme } from "@/styles/theme";

export const ToastErrorClient = ({ message }) => {
  return (
    <ErrorClient>
      <Image alt="error" src={errorToast} width={16} height={16} />
      <Text
        color={theme.colors.default}
        size={theme.fonts.size.sm}
        font={theme.fonts.family.tertiary}
      >
        {message}
      </Text>
    </ErrorClient>
  )
}