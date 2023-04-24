import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import {
  BlogText,
  HelpText,
  TitleDetail,
  WrapperBlogImage,
  WrapperGreenStar,
  WrapperIcon,
  WrapperInfo,
  WrapperSingleLogo,
  WrapperTop,
  WriterName,
  WriterPosition,
  WriterPosition2,
  YellowLine,
} from "./styles";
import { theme } from "@/styles/theme";
import image from "../../assets/img/rectangle-2.png";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/single-white-logo.png";
import percentage from "../../assets/icons/percentage.svg";

const BlogDetailMobile = () => {
  return (
    <Div direction="column">
      <WrapperTop>
        <TitleDetail>
          MICRO{" "}
          <span
            style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
          >
            INVERSIONES
          </span>
        </TitleDetail>
      </WrapperTop>
      <WrapperBlogImage image={image} />
      <Div m="37px 29px 51px 0px" style={{ alignSelf: "self-end" }}>
        <WrapperGreenStar>
          <Image alt="star" src={star} />
          <WrapperSingleLogo>
            <Image alt="logo" src={logo} />
          </WrapperSingleLogo>
        </WrapperGreenStar>
      </Div>
      <WrapperInfo>
        <WriterName>Samuel Valencia</WriterName>
        <WriterPosition>Padre de familia y administrador,</WriterPosition>
        <WriterPosition2>
          Máster en economía de Harvard con múltiples empresas al rededor del
          país
        </WriterPosition2>
        <BlogText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat
        </BlogText>
      </WrapperInfo>
      <Div align="center" p="0px 69px 23.32px 40.35px" justify="space-between">
        <WrapperIcon>
          <Image
            alt="percentage"
            src={percentage}
            width={"70%"}
            height={"70%"}
          />
        </WrapperIcon>
        <HelpText>
          Uno de nuestros asesores estará dispuesto a ayudarte en temas.
          <YellowLine />
        </HelpText>
      </Div>
    </Div>
  );
};

export default BlogDetailMobile;
