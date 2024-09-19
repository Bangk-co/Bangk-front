import React from "react";
import Image from "next/image";
import {
  TextKnowUs,
  TitleKnowUs,
  WrapperKnowUs,
  WrapperLogo,
  WrapperStar,
  WrapperText,
} from "./styles";
import logo from "../../assets/icons/single-green-logo.svg";
import star from "../../assets/icons/orange-star.svg";
import { theme } from "@/styles/theme";

const KnowUsSection = ({ isMobile }) => {
  return (
    <WrapperKnowUs>
      <WrapperText>
        <TitleKnowUs>
          Conócenos
          <span
            style={{ color: theme.colors.orange100, fontFamily: "Gilroy Bold" }}
          >
            !
          </span>
        </TitleKnowUs>
        {isMobile && (
          <WrapperStar>
            <Image alt="star" src={star} width={15} height={15} />
          </WrapperStar>
        )}
        <TextKnowUs>
          Somos un equipo de nerds que combinaron sus conocimientos en
          tecnología, pólizas de seguros, y finanzas para revolucionar la forma
          en que ahorramos mientras estamos protegidos. <br></br>
          <br></br>
          <strong>Bangk</strong> está pensado como un aliado, que con
          experiencia y método, puede lograr de manera{" "}
          <strong>fácil y rápida</strong> un trámite que, de otra forma, tomaría
          algunos meses.
        </TextKnowUs>
      </WrapperText>
      <WrapperLogo>
        <Image alt="logo" src={logo} width={293} height={465} />
      </WrapperLogo>
    </WrapperKnowUs>
  );
};

export default KnowUsSection;
