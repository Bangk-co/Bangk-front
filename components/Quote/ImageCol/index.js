import Image from "next/image";
import React from "react";
import quoteImage from "@/assets/img/quote-woman.svg"

export const ImageCol = () => {
  return (
    <Image alt="women" src={quoteImage} height={720} style={{ marginLeft: "17px" }} />
  )
}