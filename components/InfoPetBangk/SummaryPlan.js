import React from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperServicesTitle, WrapperSummaryPlan, WrapperTitle } from "./style";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


const SummaryPlan = ({ isMobile, isTablet }) => {
  const rows = [
    { service: "Paseador de mascotas", yearEvent: "2 eventos", maxCoverage: "$50.000", calendarDays: "30 días" },
    { service: "Hotel para mascotas por hospitalización del afiliado", yearEvent: "2 eventos", maxCoverage: "$150.000", calendarDays: "30 días" },
    { service: "Orientación médica veterinaria telefónica", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", calendarDays: "No aplica" },
    { service: "Consulta médica veterinaria en red GEA", yearEvent: "3 eventos", maxCoverage: "$120.000", calendarDays: "30 días" },
    { service: "Vacunación en red veterinaria", yearEvent: "2 eventos", maxCoverage: "$100.000", calendarDays: "90 días" },
    { service: "Traslado de la mascota por emergencia: accidente o enfermedad", yearEvent: "3 eventos", maxCoverage: "$120.000", calendarDays: "30 días" },
    { service: "Asistencia médica veterinaria por ingestión de cuerpos extraños", yearEvent: "1 evento", maxCoverage: "$120.000", calendarDays: "30 días" },
    { service: "Auxilio para la esterilización de la mascota", yearEvent: "1 evento", maxCoverage: "$120.000", calendarDays: "30 días" },
    { service: "Servicio de eutanasia por enfermedad o accidente grave", yearEvent: "1 evento", maxCoverage: "$200.000", calendarDays: "90 días" },
    { service: "Servicio de cremación por enfermedad o accidente", yearEvent: "1 evento", maxCoverage: "$300.000", calendarDays: "90 días" },
    { service: "Auxilio para desparacitación", yearEvent: "1 evento", maxCoverage: "$70.000", calendarDays: "30 días" },
    { service: "Auxilio pipeta antipulgas", yearEvent: "1 evento", maxCoverage: "$80.000", calendarDays: "90 días" },
    { service: "Auxilio para radiografías, ecografías y cirujías para mascota", yearEvent: "1 evento", maxCoverage: "$100.000", calendarDays: "30 días" },
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
      <TableCell align="center" style={{ border: border, padding: rowPadding(index) }}>
        <Text color={theme.colors.gray300}>{row.calendarDays}</Text>
      </TableCell>
    </TableRow>
  );

  const Title = [
    { title: "Eventos por año", backgroundColor: theme.colors.orange500, right: "405px", top: "-14px" },
    { title: "Monto máximo de cobertura", backgroundColor: theme.colors.purple, right: "225px", top: "-14px" },
    { title: "Carencia días de calendario", backgroundColor: theme.colors.blue200, right: "55px", top: "-14px" },
  ];

  return (
    <Div p={isMobile ? "40px 20px 0 20px" : "100px 90px 0 90px"} direction="column">
      <Text
        color={theme.colors.blue200}
        size={isMobile ? theme.fonts.size.h4s : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        mb="60px"
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
      </WrapperSummaryPlan>
    </Div>
  );
};

export default SummaryPlan;