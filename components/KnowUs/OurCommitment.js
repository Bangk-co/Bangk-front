import React from "react";
import Image from "next/image";
import {
  TextOurCommitment,
  TitleOurCommitment,
  WrapperLogoCommitment,
  WrapperOurCommitment,
  WrapperStarCommitment,
} from "./styles";
import star from "../../assets/icons/orange-star.svg";
import logo from "../../assets/icons/green-logo.svg";

const OurCommitment = () => {
  return (
    <WrapperOurCommitment>
      <WrapperStarCommitment>
        <Image alt="star" src={star} width={53} height={50} />
      </WrapperStarCommitment>
      <TitleOurCommitment>Nuestro compromiso es acompañarte</TitleOurCommitment>
      <TextOurCommitment>
        Queremos ayudarte a encontrar alternativas que mejoren tu calidad de
        vida.
      </TextOurCommitment>
      <WrapperLogoCommitment>
        <Image alt="logo" src={logo} width={103} height={37} />
      </WrapperLogoCommitment>
    </WrapperOurCommitment>
  );
};

export default OurCommitment;
