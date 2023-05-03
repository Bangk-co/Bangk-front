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
import { infoList, wappLink } from "@/utilities/options";
import { theme } from "@/styles/theme";

const FormInfo = () => {
  return (
    <WrapperInfo>
      <Text1>Para ayudarte de manera más personalizada </Text1>
      <WrapperTitle>Completa Nuestro Formulario</WrapperTitle>
      <WrapperInfoText>
        <Row gutter={[40, 40]}>
          {infoList.map((ele, indx) => (
            <Col
              key={indx}
              lg={12}
              md={12}
              sm={24}
              style={{ display: "flex", flexDirection: "row", gap: "16px" }}
            >
              <WrapperStarInfo>
                <Image alt="star" src={star} />
              </WrapperStarInfo>
              <Text2>{ele}</Text2>
            </Col>
          ))}
        </Row>
      </WrapperInfoText>
      <WrapperImgInfo>
        <Image alt="info" src={info} />
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
        o por <strong>teléfono.</strong>
      </Text3>
    </WrapperInfo>
  );
};

export default FormInfo;
