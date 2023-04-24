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
  WrapperRow,
  WrapperSingleLogo,
  WrapperText,
  WrapperTop,
  WrapperWriter,
  WrapperWriterLogo,
  WriterName,
  WriterPosition,
  WriterPosition2,
  YellowLine,
} from "./styles";
import image from "../../assets/img/rectangle-2.png";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/single-white-logo.png";
import percentage from "../../assets/icons/percentage.svg";

const BlogDetailDesktop = () => {
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
      <WrapperWriterLogo>
        <WrapperWriter>
          <WriterName>Samuel Valencia</WriterName>
          <WriterPosition>
            Máster en economía de Harvard con múltiples empresas al rededor del
            país
          </WriterPosition>
        </WrapperWriter>
        <WrapperGreenStar>
          <Image alt="star" src={star} />
          <WrapperSingleLogo>
            <Image alt="logo" src={logo} />
          </WrapperSingleLogo>
        </WrapperGreenStar>
      </WrapperWriterLogo>
      <WrapperRow>
        <WrapperIcon>
          <WriterPosition2>Padre de familia y administrador,</WriterPosition2>
          <Image
            alt="percentage"
            src={percentage}
            width={"100%"}
            height={"100%"}
          />
        </WrapperIcon>
        <WrapperText>
          <BlogText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat
          </BlogText>
          <HelpText>
            Uno de nuestros asesores estará dispuesto a ayudarte en temas.
            <YellowLine />
          </HelpText>
        </WrapperText>
      </WrapperRow>
    </Div>
  );
};

export default BlogDetailDesktop;
