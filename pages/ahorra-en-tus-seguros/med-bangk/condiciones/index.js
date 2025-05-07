import React, { useEffect } from "react";
import Image from "next/image";
import arrow from "@/assets/icons/green-arrow.svg";
import { Wrapper } from "@/styles/Legales";
import { Col, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
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
        "Siglas de GRUPO ESPECIALIZADO DE ASISTENCIA COLOMBIA S.A.S.",
    },
    {
      word: "Bangk",
      definition: "Marca de Building life technologies.",
    },
    {
      word: "Afiliado",
      definition:
        "Persona titular del interés expuesto al riesgo y a quien corresponden, en su caso, los derechos derivados del programa de asistencia.",
    },
    {
      word: "Domicilio",
      definition:
        "Ciudad de residencia habitual o cualquier otro domicilio que el Afiliado haya notificado a GEA.",
    },
    {
      word: "Situación de Asistencia",
      definition:"Cualquier suceso, situación o hecho de los descritos en el presente Anexo, consecuencia directa de una emergencia que dé derecho al Afiliado a recibir los servicios de asistencia, siempre que los mismos hayan tenido lugar durante el período de vigencia y en el ámbito de territorialidad."

    },
    {
      word: "Período de Vigencia",
      definition:
        "Periodo durante el cual un Afiliado tiene derecho a los servicios de asistencia.",
    },
    {
      word: "Evento",
      definition:
        "Es una situación de asistencia reportada por el Afiliado que dé derecho a la prestación de uno de los servicios, de acuerdo con los términos y condiciones que se aluden en el presente documento.",
    },
    {
      word: "Fecha de Inicio",
      definition:
        "Fecha a partir de la cual los servicios que ofrece GEA estarán a disposición del Afiliado.",
    },
    {
      word: "Proveedor",
      definition:
        "Es el personal subcontratado por GEA competente para prestar los servicios al Afiliado, de acuerdo con los términos y condiciones que se alude en el presente documento.",
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
        Plan de asistencia Médica
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
        Definiciones
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
        Plan de asistencia Médica
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
        mb="20px"
      >
        La tranquilidad de tener acceso a atención médica de calidad. Con nuestra asistencia médica, puedes enfrentar cualquier situación de salud con confianza y seguridad.
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
              <th>Eventos por vigencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Orientación médica telefónica</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
            </tr>
            <tr>
              <td>Telemedicina</td>
              <td style={{ textAlign: "center" }}>5 eventos por mes</td>
            </tr>
            <tr>
              <td>Acompañamiento a citas médicas</td>
              <td style={{ textAlign: "center" }}>2 eventos</td>
            </tr>
            <tr>
              <td>Empleada doméstica</td>
              <td style={{ textAlign: "center" }}>2 eventos</td>
            </tr>
            <tr>
              <td>Recordatorio ingesta de medicamentos</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
            </tr>
            <tr>
              <td>Terapias básicas a domicilio</td>
              <td style={{ textAlign: "center" }}>1 evento</td>
            </tr>
            <tr>
              <td>
                Médico a domicilio
              </td>
              <td style={{ textAlign: "center" }}>2 eventos</td>
            </tr>
            <tr>
              <td>Ambulancia terrestre</td>
              <td style={{ textAlign: "center" }}>5 eventos </td>
            </tr>
            <tr>
              <td>Coordinación de citas médicas</td>
              <td style={{ textAlign: "center" }}>Sin límite</td>
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
        Descripción de servicios de asistencia Para la salud
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
          Orientación médica telefónica
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Previa solicitud del Afiliado, GEA proporcionará orientación telefónica las 24 (veinticuatro) horas del día, los 365 (trescientos sesenta y cinco) días del año, para que pueda resolver sus dudas sobre alguna enfermedad o situación relacionada con la salud, dudas acerca de tratamientos o medicamentos, interpretación de estudios de laboratorio, sin emitir diagnóstico alguno o realizar cambios de tratamiento, limitándose solo a una recomendación médica.
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
          - GEA no se hace responsable de las consecuencias derivadas de estas orientaciones, ni los gastos en consultas, medicamentos y/o estudios complementarios en los que incurra el Afiliado.
          <br />
          -	Este servicio no aplica para generar formulación o medicación.
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
          Telemedicina E- Doctor
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Con E- Doctor, el Afiliado podrá acceder de manera confiable a una amplia gama de profesionales de la salud desde la comodidad del hogar. Nuestro servicio de orientación virtual conecta al cliente a través de video llamada con expertos en medicina general.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Los usuarios de E - Doctor podrán acceder a:
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Atención médica inmediata: No más a las largas esperas. Con E-Doctor, el cliente obtendrá atención médica en línea en cuestión de minutos.
          <br />
          <br />
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
            style={{ display: 'inline' }}
          >
            Profesionales calificados:
          </Text>{" "}Nuestro equipo de médicos, nutricionistas y psicólogos están altamente capacitados y certificado, garantizando la mejor atención.
          <br />
          <br />
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
            style={{ display: 'inline' }}
          >
            Accesibilidad:
          </Text>{" "}
          Acceso a E- Doctor desde el teléfono, tableta o computadora, las 24 horas del día, los 7 días de la semana. La atención médica está al alcance de la mano.
          <br />
          <br />
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
            style={{ display: 'inline' }}
          >
            Confidencialidad y Privacidad:
          </Text>{" "}
          La información de salud es tratada con el máximo cuidado y confidencialidad. El cliente podrá hablar abiertamente con nuestros profesionales sin preocupaciones.
          <br />
          <br />
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
            style={{ display: 'inline' }}
          >
            Consejos Personalizados: 
          </Text>{" "}
          Cuando el Afiliado requiera una consulta médica, nuestros expertos podrán brindar recomendaciones y planes de acción personalizados.
          <br />
          <br />
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
            style={{ display: 'inline' }}
          >
            Ahorro de Tiempo y Dinero: 
          </Text>{" "}
          Con E-Doctor, el Afiliado evita desplazamientos innecesarios y altos gastos médicos de emergencia.
          <br />
          <br />
          Para acceder a E - Doctor es necesario ingresar a: 
          <br />
          <br />
          Página web: Enlace para ingreso desde un computador con conexión a internet
          <br />
          <a href="https://co.e-doctorgea.com/edoctor/login.php?lang=ES" target="_blank" rel="noopener noreferrer">https://co.e-doctorgea.com/edoctor/login.php?lang=ES</a> 
          <br />
          <br />
          App Store o Play Store: Enlace para ingreso desde teléfonos Apple o Android. 
          <br />
          <br />
          Android desde Google Play
          <br />
          <a href="https://play.google.com/store/apps/details?id=videoconference.geainternacional.com.telemedicina&hl=es_CO&gl=US" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=videoconference.geainternacional.com.telemedicina&hl=es_CO&gl=US</a> 
          <br />
          <br />
          Apple desde App Store
          <br />
          <a href="https://apps.apple.com/co/app/e-doctor/id1147856481" target="_blank" rel="noopener noreferrer">https://apps.apple.com/co/app/e-doctor/id1147856481</a>   
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Además, E – Doctor ofrece:
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          Experiencia de orientación virtual sin igual:  Existen todos los campos esenciales para asegurarnos de que el Afiliado reciba la atención médica más completa y precisa posible. Esto incluye detalles como el motivo de la consulta, antecedentes personales, familiares y laborales, alergias, tóxicos y otros datos relevantes. 
          <br />
          <br />
          Lo que hace que nuestro servicio sea aún más conveniente:  una vez concluida la consulta, el diagnóstico presuntivo y las recomendaciones, que abarcan desde tratamientos farmacológicos hasta pruebas de laboratorio e imágenes médicas, se envían directamente al correo electrónico en formato PDF. Esto garantiza que la información sea segura y a prueba de alteraciones.
          <br />
          <br />
          Tu historia clínica se guarda de manera segura en nuestro sistema: Siendo accesible solo para el médico que atendió el servicio. También se almacena en formato PDF, lo que la hace inalterable y siempre disponible para su tranquilidad. En cada paso de la atención, priorizamos la privacidad y la precisión para su bienestar y comodidad.
          <br />
          <br />
          Formulación Segura: En E-Doctor, la salud es nuestra prioridad, por lo que nuestros expertos en orientación médica están capacitados para brindar recomendaciones y tratamientos seguros. Es importante destacar que no se prescriben sustancias controladas ni drogas no terapéuticas que puedan poner en riesgo el bienestar del cliente.
          <br />
          <br />
          Responsabilidad Médica: El cliente puede confiar en nosotros, porque en E-Doctor contamos con una selecta red de asesores médicos altamente calificados y certificados. Cada uno de nuestros profesionales está respaldado por una sólida formación y una amplia experiencia en el campo de la asesoría médica. La salud está en buenas manos con E-Doctor.
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Parámetros de uso
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          - Es de aclarar que, al registrarse y crear la cuenta, cada usuario garantiza que tiene mayoría de edad y tiene la capacidad jurídica para obligarse bajo las condiciones pactadas en los Términos de Uso, o bien que es el tutor legal y representante de menores de edad o personas que tengan limitada su capacidad jurídica, y en estos casos, recibirá un nombre de usuario y clave de acceso, la cual podrá modificar en cualquier momento, ambos personales e intransferibles.  
          <br />
          -	El usuario es responsable de mantener la seguridad de su cuenta, cuidando en todo momento de la seguridad y confidencialidad de sus claves de acceso.
          <br />
          - El usuario nunca deberá permitir a nadie acceder a su cuenta en su nombre y asume la responsabilidad de cualquier uso no autorizado de su cuenta por parte de terceras personas.
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
          -	Este servicio será únicamente con fines de orientación para el cliente, por lo que GEA no se hace responsable de las condiciones, precios y calidad de los trabajos que pueda llegar a elaborar el profesional en un posible acuerdo directo con el cliente.
          <br />
          - Para acceder a este servicio, el cliente deberá tener conexión a internet en un computador o dispositivo móvil.
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
          Acompañamiento a citas médicas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que el Afiliado requiera una persona que le acompañe en sustitución de un familiar a una cita médica, GEA brindará el servicio de acompañamiento por un tiempo máximo de tres (3) horas.
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
          •	Para acceder al beneficio, el Afiliado deberá comunicarse a las líneas de atención de GEA.
          <br />
          •	El Afiliado deberá asumir el costo de desplazamiento o transporte en caso de ser necesario.
          <br />
          •	Este servicio solo se prestará dentro de la ciudad de residencia del Afiliado en el perímetro urbano.
          <br />
          •	El servicio deberá ser coordinado con setenta y dos (72) horas de anticipación a la cita médica.
          <br />
          •	El Afiliado deberá informar la especialidad de la cita, la dirección de origen y la dirección de destino.
          <br />
          •	 Si el Afiliado desea cancelar el servicio deberá hacerlo con seis (6) horas de anticipación a éste. En caso de no realizarlo se dará como brindado el servicio.
          <br />
          •	El servicio se brindará de lunes a viernes de 8:00 am a 4:00 pm y los sábados de 8:00 am a 12:00 pm.
          <br />
          •	El tiempo máximo de acompañamiento son tres (3) horas contando desde el momento de contacto en el punto de origen.
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
          •	Personas que presenten algún tipo de discapacidad.
          <br />
          •	Acompañamientos a toma de exámenes de laboratorio, imagenología o cirugías.
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
          Empleada doméstica
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que el Afiliado tenga incapacidad médica por accidente mayor a 5 días, GEA asignará una empleada de hogar que realizará la limpieza interna del domicilio (limpieza de sala, comedor, cocina, baños y habitaciones) por un máximo de 4 horas por evento.
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
          •	Para la prestación de este servicio, el Afiliado deberá comunicarse con 24 horas de anticipación.
          <br />
          •	El Afiliado deberá enviar una copia de la incapacidad médica.
          <br />
          •	La empleada doméstica solo realizará tareas de limpieza básica (Barrer, trapear, organizar, limpiar polvo).
          <br />
          •	El Afiliado deberá suministrar los elementos (escoba, trapero, recogedor, etc.,) y productos (jabón, cloro, etc.), para realizar la labor de limpieza.
          <br />
          •	El Afiliado o un familiar designado por el mismo deberá estar presente en todo momento durante la prestación del servicio.
          <br />
          •	El servicio se prestará de lunes a sábado de 7:00 am a 5:00 pm, sujeto a disponibilidad de horarios.
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
          Esta asistencia no se prestará en caso de que en la vivienda del Asociado no haya ningún familiar que pueda hacerse cargo del servicio.
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
          Recordatorio ingesta de medicamentos
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el servicio para recordar la ingesta de medicamentos a las horas precisas, según recomendaciones indicadas por el médico tratante y de este modo contribuir con el adecuado manejo de los tratamientos del Afiliado del plan de asistencia.
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
          Este servicio será únicamente con fines de orientación para el Afiliado, por lo que GEA no se hace responsable de la correcta ingesta del medicamento, reacciones o procedimientos adicionales que deba realizar el Afiliado.
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
          Terapias básicas a domicilio
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que el Afiliado requiera el servicio de terapias físicas básicas o respiratorias básicas a domicilio, GEA coordinará el servicio a través de personal capacitado para llevar a cabo este procedimiento.
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
          -	Este beneficio se brindará siempre y cuando el Afiliado tenga una orden previa del médico de su EPS, medicina prepagada o Administradoras de Riesgos de Salud (ARS) la cual deberá ser enviada al correo electrónico cabinaco@co.geainternacional.com. No deberá superar los 30 días de expedición, debe tener firma y sello del médico con el diagnóstico explícito, terapia y medicamento que requiere específicamente.
          <br />
          -	Cada evento tendrá una duración de máximo 40 minutos, con acceso a una terapia por evento. 	
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          La terapia física básica influye:
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          -	Ejercicios de marcha
          <br />
          -	Ejercicios para mejorar la cervicalgia
          <br />
          -	Manejo de Dorsalgia - Lumbalgia mecánica 
          <br />
          -	Manejo de contracturas musculares 
          <br />
          -	Higiene postural 
          <br />
          -	Manejo de Pubalgia 
          <br />
          -	Rehabilitaciones de tobillo
          <br />
          -	Ejercicios isométricos de fuerza y aumento de fuerza.
          <br />
          -	Ejercicios de William y Reagan a nivel de corrección hiperlurdosislumbar
          <br />
          -	Rehabilitación de cirugía de rodilla 
          <br />
          -	Rehabilitaciones del túnel del carpo
          <br />
          -	Rehabilitaciones del manguito rotador
          <br />
          -	Ejercicios de rehabilitación de la espalda
          <br />
          -	Ejercicios de rehabilitación de la espalda
          <br />
          <br />
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Terapias respiratorias básicas a domicilio:
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Micro – nebulización 
          <br />
          <br />
          Medicamentos de evolución Incluidos: 
          <br />
          <br />
          -	Solución salina – Salbutamol
          <br />
          -	Bromuro de ipratropio 
          <br />
          <br />
          Medicamentos de evolución no Incluidos:
          <br />
          <br />
          -	Budesónida (budemar)
          <br />
          -	Dexametasona
          <br />
          -	Adrenalina
          <br />
          <br />
          Drenaje postural 
          <br />
          <br />
          Técnicas Incluidas: 
          <br />
          <br />
          -	Técnica de percusión y expectoración. 
          <br />
          <br />
          Técnicas no incluidas:
          <br />
          <br />
          -	Aspiración de secreciones o succión
          <br />
          -	Inyección intramuscular
          <br />
          -	Administración intravenosa 
          <br />
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
        >
          -	La terapia física o respiratoria se llevará a cabo únicamente en el domicilio permanente del Afiliado.
          <br />
          -	En caso de que la terapia respiratoria sea ordenada con un medicamento específico y que no esté cubierto por la asistencia, el Afiliado deberá suministrarlo.
          <br />
          -	Este servicio se brindará de lunes a viernes en un horario de 8 am a 5 pm, y los sábados de 8 am a 12 pm. Este beneficio deberá ser solicitado con 48 horas de anterioridad al evento.
          <br />
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
          -	Se excluyen los medicamentos que no se encuentren a la venta en el mercado colombiano.
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
          Médico a domicilio
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que el Afiliado lo requiera a causa de cualquier emergencia médica que pueda ser tratada en el domicilio del Afiliado y que no amerite su traslado a un centro hospitalario y según el criterio y autorización del equipo médico telefónico de GEA, se coordinará el envío de un médico al domicilio del Afiliado, para realizar un chequeo, revisión o diagnóstico derivado de la emergencia médica previamente reportada.
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
          -	GEA no se hace responsable de las consecuencias derivadas de este servicio ni los gastos en medicamentos y/o estudios complementarios en los que incurra el Afiliado. 
          <br />
          -	El servicio se prestará por agendamiento de acuerdo con la disponibilidad de los proveedores de GEA.
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
          -	Este servicio no se prestará para generación de incapacidades.
          <br />
          -	No aplica para re-consultas.
          <br />
          -	No aplica cuando el caso médico amerite estudios de laboratorio o de imagen y que deban ser tomados directamente en un centro médico de manera inmediata.
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
          Ambulancia terrestre
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          En caso de que Afiliado sufra un accidente o presente una enfermedad súbita donde se evidencie una urgencia vital y amerite la atención en un centro asistencial con previa autorización del equipo médico de GEA, se coordinará y cubrirá el costo del traslado en ambulancia terrestre hasta la clínica, hospital o centro médico de la red de prestadores más cercana, siempre y cuando exista la infraestructura privada que lo permita. 
          <br />
          <br />
          En caso de no existir ésta, GEA coordinará el traslado por medio de los servicios médicos públicos de la zona.
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
          -	Entiéndase urgencia vital como como una condición clínica que implique riesgo de muerte o de secuela funcional grave, la atención de urgencia o emergencia vital ante un hecho de tal envergadura debe ser inmediata e impostergable.
          <br />
          -	El Afiliado en todo momento deberá supervisar la prestación de los servicios, en caso de que él no lo pueda hacer por encontrarse imposibilitado, deberá ser acompañado por una persona mayor de edad.
          <br />
          -	Máximo de espera en camilla en el centro hospitalario de 3 horas, en caso de exceder este tiempo, el Afiliado asumirá los costos ocasionados. 
          <br />
          -	En caso de que no se trate de una urgencia médica o el Afiliado haya recibido atención médica, o bien exceda la cobertura, el Afiliado podrá solicitar el servicio asumiendo el costo íntegro del traslado a un precio preferencial. 
          <br />
          -	El servicio será únicamente brindado desde el domicilio del Afiliado hasta el centro médico más cercano.
          <br />
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
          Coordinación de citas médicas
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb={isMobile ? "10px" : "20px"}
        >
          GEA pone a disposición del Afiliado el personal experto en orientación telefónica para la coordinación de citas médicas prioritarias y/o chequeos generales.
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
          -	Este servicio se coordinará telefónicamente con la EPS, medicina prepagada o médico particular bajo la cual se encuentre afiliado o el profesional que nos refiera.  
          <br />
          -	El Afiliado deberá suministrar los datos básicos para la solicitud de la cita; si es médico particular, debe indicar los datos de éste.	
          <br />
          -	El Afiliado será el encargado del pago total del servicio en caso de ser necesario.
          <br />
          -	El Afiliado se compromete a seguir las recomendaciones entregadas por GEA para acceder al servicio.
          <br />
          -	GEA no se hace responsable por la omisión de las condiciones del servicio por parte del Afiliado.
          <br />
          -	Este servicio será únicamente con fines de orientación para el Afiliado, por lo que GEA no se hace responsable de las condiciones, precios, calidad u honorarios de los trabajos que pueda llegar a elaborar el profesional en un posible acuerdo con el Afiliado.
          <br />
          -	GEA deja constancia de que este beneficio es de medio y no de resultado, por lo que el Afiliado acepta que GEA no es responsable por la disponibilidad de agenda de la entidad médica.
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
          El Afiliado deberá cumplir con las siguientes obligaciones generales:
          <br />
          <br />
          a)	Identificarse como miembro del programa de asistencia ante GEA.
          <br />
          b)	Proporcionar a GEA información precisa, oportuna y necesaria para recibir atención adecuada.
          <br />
          c)	Obtener autorización expresa de GEA a través de su línea telefónica antes de contratar cualquier servicio por iniciativa propia.
          <br />
          d)	Identificarse como Afiliado del programa ante los representantes de GEA o contratistas de la compañía involucrados en la prestación de servicios.
          <br />
          <br />
          El Afiliado también deberá cumplir con todas las demás obligaciones establecidas en este documento.
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
          Cuando el Afiliado requiera la prestación de los servicios contemplados en el presente documento, se procederá de la siguiente forma:
          <br />
          <br />
          a)	Se comunicará con GEA a la línea celular 333 602 56 11.
          <br />
          b)	Informará su número de documento de identidad, así como la información necesaria para coordinar el servicio: Nombres, apellidos, ubicación, número de teléfono, entre otros relevantes.
          <br />
          c)	GEA confirmará en la base de datos correspondiente la existencia y autorización para la prestación de los servicios. 
          <br />
          d)	GEA gestionará y coordinará la prestación de los servicios a través de su red de proveedores.
          <br />
          <br />
          En caso de que el Afiliado no cumpla con los requisitos a su cargo indicados en este numeral, GEA no asumirá responsabilidad ni gasto alguno por la no prestación de los servicios relacionados en el presente documento, lo cual deberá ser informado por GEA.
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
        Uso indebido del servicio
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
          GEA se reserva el derecho de denegar el acceso al servicio en caso de que se identifiquen situaciones de uso indebido o abuso por parte del cliente en la utilización de los servicios.
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
          Queda entendido que GEA podrá prestar los servicios de asistencia del presente anexo en forma directa o a través de terceros con quienes dicha compañía contrate y que conforman su red de proveedores de servicios con las autorizaciones correspondientes de ley.
          <br />
          <br />
          Los servicios a que se refiere el presente documento configuran la única obligación a cargo de GEA y/o su red de proveedores y en ningún caso reembolsará al cliente las sumas que este hubiera erogado, cuando el cliente hubiere omitido solicitar a GEA el servicio de asistencia y este hubiere autorizado expresamente al cliente que corresponda, a efectuar la citada erogación.
          <br />
          <br />
          Para este último caso, GEA se obliga a continuar prestando los servicios de asistencia al cliente que hubiese contratado los servicios de asistencia.
          <br />
          <br />
        </Text>
      </Col>
    </Wrapper>
  );
};

export default PetConditions;
