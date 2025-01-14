import { Div, Text } from "@/styles/Common";
import React from "react";
import { WrapperAttendanceSummary, WrapperServicesTitle, WrapperTitle } from "./style";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { theme } from "@/styles/theme";

const AttendanceSummary = ({isMobile, isTablet}) => {
  const rows = [
    { service: "Referencia y coordinación de adiestrador de perros", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Referencia y coordinación de caminatas eco-recreativas caninas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Referencia y coordinación de clínicas veterinarias", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Información sobre guarderías de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Orientación telefónica para el transporte de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Coordinación radiografías, ecografías, y cirugías", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Referencia y coordinación con salón de belleza, boutiques y clínicas veterinarias", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Referencia y coordinación con cementerios de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { service: "Asistencia legal telefónica", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
  ];

  const rowPadding = (index) => {
    return index % 2 === 0 ? "12px 35px" : "8px 35px";
  };

  const border = "none";

  const TableRowComponent = ({ row, index }) => (
    <TableRow key={row.service} style={{ backgroundColor: index % 2 === 0 ? theme.colors.white : theme.colors.light4 }}>
      <TableCell component="th" scope="row" style={{ border: border, padding: index % 2 === 0 ? "12px 35px" : "8px 35px" }}>
        <Text color={theme.colors.purple}>{row.service}</Text>
      </TableCell>
      <TableCell align="center" style={{ border: border, padding: rowPadding(index), borderLeft: `1px solid ${theme.colors.gray300}`, borderRight: `1px solid ${theme.colors.gray300}` }}>
        <Text color={theme.colors.gray300}>{row.yearEvent}</Text>
      </TableCell>
      <TableCell align="center" style={{ border: border, padding: rowPadding(index), borderRight: `1px solid ${theme.colors.gray300}` }}>
        <Text color={theme.colors.gray300}>{row.maxCoverage}</Text>
      </TableCell>
    </TableRow>
  );

  const Title = [
    { title: "Eventos por año", backgroundColor: theme.colors.orange500, right: "235px", top: "-14px" },
    { title: "Monto máximo de cobertura", backgroundColor: theme.colors.blue200, right: "55px", top: "-14px" },
  ];

  return (
    <Div p={isMobile ? "100px 20px 70px 20px" : "300px 90px 200px 90px"} direction="column">
      <Text
        color={theme.colors.blue200}
        size={isMobile ? theme.fonts.size.h4s : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        mb="60px"
      >
        Resumen de asistencia
      </Text>
      <WrapperAttendanceSummary>  
        {!isMobile && !isTablet && (
          <WrapperServicesTitle>
            Servicios de asistencia
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
                    <Text color={theme.colors.purple}>Servicios por plan de asistencia</Text>
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
      </WrapperAttendanceSummary>
    </Div>
  )
};

export default AttendanceSummary;
