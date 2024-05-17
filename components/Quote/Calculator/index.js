import React from "react";
import { Button } from "@/components/Common/Button";
import { Div, Row, Text, Col as DivCol } from "@/styles/Common";
import { Col, WrapperInsurance, WrapperWappCal } from "@/styles/Quote";
import { theme } from "@/styles/theme";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import Image from "next/image";
import wappIcon from "@/assets/icons/whatsapp-original.svg"

export const Calculator = ({ isMobile, info, insurance, handleBack, handleWapp, handleNext }) => {
  return (
    <Col m={"36px 0 0 0"} justifyMobile={"center"}>
      <Text
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        color={theme.colors.white}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
      >
        Nuestra oferta
      </Text>
      <Text
        size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
        color={theme.colors.white}
        mt="12px"
      >
        Acorde a los datos que nos suministraste este sería el valor aproximado de la prima anual que pagarías:
      </Text>
      <DivCol gap="12px" m="26px 0 0 0">
        {info.map((ele, indx) => (
          <Row key={indx} justify="space-between">
            <Text
              size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
              color={theme.colors.white}
            >
              {ele.label}
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
            >
              {ele.value}
            </Text>
          </Row>
        ))}
      </DivCol>
      <WrapperInsurance>
        <Div
          height="52px"
          width="100%"
          justify="center"
          align="center"
          style={{ borderBottom: `1px solid ${theme.colors.gray200}` }}
        >
          <Text
            size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.bold}
          >
            Póliza con nuestra aseguradora SBS
          </Text>
        </Div>
        <Row height="60px" width="100%">
          {insurance.map((ele, indx) => (
            <Div
              key={indx}
              width="50%"
              direction="column"
              justify="center"
              align="center"
              gap="4px"
              style={{ borderRight: ele.key === 1 && `1px solid ${theme.colors.gray200}` }}
            >
              <Text
                size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
                color={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
              >
                {ele.label}
              </Text>
              <Text
                size={isMobile ? theme.fonts.size.sm :theme.fonts.size.default2}
                color={theme.colors.primary900}
              >
                {ele.value}
              </Text>
            </Div>
          ))}
        </Row>
      </WrapperInsurance>
      <Text
        size={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
        color={theme.colors.white}
        mt="26px"
      >
        *Con el fin de alcanzar el ahorro de manera efectiva, es importante efectuar el
        pago de la póliza de forma anualizada. Este requisito es obligatorio por parte de
        tu entidad y resulta indispensable para que el endoso sea aceptado.
        <br></br>
        <br></br>
          La presente cotización se expide para efectos de informar a quien la solicita los
          posibles costos del seguro en ella relacionados (valor de la prima), pero no implica
          ni supone en ningún caso, consentimiento o asunción del riesgo por parte de sbs seguros
          Colombia s.a.; por lo tanto, la aceptación del contrato de seguro queda condicionada a
          la evaluación de la información contenida en la respectiva solicitud y al cumplimiento
          de los requisitos de asegurabilidad exigidos por sbs seguros Colombia.
      </Text>

      {isMobile && (
        <WrapperWappCal>
          <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
        </WrapperWappCal>
      )}

      <Div m="46px 0 0 0" justify="space-between">
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.green900}
          border={theme.colors.yellow500}
          hover={theme.colors.terciary50}
          borderHover={theme.colors.yellow500}
          colorHover={theme.colors.green900}
          labelColor={theme.colors.yellow500}
          size={theme.fonts.size.default2}
          borderHeight={"3px solid"}
          width={isMobile ? "56px" : "113px"}
          mobileWidth={"56px"}
          height={"40px"}
          onClick={handleBack}
        >
          <Image alt="arrow" src={arrowBack} style={{ marginRight: "4px" }} />
          {isMobile ? "" : "Atrás"}
        </Button>
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          width={isMobile ? "224px" : "300px"}
          mobileWidth={"224px"}
          height={"40px"}
          radius={"40px"}
          onClick={handleNext}
        >
          Quiero cotizar
        </Button>
      </Div>
    </Col>
  )
}