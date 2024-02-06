import { Col, Div, Row, Text } from "@/styles/Common";
import React from "react";
import { Card, DashedLine } from "./styles";
import { Grid } from "@mui/material";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import Image from "next/image";

export const Record = ({ historyInfo }) => {
  return (
    <Row m="24px 0 0 0" gap="16px">
      <Div width="24px" direction="column">
        {historyInfo.map((ele, indx) => (
          <Div key={indx} direction="column" align="center">
            <Image alt="icon" src={ele.icon} />
            {indx < historyInfo.length - 1 && (
              <DashedLine />
            )}
          </Div>
        ))}
      </Div>
      <Col gap="16px">
        {historyInfo.map((ele, indx) => (
          <Card key={indx}>
            <Grid container>
              <Grid item md={2.5}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Estado de solicitud
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.status}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={2}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Fecha de actualización
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.date}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={5}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Observaciones
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.observations}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={2.5}>
                <Div height="100%" justify="end" align="center">
                  <Button
                    background={theme.colors.green900}
                    width={"200px"}
                    height={"40px"}
                  >
                    Ver extracto
                  </Button>
                </Div>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Col>
    </Row>
  )
}