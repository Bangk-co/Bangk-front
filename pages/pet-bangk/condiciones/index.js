import React, { useEffect } from "react";
import Image from "next/image";
import arrow from "@/assets/icons/green-arrow.svg";
import { BulletPoint, Title, Wrapper } from "@/styles/Legales";
import { Col, Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import {
  cookies,
  cookiesSettings,
  definitions,
  minorsData,
  personalData,
  personalData2,
} from "@/utilities/options";
import { useRouter } from "next/router";

const PetConditions = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { query } = router;

  const legalRedirect = (section) => {
    switch (section) {
      case "terms":
        const position = document.getElementById("terms").offsetTop;
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
        break;
      case "policy":
        const position2 = document.getElementById("policy").offsetTop;
        window.scrollTo({
          top: position2,
          behavior: "smooth",
        });
        break;
      case "cookies":
        const position3 = document.getElementById("cookies").offsetTop;
        window.scrollTo({
          top: position3,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (query.section) {
      legalRedirect(query.section);
    }
  }, [query]);

  const hrProps = {
    background: theme.colors.green,
    height: "1px",
    width: "100%",
    marginBottom: isMobile || isTablet ? "60px" : "100px",
    marginTop: isMobile || isTablet ? "60px" : "100px",
  };

  const glosary = [
    {
      word: "GEA",
      definition:
        "Siglas de GRUPO ESPECIALIZADO DE ASISTENCIA COLOMBIA S.A.S. definido en el contrato principal como contratista.",
    },
    {
      word: "Bangk",
      definition: "Definido en el contrato principal contratante.",
    },
    {
      word: "Afiliado",
      definition:
        "Persona titular del plan de asistencia y dueño de la mascota beneficiaria de los servicios de asistencia.",
    },
    {
      word: "Mascota",
      definition: "Perro o gato beneficiario de plan de asistencia.",
    },
    {
      word: "Domicilio",
      definition:
        "Ciudad de residencia habitual o cualquier otro domicilio que el Afiliado haya notificado a GEA.",
    },
    {
      word: "Período de Vigencia",
      definition:
        "Período durante el cual la mascota tiene derecho a los servicios de asistencia.",
    },
    {
      word: "Servicios de Asistencia",
      definition:
        "Los servicios asistenciales que presta GEA a la mascota en los términos y condiciones del presente anexo.",
    },
    {
      word: "Evento",
      definition:
        "Es una situación de asistencia reportada por un Afiliado que dé derecho a la prestación de uno de los servicios, de acuerdo con los términos y condiciones que se aluden en el presente documento.",
    },
    {
      word: "Fecha de Inicio",
      definition:
        "Fecha a partir de la cual los servicios que ofrece GEA estarán a disposición de la mascota.",
    },
    {
      word: "País de Residencia",
      definition:
        "Para fines de este contrato y sus anexos, será el país en donde se haya firmado el contrato con GEA y donde tenga su domicilio el Afiliado.",
    },
    {
      word: "Proveedor",
      definition:
        "Es el personal subcontratado por GEA competente para prestar los servicios a un Afiliado, de acuerdo con los términos y condiciones que se alude en el presente documento.",
    },
    {
      word: "Exclusiones",
      definition:
        "Servicios específicos que no están cubiertos por el plan para mascotas.",
    },
    {
      word: "Carencia de tiempo",
      definition:
        "Este se refiere al tiempo en que la mascota debe estar inscrita en el plan de asistencia antes de que se inicien las coberturas para ciertos servicios. Durante este período, el plan para mascotas no cubrirá ningún gasto. El período de espera se especifica en el presente documento",
    },
  ];

  const cellStyle = {
    textAlign: "left",
    padding: "8px",
    fontFamily: "theme.fonts.family.primary",
    color: "green",
  };

  const headerStyle = {
    ...cellStyle,
    fontFamily: "theme.fonts.family.primaryBold",
    backgroundColor: "#f2f2f2",
  };

  return (
    <Wrapper>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb="40px"
        style={{ lineHeight: 0.8 }}
      >
        Asistencia Mastocas
        <br />
        <span style={{ fontSize: theme.fonts.size.h2 }}>
          Condiciones generales
        </span>
      </Text>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Glosario de términos
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col gap="10px">
        {glosary.map((item, index) => (
          <Text
            key={index}
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primary}
            style={{ textAlign: "left" }}
          >
            <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
              {item.word}:
            </span>{" "}
            {item.definition}
          </Text>
        ))}
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Resumen de servicios por plan
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Text
        color={theme.colors.green}
        font={theme.fonts.family.primary}
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
        mt="10px"
      >
        <table style={{ borderCollapse: "separate", borderSpacing: "0 20px" }}>
          <thead>
            <tr>
              <th>Servicios de asistencia</th>
              <th>Eventos por año</th>
              <th>Monto máximo de cobertura</th>
              <th>Carencia días calendario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paseador de mascotas</td>
              <td style={{ textAlign: "center" }}>2 eventos</td>
              <td style={{ textAlign: "center" }}>$ 50.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Hotel para mascota por hospitalización del dueño</td>
              <td style={{ textAlign: "center" }}>2 eventos * 3 días</td>
              <td style={{ textAlign: "center" }}>$ 150.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Orientación médica veterinaria telefónica</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Consulta médica veterinaria en red GEA</td>
              <td style={{ textAlign: "center" }}>3 eventos</td>
              <td style={{ textAlign: "center" }}>$ 120.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Vacunación en red veterinaria</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 100.000</td>
              <td style={{ textAlign: "center" }}>90 días</td>
            </tr>
            <tr>
              <td>
                Traslado de la mascota por emergencia: accidente o enfermedad
              </td>
              <td style={{ textAlign: "center" }}>3 eventos</td>
              <td style={{ textAlign: "center" }}>$ 120.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>
                Asistencia médica veterinaria por ingestión de cuerpos extraños
              </td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 120.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Auxilio para la esterilización de la mascota</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 120.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Servicio de eutanasia por enfermedad o accidente grave</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 200.000</td>
              <td style={{ textAlign: "center" }}>90 días</td>
            </tr>
            <tr>
              <td>Servicio de cremación por enfermedad o accidente</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 300.000</td>
              <td style={{ textAlign: "center" }}>90 días</td>
            </tr>
            <tr>
              <td>Auxilio para desparasitación</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 70.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Auxilio pipeta antipulgas</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 80.000</td>
              <td style={{ textAlign: "center" }}>90 días</td>
            </tr>
            <tr>
              <td>
                Auxilio para radiografías, ecografías y cirugías para mascota
              </td>
              <td style={{ textAlign: "center" }}>1 evento</td>
              <td style={{ textAlign: "center" }}>$ 100.000</td>
              <td style={{ textAlign: "center" }}>30 días</td>
            </tr>
            <tr>
              <td>Referencia y coordinación de adiestrador de perros</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>
                Referencia y coordinación de caminatas eco-recreativas caninas
              </td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Referencia y coordinación de clínicas veterinarias</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Información sobre guarderías de mascotas</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Referencia y coordinación para el transporte de mascotas</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Coordinación radiografías, ecografías, y cirugías</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>
                Referencia y coordinación con salón de belleza, boutiques y
                clínicas veterinarias
              </td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Referencia y coordinación con cementerios de mascotas</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
            <tr>
              <td>Asistencia legal telefónica</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
              <td style={{ textAlign: "center" }}>No aplica</td>
            </tr>
          </tbody>
        </table>
      </Text>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Detalle de servicios
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Paseador de mascotas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Si el Afiliado dueño de la mascota (perro) se encuentra hospitalizado
          por un periodo superior a 3 días, GEA brindará y coordinará el envío
          hasta su domicilio de un profesional, para que pasee al perro por un
          máximo de 1 hora.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El responsable de la mascota deberá entregar fotocopia del carné de
          vacunas e información sobre aspectos de la condición física y el
          temperamento del canino.
          <br />
          - GEA deja expresa constancia que no se hace responsable por eventos
          fortuitos que comprometan la integridad de la mascota, como el caso de
          accidentes, robo, enfermedad o cualquier situación ajena al control de
          los paseadores caninos durante la prestación del servicio.
          <br />
          - Este servicio deberá ser coordinado con 24 horas de anterioridad al
          paseo.
          <br />
          - La mascota deberá estar desparasitada.
          <br />
          - Este servicio se prestará cerca al lugar de recogida de la mascota,
          a nivel nacional dentro del perímetro urbano, en horario hábil de
          lunes a viernes de 8:00 am a 5:00 pm y sábados de 8:00 am a 12:00 pm.
          <br />- GEA no se hace responsable de las condiciones, precios,
          calidad u honorarios de los trabajos que pueda llegar a elaborar el
          profesional en un posible acuerdo con la Afiliado.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - La mascota que no tenga su plan de vacunación al día.
          <br />- GEA aclara que en fechas especiales como noche de navidad o
          año nuevo no se prestará el servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrarán dos (2) eventos al año, con un
          monto de cobertura máximo de hasta $ 50.000 y una carencia de 30 días
          calendario
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Hotel para mascota por hospitalización del dueño
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Si el Afiliado dueño de la mascota está hospitalizado por un periodo
          superior a tres (3) días y no cuenta con alguien que cuide de su
          mascota, GEA pondrá a disposición de éste, el servicio de guardería
          para que la mascota pueda hospedarse en un centro veterinario
          autorizado por GEA hasta por tres (3) días continuos para que allí
          cuiden de ella
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Este servicio deberá ser coordinado con 24 horas de anterioridad a
          la llegada de la mascota al centro veterinario.
          <br />
          - El Afiliado deberá enviar el carné de vacunación al día de la
          mascota, para acceder al beneficio.
          <br />
          - La mascota deberá estar desparasitada.
          <br />
          - Algunas veterinarias exigen llevar la comida y juguetes de la
          mascota, por lo que será necesario que entreguen esto al momento del
          ingreso.
          <br />
          - El Afiliado deberá reportar el carácter de la mascota y si está
          tomando medicamentos deberá llevarlos, así como deberá dejar clara su
          prescripción.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - La mascota que no tenga su plan de vacunación al día.
          <br />- GEA aclara que en fechas especiales como noche de navidad o
          año nuevo no se prestará el servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrarán dos (2) eventos al año, con un
          monto de cobertura máximo de hasta $ 150.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Orientación médica veterinaria telefónica
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Previa solicitud del Afiliado, GEA proporcionará orientación
          telefónica las 24 (veinticuatro) horas del día, los 365 (trescientos
          sesenta y cinco) días del año, para que el Afiliado pueda resolver
          dudas sobre molestias, signos clínicos, lesiones y enfermedades de su
          mascota gato o perro, donde, el profesional a través de la línea
          telefónica orientará al Afiliado sobre las acciones o procedimientos
          provisionales y/o preventivos que se deban asumir y que puedan ser
          atendidos y resueltos en el hogar. <br />
          El Afiliado también podrá hacer las consultas necesarias sobre: <br />
          - Lectura de exámenes.
          <br />
          - Primeros auxilios en caso de emergencia por accidente o enfermedad
          de la mascota.
          <br />- Manejo y cuidado en caso de viaje de la mascota.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA no se hace responsable de las consecuencias derivadas de estas
          orientaciones, ni los gastos en consultas, medicamentos y/o estudios
          complementarios en los que incurra el Afiliado.
        </Text>

        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año y sin
          límite de cobertura.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Consulta médica veterinaria
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Por solicitud del Afiliado y de acuerdo con la valoración previamente
          autorizada por el equipo veterinario telefónico, GEA brindará consulta
          veterinaria en sitio, la cual será coordinada en la clínica más
          cercana de la red de proveedores de GEA.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - En todas las ocasiones el Afiliado deberá comunicarse con GEA a
          través de los canales dispuestos para solicitudes de servicios.
          <br />
          - Para acceder a esta asistencia la mascota debe estar al día en
          vacunas. <br />
          - En caso de requerirse la consulta veterinaria en el domicilio
          habitual, GEA coordinará el envío del profesional y el costo del
          traslado será asumido por el Afiliado. <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - Este servicio no podrá ser brindado si no es autorizado por el
          equipo de atención telefónica de GEA. <br />- Este servicio no cubre
          tratamientos, exámenes, medicamentos, cirugías y/o procedimientos
          derivados del servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrarán tres (3) eventos al año, con un
          monto de cobertura máximo de hasta $ 120.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Vacunación en red veterinaria
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          A solicitud del Afiliado, GEA brindará el servicio de refuerzo de
          vacunación médica veterinaria con la vacuna triple viral felina o
          antirrábica en gatos y en el caso de perros será la vacuna
          pentavalente o antirrábica en perros.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Para acceder al servicio el Afiliado deberá presentar el carné de
          vacunas de la mascota, el cual deberá ser enviado a través de WhatsApp
          o al correo electrónico: cabinaco@co.geainternacional.com
          <br />
          - Este servicio deberá ser solicitado con 6 horas de anticipación en
          Bogotá y 12 horas en las demás ciudades.
          <br />
          - Para la aplicación del biológico, el propietario deberá informar al
          médico veterinario si la mascota presenta alguna enfermedad
          preexistente o concomitante.
          <br />
          - A razón de la trazabilidad del biológico la respuesta por cada
          individuo puede variar, en caso de presentar signos de alarma deberá
          notificar de inmediato al médico veterinario que realizó la
          vacunación.
          <br />
          - GEA no se responsabiliza por reacción de alergia particular de un
          individuo a un biológico.
          <br />
          - GEA no se responsabiliza de efectos secundarios no deseados.
          <br />
          - El Afiliado deberá estar presente en todo momento con la mascota
          para realizar los protocolos médicos.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Este servicio no cubre tratamientos, exámenes, medicamentos, cirugías
          y/o procedimientos derivados del servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento al año, con un monto
          de cobertura máximo de hasta $ 100.000 y una carencia de 90 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Traslado de la mascota por emergencia: accidente o enfermedad
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          A consecuencia de emergencia, accidente o enfermedad que le suceda a
          la mascota propiedad del Afiliado (gato o perro) y que no sea una
          urgencia vital, GEA coordinará el servicio de traslado en vehículo
          automotor tipo taxi para recogerla y llevarla al centro médico
          veterinario indicado por el Afiliado.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Durante el recorrido la mascota deberá estar acompañada por el
          Afiliado o un tercero designado por él.
          <br />
          - El Afiliado deberá proporcionar los medios que brinden la seguridad
          para el traslado de la mascota (transportadora o kennel).
          <br />
          - El Afiliado deberá enviar el carné de vacunación al día de la
          mascota, para acceder al beneficio.
          <br />
          - La mascota no debe haber sido operada o intervenida quirúrgicamente
          en los últimos 2 meses.
          <br />
          - La mascota deberá estar desparasitada.
          <br />
          - El servicio solo contempla un trayecto desde el domicilio permanente
          del Afiliado hasta el punto de atención el cual deberá estar ubicado
          en zona urbana dentro la ciudad de residencia del Afiliado.
          <br />
          - Este servicio se prestará dentro del área urbana. No incluye áreas
          metropolitanas y áreas que se tipifiquen de riesgo para la prestación
          del servicio por el proveedor (áreas consideradas de zona roja).
          <br />
          - El servicio se brindará en un vehículo tipo taxi.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - La mascota que no tenga su plan de vacunación al día.
          <br />- La coordinación, trámite o diligencia con la clínica
          veterinaria
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrarán tres (3) eventos al año, con un
          monto de cobertura máximo de hasta $ 120.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Asistencia médica veterinaria de control por ingesta de cuerpos
          extraños
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Si a consecuencia de ingesta de un cuerpo extraño la mascota (perro o
          gato) propiedad del Afiliado sufre alteraciones de tráquea o se ve
          comprometida su vida, GEA indicará el centro médico veterinario al
          cual deberá acercarse para para recibir el control respectivo,
          posterior al suceso por ingesta de cuerpos extraños.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Ingesta de un cuerpo extraño se entiende como un objeto no
          alimenticio que tras su ingestión ocasiona un proceso patológico con
          alteraciones en la estructura y/o funcionalidad digestiva requiriendo
          tratamiento veterinario y/o cirugía.
          <br />
          - Sólo será considerada la ingestión de un cuerpo extraño cuando éste
          haya sido identificado de forma concluyente por un médico veterinario
          mediante pruebas diagnósticas como radiología, ecografía o laparotomía
          exploratoria, siendo así, la asistencia solo se prestará si el
          Afiliado cuenta con la radiografía, ecografía o laparotomía
          exploratoria.
          <br />
          - Este servicio solo será brindado para consultas subsecuentes.
          <br />
          - El servicio debe ser solicitado 24 horas de anticipación al evento.
          <br />
          - Este servicio está sujeto a previa evaluación y autorización del
          equipo veterinario de GEA.
          <br />
          - El horario de atención es de lunes a viernes de 8:00 am – 5:00 pm y
          sábados de 8:00 am a 12:00 pm sujeto a disponibilidad de agenda del
          prestador.
          <br />
          - GEA no se hace responsable de las consecuencias derivadas de estas
          consultas, ni los gastos en medicamentos y/o estudios complementarios
          en los que incurra el Afiliado.
          <br />
          - GEA no se hace responsable de las condiciones, precios, calidad u
          honorarios de los trabajos que pueda llegar a elaborar el profesional
          en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          La prestación del servicio cuando sea ingesta de venenos, tóxicos,
          alimentos, bebidas en mal estado remedios caseros, así como fármacos
          administrados sin prescripción médica.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento al año, con un monto
          de cobertura máximo de hasta $ 120.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Auxilio para la esterilización de la mascota
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          A solicitud del Afiliado, GEA brindará un auxilio económico hasta por
          el monto máximo de cobertura para el servicio de esterilización para
          su mascota (perro o gato).
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Antes de realizar el procedimiento de esterilización el Afiliado
          deberá comunicarse a GEA.
          <br />
          - El Afiliado deberá enviar a GEA documento emitido por parte del
          médico veterinario tratante con firma y sello, certificando que la
          mascota es apta para ser sometida a un proceso de esterilización, sin
          riesgos para la misma.
          <br />
          - Este servicio aplica como reembolso, por lo que el Afiliado deberá
          enviar los documentos que se mencionan en el capítulo Manejo de
          reembolsos de este documento.
          <br />
          - GEA no se hace responsable de las consecuencias derivadas de estas
          consultas, ni los gastos en medicamentos y/o estudios complementarios
          en los que incurra el Afiliado.
          <br />
          - GEA no se hace responsable de las condiciones, precios, calidad u
          honorarios de los trabajos que pueda llegar a elaborar el profesional
          en un posible acuerdo con el Afiliado.
          <br />
          - GEA no se responsabiliza de efectos secundarios no deseados.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          El servicio no cubre atenciones médicas complementarias o medicamentos
          derivados del procedimiento
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento al año, con un monto
          de cobertura máximo de hasta $ 120.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Servicio de eutanasia por enfermedad o accidente grave
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de accidente o enfermedad grave vital de la mascota (perro o
          gato) propiedad del Afiliado y sea necesario realizar la aplicación de
          la eutanasia por expresa recomendación del médico veterinario
          tratante, GEA coordinará la prestación del servicio a través de los
          prestadores de su red a nivel nacional hasta el monto máximo de
          cobertura.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá presentar un certificado de un médico veterinario
          con firma y sello, donde se especifique que la eutanasia es el único
          procedimiento por seguir.
          <br />
          - El prestador del servicio realizará una valoración de la mascota y
          dará el visto bueno para este procedimiento.
          <br />
          - Se aclara que estos beneficios se llevarán a cabo únicamente cuando
          el Afiliado haya solicitado y obtenido la previa autorización del
          equipo veterinario de GEA.
          <br />
          - El servicio de eutanasia estará sujeto a la normatividad legal
          actual y solo podrá ser brindado a través de la red de prestadores de
          GEA.
          <br />
          - Se deja establecido que el servicio se prestará según la
          disponibilidad de los proveedores que estén en convenio con GEA.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - Cualquier gasto por concepto de entierro no está incluido.
          <br />
          - Accidentes por enfrentamientos con otros animales en competencias,
          exposiciones y peleas ilegales.
          <br />
          - Accidentes cuando la mascota sea utilizada en funciones de guardia,
          seguridad, actividades policiacas, de defensa civil, seguridad pública
          o privada, experimentación.
          <br />
          - Enfermedades como consecuencia del Virus de Inmunodeficiencia Felina
          (FIV) y del Virus de Leucemia Felina (FELV).
          <br />
          - Hembras en estado de gestación.
          <br />
          - Este servicio excluye automáticamente el servicio de cremación.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento al año, con un monto
          de cobertura máximo de hasta $ 200.000 y una carencia de 90 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Servicio de cremación por enfermedad o accidente
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de fallecimiento de la mascota (perro o gato) propiedad del
          Afiliado a causa de un accidente o enfermedad súbita, GEA se encargará
          de coordinar y llevar a cabo mediante su red de proveedores la
          asistencia exequial. <br />
          La asistencia contempla los siguientes servicios: <br />
          - Recogida de la mascota en domicilio o clínica veterinaria, sin
          recargos adicionales (según cobertura).
          <br />
          - Cremación básica: Consiste en la cremación de la mascota sin
          devolución de cenizas.
          <br />
          - Certificación de cremación digital y personalizado con foto de la
          mascota.
          <br />
          - Carta de despedida digital.
          <br />
          - A solicitud del Afiliado, recuerdo de mechón de la mascota en bolsa
          recordatoria.
          <br />
          - Video de duelo por Psicóloga profesional en duelo de mascotas.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Se aclara que esta asistencia se llevará a cabo únicamente cuando el
          Afiliado haya solicitado y obtenido la previa autorización del
          personal de GEA, para llevar a cabo el servicio fúnebre a través de su
          red de proveedores.
          <br />
          - Se deja establecido que el servicio se prestará según la
          disponibilidad de los proveedores que estén en convenio con GEA.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - Si la muerte de la mascota es resultado de una condición
          preexistente.
          <br />
          - Si la muerte de la mascota se debe a una enfermedad que comienza en
          los primeros 30 días de la cobertura o una lesión por un accidente
          ocurrido en los primeros 15 días de la cobertura.
          <br />
          - Cualquier gasto por concepto de entierro no está incluido.
          <br />
          - La mascota que tenga menos de seis (6) meses cumplidos al momento
          del fallecimiento o más de doce (12) años, al momento de ingresar a la
          asistencia.
          <br />
          - Muerte por enfrentamientos con otros animales en competencias,
          exposiciones y peleas ilegales.
          <br />
          - Accidentes cuando la mascota sea utilizada en funciones de guardia,
          seguridad, actividades policiacas, de defensa civil, seguridad pública
          o privada.
          <br />
          - Enfermedades como consecuencia del Virus de Inmunodeficiencia Felina
          (FIV) y del Virus de Leucemia Felina (FELV).
          <br />
          - Hembras en estado de gestación.
          <br />
          - Este servicio excluye automáticamente el servicio de eutanasia.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento por al año, con un
          monto de cobertura máximo de hasta $ 300.000 y una carencia de 90 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Auxilio para desparasitación
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que la mascota (perro o gato) propiedad del Afiliado
          requiera de desparasitación interna, GEA otorgará un auxilio para los
          medicamentos necesarios por concepto de desparasitación hasta por el
          monto máximo de cobertura.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Para acceder al beneficio, el Afiliado deberá enviar una copia de la
          valoración del médico veterinario donde se determine el procedimiento.
          <br />
          - El Afiliado deberá enviar el carné de vacunación al día y relación
          de las desparasitaciones anteriores de la mascota, para acceder al
          beneficio.
          <br />
          - Solo se cubrirá una mascota propiedad del Afiliado ya sea perro o
          gato.
          <br />
          - Cubrirá únicamente a mascotas en edad de 1 y 9 años.
          <br />
          - Para el reconocimiento de este auxilio será necesario que el
          Afiliado envié la factura del centro veterinario donde éste contenga
          el desglose específico del valor de los medicamentos usados para la
          desparasitación.
          <br />
          - Este servicio aplica como reembolso, por lo que el Afiliado deberá
          enviar los documentos necesarios que se mencionan en el capítulo de
          Manejo de reembolsos de este documento.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Se excluye de esta cobertura, las reclamaciones por tratamientos,
          exámenes, cirugías y/o procedimientos derivados del servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento por al año, con un
          monto de cobertura máximo de hasta $ 80.000 y una carencia de 30 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Auxilio pipeta antipulgas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que la mascota (perro o gato) propiedad del Afiliado
          requiera de limpieza de pulgas o garrapatas, GEA otorgará un auxilio
          para los hasta por el monto máximo de cobertura para la compra del
          medicamento.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Solo se cubrirá una mascota propiedad del Afiliado ya sea perro o
          gato.
          <br />
          - Para el reconocimiento de este auxilio será necesario que el
          Afiliado envié la factura del centro veterinario donde éste contenga
          el desglose específico del valor de la pipeta para la limpieza de
          pulgas o garrapatas.
          <br />
          - Este servicio aplica como reembolso, por lo que el Afiliado deberá
          enviar los documentos necesarios que se mencionan en el capítulo de
          Manejo de reembolsos de este documento.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Se excluye de esta cobertura, las reclamaciones por tratamientos,
          exámenes, cirugías y/o procedimientos derivados del servicio.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento por al año, con un
          monto de cobertura máximo de hasta $ 80.000 y una carencia de 90 días
          calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Auxilio para radiografías, ecografías y cirugias para mascota
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          A consecuencia de enfermedad o accidente de la mascota, GEA brindará
          un auxilio hasta por el monto máximo de cobertura para cubrir uno de
          los siguientes procedimientos:
          <br />- Radiografías
          <br />
          - Ecografías
          <br />
          - Cirugías
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Para que una solicitud sea válida, el Afiliado deberá llamar a la
          línea telefónica de GEA dentro de las 24 horas posteriores de sucedido
          el hecho.
          <br />
          - Para el reconocimiento de este auxilio será necesario que el
          Afiliado envié la factura del centro veterinario donde éste contenga
          el desglose específico del valor del procedimiento realizado para
          tratar la urgencia.
          <br />
          - Este servicio aplica como reembolso, por lo que el Afiliado deberá
          enviar los documentos que se mencionan en el capítulo Manejo de
          reembolsos de este documento.
          <br />
          - GEA no se hace responsable de las consecuencias derivadas del
          servicio, ni los gastos en consultas, medicamentos y/o estudios
          complementarios en los que incurra el Afiliado.
          <br />
          - Para el servicio de ecografía únicamente se cubre el procedimiento,
          mas no los preparativos previos.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Exclusiones
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          - Para las ecografías las remisiones no deberán tener más de 72 horas
          de emitidas con respecto a la toma de examen.
          <br />- No podrán ser objeto de esta cobertura animales de edad
          inferior a 3 meses cumplidos.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Para este servicio se suministrará un (1) evento al año, cada uno con
          un monto de cobertura máximo de hasta $ 100.000 y una carencia de 30
          días calendario.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y coordinación de adiestrador de perros
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar asistencias con
          adiestradores profesionales para perros.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y coordinación de caminatas eco- recreativas caninas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar asistencias con expertos
          para caminatas eco recreativas caninas.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y coordinación de clínicas veterinarias
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar servicios en clínicas
          veterinarias para su mascota.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Información sobre guarderías de mascotas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar servicios en guarderías para
          su mascota
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y/o coordinación para el transporte de mascotas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar transporte para mascotas.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Coordinación radiografías, ecografías, y cirugías
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición de Afiliado el personal experto en servicios de
          orientación telefónica para coordinar la toma de radiografías,
          ecografías o la realización de cirugías a su mascota.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Para acceder al beneficio, el Afiliado deberá contar con un
          certificado donde conste que la mascota está apta para dicho
          procedimiento.
          <br />
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y coordinación con salón de belleza, boutiques y clínicas
          veterinarias
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar servicios en clínicas
          veterinarias para su mascota.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Referencia y coordinación con cementerios de mascotas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición de Afiliado el personal experto en orientación
          telefónica para referenciar y/o coordinar el traslado a un cementerio
          para mascotas.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - El Afiliado deberá entregar toda la información necesaria para la
          coordinación del servicio.
          <br />
          - El Afiliado será el encargado del pago total del servicio.
          <br />
          - El servicio será coordinado a través de la red de proveedores de GEA
          y está sujeto a disponibilidad de agenda.
          <br />
          - El Afiliado se compromete a seguir las recomendaciones entregadas
          por GEA para acceder al servicio.
          <br />
          - GEA no se hace responsable por la omisión de las condiciones del
          servicio por parte del Afiliado.
          <br />
          - Este servicio será únicamente con fines de orientación para el
          Afiliado, por lo que GEA no se hace responsable de las condiciones,
          precios, calidad u honorarios de los trabajos que pueda llegar a
          elaborar el profesional en un posible acuerdo con la Afiliado.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará sin límite de eventos al año.
        </Text>
      </Col>

      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
          font={theme.fonts.family.primaryBold}
          align="center"
          mb="20px"
        >
          Asistencia legal telefónica
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          A consecuencia de afectación a la salud de terceros en donde se vea
          involucrada la mascota (perro o gato), el Afiliado podrá solicitar los
          servicios de referencia y consultoría legal telefónica donde le
          orientarán en los trámites necesarios ante las autoridades competentes
          y otras que sean necesarias dependiendo del lugar donde haya ocurrido
          la situación.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Condiciones particulares
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - GEA no se hace responsable de las condiciones, precios y calidad de
          los trabajos que puedan llegar a elaborar los profesionales en un
          posible acuerdo con el Afiliado.
          <br />
          - GEA deja constancia de que este beneficio es de medio y no de
          resultado, por lo que el Afiliado acepta que GEA no es responsable del
          éxito o fracaso de las acciones emprendidas, omitidas o dejadas de
          adelantar por él.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
          mb={isMobile ? "10px" : "20px"}
        >
          Este servicio se suministrará un (1) evento por semestre y sin límite
          de cobertura.
        </Text>
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Manejo de Reembolsos
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Para acceder al estudio de reembolso, el Afiliado deberá tener en
          cuenta lo siguiente:
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          1. Envío de documentos
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          El Afiliado deberá enviar los siguientes documentos al correo
          cabinaco@co.geainternacional.com:
          <br />
          - Carta de solicitud del auxilio.
          <br />
          - Copia de la cédula de ciudadanía del Afiliado.
          <br />
          - Copia del Rut del Afiliado.
          <br />
          - Facturas del servicio a nombre del Afiliado.
          <br />
          - Cuenta de cobro con el monto (dinero) a solicitar, correspondiente
          al valor de las facturas antes de IVA.
          <br />
          - Certificación bancaria del Afiliado. (No se realizará el pago a
          ninguna cuenta diferente a la del titular de la asistencia).
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          2. Tiempos Establecidos
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Para que un reembolso sea válido, el Afiliado deberá llamar y
          autorizar el reembolso del servicio en la línea telefónica de GEA,
          dentro de los tiempos estipulados.
          <br />
          - GEA iniciará el estudio del reembolso una vez tenga toda la
          documentación completa, entendiendo que la recepción de esta
          información no implica aceptación de este.
          <br />
          - Los tiempos para la revisión de los documentos están determinados
          así:
          <br />
          a. Envío inicial de documentos: se otorgarán 10 días calendario al
          Afiliado para el envío de la documentación, esto luego de que GEA le
          informe que inició el proceso.
          <br />
          b. Corrección de documentos: se otorgarán 5 días calendario al
          Afiliado para el envío de los documentos corregidos, esto después de
          que se revise por primera vez los documentos y GEA le comunique lo que
          necesita ajustarse.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          3. Causales de negación
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Serán causales de negación las siguientes:
          <br />
          - Por no contactarse con la línea telefónica de GEA a informar el
          servicio.
          <br />
          - Por tener vencida la vigencia de la asistencia.
          <br />
          - Por solicitar el auxilio una persona diferente al Afiliado o su
          núcleo familiar.
          <br />
          - Por presentar documentos con enmendaduras, tachones o que su
          contenido no sea legible.
          <br />
          - Por presentar una factura o algún documento a nombre de una persona
          diferente al Afiliado o su núcleo familiar.
          <br />
          - Por no presentar facturas legales de compra.
          <br />
          - Por presentar facturas que no corresponden al servicio solicitado
          por la línea.
          <br />
          - Por presentar documentación incompleta.
          <br />
          - Por no cumplir con los tiempos estipulados para cada proceso.
          <br />
          - GEA luego de cada solicitud, tiene la autonomía de negar la
          reclamación si existe alguna situación que conduzca a presumir un
          posible fraude.
          <br />
          - Los documentos enviados por el Afiliado o su núcleo familiar no son
          susceptibles a cambio durante el proceso, solo se podrá realizar en
          los casos que sea solicitud directa de GEA.
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          4. Cubrimiento
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pagará los costos de los servicios de asistencia discriminados en
          el presente programa de forma parcial o hasta su límite máximo según
          corresponda para cada servicio. No cubrirá pagos adicionales para la
          culminación de los servicios. GEA indicará al Afiliado, previamente a
          la prestación del servicio, dichos costos.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          5. Pago del reembolso
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Luego del análisis y aceptación del reembolso, GEA le informará al
          Afiliado y realizará el pago dentro de los 15 días hábiles siguientes
          a esta comunicación.
        </Text>
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Obligaciones de Afiliado
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Con el fin de que el Afiliado pueda disfrutar de los servicios
          contemplados en este documento, deberá cumplir con las siguientes
          obligaciones generales, salvo lo que pudiera estar previsto en las
          especificaciones particulares de cada tipo de servicio de asistencia
          contemplado en el presente anexo. <br />
          <br />
          El Afiliado será toda persona mencionada en el capítulo de
          definiciones del presente documento bajo tales acepciones y aquellos
          que de manera particular puedan mencionarse de manera limitada en cada
          uno de los servicios descritos y detallados en el presente documento.
          <br />
          <br />
          El Afiliado estará obligado en todos los casos y como pre-requisito
          para la procedencia de la prestación de todos los servicios que le
          serán brindados por GEA a:
          <br />
          a. Identificarse ante GEA como Afiliado del programa de asistencia.
          <br />
          b. Proporcionar a GEA toda aquella información veraz, oportuna, y
          necesaria, que por su naturaleza permita atenderlo debidamente.
          <br />
          c. Obtener la autorización expresa a través de la línea de atención
          telefónica de GEA, antes de contratar o comprometer cualquier tipo de
          servicio por iniciativa propia.
          <br />
          d. Identificarse como Afiliado del programa de asistencia ante los
          funcionarios de GEA o ante las personas que ésta última compañía
          contrate con el propósito de prestar los servicios contemplados en el
          presente documento.
          <br />
          e. Cumplir con todas las obligaciones que resulten a su cargo,
          indicadas en este documento.
          <br />
          <br />
          En caso de que el Afiliado no cumpla con los requisitos mencionados,
          GEA no asumirá responsabilidad ni gasto alguno relacionado con la no
          prestación de los servicios considerados en el presente documento.
          <br />
        </Text>
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Proceso general de solicitud de servicios
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que el Afiliado requiera de los servicios contemplados en
          el presente documento, se procederá de la siguiente forma:
          <br />
          a. El Afiliado que requiera del servicio se comunicará con GEA al
          número telefónico línea móvil 333 602 5611.
          <br />
          b. El Afiliado procederá a suministrarle al funcionario de GEA que
          atienda la llamada respectiva, número de documento de identidad, que
          es el dato identificador necesario para reconocerlo como Afiliado, así
          como de información básica para prestar el servicio, como sus nombres
          y apellidos, ubicación, número de teléfono, nombre de la mascota,
          entre otros relevantes.
          <br />
          c. GEA confirmará en la base de datos de Afiliados al programa de
          servicio de asistencia materia de este documento, para determinar si
          el Afiliado tiene o no derecho a recibir los servicios de asistencia
          solicitados.
          <br />
          d. Una vez cumplidos todos los requisitos indicados, GEA gestionará y
          coordinará la prestación del servicio de asistencia requerido por el
          Afiliado por medio de la red de proveedores de GEA, de conformidad con
          los términos, condiciones y limitaciones del presente Anexo.
          <br />
          e. Queda entendido que el personal de GEA únicamente prestará los
          servicios de asistencia contemplados en este documento, a las personas
          que figuren como Afiliado y que se encuentren vigentes.
          <br /> <br />
          En caso de que el Afiliado no cumpla con los requisitos a su cargo
          indicados en este numeral, GEA no asumirá responsabilidad ni gasto
          alguno por la no prestación de los servicios relacionados en el
          presente documento, lo cual deberá ser informado por GEA.
          <br />
        </Text>
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Uso indebido de servicios de asistencia
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA podrá negar el acceso al programa de asistencia en caso de que, a
          juicio de GEA, se presenten situaciones de uso indebido o de abuso por
          parte del Afiliado de los servicios prestados por GEA bajo el servicio
          de asistencia.
        </Text>
      </Col>

      <hr style={hrProps} />

      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h1}
        font={theme.fonts.family.primaryBold}
        align="center"
        mb={isMobile ? "40px" : "60px"}
      >
        Prestación de servicios
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? 15 : 30}
          height={isMobile ? 15 : 30}
          style={{ marginLeft: "10px" }}
        />
      </Text>
      <Col m="20px 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Queda entendido que GEA podrá prestar los servicios de asistencia del
          presente anexo en forma directa o a través de terceros con quienes
          dicha compañía contrate y que conforman su red de proveedores de
          servicios con las autorizaciones correspondientes de ley. <br />
          <br />
          Los servicios a que se refiere el presente documento configuran la
          única obligación a cargo de GEA y/o su red de proveedores y en ningún
          caso reembolsará al Afiliado las sumas que este hubiera erogado,
          cuando el Afiliado hubiere omitido solicitar a GEA el servicio de
          asistencia y este hubiere autorizado expresamente al Afiliado que
          corresponda, a efectuar la citada erogación.
          <br />
          <br />
          Para este último caso, GEA se obliga a continuar prestando los
          servicios de asistencia al Afiliado que hubiesen contratado los
          servicios de asistencia.
        </Text>
      </Col>
    </Wrapper>
  );
};

export default PetConditions;
