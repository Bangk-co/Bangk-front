import React from "react";
import Image from "next/image";
import { BannerCard, BannerText, Col1, Col2, WrapperBanner } from "./styles";
import { theme } from "@/styles/theme";
import woman from "../../assets/img/green-woman.svg";
import { Button } from "../Button";
import { useRouter } from "next/router";

const Banner = ({ isMobile }) => {
  const router = useRouter();

  const handleQuote = () => {
    router.push("/cotiza-tu-ahorro");
  };

  return (
    <WrapperBanner>
      <BannerCard>
        <Col1>
          <BannerText>
            Poder aliviar<br></br> tu bolsillo sin perder tranquilidad <br></br>
            <span
              style={{
                color: theme.colors.orange100,
                fontFamily: "Gilroy Bold",
              }}
            >
              Eso es Bangk
            </span>
          </BannerText>
          <Button onClick={handleQuote}>Ahorra ya!</Button>
        </Col1>
        <Col2>
          <Image
            alt="woman"
            src={woman}
            width={isMobile ? 191 : 753}
            height={isMobile ? 160 : 630}
          />
        </Col2>
      </BannerCard>
    </WrapperBanner>
  );
};

export default Banner;
