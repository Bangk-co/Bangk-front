import { LinkButton } from "@/components/Common/LinkButton";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import Image from "next/image";
import React from "react";
import arrow from "@/assets/icons/arrow-back-yellow.svg"
import arrowGreen from "@/assets/icons/arrow-back-green.svg"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetInitData } from "@/store/balance";

export const BackButton = ({ isHovered, setIsHovered }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
    dispatch(resetInitData())
  }

  return (
    <Div height="42px">
      <LinkButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        color={theme.colors.yellow500}
        font={theme.fonts.family.primaryBold}
        size={theme.fonts.size.default2}
        onClick={handleBack}
      >
        <Image alt="arrow-back" src={isHovered ? arrowGreen : arrow} style={{ marginRight: "10px" }} />
        Volver a Bangk.com
      </LinkButton>
    </Div>
  )
}