import React from "react";
import Image from "next/image";
import { WrapperButton } from "./styles";
import whatsapp from "../../assets/icons/white-whatsapp.svg";
import { wappLink } from "@/utilities/options";

const WhatsappButton = () => {
  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <WrapperButton>
      <Image
        alt="whatsapp"
        src={whatsapp}
        style={{ cursor: "pointer" }}
        onClick={handleWapp}
        width={60}
        height={48}
      />
    </WrapperButton>
  );
};

export default WhatsappButton;
