import React from "react";
import Image from "next/image";
import {
  BlogNumber,
  TextCard,
  TitleCard,
  WrapperButtonsCard,
  WrapperCard,
  WrapperCardLogo,
  WrapperCards,
  WrapperFooter,
  WrapperImage,
  WrapperMessage,
} from "./styles";
import { Col, Row } from "antd";
import { cardsInfo } from "@/utilities/options";
import { Button } from "../Button";
import logo from "../../assets/icons/white-logo.png";
import message from "../../assets/icons/green-message.png";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

const Cards = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleGo = (slug, id) => {
    const url = slug.toLowerCase().replace(/ /g, "-");
    router.push(`/blog/${id}?name:${url}`);
  };

  return (
    <WrapperCards>
      <Row gutter={isMobile ? [0, 22] : isTablet ? [30, 41] : [45, 92]}>
        {cardsInfo.map((ele, indx) => (
          <Col key={indx} lg={12} md={12} sm={24}>
            <WrapperCard onClick={() => handleGo(ele.title, ele.id)}>
              <WrapperImage image={ele.photo}>
                <WrapperMessage>
                  <Image alt="" src={message} />
                </WrapperMessage>
                <BlogNumber>
                  BLOG{" "}
                  <span
                    style={{
                      color: theme.colors.orange,
                      fontFamily: "Gilroy Bold",
                    }}
                  >
                    {ele.number}
                  </span>
                </BlogNumber>
              </WrapperImage>
              <TitleCard style={{ bottom: indx === 1 && "100px" }}>
                {ele.title}
              </TitleCard>
              <WrapperFooter>
                <TextCard
                  style={{
                    color: ele.color1,
                    width: isMobile || isTablet ? ele.width2 : ele.width,
                  }}
                >
                  {ele.text1}{" "}
                  <span style={{ color: ele.color2 }}>{ele.text2}</span>
                </TextCard>
                <WrapperCardLogo>
                  <Image alt="logo" src={logo} />
                </WrapperCardLogo>
              </WrapperFooter>
            </WrapperCard>
          </Col>
        ))}
      </Row>
    </WrapperCards>
  );
};

export default Cards;
