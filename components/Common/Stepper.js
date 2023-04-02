import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { stepperList } from "@/utilities/options";
import { Col, Row } from "antd";
import {
  Card,
  Message,
  Message2,
  Number,
  Title1,
  Title2,
  Wrapper,
  WrapperStar,
  WrapperUy,
} from "./styles";
import star from "../../assets/icons/yellow-star.svg";
import uy from "../../assets/icons/uy.svg";
import { theme } from "@/styles/theme";

const Stepper = () => {
  return (
    <Wrapper>
      <Div direction="column">
        <Title1>Es muy fácil, sigue</Title1>
        <Title2>
          El Paso a <span style={{ color: theme.colors.green }}>Paso</span>
        </Title2>
        <WrapperUy>
          <Image alt="uy" src={uy} />
        </WrapperUy>
      </Div>
      <Row style={{ width: "100%", justifyContent: "space-around" }}>
        {stepperList.map((ele, indx) => (
          <Col key={indx} lg={4.8}>
            <Card>
              <Number>{ele.number}</Number>
              <WrapperStar>
                <Image alt="logo" src={star} width="31px" height="31px" />
              </WrapperStar>
              <Message width={ele.width}>
                {ele.text1} <strong>{ele.text2}</strong> {ele.text3}
              </Message>
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
