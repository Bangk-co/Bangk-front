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
  YellowLine,
} from "./styles";
import { theme } from "@/styles/theme";
import image from "../../assets/img/photo-blog.jpg";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/single-white-logo.png";
import percentage from "../../assets/icons/percentage.svg";
import { useRouter } from "next/router";
import { blogsInfo } from "@/utilities/blogsInfo";

const BlogDetailMobile = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogId = Number(id);

  const currentBlog = () => {
    const blog = blogsInfo.find((ele) => ele.id === blogId);

    return blog;
  };

  const blogInfo = currentBlog();

  const createMarkup = () => {
    return { __html: blogInfo?.text };
  };

  return (
    <Div direction="column">
      <WrapperTop>
        <TitleDetail>
          {blogInfo?.title1}{" "}
          <span
            style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
          >
            {blogInfo?.title2}
          </span>
        </TitleDetail>
      </WrapperTop>
      <WrapperBlogImage image={blogInfo?.image} />
      <Div m="37px 29px 51px 0px" style={{ alignSelf: "self-end" }}>
        <WrapperGreenStar>
          <Image alt="star" src={star} />
          <WrapperSingleLogo>
            <Image alt="logo" src={logo} />
          </WrapperSingleLogo>
        </WrapperGreenStar>
      </Div>
      <WrapperInfo>
        <WriterName>{blogInfo?.subtitle} </WriterName>
        <BlogText dangerouslySetInnerHTML={createMarkup()} />
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
