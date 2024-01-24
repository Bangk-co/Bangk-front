import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Col, Div, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem, Modal } from "@mui/material";
import email from "@/assets/icons/email.svg"
import Image from "next/image";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { Checkbox } from "@/components/Common/Checkbox";
import { ModalTerms } from "@/components/Common/ModalTerms";
import { WrapperWappCal } from "@/styles/Quote";
import wappIcon from "@/assets/icons/whatsapp-original.svg"

export const UserForm = ({
    isMobile,
    documentTypeOptions,
    indicativesOptions,
    formInfo,
    openModal,
    setOpenModal,
    handleClose,
    handleAccept,
    handleSelect,
    handleChange,
    terms,
    handleTerms,
    handleBack,
    handleContinue,
    handleWapp
  }) => {
  const isFormValid = Object.values(formInfo).every((value) => value !== "") && terms;

  return (
    <Col
      width={isMobile ? "312px" : "549px"}
      m={isMobile ? "0 0 0 0" : "12px 0 0 0"}
    >
      <Modal open={openModal}>
        <ModalTerms isMobile={isMobile} handleClose={handleClose} handleAccept={handleAccept} />
      </Modal>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
      >
        Iniciemos conociendo al <span style={{ color: theme.colors.yellow500 }}>titular del crédito</span>
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        lineHeight="20px"
        mt="10px"
      >
        Diligencia la información del titular del crédito
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={4} xs={4}>
          <Select
            label={"Tipo de documento*"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            name="documentType"
            value={formInfo.documentType}
            onChange={handleSelect}
          >
            {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} xs={8} style={{ marginTop: isMobile ? "14px" : "0px" }}>
          <TextField
            label={"Número de documento"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            id="identificationNumber"
            value={formInfo.identificationNumber}
            onChange={handleChange}
            inputProps={{ maxLength: 15 }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            label={"Nombre(s)*"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            id="name"
            value={formInfo.name}
            onChange={handleChange}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            label={"Apellidos*"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            id="lastname"
            value={formInfo.lastname}
            onChange={handleChange}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item md={4} xs={4}>
          <Select
            label={"Código de país*"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            name="countryCode"
            value={formInfo.countryCode}
            onChange={handleSelect}
          >
            {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} xs={8}>
          <TextField
            label={"Número de telefono*"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            id="phone"
            value={formInfo.phone}
            onChange={handleChange}
            inputProps={{ maxLength: 10 }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            label={"Correo electrónico"}
            width={"100%"}
            placeholder={"Escribir"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            prefixIcon={
              <Image alt="mail" src={email} width={16} height={16} />
            }
            id="email"
            value={formInfo.email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Row m="22px 0 0 0">
        <Checkbox checked={terms} onChange={handleTerms} />
        <Text
          color={theme.colors.white}
          size={theme.fonts.size.default2}
          mt="7px"
        >
          Doy autorización para el&nbsp;
          <span
            style={{
              fontWeight: theme.fonts.weight.bold,
              cursor: "pointer",
              textDecoration: "underline"
            }}
            onClick={() => setOpenModal(true)}
          >
            tratamiento de mis datos
          </span>
          &nbsp;por Bangk y poder ser contactado para la oferta del servicio.
        </Text>
      </Row>
      {isMobile && (
        <WrapperWappCal>
          <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
        </WrapperWappCal>
      )}
      <Div m="46px 0 0 0" justify="space-between">
        <Button
          background={theme.colors.green900}
          border={theme.colors.yellow500}
          hover={theme.colors.terciary50}
          borderHover={theme.colors.yellow500}
          colorHover={theme.colors.green900}
          labelColor={theme.colors.yellow500}
          labelWeight={theme.fonts.weight.bold}
          size={theme.fonts.size.default2}
          borderHeight={"3px solid"}
          width={"113px"}
          mobileWidth={"56px"}
          height={"40px"}
          onClick={handleBack}
        >
          <Image alt="arrow" src={arrowBack} style={{ marginRight: "4px" }} />
          {isMobile ? "" : "Atrás"}
        </Button>
        <Button
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          labelWeight={theme.fonts.weight.bold}
          size={theme.fonts.size.default2}
          width={"300px"}
          mobileWidth={"224px"}
          height={"40px"}
          radius={"40px"}
          onClick={handleContinue}
          disabled={!isFormValid}
        >
          Continuar
        </Button>
      </Div>
    </Col>
  )
}