import React from "react";
import Image from "next/image";
import {
  Text1,
  Text2,
  Text3,
  WrapperImgInfo,
  WrapperInfo,
  WrapperInfoText,
  WrapperStarInfo,
  WrapperTitle,
} from "./styles";
import star from "../../assets/icons/orange-star.svg";
import info from "../../assets/img/info.svg";
import { Col, Row } from "antd";
import { infoList, phone, wappLink } from "@/utilities/options";
import { theme } from "@/styles/theme";

const FormInfo = ({ isMobile }) => {
  return (
    <WrapperInfo>
      <Text1>Para ayudarte de manera más personalizada </Text1>
      <WrapperTitle>
        <a
          href={`${wappLink}`}
          target="_blank"
          style={{ color: theme.colors.green, fontFamily: "Gilroy Bold" }}
          rel="noreferrer"
        >
          Completa
        </a>
        &nbsp;Nuestro Formulario
      </WrapperTitle>
      <WrapperInfoText>
        <Row gutter={isMobile ? [20, 20] : [40, 40]}>
          {infoList.map((ele, indx) => (
            <Col
              key={indx}
              lg={12}
              md={12}
              sm={24}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: isMobile ? "5px" : "16px",
              }}
            >
              <WrapperStarInfo>
                <Image
                  alt="star"
                  src={star}
                  width={isMobile ? 11 : 24}
                  height={isMobile ? 11 : 24}
                />
              </WrapperStarInfo>
              <Text2>{ele}</Text2>
            </Col>
          ))}
        </Row>
        <WrapperImgInfo>
          <Image
            alt="info"
            src={info}
            width={isMobile ? 75 : 248}
            height={isMobile ? 42 : 139}
          />
        </WrapperImgInfo>
        <Text3>
          También podemos ayudarte vía{" "}
          <a
            href={`${wappLink}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.colors.white, textDecoration: "none" }}
          >
            <strong>WhatsApp</strong>
          </a>{" "}
          o por{" "}
          <a
            href={`${phone}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.colors.white, textDecoration: "none" }}
          >
            <strong>teléfono</strong>
          </a>
        </Text3>
      </WrapperInfoText>
    </WrapperInfo>
  );
};

export default FormInfo;
