import React, { useState } from "react";
import Image from "next/image";
import {
  Circle1,
  Circle2,
  CloudText,
  ManImage,
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
  const handleYoutube = () => {
    const a = document.createElement("a");
    a.href = "https://www.youtube.com/@bangk_la/featured";
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

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
          onClick={handleYoutube}
        >
          Youtube
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
        </Div>
        <Div m="0px" p="0px">
          <ManImage>
            <Image alt="man" src={man} width={496} height={496} />
            <Circle1 />
            <Circle2 />
            <WrapperCloud>
              <Image alt="cloud" src={cloud} width={195} height={125} />
            </WrapperCloud>
            <CloudText>
              OJO<br></br>PUESSSS
            </CloudText>
          </ManImage>
        </Div>
        <WrapperStar>
          <Image alt="star" src={star} width={36} height={36} />
        </WrapperStar>
        <WrapperLogo>
          <Image alt="logo" src={logo} width={201} height={77} />
        </WrapperLogo>
      </WrapperBanner>
    </Wrapper>
  );
};

export default Banner;
