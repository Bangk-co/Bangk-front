import React from "react";
import Image from "next/image";
import {
  Col1,
  Col2,
  TextWhy,
  TitleWhy,
  WrapperButton,
  WrapperStarWhy,
  WrapperWhy,
} from "./styles";
import man from "../../assets/img/yellow-man.svg";
import star from "../../assets/icons/orange-star.svg";
import { Button } from "../Button";
import { useRouter } from "next/router";

const WhyWeDoIt = ({ isMobile }) => {
  const router = useRouter();

  const goInsurance = () => {
    router.push("/ahorra-en-tus-seguros");
  };

  return (
    <WrapperWhy>
      <Col1>
        <Image
          alt="man"
          src={man}
          width={isMobile ? 350 : 960}
          height={isMobile ? 350 : 747}
        />
      </Col1>
      <Col2>
        <TitleWhy>
          ¿Por qué lo <br></br> hacemos?
        </TitleWhy>
        <WrapperStarWhy>
          <Image
            alt="star"
            src={star}
            width={isMobile ? 19 : 41}
            height={isMobile ? 20 : 43}
          />
        </WrapperStarWhy>
        <TextWhy>
          Cuando pides un crédito, dentro del valor de las cuotas, pagas además
          de capital e intereses, un seguro de vida que cubre la deuda en caso
          de fallecimiento o incapacidad total y permanente.<br></br>
          <br></br> Lo que no sabías, es que pueden haber mejores opciones entre
          las aseguradoras que bajen el valor del seguro dentro de la cuota
          mensual de estos créditos.<br></br>
          <br></br> Este trámite se conoce como endoso. La buena noticia…{" "}
          <br></br>en <strong>Bangk lo hacemos sin costo para ti.</strong>
        </TextWhy>
        <Button onClick={goInsurance}>Conoce más</Button>
      </Col2>
    </WrapperWhy>
  );
};

export default WhyWeDoIt;
