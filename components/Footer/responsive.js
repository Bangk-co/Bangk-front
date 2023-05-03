import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { MessageText, Title } from "./styles";
import logo from "../../assets/icons/white-logo.png";
import { theme } from "@/styles/theme";
import { Col, Row } from "antd";
import { Link } from "../Link";
import { footerListResponsive } from "@/utilities/options";
import Social from "./social";
import { useRouter } from "next/router";

const FooterResponsive = ({ isMobile }) => {
  const router = useRouter();

  const goLink = (url, extern) => {
    if (extern) {
      const a = document.createElement("a");
      a.href = `${url}`;
      document.body.appendChild(a);
      a.target = "_blank";
      a.click();
    } else {
      router.push(`${url}`);
    }
  };

  return (
    <>
      <Div
        direction="column"
        style={{ marginBottom: isMobile ? "26px" : 0 }}
        align={isMobile && "center"}
      >
        <Image
          alt="logo"
          src={logo}
          width={isMobile ? "112px" : "103.8"}
          height={isMobile ? "41px" : "58px"}
        />
        {isMobile ? (
          <span
            style={{
              color: theme.colors.white,
              fontSize: theme.fonts.size.xxxs,
              fontWeight: theme.fonts.weight.medium,
              lineHeight: "9px",
              width: "110px",
              margin: "14px 0 28px 0",
              textAlign: "-webkit-center",
            }}
          >
            Una plataforma{" "}
            <span style={{ color: theme.colors.orange }}>
              en la que ahorras tiempo y dinero
            </span>
          </span>
        ) : (
          <>
            <MessageText style={{ marginBottom: 0 }}>
              Una plataforma{" "}
            </MessageText>
            <MessageText style={{ color: theme.colors.orange, marginTop: 0 }}>
              en la que ahorras <br></br> tiempo y dinero
            </MessageText>
          </>
        )}
        <Social />
      </Div>
      <Div
        justify={isMobile ? "center" : "right"}
        height="min-content"
        style={{ textAlignLast: isMobile ? "center" : "left" }}
      >
        <Row
          style={{
            width: "70%",
            textAlign: "-webkit-center",
          }}
          gutter={isMobile ? [20, 20] : [40, 50]}
        >
          {footerListResponsive.map((ele, indx) => (
            <Col
              key={indx}
              md={12}
              xs={24}
              style={{
                textAlign: isMobile ? "-webkit-center" : "-webkit-left",
              }}
            >
              <Title>{ele.title}</Title>
              <Div direction="column" width={ele.width} height={ele.height}>
                {ele.list.map((elem, index) => (
                  <Link
                    key={index}
                    size={"8px"}
                    color={theme.colors.white}
                    onClick={() => goLink(elem.link, elem.isExtern)}
                    style={{
                      height: ele.height,
                      lineHeight: "9px",
                      whiteSpace: "normal",
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {elem.label}
                  </Link>
                ))}
              </Div>
            </Col>
          ))}
        </Row>
      </Div>
    </>
  );
};

export default FooterResponsive;
