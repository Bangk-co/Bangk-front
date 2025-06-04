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
      header: `¿Qué es Bang-Km?`,
      summary: "",
      panel:
        "Bang-Km es un seguro que te permite proteger tu vehículo pagando únicamente por los kilómetros que conduces más el pago de un cargo fijo mensual. Es una opción flexible y económica para quienes no utilizan su auto de manera intensiva (En general no más de 7.000 km/año).  Este seguro es provisto por SBS Seguros Colombia S.A. Compañía de seguros y está dirigido a vehículo livianos de uso particular.",
    },
    {
      key: "2",
      header: "¿Cómo funciona Bang-Km?",
      summary: "",
      panel:
        "Bang-Km es un seguro de autos soportado por nuestra compañía aliada SBS Seguros Colombia S.A. que consta de 2 partes:<br /> - Un cargo fijo mensual, que incluye la cobertura de riesgos cuando el vehículo esté detenido. <br /> - Un paquete de kilómetros, que adquiere el asegurado según sus necesidades y que incluye la cobertura de riesgos cuando el vehículo este en movimiento. <br /> * El cargo fijo debe estar vigente para activar paquetes por kilómetros.<br /> La adquisición y uso de Bang-Km son muy sencillas: <br /> - Cotiza tu seguro en línea y elige el paquete de kilómetros que necesitas. <br /> - Paga tu seguro de inmediato, no necesitas inspección. <br /> - Recibe en tu domicilio un pequeño dispositivo denominado PIA (Plataforma Inteligente Abordo) e instálalo en tu vehículo. <br /> - Descarga la aplicación para administrar desde tu celular tus kilómetros y mantener el control de tu seguro. <br /> - Recarga tus kilómetros y paga tu cargo fijo mensualmente.",
    },
    {
      key: "3",
      header: "¿Qué necesito para cotizar mi seguro Bang-Km?",
      summary: "",
      panel:
        "Para cotizar tu seguro Bang-Km, solo necesitas ingresar la placa de tu vehículo con el formato AAA000 y el número de cédula del propietario con los datos de contacto. Aplica para vehículos con menos de 15 años de antigüedad y para personas con edades comprendidas entre los 22 y 80 años.",
    },
    {
      key: "4",
      header: "¿Qué es PIA?",
      summary: "",
      panel:
        "PIA (Plataforma Inteligente a Bordo) es un dispositivo que nuestra compañía aliada, SBS Seguros Colombia S.A. te enviará en calidad de préstamo, y que te permite acceder a los siguientes servicios: <br /> • Información del consumo de tus kilómetros y la vigencia de tu póliza. <br /> • Beneficios y trayectos: consulta tus hábitos de manejo y los viajes o trayectos que has realizado. <br /> • Localizador: monitoreo de la ubicación real de tu vehículo. <br /> • Botón SOS: acceso a un botón 24 horas de ayuda o socorro ante imprevistos con tu vehículo en caso de hurto, accidentes o asistencias.",
    },
    {
      key: "5",
      header: "¿Cómo instalo mi dispositivo PIA?",
      summary: "",
      panel:
        "La conexión del dispositivo se realiza en el puerto OBDII (On Board Diagnostics), que varía dependiendo de la marca y año de tu auto.",
    },
    {
      key: "6",
      header: "¿Cómo sé que instalé correctamente el dispositivo?",
      summary: "",
      panel:
        "Para garantizar la correcta conexión y el funcionamiento, con el auto apagado, presiona firmemente el dispositivo al puerto. Una vez conectado, enciende el auto por 2 minutos y apágalo. Realiza nuevamente la operación. Recibirás una notificación en la App y en tu email, indicando que todo está listo para activar tu cobertura.",
    },
    {
      key: "7",
      header: "¿Quién puede hacer uso del dispositivo?",
      summary: "",
      panel:
        "Todos los autos que cuente con puerto OBDII, pueden utilizar los dispositivos, cada uno está específicamente configurado para cada auto en particular, es decir, que si tienes múltiples vehículos no podrás utilizarlo el mismo dispositivo en todos éstos sino que cada uno deberá tener su propio seguro con su propio dispositivo.",
    },
    {
      key: "8",
      header: "¿Qué pasa si desconecto y/o cambio de auto un dispositivo?",
      summary: "",
      panel:
        "Cuando se desconecta el dispositivo o lo conectas a otro auto, te llegará una alerta de suspensión de cobertura y de solicitud de reconexión.",
    },
    {
      key: "9",
      header:
        "¿El dispositivo es mío una vez que compré una póliza o debe devolverse?",
      summary: "",
      panel:
        "El dispositivo es propiedad de nuestra compañía aliada SBS Seguros y es en comodato, su uso está regido por las condiciones generales de la póliza. En caso de revocación o terminación de la póliza deberá retornarse a la compañía según el procedimiento establecido.",
    },
    {
      key: "10",
      header: "¿El dispositivo tiene alguna clase de garantía?",
      summary: "",
      panel:
        "Si, los dispositivos cuentan con garantía, en caso de presentarse alguna falla nuestra compañía aliada SBS Seguros lo cambiará inmediatamente sin costo alguno. Solo debes comunicarte con la línea 01 8000 911 360 para realizar un proceso de verificación.",
    },
    {
      key: "11",
      header: "¿Perdí mi dispositivo, qué hago?",
      summary: "",
      panel:
        "El dispositivo es responsabilidad del usuario. En caso de pérdida el costo es de USD 100. En caso de hurto del vehículo no tendrás que asumir el valor del dispositivo.",
    },
    {
      key: "12",
      header: "¿Qué hacer cuando envío mi Auto al taller?",
      summary: "",
      panel:
        "Te sugerimos que retires el dispositivo de tu auto y vuelvas a conectarlo nuevamente al retirarlo del taller.",
    },
    {
      key: "13",
      header: "Creo que no funciona mi dispositivo ¿Qué debo hacer?",
      summary: "",
      panel:
        "Comunícate con nuestra compañía aseguradora aliada, SBS Seguros, al 01 8000 911 360, para realizar un proceso de verificación.",
    },
    {
      key: "14",
      header: "¿Qué hago si vendo el auto?",
      summary: "",
      panel:
        "El dispositivo es responsabilidad del usuario, por tanto es necesario retirarlo de su auto y regresarlo a SBS Seguros Colombia S.A. Recuerda que cuando vendes tu auto, también se termina automáticamente tu seguro, por lo que deberás informar a SBS Seguros Colombia S.A. de la venta y tendrás derecho a la devolución de la prima no devengada.",
    },
    {
      key: "15",
      header: "El dispositivo está roto ¿Qué debo hacer?",
      summary: "",
      panel:
        "Comunícate con nuestra compañía aliada SBS Seguros, al 01 8000 911 360.",
    },
    {
      key: "16",
      header: "¿Cómo devuelvo mi dispositivo?",
      summary: "",
      panel:
        "Coloca el dispositivo en un empaque y en un sobre cerrado. Comunícate con nuestra compañía aliada SBS Seguros al 01 8000 911 360, para programar la devolución.",
    },
    {
      key: "17",
      header: "¿Cuánto tiempo tarda en llegar el PIA?",
      summary: "",
      panel:
        "Si es en Bogotá, se entrega máximo en 2 días hábiles y para otras ciudades o poblaciones la entrega será en 3 días hábiles posteriores a la confirmación de pago. Tú dispositivo PIA será enviado al domicilio registrado.",
    },
    {
      key: "18",
      header: "No me ha llegado el dispositivo PIA ¿Qué debo hacer?",
      summary: "",
      panel:
        "Comunícate con nuestra compañía aliada SBS Seguros al 01 8000 911 360.",
    },
    {
      key: "19",
      header: "¿Puedo cambiar la dirección de envío del PIA?",
      summary: "",
      panel:
        "Comunícate con nuestra compañía aliada SBS Seguros al 01 8000 911 360 para verificar el estado de envío y en el caso que aún no haya sido programado, podrá modificarse la dirección de entrega (aplican restricciones).",
    },
    {
      key: "20",
      header:
        "¿Qué sucede si el dispositivo llega a perder señal? ¿Se pierde la cobertura?",
      summary: "",
      panel:
        "El dispositivo al estar conectado al computador del vehículo guarda en su memoria los recorridos y la cobertura en caso de esa pérdida de señal se mantiene; cuando regrese la señal PIA recolecta la información guardada.",
    },
    {
      key: "21",
      header: "¿Dónde puedo descargar la aplicación?",
      summary: "",
      panel:
        "La aplicación SBS SXKM está disponible para descarga en las tiendas de aplicaciones de iOS y Android. Desde la App, podrás administrar tus kilómetros y revisar tu cobertura.",
    },
    {
      key: "22",
      header: "¿Cómo se calculan mis kilómetros?",
      summary: "",
      panel:
        "El dispositivo (PIA) actúa como cuentakilómetros, tomando la distancia recorrida directamente del odómetro de tu auto.",
    },
    {
      key: "23",
      header: "¿Qué pasa si se me acaban los kilómetros?",
      summary: "",
      panel:
        "Si se te acaban los kilómetros, puedes recargar más a través de la aplicación o el sitio web para asegurarte de que siempre estés cubierto. Recibirás una notificación cuando el saldo de tus kilómetros se esté agotando.",
    },
    {
      key: "24",
      header: "¿Cómo recargo mis kilómetros?",
      summary: "",
      panel:
        "Puedes recargar tus kilómetros desde el sitio web www.sxkm.co ingresando con tu usuario y contraseña a través de la opción 'Soy Cliente' o iniciando sesión desde la aplicación móvil. Encuentra aquí (https://www.sxkm.co/how ) el paso a paso de cómo recargar tus kilómetros. Ten en cuenta que tanto para recargar tus kilómetros como pagar el cargo fijo mensual necesitarás una tarjeta de crédito.",
    },
    {
      key: "25",
      header: "¿Cuándo vence mi paquete de kilómetros?",
      summary: "",
      panel:
        "Los paquetes de kilómetros no tienen fecha de vencimiento y se pueden usar siempre y cuando el dispositivo PIA esté conectado y el pago de la prima de tus coberturas de vehículo detenido se encuentren al día. Ten en cuenta que si a los 2 años de adquiridos tus kilómetros no hay movimientos en tu App ni en tu vehículo, la aseguradora procederá a revocar la póliza y te devolverán la prima no devengada del seguro.",
    },
    {
      key: "26",
      header: "¿Qué incluye el cargo fijo mensual?*",
      summary: "",
      panel:
        "El cargo fijo mensual incluye todas las coberturas del seguro para que tu vehículo esté protegido mientras no esté en movimiento: Responsabilidad Civil Extracontractual; las pérdidas parciales y/o totales por daños y/o hurto; eventos de naturaleza como temblor, terremoto o erupción volcánica, tifón, ciclón, maremoto, tsunami, inundación y granizada; en caso de alguna emergencia tienes derecho a servicio de grúa y carro taller.",
    },
    {
      key: "27",
      header: "¿Qué coberturas incluye mi paquete de kilómetros?",
      summary: "",
      panel:
        "Con el paquete de kilómetros que adquieras, tu vehículo estará asegurado mientras esté en movimiento. Podrás proteger tu patrimonio en caso de sufrir un accidente en el que causes algún daño a bienes o personas (Responsabilidad Civil Extracontractual). Así mismo, tu vehículo estará protegido ante cualquier pérdida parcial y/o total por hurto o daño mientras se encuentre en movimiento. Recibirás cobertura de protección patrimonial cuando se desatiendan las señales de tránsito y pérdida o daño que sufra tu vehículo por eventos de la naturaleza. <br /> Adicionalmente, podrás acceder a diferentes servicios como: Vehículo de reemplazo, Conductor elegido ilimitado, Grúa por avería o accidente, Asistencia jurídica y Asistencia en viaje.",
    },
    {
      key: "28",
      header:
        "¿Qué ventajas tiene Bang-Km frente a otros seguros tradicionales?",
      summary: "",
      panel:
        "• No requiere inspección. <br /> • Gana puntos y coberturas adicionales por tus buenos hábitos de manejo.<br /> • Paga el seguro según el uso de tu vehículo. <br /> • GPS para ubicar tu vehículo en caso de hurto. <br /> • Alertas en caso de fallo del vehículo. <br /> • Asegúralo por el tiempo que requieras. <br /> • No tiene cláusula de permanencia ni penalización por revocación. <br /> • Puedes asegurarlo si tiene prenda. <br /> • Puedes asegurar el vehículo de la empresa. <br /> • Ahorras dinero.",
    },
    {
      key: "29",
      header:
        "¿Cuáles son los beneficios adicionales que puedo tener con Bang-Km?",
      summary: "",
      panel: `
        Dependiendo de tu forma de conducción podrás acceder a más beneficios. Ten en cuenta que podrás ir subiendo de nivel para acceder a premios como nuevas coberturas o servicios adicionales. <br /> 
        En el App podrás consultar el nivel al cual perteneces y los beneficios a los que tienes derecho. Recuerda que la calificación por nivel puede cambiar en cualquier momento, dependiendo, entre otros, de tu manera de conducir. <br />
        Podrás disfrutar de las siguientes coberturas:
        <table>
          <thead>
            <tr>
              <th>Beneficios</th>
              <th>SBS Nivel 1</th>
              <th>Aprendiz Nivel 2</th>
              <th>Avanzado Nivel 3</th>
              <th>Experto Nivel 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pequeños accesorios en caso de daño o pérdida</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Reembolso por la pérdida de billetera y reexpedición de documentos</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Llantas estalladas y/o rectificación de rines</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Accidentes Personales</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Cristales y Vidrios</td>
              <td>NO</td>
              <td>SI</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Transporte de pasajeros - Traslado aeropuerto</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Kit de belleza post siniestro del auto (polichado, lavado, alineación y balanceo)</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Eliminación de deducible en Pérdida Parcial por Hurto</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Transporte de pasajeros por pico y placa</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Pequeños rayones o golpes leves</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
            </tr>
            <tr>
              <td>Disminución de deducible en la cobertura de Pérdida Parcial Daños</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
              <td>SI</td>
            </tr>
          </tbody>
        </table>
        <br /> 
        *Cuando adquieres tu Bang-Km inicias en Nivel Aprendiz, dependiendo de la forma como manejes, podrás ir subiendo de nivel de conducción, y así mismo, tendrás derecho a acceder a coberturas o servicios adicionales.
      `,
    },
    {
      key: "30",
      header: "¿Qué sucede si mi vehículo tiene más de 15 años de antigüedad?",
      summary: "",
      panel:
        "Actualmente, Bang-Km aplica solo para vehículos con menos de 15 años de antigüedad. Si tu vehículo tiene más de 15 años, te invitamos a explorar otras opciones de seguros tradicionales para vehículos que ofrecemos.",
    },
    {
      key: "31",
      header: "¿Cómo me contacto con el soporte de Bang-Km?",
      summary: "",
      panel:
        "Para cualquier consulta sobre el proceso de cotización o las características y beneficios de Bang-km, puedes contactarnos a través de nuestra línea de WhatsApp al 300 9136761 o enviarnos un correo electrónico a soporte@bangk.com.",
    },
    {
      key: "32",
      header: "¿Qué hago en caso de necesitar asistencia o una emergencia?",
      summary: "",
      panel:
        "Para solicitar asistencia o en caso de un siniestro, puedes acceder 24/7 al botón SOS a través de la aplicación SXKM.",
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
