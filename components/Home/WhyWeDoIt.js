import React from "react";
import Image from "next/image";
import {
  Col1,
  Col2,
  SubtitleWhy,
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
import { Text } from "@/styles/Common";
import { wappLink } from "@/utilities/options";

const WhyWeDoIt = ({ isMobile }) => {
  const router = useRouter();

  const goInsurance = () => {
    router.push("/cotiza-tu-ahorro");
  };

  const goWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  }

  return (
    <WrapperWhy>
      <Col1>
        <Image
          alt="man"
          src={man}
          width={isMobile ? 350 : 960}
          height={isMobile ? 350 : 747}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Col1>
      <Col2>
        <TitleWhy>
          Conoce nuestro servicio ¡Ahorro Hipotecario!
        </TitleWhy>
        <WrapperStarWhy>
          <Image
            alt="star"
            src={star}
            width={isMobile ? 19 : 41}
            height={isMobile ? 20 : 43}
          />
          <SubtitleWhy>Endosos de seguros</SubtitleWhy>
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

        <WrapperStarWhy>
          <Image
            alt="star"
            src={star}
            width={isMobile ? 19 : 41}
            height={isMobile ? 20 : 43}
          />
          <SubtitleWhy>Optimización de tu crédito</SubtitleWhy>
        </WrapperStarWhy>
        <TextWhy>
          Reestructuramos legalmente tu plan de pagos para reducir el plazo de tu crédito hipotecario o leasing habitacional, pagando mucho menos en intereses. <br></br>
        </TextWhy>
        <Button onClick={goWapp}>Conoce más</Button>

        <WrapperStarWhy>
          <Image
            alt="star"
            src={star}
            width={isMobile ? 19 : 41}
            height={isMobile ? 20 : 43}
          />
          <SubtitleWhy>Compra de cartera</SubtitleWhy>
        </WrapperStarWhy>
        <TextWhy>
          Si tienes un crédito de vivienda o vehículo, buscamos opciones de compra de cartera con tasas más bajas, lo que reduce tu cuota o el tiempo de pago, o ambas. <br></br>
        </TextWhy>
        <Button onClick={goWapp}>Conoce más</Button>
      </Col2>
    </WrapperWhy>
  );
};

export default WhyWeDoIt;
