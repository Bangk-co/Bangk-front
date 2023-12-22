import React from "react";
import Image from "next/image";
import {
  InfoText,
  LineData,
  RowData,
  TitleData,
  WrapperBigStar,
  WrapperData,
  WrapperStar,
} from "./styles";
import star from "../../assets/icons/orange-star.svg";

const BangkData = ({ isMobile, isTablet }) => {
  return (
    <WrapperData>
      <RowData>
        <TitleData>
          Datos<br></br>Bangk!
        </TitleData>
        <WrapperStar>
          <Image alt="star" src={star} width={20} height={20} />
        </WrapperStar>
        <InfoText>
          En caso de fallecimiento o incapacidad total y permanente, la
          aseguradora <strong>cubrirá el saldo de la deuda</strong> para que tus
          herederos no tengan que asumirla.
        </InfoText>
      </RowData>
      <LineData />
      <RowData>
        <WrapperStar
          style={{
            margin: isMobile
              ? "25px 9px 0px 133px"
              : isTablet
              ? "15px 11px 0px 525.5px"
              : "70px 158px 0px 535px",
          }}
        >
          <Image alt="star" src={star} width={20} height={20} />
        </WrapperStar>
        <InfoText>
          Al endosar los seguros de tus créditos, puedes{" "}
          <strong>ahorrar entre un 20% y un 60%</strong> en comparación con los
          seguros ofrecidos por la entidad ﬁnanciera.
        </InfoText>
      </RowData>
      <LineData />
      <RowData>
        <WrapperStar
          style={{
            margin: isMobile
              ? "25px 9px 0px 133px"
              : isTablet
              ? "15px 11px 0px 525.5px"
              : "70px 158px 0px 535px",
          }}
        >
          <Image alt="star" src={star} width={20} height={20} />
        </WrapperStar>
        <InfoText>
          Si quieres <strong>ahorrar dinero en tus créditos,</strong> no dudes
          en endosar los seguros. ¡Empieza a ahorrar ahora mismo! <br></br>
          <br></br>
        </InfoText>
      </RowData>
      <WrapperBigStar>
        <Image alt="star" src={star} width={283} height={283} />
      </WrapperBigStar>
    </WrapperData>
  );
};

export default BangkData;
