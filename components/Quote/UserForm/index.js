import React, { useEffect, useRef } from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem, Modal } from "@mui/material";
import email from "@/assets/icons/email.svg";
import Image from "next/image";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg";
import { Checkbox } from "@/components/Common/Checkbox";
import { Col, WrapperWappCal } from "@/styles/Quote";
import wappIcon from "@/assets/icons/whatsapp-original.svg";

export const UserForm = ({
  isMobile,
  documentTypeOptions,
  indicativesOptions,
  formInfo,
  handleSelect,
  handleChange,
  terms,
  handleTerms,
  handleBack,
  handleContinue,
  handleWapp,
  errorEmail,
}) => {
  const isFormValid =
    Object.values(formInfo).every((value) => value !== "") && terms;
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourInputRef = useRef(null);
  const fiveInputRef = useRef(null);
  const firstCheckRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const inputProps = {
    width: "100%",
    placeholder: "Escribir",
    radius: "4px",
    height: "40px",
    font: theme.fonts.family.primary,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    labelColor: theme.colors.white,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  };

  const handleKeyPress = (event, nextRef) => {
    if (event.key === "Enter" && nextRef.current) {
      event.preventDefault();
      nextRef.current.focus();
    }
  };

  const focusButton = (event) => {
    if (event.key === "Enter") {
      const button = document.getElementById("buttonRef");
      if (button) {
        event.preventDefault();
        button.focus();
      }
    }
  };

  return (
    <Col m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
      >
        {isMobile ? (
          <>
            Iniciemos conociendo al{" "}
            <span
              style={{
                fontFamily: theme.fonts.family.primaryBold,
                color: theme.colors.yellow500,
              }}
            >
              titular del crédito
            </span>
          </>
        ) : (
          <>
            Iniciemos conociendo al
            <br />
            <span
              style={{
                fontFamily: theme.fonts.family.primaryBold,
                color: theme.colors.yellow500,
              }}
            >
              titular del crédito
            </span>
          </>
        )}
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        lineHeight="20px"
        mt="10px"
      >
        Diligencia la información del titular del crédito
      </Text>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 2 }}
        style={{ marginTop: "8px" }}
      >
        <Grid item md={4} xs={4}>
          <Select
            {...inputProps}
            label={"Tipo de documento*"}
            name="documentType"
            value={formInfo.documentType}
            onChange={handleSelect}
          >
            {documentTypeOptions.map((ele, indx) => (
              <MenuItem
                key={indx}
                value={ele.value}
                style={{ fontFamily: theme.fonts.family.primary }}
              >
                {ele.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          item
          md={8}
          xs={8}
          style={{ marginTop: isMobile ? "14px" : "0px" }}
        >
          <TextField
            {...inputProps}
            label={"Número de documento*"}
            id="identificationNumber"
            value={formInfo.identificationNumber}
            onChange={handleChange}
            inputProps={{
              maxLength: 15,
              pattern: formInfo.documentType !== 78 && "\\d*",
              inputMode: formInfo.documentType !== 78 && "numeric",
            }}
            inputRef={firstInputRef}
            onKeyPress={(event) => handleKeyPress(event, secondInputRef)}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputProps}
            label={"Nombre(s)*"}
            id="name"
            value={formInfo.name}
            onChange={handleChange}
            inputProps={{ maxLength: 50 }}
            helper={"Escribe el nombre como aparece en la cédula"}
            helperColor={theme.colors.white}
            inputRef={secondInputRef}
            onKeyPress={(event) => handleKeyPress(event, thirdInputRef)}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputProps}
            label={"Apellidos*"}
            id="lastname"
            value={formInfo.lastname}
            onChange={handleChange}
            inputProps={{ maxLength: 50 }}
            helper={"Escribe los apellidos como aparecen en la cédula"}
            helperColor={theme.colors.white}
            inputRef={thirdInputRef}
            onKeyPress={(event) => handleKeyPress(event, fourInputRef)}
          />
        </Grid>
        <Grid item md={4} xs={4}>
          <Select
            {...inputProps}
            label={"Código de país*"}
            name="countryCode"
            value={formInfo.countryCode}
            onChange={handleSelect}
          >
            {indicativesOptions.map((ele, indx) => (
              <MenuItem
                key={indx}
                value={ele.value}
                style={{ fontFamily: theme.fonts.family.primary }}
              >
                {ele.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} xs={8}>
          <TextField
            {...inputProps}
            label={"Número de teléfono*"}
            id="phone"
            value={formInfo.phone}
            onChange={handleChange}
            inputProps={{
              maxLength: 10,
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            inputRef={fourInputRef}
            onKeyPress={(event) => handleKeyPress(event, fiveInputRef)}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputProps}
            label={"Correo electrónico*"}
            prefixIcon={<Image alt="mail" src={email} width={16} height={16} />}
            id="email"
            value={formInfo.email}
            onChange={handleChange}
            error={errorEmail.error}
            helper={errorEmail.error ? errorEmail.message : ""}
            helperColor={theme.colors.error}
            inputRef={fiveInputRef}
            onKeyPress={(event) => handleKeyPress(event, firstCheckRef)}
          />
        </Grid>
      </Grid>
      <Row m="22px 0 0 0">
        <Checkbox
          checked={terms}
          onChange={handleTerms}
          inputRef={firstCheckRef}
          onKeyPress={focusButton}
        />
        <Text
          color={theme.colors.white}
          size={theme.fonts.size.default2}
          mt="7px"
        >
          Doy autorización para el&nbsp;
          <span
            style={{
              fontFamily: theme.fonts.family.primaryBold,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() =>
              window.open(
                "https://www.bangk.co/legales/?section=policy",
                "_blank"
              )
            }
          >
            tratamiento de mis datos
          </span>
          &nbsp;por Bangk y poder ser contactado para la oferta del servicio.
        </Text>
      </Row>
      {isMobile && (
        <WrapperWappCal>
          <Image
            alt="wapp-icon"
            src={wappIcon}
            onClick={handleWapp}
            style={{ cursor: "pointer" }}
          />
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
          onClick={handleContinue}
          disabled={!isFormValid}
          id={"buttonRef"}
        >
          Continuar
        </Button>
      </Div>
    </Col>
  );
};
