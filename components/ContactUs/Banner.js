import React from "react";
import Image from "next/image";
import {
  TextBanner,
  TitleBanner,
  WrapperBanner,
  WrapperHalfStar,
  WrapperMail,
  WrapperSocial,
  WrapperWhatsapp,
} from "./styles";
import star from "../../assets/icons/orange-half-star.svg";
import mail from "../../assets/icons/orange-mail.svg";
import whatsapp from "../../assets/icons/orange-whatsapp.svg";
import { wappLink } from "@/utilities/options";
import { theme } from "@/styles/theme";

const Banner = () => {
  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <WrapperBanner>
      <WrapperHalfStar>
        <Image alt="half-star" src={star} />
      </WrapperHalfStar>
      <TitleBanner>Contáctanos</TitleBanner>
      <TextBanner>
        Comunícate con nosotros para resolver cualquier duda o inquietud en la
        siguiente dirección de correo electrónico y número de{" "}
        <a
          href={`${wappLink}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.colors.white, textDecoration: "none" }}
        >
          WhatsApp
        </a>
        .
      </TextBanner>
      <WrapperSocial gap="34.5px" align="center">
        <WrapperMail>
          <Image alt="mail" src={mail} />
        </WrapperMail>
        <WrapperWhatsapp>
          <Image
            alt="whatsapp"
            src={whatsapp}
            style={{ cursor: "pointer" }}
            onClick={handleWapp}
          />
        </WrapperWhatsapp>
      </WrapperSocial>
    </WrapperBanner>
  );
};

export default Banner;
