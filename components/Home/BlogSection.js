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
import phone from "../../assets/img/phone-logo.png";
import BlogTablet from "./BlogTablet";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

const BlogSection = ({ isTablet, isMobile }) => {
  const router = useRouter();

  const handleBlog = () => {
    router.push("/blog");
  };

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
                <Image
                  alt="blog"
                  src={blog}
                  width={isMobile ? 92 : 392}
                  height={isMobile ? 25 : 110}
                />
              </WrapperIcon>
            </Col5>
            <Col6>
              <WrapperPhone>
                <Image
                  alt="phone"
                  src={phone}
                  width={isMobile ? 126 : 293}
                  height={isMobile ? 192 : 445}
                />
              </WrapperPhone>
            </Col6>
          </WrapperRow>
        </WrapperBlog>
      )}
    </>
  );
};

export default BlogSection;
