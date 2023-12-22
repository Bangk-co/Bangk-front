import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { stepperList, wappLink } from "@/utilities/options";
import { Col, Row } from "antd";
import {
  Card,
  Message,
  Message2,
  Number,
  Wrapper,
  WrapperStar,
} from "./styles";
import star from "../../assets/icons/yellow-star.svg";
import StepperTitleHome from "../Home/StepperTitle";
import StepperTitle from "../Insurance/StepperTitle";
import { theme } from "@/styles/theme";

const Stepper = ({ isHome, isMobile, isTablet }) => {
  return (
    <Wrapper>
      {isHome ? <StepperTitleHome /> : <StepperTitle />}
      <Row
        style={{ width: "100%", justifyContent: "space-around" }}
        gutter={isTablet && [30, 30]}
      >
        {stepperList.map((ele, indx) => (
          <Col key={indx} lg={4.8}>
            <Card>
              <Number>{ele.number}</Number>
              <WrapperStar>
                <Image
                  alt="logo"
                  src={star}
                  width={isMobile ? 14 : isTablet ? 17 : 31}
                  height={isMobile ? 13 : isTablet ? 16 : 31}
                />
              </WrapperStar>
              {indx === 0 ? (
                <a
                  href={`${wappLink}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "underline",
                    color: theme.colors.white,
                  }}
                >
                  <Message width={ele.width}>
                    {ele.text1} <strong>{ele.text2}</strong> {ele.text3}
                  </Message>
                </a>
              ) : (
                <Message width={ele.width}>
                  {ele.text1} <strong>{ele.text2}</strong> {ele.text3}
                </Message>
              )}

              {indx === 4 && (
                <Message2>
                  {ele.text4} <strong>{ele.text5}</strong>
                </Message2>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Stepper;
