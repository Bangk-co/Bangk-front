import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import Image from "next/image";
import { ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import { numberFormat } from "@/utilities/helpers";

export const Step2 = ({
  isMobile,
  formInfo,
  handleChangeNumber
}) => {
  const inputsProps = {
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    labelColor: theme.colors.white,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    fontColor: theme.colors.neutralGray900,
    font: theme.fonts.family.primary,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    radius: "4px",
    height: "40px",
    width: "100%",
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  }

  return (
    <ColForm m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
        mt={isMobile ? "24px" : "12px"}
      >
        Datos <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>financieros</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Ingresos mensuales*"}
            placeholder={"0"}
            id="monthlyIncome"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              formInfo.monthlyIncome === "" ? "" : numberFormat(Number(formInfo.monthlyIncome))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Gastos mensuales*"}
            placeholder={"0"}
            id="monthlyExpenses"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              formInfo.monthlyExpenses === "" ? "" : numberFormat(Number(formInfo.monthlyExpenses))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Valor de tus activos*"}
            helper={"Suma de tus propiedades, vehículos y/o inversiones"}
            helperColor={theme.colors.white}
            placeholder={"0"}
            id="assetValue"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              formInfo.assetValue === "" ? "" : numberFormat(Number(formInfo.assetValue))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Valor de tus pasivos*"}
            helper={"Suma de tus deudas en tarjetas de crédito, créditos, etc."}
            helperColor={theme.colors.white}
            placeholder={"0"}
            id="liabilitiesValue"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              formInfo.liabilitiesValue === "" ? "" : numberFormat(Number(formInfo.liabilitiesValue))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
      </Grid>
    </ColForm>
  )
}