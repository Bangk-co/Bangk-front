import React from "react";
import Image from "next/image";
import { WrapperButton } from "./styles";
import whatsapp from "../../assets/icons/white-whatsapp.svg";
import whatsappGreen from "../../assets/icons/whatsapp-green.svg";
import { wappLink } from "@/utilities/options";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";

const WhatsappButton = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <WrapperButton
      background={
        pathname.includes("car-bangk")
          ? theme.colors.yellow
          : theme.colors.whatsapp
      }
    >
      <Image
        alt="whatsapp"
        src={pathname.includes("car-bangk") ? whatsappGreen : whatsapp}
        style={{ cursor: "pointer" }}
        onClick={handleWapp}
        width={60}
        height={48}
      />
    </WrapperButton>
  );
};

export default WhatsappButton;
