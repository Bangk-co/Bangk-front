import React from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { WrapperServicesTitle, WrapperSummaryPlan, WrapperSummaryPlanContainer, WrapperTitle } from "./styles";
import Image from "next/image";
import starCheck from "@/assets/img/star-check.png";

const SummaryPlan = ({ isMobile, isTablet }) => {
  const rows = [
    { service: "Orientación médica telefónica", plan: "Sín Límite" },
    { service: "TeleMedicina", plan: "5 eventos por mes" },
    { service: "Acompañamiento a citas médicas", plan: "2 eventos" },
    { service: "Empleada doméstica", plan: "2 eventos" },
    { service: "Recordatorio ingesta de medicamentos", plan: "Sin Límite" },
    { service: "Terapias básicas o domicilio", plan: "1 evento" },
    { service: "Médico a domicilio", plan: "2 eventos" },
    { service: "Ambulancia terrestre", plan: "5 eventos" },
    { service: "Coordinación de citas médicas", plan: "No aplíca" },
  ];

  const rowPadding = (index) => {
    return index % 2 === 0 ? "12px 35px" : "8px 35px";
  };

  const border = "none";

  const TableRowComponent = ({ row, index }) => (
    <TableRow key={row.service} style={{ backgroundColor: index % 2 === 0 ? theme.colors.white : theme.colors.light4 }}>
      <TableCell component="th" scope="row" style={{ border: border, padding: index % 2 === 0 ? "12px 15px" : "8px 15px" }}>
        <Text color={theme.colors.green1000}>{row.service}</Text>
      </TableCell>
      <TableCell align="center" style={{ border: border, padding: rowPadding(index), borderLeft: `1px solid ${theme.colors.gray300}`, borderRight: `1px solid ${theme.colors.gray300}` }}>
        <Text color={theme.colors.gray300}>{row.plan}</Text>
      </TableCell>
    </TableRow>
  );

  const Title = [
    { title: "Plan MedBangk", backgroundColor: theme.colors.orange500, right: "76px", top: "-14px" },
  ];

  return (
    <WrapperSummaryPlanContainer>
      <Text
        color={theme.colors.green1000}
        size={isMobile ? theme.fonts.size.h4s : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        mb={isMobile ? "50px" : "70px"}
      >
        Resumen del plan
      </Text>
        <WrapperSummaryPlan>  
          {!isMobile && !isTablet && (
            <WrapperServicesTitle>
              Servicios por plan de asistencia
            </WrapperServicesTitle>
          )}
          {!isMobile && !isTablet && Title.map((title, index) => (
            <WrapperTitle 
              key={index} 
              backgroundColor={title.backgroundColor} 
              right={title.right}
              top={title.top}
            >
              {title.title}
            </WrapperTitle>
          ))}
          <Div 
            style={{ 
              maxHeight: 'max-content', 
              overflowY: 'auto', 
              borderRadius: '11px',
              width: '100%',
            }}>
            <Table>
              {(isMobile || isTablet) && (
                <TableHead>
                  <TableRow>
                    <TableCell style={{ backgroundColor: theme.colors.yellow }}>
                      <Text color={theme.colors.white}>Servicios por plan de asistencia</Text>
                    </TableCell>
                    {Title.map((title, index) => (
                      <TableCell key={index} style={{ backgroundColor: title.backgroundColor }}>
                        <Text color={theme.colors.white}>{title.title}</Text>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              )}
              <TableBody>
                {rows.map((row, index) => (
                  <TableRowComponent key={row.service} row={row} index={index} />
                ))}
              </TableBody>
            </Table>
          </Div>
        </WrapperSummaryPlan>
        <Div m="40px 0 0 36px" align="center" gap="36px">
          <Image alt="star-check" src={starCheck} width={50} />
          <Text color={theme.colors.green} size={theme.fonts.size.h6} style={{ textAlign: "left" }}>
            Pregunta por nuestros diferentes y convenientes 
            <br />
            <span style={{ fontFamily: theme.fonts.family.primaryBold }}>medios de pago</span>
          </Text>
        </Div>
    </WrapperSummaryPlanContainer>
  );
};

export default SummaryPlan;