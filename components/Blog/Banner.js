import React, { useState } from "react";
import Image from "next/image";
import {
  Circle1,
  Circle2,
  CloudText,
  Date,
  DayHour,
  ManImage,
  Name,
  Position,
  Subtitle,
  Title,
  Wrapper,
  WrapperBanner,
  WrapperButtons,
  WrapperCloud,
  WrapperDate,
  WrapperDay,
  WrapperHour,
  WrapperImage,
  WrapperInfo,
  WrapperLogo,
  WrapperStar,
} from "./styles";
import { Button } from "../Button";
import { theme } from "@/styles/theme";
import man from "../../assets/img/white-man.svg";
import cloud from "../../assets/icons/cloud.svg";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/white-logo-2.svg";

const Banner = () => {
  return (
    <Wrapper>
      <WrapperButtons>
        <Button width={"113px"} background={theme.colors.orange}>
          BLOG
        </Button>
        <Button
          width={"113px"}
          background={theme.colors.white}
          border={theme.colors.orange}
        >
          Charla
        </Button>
      </WrapperButtons>
      <WrapperBanner>
        <WrapperInfo>
          <Title>
            Educación<br></br>
            <span
              style={{ fontFamily: "Gilroy Bold", color: theme.colors.green }}
            >
              financiera.
            </span>
          </Title>
          <Subtitle>Expositor</Subtitle>
          <Name>
            Andres<br></br>Vásquez
          </Name>
          <Position>CEO Nequi</Position>
          <WrapperDate>
            <WrapperDay>
              <DayHour>Día</DayHour>
              <Date>11 marzo</Date>
            </WrapperDay>
            <WrapperHour>
              <DayHour>Hora</DayHour>
              <Date>10 a.m.</Date>
            </WrapperHour>
          </WrapperDate>
        </WrapperInfo>
        <WrapperImage>
          <ManImage>
            <Image alt="man" src={man} />
            <Circle1 />
            <Circle2 />
            <WrapperCloud>
              <Image alt="cloud" src={cloud} />
            </WrapperCloud>
            <CloudText>
              OJO<br></br>PUESSSS
            </CloudText>
          </ManImage>
        </WrapperImage>
        <WrapperStar>
          <Image alt="star" src={star} />
        </WrapperStar>
        <WrapperLogo>
          <Image alt="logo" src={logo} />
        </WrapperLogo>
      </WrapperBanner>
    </Wrapper>
  );
};

export default Banner;
