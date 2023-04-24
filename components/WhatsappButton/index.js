import React from "react";
import Image from "next/image";
import { WrapperButton } from "./styles";
import whatsapp from "../../assets/icons/white-whatsapp.svg";

const WhatsappButton = () => {
  return (
    <WrapperButton>
      <Image alt="whatsapp" src={whatsapp} style={{ cursor: "pointer" }} />
    </WrapperButton>
  );
};

export default WhatsappButton;
