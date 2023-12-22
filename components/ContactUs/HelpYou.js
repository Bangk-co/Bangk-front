import React from "react";
import Image from "next/image";
import {
  Info,
  Line,
  Line2,
  TextHelpYou,
  TitleContact,
  WrapperAllInfo,
  WrapperHelpYou,
  WrapperInfo,
  WrapperSmallStar,
  WrapperText,
} from "./styles";
import { contactInfoList } from "@/utilities/options";
import star from "../../assets/icons/orange-star.svg";
import { theme } from "@/styles/theme";

const HelpYou = () => {
  return (
    <WrapperHelpYou>
      <WrapperText>
        <TitleContact>Contáctanos,</TitleContact>
        <TextHelpYou>
          Uno de nuestros asesores estará dispuesto a ayudarte en temas como:
          <Line />
          <Line2 />
        </TextHelpYou>
      </WrapperText>
      <WrapperAllInfo>
        {contactInfoList.map((ele, indx) => (
          <WrapperInfo key={indx}>
            <WrapperSmallStar>
              <Image alt="star" src={star} width={19} height={19} />
            </WrapperSmallStar>
            <Info>{ele}</Info>
          </WrapperInfo>
        ))}
      </WrapperAllInfo>
    </WrapperHelpYou>
  );
};

export default HelpYou;
