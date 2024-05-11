/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
import { Col, Div, Row, Text } from "@/styles/Common";
import React, { useEffect, useState } from "react";
import { Card, DashedLine, SaveSuccess } from "./styles";
import { Grid } from "@mui/material";
import { theme } from "@/styles/theme";
import Image from "next/image";
import pending from "@/assets/icons/pendingStepper.svg";
import success from "@/assets/icons/successStepper.svg";
import error from "@/assets/icons/closeStepper.svg";
import alert from "@/assets/icons/alertStepper.svg";
import alertIcon from "@/assets/icons/alert-yellow.svg";
import alertIconError from "@/assets/icons/alert-red.svg";
import cancelIcon from "@/assets/icons/cancel-red.svg";
import { useDispatch, useSelector } from "react-redux";
import useGetLoanFormAssessorConcept from "@/hooks/Customers/useGetLoanFormAssessorConcept";

export const InsuranceHistory = ({ historyInfo }) => {
  const dispatch = useDispatch();
  const { loanInfo, selectedClient } = useSelector((state) => state)?.clients;
  const { applications } = useSelector((state) => state);

  /*   const loanFormAssesorConcept = useGetLoanFormAssessorConcept(
    applications?.selectedApplication?.loanApplicationId
  );
  const { data: dataAssesorConcept, isLoading: isLoadingAssessorConcept } =
    loanFormAssesorConcept;
  const [formsConcept, setFormsConcept] = useState({
    concept: false,
    comments: "",
  });
  useEffect(() => {
    if (dataAssesorConcept?.data?.getLoanForm) {
      const hasNews = _.some(dataAssesorConcept?.data?.getLoanForm, {
        concept: "Presenta novedades",
      });
      const comments = _.map(
        dataAssesorConcept?.data?.getLoanForm,
        "comment"
      ).join(", ");
      setFormsConcept({
        concept: hasNews,
        comments: hasNews ? comments : "Sin novedades",
      });
    }
  }, [dataAssesorConcept, isLoadingAssessorConcept]); */

  const designStepper = (status) => {
    switch (status) {
      case "Pending":
        return { icon: pending, lineColor: theme.colors.green500 };
      case "Alert":
        return { icon: alert, lineColor: theme.colors.yellow600 };
      case "Error":
        return { icon: error, lineColor: theme.colors.error };
      case "Success":
        return { icon: success, lineColor: theme.colors.green500 };
      default:
        return { icon: success, lineColor: theme.colors.green500 };
    }
  };

  const validation = (status) => {
    switch (status) {
      case 1:
        return {
          background: theme.colors.yellow100,
          color: theme.colors.yellow600,
          label: "Presta una novedad",
          icon: alertIcon,
        };
      case 2:
        return {
          background: theme.colors.error100,
          color: theme.colors.error,
          label: "Cliente no apto",
          icon: cancelIcon,
        };
      case 3:
        return {
          background: theme.colors.error100,
          color: theme.colors.error,
          label: "Error en la comunicación",
          icon: alertIconError,
        };
      default:
        return {
          background: theme.colors.white,
          color: theme.colors.white,
          label: "",
          icon: "",
        };
    }
  };

  return (
    <Row m="24px 0 0 0" gap="16px">
      <Div width="24px" direction="column">
        {historyInfo.map((ele, indx) => (
          <Div key={indx} direction="column" align="center">
            <Image alt="icon" src={designStepper(ele.statusCard)?.icon} />
            {indx < historyInfo.length - 1 && (
              <DashedLine color={designStepper(ele.statusCard)?.lineColor} />
            )}
          </Div>
        ))}
      </Div>
      <Col gap="16px">
        {historyInfo.map((ele, indx) => (
          <Card key={indx} style={{ flexDirection: "column" }} height="auto">
            {((ele.status === "Formularios diligenciados" &&
              formsConcept.concept) ||
              ele.status === "Cliente no asegurable") && (
              <Div
                background={theme.colors.yellow100}
                radius="4px"
                p="6px 10px"
                m="0 0 16px 0"
              >
                <Row gap="4px" align="center">
                  <Image alt="alert" src={alertIcon} width={16} height={16} />
                  <Text
                    color={theme.colors.yellow600}
                    font={theme.fonts.family.primaryMedium}
                    size={theme.fonts.size.sm}
                  >
                    Presenta novedad{" "}
                  </Text>
                </Row>
              </Div>
            )}
            {ele.validationClientResult !== 0 &&
              ele.validationClientResult !== null && (
                <Div
                  background={validation(ele.validationClientResult).background}
                  radius="4px"
                  p="6px 10px"
                  m="0 0 16px 0"
                >
                  <Row gap="4px" align="center">
                    <Image
                      alt="alert"
                      src={validation(ele.validationClientResult).icon}
                      width={16}
                      height={16}
                    />
                    <Text
                      color={validation(ele.validationClientResult).color}
                      font={theme.fonts.family.primaryMedium}
                      size={theme.fonts.size.sm}
                    >
                      {validation(ele.validationClientResult).label}{" "}
                    </Text>
                  </Row>
                </Div>
              )}
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
                  {ele.status === "Formularios diligenciados" &&
                  formsConcept.concept ? (
                    <Col>
                      {formsConcept.comments
                        .split(",")
                        .map((comment, index) => (
                          <Text
                            key={index}
                            color={theme.colors.neutralGray900}
                            font={theme.fonts.family.primary}
                            size={theme.fonts.size.md}
                          >{`\u2022 ${comment.trim()}`}</Text>
                        ))}
                    </Col>
                  ) : (
                    <Text
                      color={theme.colors.neutralGray900}
                      font={theme.fonts.family.primary}
                      size={theme.fonts.size.md}
                    >
                      {ele.status === "Cotización rechazada"
                        ? `Motivo de rechazo: ${ele.observations}`
                        : ele.observations}
                    </Text>
                  )}
                </Col>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Col>
    </Row>
  );
};
