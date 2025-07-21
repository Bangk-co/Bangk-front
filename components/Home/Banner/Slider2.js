import React from "react";
import { Wrapper2 } from "../styles";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import bangkFlag from "@/assets/img/bangkFlag.svg";
import orangeLine from "@/assets/img/orangeLine.svg";
import ovalYellow from "@/assets/img/ovalYellow.svg";
import wowBanner from "@/assets/img/wowBanner.svg";
import bannerButton from "@/assets/img/bannerButton.svg";
import { theme } from "@/styles/theme";
import { wappLink } from "@/utilities/options";

export const Slider2 = ({ isMobile }) => {
  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <Wrapper2>
      <Div
        justify={isMobile ? "center" : "space-between"}
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <Image alt="bangkFlag" src={bangkFlag} height={isMobile ? 70 : 110} />
        <Div direction="column" gap="4px">
          <Image
            alt="orangeLine"
            src={orangeLine}
            style={{ alignSelf: "flex-end" }}
          />
          <Text color={theme.colors.white} size={theme.fonts.size.default2}>
            Unlock the world of finances
          </Text>
        </Div>
      </Div>
      <Div width="100%" direction={isMobile ? "column" : "row"}>
        <Div width={isMobile ? "100%" : "60%"} direction="column">
          <Text
            size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.lgs}
            font={theme.fonts.family.primaryBold}
            color={theme.colors.white}
            mt={isMobile ? "30px" : "40px"}
          >
            PAGA MENOS AL BANCO:
          </Text>
          <Image
            alt="oval"
            src={ovalYellow}
            width={isMobile ? 150 : 315}
            style={{
              position: "absolute",
              top: isMobile ? "165px" : "235px",
              left: isMobile ? "182px" : "418px",
            }}
          />
          <Text
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h3s}
            font={theme.fonts.family.primaryBold}
            color={theme.colors.white}
            align="center"
            mt="10px"
            style={{ width: isMobile ? "100%" : "636px" }}
          >
            reduce el número de
            <span
              style={{
                color: theme.colors.greenLigth100,
                fontFamily: theme.fonts.family.primaryBold,
              }}
            >
              {" "}
              cuotas de tu crédito hipotecario y leasing habitacional.
            </span>
          </Text>
          <Div
            direction="column"
            justify="center"
            align="center"
            m={isMobile ? "20px 0 0 0" : "40px 0 0 0"}
            style={{ width: isMobile ? "100%" : "636px" }}
            gap="20px"
          >
            <Image
              alt="button"
              src={bannerButton}
              height={isMobile ? 40 : 56}
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={handleWapp}
            />
            <Text
              size={isMobile ? theme.fonts.size.default : theme.fonts.size.h5s}
              color={theme.colors.white}
            >
              ¡Menos cuotas, más tranquilidad financiera!
            </Text>
          </Div>
        </Div>
        {!isMobile && (
          <Div width="40%">
            <Image alt="wow-banner" src={wowBanner} />
          </Div>
        )}
      </Div>
    </Wrapper2>
  );
};
