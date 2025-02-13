import { Div, Text } from "@/styles/Common";
import React, { useEffect, useState, useMemo } from "react";
import { Select } from "../Common/Select";
import { Grid, MenuItem } from "@mui/material";
import { theme } from "@/styles/theme";
import { WrapperServicesInfo } from "./style";

const SummaryPlanResponsive = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceInfo, setServiceInfo] = useState([]);

  const services= [
    { value: 1, label: "Paseador de mascotas", yearEvent: "2 eventos", maxCoverage: "$50.000", calendarDays: "30 días" },
    { value: 2, label: "Hotel para mascotas por hospitalización del afiliado", yearEvent: "2 eventos", maxCoverage: "$150.000", calendarDays: "30 días" },
    { value: 3, label: "Orientación médica veterinaria telefónica", yearEvent: "Sín Límite", maxCoverage: "Sín Límite", calendarDays: "No aplica" },
    { value: 4, label: "Consulta médica veterinaria en red GEA", yearEvent: "3 eventos", maxCoverage: "$120.000", calendarDays: "30 días" },
    { value: 5, label: "Vacunación en red veterinaria", yearEvent: "2 eventos", maxCoverage: "$100.000", calendarDays: "90 días" },
    { value: 6, label: "Traslado de la mascota por emergencia: accidente o enfermedad", yearEvent: "3 eventos", maxCoverage: "$120.000", calendarDays: "30 días" },
    { value: 7, label: "Asistencia médica veterinaria por ingestión de cuerpos extraños", yearEvent: "1 evento", maxCoverage: "$120.000", calendarDays: "30 días" },
    { value: 8, label: "Auxilio para la esterilización de la mascota", yearEvent: "1 evento", maxCoverage: "$120.000", calendarDays: "30 días" },
    { value: 9, label: "Servicio de eutanasia por enfermedad o accidente grave", yearEvent: "1 evento", maxCoverage: "$200.000", calendarDays: "90 días" },
    { value: 10, label: "Servicio de cremación por enfermedad o accidente", yearEvent: "1 evento", maxCoverage: "$300.000", calendarDays: "90 días" },
    { value: 11, label: "Auxilio para desparacitación", yearEvent: "1 evento", maxCoverage: "$70.000", calendarDays: "30 días" },
    { value: 12, label: "Auxilio pipeta antipulgas", yearEvent: "1 evento", maxCoverage: "$80.000", calendarDays: "90 días" },
    { value: 13, label: "Auxilio para radiografías, ecografías y cirujías para mascota", yearEvent: "1 evento", maxCoverage: "$100.000", calendarDays: "30 días" },
  ];

  useEffect(() => {
    const currentService = services.find(service => service.value === selectedService);
    if (currentService) {
      setServiceInfo([
        { label: "Eventos por año", value: currentService.yearEvent, backgroundColor: theme.colors.orange500 },
        { label: "Monto máximo de cobertura", value: currentService.maxCoverage, backgroundColor: theme.colors.purple },
        { label: "Carencia días de calendario", value: currentService.calendarDays, backgroundColor: theme.colors.blue200 },
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

export default SummaryPlanResponsive;