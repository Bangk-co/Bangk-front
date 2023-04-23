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
  WrapperLogo,
  WrapperStar,
} from "./styles";
import { Button } from "../Button";
import { theme } from "@/styles/theme";
import man from "../../assets/img/white-man.svg";
import cloud from "../../assets/icons/cloud.svg";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/white-logo-2.svg";
import { Div } from "@/styles/Common";

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
        <Div direction="column">
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
            <Div direction="column" width="max-content">
              <DayHour>Día</DayHour>
              <Date>11 marzo</Date>
            </Div>
            <Div direction="column" width="max-content">
              <DayHour>Hora</DayHour>
              <Date>10 a.m.</Date>
            </Div>
          </WrapperDate>
        </Div>
        <Div m="0px" p="0px">
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
        </Div>
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
