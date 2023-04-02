import React from "react";
import Image from "next/image";
import {
  Col5,
  Col6,
  Text1Blog,
  Text2Blog,
  TitleBlog,
  WrapperBlog,
  WrapperIcon,
  WrapperPhone,
  WrapperRow,
} from "./styles";
import blog from "../../assets/icons/blog.svg";
import phone from "../../assets/img/phone-logo.svg";
import BlogTablet from "./BlogTablet";

const BlogSection = ({ isTablet }) => {
  return (
    <>
      {isTablet ? (
        <BlogTablet />
      ) : (
        <WrapperBlog>
          <TitleBlog>
            La educación financiera<br></br> es la verdadera revolución
          </TitleBlog>
          <Text1Blog>
            Tips, consejos, testimonios y nuevas formas de ahorrar.
          </Text1Blog>
          <WrapperRow>
            <Col5>
              <Text2Blog>Conócelo en nuestro</Text2Blog>
              <WrapperIcon>
                <Image alt="blog" src={blog} />
              </WrapperIcon>
            </Col5>
            <Col6>
              <WrapperPhone>
                <Image alt="phone" src={phone} />
              </WrapperPhone>
            </Col6>
          </WrapperRow>
        </WrapperBlog>
      )}
    </>
  );
};

export default BlogSection;
