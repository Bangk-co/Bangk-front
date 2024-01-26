import React from "react";
import { DatePicker } from "@/components/Common/DatePicker";
import { TextField } from "@/components/Common/TextField";
import { Col, Div, Row, Text } from "@/styles/Common";
import { CardButton, WrapperWapp } from "@/styles/Quote";
import { theme } from "@/styles/theme";
import Image from "next/image";
import pesosIcon from "@/assets/icons/pesos.svg"
import { Button } from "@/components/Common/Button";
import wappIcon from "@/assets/icons/whatsapp-original.svg"
import { numberFormat } from "@/utilities/helpers";

export const InitForm = ({
    isMobile,
    formInfo,
    handleChange,
    handleChangeDate,
    handleSelect,
    handleNext,
    handleWapp,
    errorDate,
    genderButtons,
    emptyValidation
  }) => {
  return (
    <Col
      width={isMobile ? "312px" : "541px"}
      m={isMobile ? "0 0 0 0" : "92px 0 0 0"}
      justify={isMobile && "center"}
    >
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.default2 : theme.fonts.size.ft}
      >
        Con Bangk puedes lograr <strong>ahorros entre el 20% y hasta el 70%</strong> en los seguros de tus préstamos desde $30 millones en adelante
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        weight={theme.fonts.weight.bold}
        mt="24px"
      >
        Calculemos <span style={{ color: theme.colors.yellow }}>tu ahorro</span>
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        mt="6px"
        mb="28px"
      >
        Diligencia los siguientes datos
      </Text>
      <TextField
        placeholder={"Ingresa el saldo del crédito"}
        id="balance"
        radius="4px"
        width="100%"
        height="40px"
        label="Saldo actual de tu crédito*"
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
        labelColor={theme.colors.white}
        labelFont={"Gilroy"}
        labelWeight={theme.fonts.weight.medium}
        background={theme.colors.primary25}
        border={theme.colors.primary25}
        notFocused={true}
        placeholderColor={theme.colors.neutralGray500}
        prefixIcon={<Image alt="pesos" src={pesosIcon} width={16} height={16} />}
        onChange={handleChange}
        value={formInfo.balance === "" ? "" : numberFormat(Number(formInfo.balance))}
        inputProps={{
          pattern: "\\d*",
          inputMode: "numeric",
        }}
      />
      <Text
        size={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
        color={theme.colors.white}
        mt="2px"
        mb="18px"
        align="left"
      >
        Por favor, verifica el valor en tu extracto o app en línea
      </Text>
      <DatePicker
        placeholder={"dd/mm/aaaa"}
        id="birthdate"
        radius="4px"
        width="100%"
        height="40px"
        label="Fecha de nacimiento*"
        error={errorDate}
        helper={errorDate ? "Debes ser mayor de edad para cotizar tu ahorro" : ""}
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
        labelColor={theme.colors.white}
        labelFont={"Gilroy"}
        labelWeight={theme.fonts.weight.medium}
        background={theme.colors.primary25}
        notFocused={true}
        placeholderColor={theme.colors.neutralGray500}
        onChange={handleChangeDate}
        value={formInfo.birthdate}
      />
      <Text
        size={theme.fonts.size.xs}
        color={theme.colors.white}
        weight={theme.fonts.weight.medium}
        mt="18px"
        mb="3px"
        align="left"
      >
        Selecciona tu genero*
      </Text>
      <Row gap="5px">
        {genderButtons.map((ele, indx) => (
          <CardButton
            key={indx}
            onClick={() => handleSelect(ele.value)}
            style={{
              border: formInfo.gender === ele.value ? `3px solid ${theme.colors.yellow500}` : `3px solid ${theme.colors.primary25}`,
              background: formInfo.gender === ele.value ? theme.colors.terciary50 : theme.colors.primary25,
            }}
          >
            <Image alt="genderIcon" src={ele.icon} />
            <Text
              size={theme.fonts.size.default2}
              color={theme.colors.green900}
              weight={theme.fonts.weight.bold}
            >
              {ele.label}
            </Text>
          </CardButton>
        ))}
      </Row>

      {isMobile && (
        <WrapperWapp>
          <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
        </WrapperWapp>
      )}

      <Div m={isMobile ? "8px 0 0 0" : "52px 0 0 0"} justify="center">
        <Button
          font={theme.fonts.family.primaryBold}
          mobileWidth={"100%"}
          width={"300px"}
          height={"40px"}
          background={theme.colors.yellow500}
          radius={"40px"}
          labelColor={theme.colors.green900}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          disabled={!emptyValidation}
          onClick={handleNext}
        >
          Continuar
        </Button>
      </Div>
    </Col>
  )
}