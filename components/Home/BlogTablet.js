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
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

const BlogTablet = () => {
  const router = useRouter();

  const handleBlog = () => {
    router.push("/blog");
  };

  return (
    <WrapperBlogTablet>
      <Col5Tablet>
        <TitleBlog>
          La educación financiera<br></br> es la verdadera revolución
        </TitleBlog>
        <Text1Blog>
          Tips, consejos, testimonios y<br></br> nuevas formas de ahorrar.
        </Text1Blog>
        <Text2Blog>
          <span
            onClick={handleBlog}
            style={{
              color: theme.colors.orange,
              fontFamily: "Gilroy Bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Conócelo
          </span>{" "}
          en nuestro
        </Text2Blog>
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
