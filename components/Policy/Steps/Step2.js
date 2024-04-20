/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TextField } from "@/components/Common/TextField";
import { Col, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import Image from "next/image";
import { ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import { numberFormat } from "@/utilities/helpers";
import { Checkbox } from "@/components/Common/Checkbox";
import useGetSMMLV from "@/hooks/Common/useGetSMMLV";

export const Step2 = ({
  isMobile,
  formInfo,
  setFormInfo,
  checks,
  setChecks,
  loanBalance,
  monthlyCostInsurance,
}) => {
  const [openChecks, setOpenChecks] = useState(false)
  const { data, isSuccess } = useGetSMMLV();
  const [smmlv, setSmmlv] = useState(0);

  useEffect(() => {
    if (isSuccess)
      setSmmlv(data?.data?.groupSettings[0].code);
  }, [data, isSuccess]);

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

  const minLoan = 135 * smmlv
  const minMonthlyCost = 6 * smmlv

  useEffect(() => {
    if (loanBalance >= minLoan || monthlyCostInsurance >= minMonthlyCost) {
      setOpenChecks(true)
    }
  }, [loanBalance, monthlyCostInsurance, minLoan, minMonthlyCost])

  const handleChangeNumber = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value.replace(/\D/g, "");
    setFormInfo(newInfo)
  }

  const handleChangeText = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value
    setFormInfo(newInfo)
  }

  const handleCheck = (event, id) => {
    const { checked } = event.target
    const newChecks = { ...checks }

    newChecks[id] = checked
    setChecks(newChecks)
  }

  const checkboxOptions = [
    { id: "check1", text: "Tanto mi actividad, profesión u oficio es lícita y la ejerzo dentro del marco legal y los recursos que poseo no provienen de actividades ilícitas de las contempladas en el código penal colombiano.", value: checks.check1 },
    { id: "check2", text: "La información que he suministrado en la solicitud y en este documento es veraz y verificable y me comprometo a actualizarla.", value: checks.check2 },
    { id: "check3", text: "Los recursos que se deriven del desarrollo de este contrato no se destinaran a la financiación del terrorismo, grupos terroristas o actividades terroristas.", value: checks.check3 }
  ]

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
              formInfo.monthlyIncome === null ? "" : numberFormat(Number(formInfo.monthlyIncome))
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
              formInfo.monthlyExpenses === null ? "" : numberFormat(Number(formInfo.monthlyExpenses))
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
              formInfo.assetValue === null ? "" : numberFormat(Number(formInfo.assetValue))
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
              formInfo.liabilitiesValue === null ? "" : numberFormat(Number(formInfo.liabilitiesValue))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        {openChecks &&
          <>
            <Grid item md={12} xs={12}>
              <hr style={{ width: "100%", height: "1px", background: theme.colors.primary25, margin: 0 }} />
            </Grid>
            <Grid item md={12} xs={12}>
              <Col gap="8px">
                <Text
                  color={theme.colors.white}
                  font={theme.fonts.family.primaryBold}
                  weight={theme.fonts.weight.bold}
                  size={theme.fonts.size.sm}
                  mb="4px"
                >
                  Declaro expresamente que:
                </Text>
                {checkboxOptions.map((ele, indx) => (
                  <Row key={indx}>
                    <Checkbox onChange={(event) => handleCheck(event, ele.id)} checked={ele.value} />
                    <Text
                      color={theme.colors.white}
                      font={theme.fonts.family.primary}
                      size={theme.fonts.size.sm}
                      lineHeight={"20px"}
                      mt="7px"
                    >
                      {ele.text}
                    </Text>
                  </Row>
                ))}
              </Col>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                {...inputsProps}
                label={"Origen de mis fondos*"}
                placeholder={"Cuéntanos de donde provienen tus ingresos"}
                id="incomeOrigin"
                notFocused={true}
                value={formInfo.incomeOrigin}
                onChange={handleChangeText} 
                inputProps={{
                  maxLength: 200
                }}
              />  
            </Grid>
          </>
        }
      </Grid>
    </ColForm>
  )
}