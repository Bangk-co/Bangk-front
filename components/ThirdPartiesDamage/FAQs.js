import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import faqs from "@/assets/img/faqs.png";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperFaqs } from "./styles";
import { CollapseLanding } from "../Common/CollapseLanding";

const FAQs = ({ isMobile }) => {
  const [activeKey, setActiveKey] = useState(["0"]);
  const panels = [
    {
      key: "1",
      header: "¿Qué es el seguro de responsabilidad civil contra terceros?",
      summary: "",
      panel:
        "El seguro de responsabilidad civil contra terceros es un producto básico que protege a los terceros en caso de que causes daños materiales, físicos y/o morales (psicológicos), cubriendo hasta 4 mil millones de pesos.",
    },
    {
      key: "2",
      header: "¿Qué cubre el seguro de responsabilidad civil contra terceros?",
      summary: "",
      panel:
        "Este seguro cubre los daños que puedas causar a otras personas o sus bienes, incluyendo responsabilidad civil extracontractual y amparo patrimonial. También ofrece asistencia jurídica y cobertura de accidentes personales para ti y los ocupantes de tu auto en caso de accidente.",
    },
    {
      key: "3",
      header:
        "¿Por qué necesito un seguro de responsabilidad civil contra terceros?",
      summary: "",
      panel:
        "Este seguro es esencial para protegerte de posibles demandas y costos asociados con daños a terceros, que pueden ser difíciles de cuantificar. Te brinda la tranquilidad de saber que no tendrás que enfrentar estos costos por tu cuenta.",
    },
    {
      key: "4",
      header:
        "¿Cuál es el monto de cobertura del seguro de responsabilidad civil contra terceros?",
      summary: "",
      panel:
        "El seguro cubre hasta 4 mil millones de pesos en daños a terceros, proporcionando una amplia protección financiera en caso de accidentes graves.",
    },
    {
      key: "5",
      header: "¿Qué es la responsabilidad civil extracontractual?",
      summary: "",
      panel:
        "La responsabilidad civil extracontractual se refiere a la obligación de reparar los daños causados a terceros, incluso si no existe un contrato previo entre las partes.",
    },
    {
      key: "6",
      header: "¿Qué es el amparo patrimonial?",
      summary: "",
      panel:
        "El amparo patrimonial cubre los daños materiales que puedas causar a los bienes de terceros, protegiendo tu patrimonio personal de demandas y reclamaciones.",
    },
    {
      key: "7",
      header: "¿Cómo funciona la asistencia jurídica incluida en el seguro?",
      summary: "",
      panel:
        "En caso de un accidente automovilístico, contarás con asistencia jurídica para ayudarte a manejar cualquier procedimiento legal que surja, garantizando que tengas el apoyo necesario durante todo el proceso.",
    },
    {
      key: "8",
      header: "¿Qué incluye la cobertura de accidentes personales?",
      summary: "",
      panel:
        "La cobertura de accidentes personales proporciona indemnización por lesiones sufridas por ti y los ocupantes de tu auto en caso de accidente, ayudando a cubrir los costos médicos y otros gastos relacionados.",
    },
    {
      key: "9",
      header:
        "¿Cómo puedo contratar el seguro de responsabilidad civil contra terceros?",
      summary: "",
      panel:
        "Puedes contratar el seguro de responsabilidad civil contra terceros a través de nuestra plataforma en línea, proporcionando la información de tu vehículo y los datos personales necesarios.",
    },
    {
      key: "10",
      header: "¿Cómo me contacto con el soporte de Bangk?",
      summary: "",
      panel:
        "Para cualquier consulta o asistencia, puedes contactarnos a través de nuestra línea de WhatsApp al 3183900000 o enviarnos un correo electrónico a soporte@bangk.com.",
    },
  ];

  return (
    <WrapperFaqs>
      <Div
        m="0 0 40px 0"
        direction={isMobile ? "column" : "row"}
        align="center"
      >
        <Col
          width={isMobile ? "100%" : "60%"}
          style={{ order: isMobile ? 2 : 0 }}
        >
          <CollapseLanding
            panels={panels}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            headerFontSize={theme.fonts.size.default}
          />
        </Col>
        <Col
          width={isMobile ? "100%" : "40%"}
          p="0 40px"
          align={isMobile && "center"}
          style={{ order: isMobile ? 1 : 0 }}
        >
          <Image
            alt="star"
            src={faqs}
            width={isMobile ? 200 : 450}
            height={isMobile ? 125 : 281}
          />
        </Col>
      </Div>
    </WrapperFaqs>
  );
};

export default FAQs;
