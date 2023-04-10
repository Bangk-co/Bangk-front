import React from "react";
import Image from "next/image";
import { BannerCard, BannerText, Col1, Col2, WrapperBanner } from "./styles";
import { theme } from "@/styles/theme";
import woman from "../../assets/img/green-woman.svg";

const Banner = () => {
  return (
    <WrapperBanner>
      <BannerCard>
        <Col1>
          <BannerText>
            Poder aliviar<br></br> tu bolsillo sin perder tranquilidad <br></br>
            <span
              style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
            >
              Eso es Bangk
            </span>
          </BannerText>
        </Col1>
        <Col2>
          <Image alt="woman" src={woman} />
        </Col2>
      </BannerCard>
    </WrapperBanner>
  );
};

export default Banner;
