import { LinkButton } from "@/components/Common/LinkButton";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import Image from "next/image";
import React from "react";
import arrow from "@/assets/icons/arrow-back-yellow.svg"
import arrowGreen from "@/assets/icons/arrow-back-green.svg"

export const BackButton = ({ isHovered, setIsHovered, handleBack }) => {
  return (
    <Div height="42px">
      <LinkButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        color={theme.colors.yellow500}
        font={theme.fonts.family.primary}
        size={theme.fonts.size.default2}
        weight={theme.fonts.weight.bold}
        onClick={handleBack}
      >
        <Image alt="arrow-back" src={isHovered ? arrowGreen : arrow} style={{ marginRight: "10px" }} />
        Volver a Bangk.com
      </LinkButton>
    </Div>
  )
}