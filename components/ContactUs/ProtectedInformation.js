import React from "react";
import { Text, Title, WrapperInformation } from "./styles";
import { theme } from "@/styles/theme";

const ProtectedInformation = () => {
  return (
    <WrapperInformation>
      <Title>Tu información está protegida con nosotros</Title>
      <Text>
        El cuidado y protección de tu información es una{" "}
        <strong>prioridad para nosotros.</strong> Llevamos a cabo todos nuestros
        procesos con estricto cumplimiento a nuestra{" "}
        <strong>política de privacidad y tratamiento de datos,</strong> diseñada
        para ofrecerte seguridad y transparencia en el manejo de tu información.
        Conoce más sobre cómo tratamos tus datos haciendo{" "}
        <a href="" style={{ color: theme.colors.green }}>
          clic aquí
        </a>{" "}
        o{" "}
        <a href="" style={{ color: theme.colors.green }}>
          contáctanos
        </a>{" "}
        para resolver cualquier duda o inquietud
      </Text>
    </WrapperInformation>
  );
};

export default ProtectedInformation;
