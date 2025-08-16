import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import { useRouter } from "next/router";
import { WrapperCarBangk } from "./styles";
import star from "@/assets/img/starOrange.png";
import cat from "@/assets/img/footprintCat.png";
import petbangk from "@/assets/img/petbangkWhite.png";
import { Button } from "../Common/Button";

const PetBangk = ({ isMobile }) => {
  const router = useRouter();

  return (
    <Div
      direction={isMobile ? "column" : "row"}
      width="100%"
      background={theme.colors.blue200}
      padding={isMobile ? "60px 50px 90px 50px" : "70px 72px"}
      style={{ position: "relative" }}
    >
      <Col align="left" width={isMobile ? "100%" : "60%"}>
        <Text
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          !AHORA!
        </Text>
        <Text
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.lgs : theme.fonts.size.xxxl}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "30px" : "60px"}
          style={{ lineHeight: 1 }}
        >
          Cuidamos a quienes <br />
          <span
            style={{
              color: theme.colors.yellow,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            Dejan huella!
          </span>
        </Text>
        <Text
          color={theme.colors.yellow}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          Conoce
        </Text>
        <Image
          alt="petbangk"
          src={petbangk}
          width={isMobile ? 250 : "100%"}
          height={isMobile ? 65 : "100%"}
        />
        <Text
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.ft : theme.fonts.size.h5s}
          font={theme.fonts.family.primary}
          style={{ width: !isMobile && "80%" }}
          mt={isMobile ? "30px" : "40px"}
        >
          Cuidamos no solo tu bolsillo, sino tus seres queridos. <br /> Sabemos
          que tu mascota es uno mas de tu familia y se merece todos los
          cuidados.
        </Text>
      </Col>
      <Col
        width={isMobile ? "100%" : "40%"}
        m={isMobile && "30px 0 0 0"}
        align="center"
      >
        <Image
          alt="cat"
          src={cat}
          width={isMobile ? 250 : 643}
          height={isMobile ? 200 : "auto"}
        />
        <Button
          width={"300px"}
          font={theme.fonts.family.primaryBold}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          background={theme.colors.yellow}
          labelColor={theme.colors.purple}
          border={"transparent"}
          hover={theme.colors.yellow}
          borderHover={theme.colors.yellow}
          onClick={() => {
            router.push("/pet-bangk");
          }}
          style={{
            position: "absolute",
            right: isMobile ? null : 72,
            bottom: isMobile ? 30 : 90,
          }}
        >
          Protege tu mascota ahora!
        </Button>
      </Col>
    </Div>
  );
};

export default PetBangk;
