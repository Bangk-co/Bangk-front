import React from "react";
import Image from "next/image";
import {
  TextOurGain,
  TitleOurGain,
  WrapperOurain,
  WrapperPhone,
  WrapperStarOurGain,
  WrapperTextOurGain,
} from "./styles";
import phone from "../../assets/img/phone-man.svg";
import star from "../../assets/icons/white-star.svg";

const OurGain = () => {
  return (
    <WrapperOurain>
      <WrapperPhone>
        <Image alt="phone" src={phone} />
      </WrapperPhone>
      <WrapperTextOurGain>
        <TitleOurGain>¿Nuestra ganancia?</TitleOurGain>
        <WrapperStarOurGain>
          <Image alt="star" src={star} />
        </WrapperStarOurGain>
        <TextOurGain>
          Las <strong>aseguradoras nos pagan una comisión</strong> sobre la
          prima que pagas por tu seguro. Es transparente para ti, nuestro
          servicio no te genera costos.
        </TextOurGain>
      </WrapperTextOurGain>
    </WrapperOurain>
  );
};

export default OurGain;
