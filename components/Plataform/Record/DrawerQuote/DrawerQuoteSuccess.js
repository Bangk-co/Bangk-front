import React, { useState } from "react";
import closeIcon from "@/assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { useSelector } from "react-redux";
import { numberFormat } from "@/utilities/helpers";
import pesosIcon from "@/assets/icons/pesos.svg"
import { Select } from "@/components/Common/Select";
import { MenuItem } from "@mui/material";
import { SbsInsurer } from "./sbsInsurer";
import { AllianzInsurer } from "./allianzInsurer";
import { Button } from "@/components/Common/Button";
import greenLogo from "@/assets/icons/green-logo.svg";
import { LifeInsuranceTable } from "./lifeInsuranceTable";

export const DrawerQuoteSuccess = ({
  showDrawer,
  closeDrawer,
  loanInfo,
  insurer,
  currentInsuranceData,
  bangkInsuranceData,
  saveValue
}) => {
  const loanData = [
    { label: "Tipo de crédito", value: loanInfo?.loanType },
    { label: "Saldo del crédito", value: `$ ${numberFormat(loanInfo?.loanBalance)}` },
    { label: "Aseguradora", value: insurer }
  ]

  const subtitleProps = {
    font: theme.fonts.family.primaryBold,
    weight: theme.fonts.weight.bold,
    size: theme.fonts.size.sm,
    color: theme.colors.neutralGray900,
    lineHeight: "17.33px"
  }

  const textValueProps = {
    font: theme.fonts.family.primaryBold,
    weight: theme.fonts.weight.bold,
    size: theme.fonts.size.ft,
    lineHeight: "28px",
  }

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
      width={"450px"}
    >
      <Div width="100%" justify="center" align="center" m="16px 0 20px 0" direction="column" gap="20px">
        <Image alt="logo" src={greenLogo} width={85} height={32.94} />
        <Text { ...textValueProps } color={theme.colors.neutralGray800}>
          ¡Cotización enviada!
        </Text>
      </Div>
      <Div direction="column" m="0 0 30px 0">
        {loanData.map((ele, indx) => (
          <Div
            key={indx}
            height="33px"
            justify="space-between"
            align="center"
            style={{ borderBottom: `1px solid ${theme.colors.primary300}` }}
          >
            <Text { ...subtitleProps }>{ele.label}</Text>
            <Text { ...subtitleProps }>{ele.value}</Text>
          </Div>
        ))}
      </Div>
      <LifeInsuranceTable
        bangkInsuranceData={bangkInsuranceData}
        currentInsuranceData={currentInsuranceData}
        subtitleProps={subtitleProps}
        saveValue={saveValue}
      />
    </Drawer>
  )
}