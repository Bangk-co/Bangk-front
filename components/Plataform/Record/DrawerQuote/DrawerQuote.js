import React, { useState } from "react";
import closeIcon from "@/assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { useSelector } from "react-redux";
import { numberFormat } from "@/utilities/helpers";
import pesosIcon from "@/assets/icons/pesos.svg";
import { Select } from "@/components/Common/Select";
import { MenuItem } from "@mui/material";
import { SbsInsurer } from "./sbsInsurer";
import { AllianzInsurer } from "./allianzInsurer";
import { Button } from "@/components/Common/Button";

export const DrawerQuote = ({
  showDrawer,
  closeDrawer,
  insurersOptions,
  quoteRate,
  insurer,
  yearlyFee,
  handleSelectInsurer,
  loanInfo,
  handleChange,
  currentInsuranceData,
  bangkInsuranceData,
  saveValue,
  handleSaveQuote,
  isLoading,
}) => {
  const [sendButton, setSendButton] = useState(false);

  const loanData = [
    { label: "Tipo de crédito", value: loanInfo?.loanType },
    { label: "Saldo del crédito", value: loanInfo?.loanBalance },
  ];

  const titleProps = {
    font: theme.fonts.family.primaryMedium,
    size: theme.fonts.size.sm,
    weight: theme.fonts.weight.medium,
    color: theme.colors.neutralGray900,
    lineHeight: "20px",
  };

  const subtitleProps = {
    size: theme.fonts.size.default2,
    color: theme.colors.neutralGray900,
    lineHeight: "20px",
  };

  const textFieldProps = {
    labelColor: theme.colors.neutralGray900,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    labelSize: theme.fonts.size.sm,
    border: theme.colors.neutralGray900,
    borderHover: theme.colors.neutralGray900,
    radius: "4px",
    width: "100%",
    height: "40px",
  };

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
      width={"450px"}
    >
      <Text
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        size={"22px"}
        lineHeight={"28px"}
        color={theme.colors.neutralGray800}
        mb="22px"
        mt="16px"
      >
        Crear cotización
      </Text>
      <Div direction="column">
        {loanData.map((ele, indx) => (
          <Div key={indx} direction="column" gap="8px" m=" 0 0 22px 0">
            <Text {...titleProps}>{ele.label}</Text>
            <Text {...subtitleProps}>
              {ele.label === "Saldo del crédito" ? (
                <Div align="center" gap="6px">
                  <Image alt="icon" src={pesosIcon} /> {numberFormat(ele.value)}
                </Div>
              ) : (
                ele.value
              )}
            </Text>
          </Div>
        ))}
      </Div>
      <Select
        label={"Aseguradora*"}
        {...textFieldProps}
        notFocused={true}
        name={"insurer"}
        value={insurer}
        onChange={handleSelectInsurer}
      >
        {insurersOptions.map((ele, indx) => (
          <MenuItem
            key={indx}
            value={ele.value}
            style={{ fontFamily: theme.fonts.family.primary }}
          >
            {ele.label}
          </MenuItem>
        ))}
      </Select>
      <Div m="16px 0 0 0" direction="column">
        {insurer === 114 ? (
          <>
            <SbsInsurer
              quoteRate={quoteRate}
              loanInfo={loanInfo}
              titleProps={titleProps}
              subtitleProps={subtitleProps}
              currentInsuranceData={currentInsuranceData}
              bangkInsuranceData={bangkInsuranceData}
              saveValue={saveValue}
            />
            <Div width="100%" m="60px 0 0 0">
              <Button
                width={"100%"}
                height={"40px"}
                background={theme.colors.green900}
                hover={theme.colors.green900}
                borderHover={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.default2}
                onClick={handleSaveQuote}
                disabled={isLoading}
              >
                Enviar cotización
              </Button>
            </Div>
          </>
        ) : (
          <>
            <AllianzInsurer
              loanInfo={loanInfo}
              setSendButton={setSendButton}
              yearlyFee={yearlyFee}
              handleChange={handleChange}
              textFieldProps={textFieldProps}
              subtitleProps={subtitleProps}
              currentInsuranceData={currentInsuranceData}
              bangkInsuranceData={bangkInsuranceData}
              saveValue={saveValue}
            />
            {sendButton && (
              <Div width="100%" m="60px 0 0 0">
                <Button
                  width={"100%"}
                  height={"40px"}
                  background={theme.colors.green900}
                  hover={theme.colors.green900}
                  borderHover={theme.colors.green900}
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.default2}
                  onClick={handleSaveQuote}
                  disabled={isLoading}
                >
                  Enviar cotización
                </Button>
              </Div>
            )}
          </>
        )}
      </Div>
    </Drawer>
  );
};
