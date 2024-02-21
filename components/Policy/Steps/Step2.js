import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import { numberFormat } from "@/utilities/helpers";

export const Step2 = ({
  isMobile,
  financialDataForm,
  nextStep
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
              financialDataForm.monthlyIncome === "" ? "" : numberFormat(Number(financialDataForm.monthlyIncome))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
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
                financialDataForm.monthlyExpenses === "" ? "" : numberFormat(Number(financialDataForm.monthlyExpenses))
              }
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
              {...inputsProps}
              label={"Valor de tus activos*"}
              helper={"Suma de tus propiedades, vehículos y/o inversiones"}
              helperColor={theme.colors.white}
              placeholder={"0"}
              id="assetsValues"
              notFocused={true}
              prefixIcon={
                <Image alt="pesos" src={pesosIcon} width={16} height={16} />
              }
              value={
                financialDataForm.assetsValues === "" ? "" : numberFormat(Number(financialDataForm.assetsValues))
              }
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
              {...inputsProps}
              label={"Valor de tus pasivos*"}
              helper={"Suma de tus deudas en tarjetas de crédito, créditos, etc."}
              helperColor={theme.colors.white}
              placeholder={"0"}
              id="passivesValues"
              notFocused={true}
              prefixIcon={
                <Image alt="pesos" src={pesosIcon} width={16} height={16} />
              }
              value={
                financialDataForm.passivesValues === "" ? "" : numberFormat(Number(financialDataForm.passivesValues))
              }
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
          />
        </Grid>
      </Grid>

      <Div m="46px 0 24px 0" justify="space-between">
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
          // onClick={handleBack}
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
          onClick={nextStep}
          // disabled={!isFormValid}
        >
          Siguiente
        </Button>
      </Div>
    </ColForm>
  )
}