import { Div, Text } from "@/styles/Common";
import React, { useEffect, useState } from "react";
import { WrapperAttendanceSummary, WrapperServicesInfo, WrapperServicesTitle, WrapperTitle } from "./style";
import { Grid, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { theme } from "@/styles/theme";
import { Select } from "../Common/Select";

const AttendanceSummaryResponsive = ({isMobile, isTablet}) => {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceInfo, setServiceInfo] = useState([]);

  const services = [
    { id: 1, label: "Referencia y coordinación de adiestrador de perros", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 2, label: "Referencia y coordinación de caminatas eco-recreativas caninas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 3, label: "Referencia y coordinación de clínicas veterinarias", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 4, label: "Información sobre guarderías de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 5, label: "Orientación telefónica para el transporte de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 6, label: "Coordinación radiografías, ecografías, y cirugías", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 7, label: "Referencia y coordinación con salón de belleza, boutiques y clínicas veterinarias", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 8, label: "Referencia y coordinación con cementerios de mascotas", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
    { id: 9, label: "Asistencia legal telefónica", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", },
  ];

  useEffect(() => {
    const currentService = services.find(service => service.value === selectedService);
    if (currentService) {
      setServiceInfo([
        { label: "Eventos por año", value: currentService.yearEvent, backgroundColor: theme.colors.orange500 },
        { label: "Monto máximo de cobertura", value: currentService.maxCoverage, backgroundColor: theme.colors.blue200 },
      ]);
    }
  }, [selectedService]);

  const handleSelectService = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <Div direction="column" gap="20px">
      <Select
        label={"Servicios por plan de asistencia"}
        notFocused={true}
        name={"services"}
        value={selectedService}
        onChange={handleSelectService}
        labelFont={theme.fonts.family.primaryBold}
        displayEmpty
      >
        <MenuItem value={null} disabled>
          Selecciona un servicio
        </MenuItem>
        {services?.map((ele, indx) => (
          <MenuItem
            key={indx}
            value={ele.value}
            style={{ fontFamily: theme.fonts.family.primary }}
          >
            {ele.label}
          </MenuItem>
        ))}
      </Select>
      <Div direction="column" gap="20px">
        {serviceInfo.map((ele, indx) => (
          <Grid container key={indx} alignItems="center">
            <Grid item xs={6}>
              <Text>{ele.label}</Text>
            </Grid>
            <Grid item xs={6} textAlign={"-webkit-right"}>
              <WrapperServicesInfo backgroundColor={ele.backgroundColor}>
                <Text color={theme.colors.white}>{ele.value}</Text>
              </WrapperServicesInfo>
            </Grid>
          </Grid>
        ))}
      </Div>
    </Div>
  )
};

export default AttendanceSummaryResponsive;
