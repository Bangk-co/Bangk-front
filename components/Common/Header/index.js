import React from "react";
import { WrapperHeader } from "./styles";
import logo from "@/assets/icons/white-logo.png"
import Image from "next/image";

export const Header = ({ isMobile }) => {
  return (
    <WrapperHeader>
      <Image alt="logo" src={logo} height={isMobile ? 32 : 34} />
    </WrapperHeader>
  )
}