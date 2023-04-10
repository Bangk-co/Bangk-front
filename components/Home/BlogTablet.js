import React from "react";
import Image from "next/image";
import {
  Col5Tablet,
  Col6Tablet,
  Text1Blog,
  Text2Blog,
  TitleBlog,
  WrapperBlogTablet,
  WrapperIcon,
  WrapperPhone,
} from "./styles";
import blog from "../../assets/icons/blog.svg";
import phone from "../../assets/img/phone-logo.png";

const BlogTablet = () => {
  return (
    <WrapperBlogTablet>
      <Col5Tablet>
        <TitleBlog>
          La educación financiera<br></br> es la verdadera revolución
        </TitleBlog>
        <Text1Blog>
          Tips, consejos, testimonios y<br></br> nuevas formas de ahorrar.
        </Text1Blog>
        <Text2Blog>Conócelo en nuestro</Text2Blog>
        <WrapperIcon>
          <Image alt="blog" src={blog} />
        </WrapperIcon>
      </Col5Tablet>
      <Col6Tablet>
        <WrapperPhone>
          <Image alt="phone" src={phone} />
        </WrapperPhone>
      </Col6Tablet>
    </WrapperBlogTablet>
  );
};

export default BlogTablet;
