import React from "react";
import toast from "react-hot-toast";
import { SaveSuccess } from "./styles";
import Image from "next/image";
import { Text } from "@/styles/Common";
import success from "@/assets/icons/successStepper.svg"
import { theme } from "@/styles/theme";

export const ToastSuccess = ({ message }) => {
  return (
    <SaveSuccess>
      <Image alt="success" src={success} width={16} height={16} />
      <Text
        color={theme.colors.default}
        size={theme.fonts.size.sm}
        font={theme.fonts.family.tertiary}
      >
        {message}
      </Text>
    </SaveSuccess>
  )
}