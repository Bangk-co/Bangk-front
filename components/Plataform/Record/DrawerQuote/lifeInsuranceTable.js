import React from "react";
import { Card, SaveWrapper, WrapperData } from "./styles";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";

export const LifeInsuranceTable = ({
  bangkInsuranceData,
  currentInsuranceData,
  subtitleProps,
  saveValue
}) => {
  const textValueProps = {
    color: theme.colors.primary900,
    font: theme.fonts.family.primaryBold,
    weight: theme.fonts.weight.bold,
    size: theme.fonts.size.ft,
    lineHeight: "28px",
  }

  const titleProps = {
    color: theme.colors.green900,
    font: theme.fonts.family.primaryBold,
    weight: theme.fonts.weight.bold,
    size: theme.fonts.size.default2,
    lineHeight: "20px",
  }

  const titles = [
    { label: "Actual", background: theme.colors.neutralGray900 },
    { label: "Con Bangk", background: theme.colors.orange }
  ]

  return (
    <>
      <Card>
        <Grid container>
          <Grid item md="12">
            <Div p="8px 16px 8px 16px" height="36px" align="center">
              <Text { ...titleProps }>
                Seguro de vida
              </Text>
            </Div>
          </Grid>
          {titles.map((ele, indx) => (
            <Grid key={indx} item md="6">
              <Div height="36px" justify="center" align="center" style={{ background: ele.background }}>
                <Text
                  color={theme.colors.white}
                  font={theme.fonts.family.primaryMedium}
                  weight={theme.fonts.weight.medium}
                  size={theme.fonts.size.sm}
                  lineHeight={"20px"}
                >
                  {ele.label}
                </Text>
              </Div>
            </Grid>
          ))}
          <Div height="152px" width="100%">
            <Div width="50%" style={{ borderRight: `0.5px solid ${theme.colors.neutralGray200}` }}>
              <Grid container direction={"column"}>
                {currentInsuranceData.map((ele, indx) => (
                  <Grid key={indx} item md="6">
                    <Div justify="center" align="center">
                      <WrapperData style={{ borderBottom: indx < 1 && `1px solid ${theme.colors.neutralGray200}` }}>
                        <Text { ...subtitleProps }>{ele.label}</Text>
                        <Text { ...textValueProps }>{ele.value}</Text>
                      </WrapperData>
                    </Div>
                  </Grid>
                ))}
              </Grid>
            </Div>
            <Div width="50%" style={{ borderLeft: `0.5px solid ${theme.colors.neutralGray200}` }}>
              <Grid container direction={"column"}>
                {bangkInsuranceData.map((ele, indx) => (
                  <Grid key={indx} item md="6" direction={"column"}>
                    <Div justify="center" align="center">
                      <WrapperData style={{ borderBottom: indx < 1 && `1px solid ${theme.colors.neutralGray200}` }}>
                        <Text { ...subtitleProps }>{ele.label}</Text>
                        <Text { ...textValueProps }>{ele.value}</Text>
                      </WrapperData>
                    </Div>
                  </Grid>
                ))}
              </Grid>
            </Div>
          </Div>
        </Grid>
      </Card>
      <Div m="20px 0 0 0" height="88px" direction="column">
        <Div height="50%" justify="center" align="center">
          <Text { ...titleProps }>
            Ahorro anual
          </Text>
        </Div>
        <SaveWrapper>
          <Text { ...textValueProps } color={theme.colors.green900} >
            {saveValue}
          </Text>
        </SaveWrapper>
      </Div>
    </>
  )
}