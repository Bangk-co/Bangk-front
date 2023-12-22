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

  const handleGo = (id) => {
    router.push(`/blog/articulo/${id}`);
  };

  return (
    <WrapperCards>
      <Row gutter={isMobile ? [0, 22] : isTablet ? [30, 41] : [45, 92]}>
        {cardsInfo.map((ele, indx) => (
          <Col key={indx} lg={12} md={12} sm={24}>
            <WrapperCard onClick={() => handleGo(ele.id)}>
              <WrapperImage image={ele.photo}>
                <WrapperMessage>
                  <Image alt="" src={message} width={110} height={43} />
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
              <TitleCard>{ele.title}</TitleCard>
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
                  <Image alt="logo" src={logo} width={102} height={39} />
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
