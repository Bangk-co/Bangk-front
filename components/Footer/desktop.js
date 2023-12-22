import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { MessageText, Title, WrapperFooter } from "./styles";
import logo from "../../assets/icons/white-logo.png";
import { theme } from "@/styles/theme";
import { Col, Row } from "antd";
import { Link } from "../Link";
import { footerList } from "@/utilities/options";
import Social from "./social";
import { useRouter } from "next/router";

const FooterDesktop = () => {
  const router = useRouter();

  const goLink = (url, extern, email) => {
    if (extern) {
      const a = document.createElement("a");
      a.href = email ? `mailto:${url}` : `${url}`;
      document.body.appendChild(a);
      a.target = "_blank";
      a.click();
    } else {
      router.push(`${url}`);
    }
  };

  return (
    <>
      <Div direction="column">
        <Image alt="logo" src={logo} width={202} height={71} />
        <MessageText style={{ marginBottom: 0 }}>Una plataforma </MessageText>
        <MessageText style={{ color: theme.colors.orange, marginTop: 0 }}>
          en la que ahorras <br></br> tiempo y dinero
        </MessageText>
        <Social />
      </Div>
      <Div justify="right" height="min-content">
        <Row
          style={{
            width: "100%",
            textAlign: "-webkit-center",
          }}
          gutter={[60, 0]}
        >
          {footerList.map((ele, indx) => (
            <Col key={indx} lg={6}>
              <Title>{ele.title}</Title>
              <Div gap="3px" direction="column" width={ele.width} align="left">
                {ele.list.map((elem, index) => (
                  <Link
                    key={index}
                    size={"12px"}
                    color={theme.colors.white}
                    onClick={() => goLink(elem.link, elem.isExtern, elem.email)}
                    style={{
                      lineHeight: "12px",
                      whiteSpace: "normal",
                      textAlign: "left",
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

export default FooterDesktop;
