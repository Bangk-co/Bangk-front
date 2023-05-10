import React, { useState } from "react";
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
  YellowLine,
} from "./styles";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/single-white-logo.png";
import percentage from "../../assets/icons/percentage.svg";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { blogsInfo } from "@/utilities/blogsInfo";

const BlogDetailDesktop = ({ isTablet }) => {
  const router = useRouter();
  const { id } = router.query;
  const blogId = Number(id);

  const currentBlog = () => {
    const blog = blogsInfo.find((ele) => ele.id === blogId);

    return blog;
  };

  const blogInfo = currentBlog();

  const createMarkup = () => {
    return { __html: blogInfo.text };
  };

  return (
    <Div direction="column">
      <WrapperTop>
        <TitleDetail>
          {blogInfo.title1}{" "}
          <span
            style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
          >
            {blogInfo.title2}
          </span>
        </TitleDetail>
      </WrapperTop>
      <WrapperBlogImage image={blogInfo.image} />
      <WrapperWriterLogo>
        <WrapperWriter>
          <WriterName>{blogInfo.subtitle}</WriterName>
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
          <Image
            alt="percentage"
            src={percentage}
            width={isTablet && "100%"}
            height={isTablet && "150px"}
          />
        </WrapperIcon>
        <WrapperText>
          <BlogText dangerouslySetInnerHTML={createMarkup()} />
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
