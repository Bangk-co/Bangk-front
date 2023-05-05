import React, { useEffect } from "react";
import Image from "next/image";
import arrow from "../../assets/icons/green-arrow.svg";
import { BulletPoint, Text, Title, Wrapper } from "@/styles/Legales";
import { Div } from "@/styles/Common";
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
import Link from "next/link";

const Legales = ({ isMobile, isTablet }) => {
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

  return (
    <Wrapper>
      <Title id="policy">
        Política de privacidad <br></br>y tratamiento de datos{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Ten en cuenta que por el solo hecho de visitar o acceder al sitio web de
        Bangk, aceptas los Términos y Condiciones de uso del mismo así como la
        Política de Privacidad y Tratamiento de Datos, los cuales declaras haber
        leído, comprendido y expresado tu acuerdo en todas sus partes. Si
        decides no aceptarlos por favor abstente de utilizar este sitio y/o los
        productos y servicios ofrecidos. Bangk (En adelante La Empresa), dando
        cumplimiento a las disposiciones en materia de habeas data y tratamiento
        de datos personales establecidas en la legislación colombiana, en
        especial en la Ley 1581 de octubre de 2012 y sus decretos
        reglamentarios, establece la siguiente Política de Privacidad y
        Tratamiento de Datos (en adelante La Política) para comunicar, de una
        parte, qué tipo de información podrá solicitar a los Titulares de los
        Datos Personales, el uso que les dará, con qué finalidades serán
        tratados, y por otra parte, los derechos de los Titulares de los Datos y
        la forma de ejercerlos, así como los deberes a cargo de la Empresa como
        responsable o encargado del tratamiento de los datos personales.
      </Text>
      <hr style={hrProps} />
      <Title>
        Definiciones{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text style={{ marginBottom: "25px" }}>
        De conformidad con lo dispuesto en la <strong>Ley 1581</strong> de
        octubre de 2012, <strong>Ley 1266</strong> de 2008 y el{" "}
        <strong>Decreto 1377</strong> de 2013.
      </Text>
      {definitions.map((ele, indx) => (
        <Div
          align="center"
          gap="10px"
          key={indx}
          style={{ marginBottom: "25px" }}
        >
          <BulletPoint />
          <Text>{ele}</Text>
        </Div>
      ))}
      <hr style={hrProps} />
      <Title>
        Responsable del <br></br>Tratamiento de Datos<br></br> Personales{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        La Empresa, entidad de naturaleza comercial identificada con{" "}
        <strong>NIT 901.647.130-5</strong>, con domicilio en la{" "}
        <strong>Calle 26 # 38 - 26 Edificio BIO 26</strong> de la ciudad de
        Medellín y con dirección de correo electrónico{" "}
        <strong>info@bangk.la</strong>
      </Text>
      <hr style={hrProps} />
      <Title>
        Uso de los Datos <br></br>Personales{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        El Titular de los datos, ya sea en calidad de Usuario, proveedor,
        empleado actual o pasado, contratista o de cualquier otra índole, al
        conocer y aceptar esta Política, autoriza de manera previa, voluntaria e
        informada a la Empresa, en su condición de plataforma tecnológica que
        ofrece acceso a productos y servicios financieros digitales de forma
        directa o a través de aliados comerciales o terceros expresamente
        autorizados, para el Tratamiento de sus Datos Personales, incluyendo su
        recolección, almacenamiento, uso, procesamiento, divulgación,
        transmisión, transferencia entre otros actos, con el propósito de llevar
        a cabo las finalidades para las cuales el Titular de los datos autoriza
        el Tratamiento correspondiente.<br></br>
        <br></br> La Empresa podrá actuar como Responsable o Encargado del
        Tratamiento, dependiendo del propósito para el cual se haya obtenido el
        Dato Personal. La Empresa se compromete en todo caso a cumplir de forma
        estricta los deberes y obligaciones establecidos en la normatividad en
        uno u otro caso.<br></br> Finalidades del Tratamiento de los Datos
        Personales <br></br>La Empresa realizará el Tratamiento de los Datos
        Personales de sus Usuarios de acuerdo con las siguientes finalidades:
      </Text>
      <br></br>
      <br></br>
      {personalData.map((ele, indx) => (
        <Div
          align="center"
          gap="10px"
          key={indx}
          style={{ marginBottom: "25px" }}
        >
          <BulletPoint />
          <Text>{ele}</Text>
        </Div>
      ))}
      <Text>
        <strong>Parágrafo primero:</strong> En los casos en que la Empresa deba
        compartir los Datos de los Titulares con terceros en el contexto de lo
        establecido en esta Política, la Empresa realizará todas las gestiones
        necesarias para el cumplimiento por parte de estos últimos de lo
        establecido en la regulación tanto para Responsables como para
        Encargados de su Tratamiento.
      </Text>
      <br></br>
      <br></br>
      <Text>
        <strong>Parágrafo segundo:</strong> La información entregada a la
        Empresa por parte de los Usuarios o cualquier tercero que incluya Datos
        Personales de otros Titulares, deberá contar con las autorizaciones
        necesarias para su tratamiento por parte de dichos Titulares. El
        tratamiento de datos de empleados, proveedores y en general los terceros
        que no tengan la calidad de Usuarios, tendrá las siguientes finalidades
        por parte de la Empresa:
      </Text>
      <br></br>
      <br></br>
      {personalData2.map((ele, indx) => (
        <Text key={indx} style={{ marginBottom: "25px" }}>
          {ele}
        </Text>
      ))}
      <hr style={hrProps} />
      <Title>
        Datos Sensibles{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Para la solicitud de productos y servicios, los Usuarios deberán
        proporcionar Datos Sensibles como información financiera y/o datos
        biométricos que la Empresa usará o deberá Transmitir o Transferir a
        compañías aseguradoras, financieras o proveedores autorizados, para
        procesos de verificación de identidad, evaluación de riesgos entre
        otros. En virtud de la aceptación de los Términos y Condiciones de la
        Empresa así como de esta Política, el Usuario autoriza a la Empresa el
        tratamiento de sus Datos Sensibles. No obstante lo anterior, de acuerdo
        con lo establecido en la <strong>Ley 1581 de 2012</strong> y normas
        reglamentarias, los Usuarios no están obligados a autorizar el
        tratamiento de sus Datos Sensibles (Esto mismo aplica para los Titulares
        de Datos que no tengan la calidad de Usuarios). En caso de que no se
        proporcione dicha autorización, la Empresa no podrá gestionar la
        solicitud de los productos y servicios ofrecidos.
      </Text>
      <hr style={hrProps} />
      <Title>
        Datos de menores{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        En los casos de que se deba obtener una información que verse sobre
        niños, niñas, adolescentes menores de edad será facultativa de ser
        suministrada por parte de su representante legal o acudiente. La Empresa
        se reserva la posibilidad de poner en conocimiento de las autoridades
        situaciones que en su concepto puedan poner o pongan en peligro la
        integridad de un menor de edad.<br></br>
        <br></br> Derechos de los Titulares de Datos y cómo ejercerlos <br></br>
        Los Titulares de los Datos Personales tienen derecho a:
      </Text>
      <br></br>
      <br></br>
      {minorsData.map((ele, indx) => (
        <Div
          align="center"
          gap="10px"
          key={indx}
          style={{ marginBottom: "25px" }}
        >
          <BulletPoint />
          <Text>{ele}</Text>
        </Div>
      ))}
      <Text>
        Para el ejercicio de sus derechos sobre los Datos Personales tratados
        directamente por la Empresa, el Titular podrá presentar la solicitud
        respectiva a través de correo electrónico dirigido a{" "}
        <strong>info@bangk.la</strong> <br></br>
        <br></br>La solicitud mencionada deberá contener toda la información
        necesaria para adelantar de manera oportuna el trámite, incluyendo la
        descripción de los Datos Personales sobre los cuales se pretende ejercer
        alguno de los derechos arriba citados. El Titular de los Datos o su
        representante deberá incluir el nombre completo y acreditar los
        documentos necesarios para corroborar su identidad así como su domicilio
        o medio elegido para recibir respuesta a su solicitud. <br></br>
        <br></br>La Empresa remitirá la respuesta a la consulta o reclamo en un
        plazo máximo de diez (10) días hábiles, cuando se trate de consultas y
        de quince (15) días hábiles cuando se trate de reclamos contados a
        partir de la fecha en la que se reciba la solicitud. En caso de que el
        reclamo esté incompleto la Empresa comunicará dicha condición dentro de
        los cinco (5) días hábiles para que la solicitud sea actualizada. En
        este caso, se establece un período máximo de dos (2) meses para subsanar
        la solicitud o de lo contrario se entenderá que se desiste del reclamo o
        consulta.
      </Text>
      <hr style={hrProps} />
      <Title id="cookies">
        Cookies{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Una cookie es un pequeño fragmento de texto que los sitios web que
        visita un Usuario envían al navegador y que permite que el sitio web
        recuerde información sobre su visita, con el fin de facilitar tu próximo
        ingreso y que el sitio te proporcione una mejor experiencia. Cuando
        dejas un comentario en nuestro sitio puedes elegir guardar tu nombre,
        dirección de correo electrónico y web en cookies. Esto es para tu
        comodidad, para que no tengas que volver a rellenar tus datos cuando
        dejes otro comentario. Estas cookies tendrán una duración de un año.{" "}
        <br></br>
        <br></br>Si tienes una cuenta y te conectas a este sitio, instalaremos
        una cookie temporal para determinar si tu navegador acepta cookies. Esta
        cookie no contiene datos personales y se elimina al cerrar el navegador.
        <br></br>
        <br></br>
        Cuando inicias sesión, también instalaremos varias cookies para guardar
        tu información de inicio de sesión y tus opciones de visualización de
        pantalla. Las cookies de inicio de sesión duran dos días, y las cookies
        de opciones de pantalla duran un año. Si seleccionas «Recordarme», tu
        inicio de sesión perdurará durante dos semanas. Si sales de tu cuenta,
        las cookies de inicio de sesión se eliminarán. <br></br>
        <br></br>Si editas o publicas un artículo, se guardará una cookie
        adicional en tu navegador. Esta cookie no incluye datos personales y
        simplemente indica el ID del artículo que acabas de editar. Caduca
        después de 1 día.
        <br></br>
        <br></br>
        BANGK adicionalmente puede usar las cookies entre otras finalidades
        para:
      </Text>
      <br></br>
      <br></br>
      {cookies.map((ele, indx) => (
        <Text key={indx} style={{ marginBottom: "25px" }}>
          {ele}
        </Text>
      ))}
      <Text>
        Las cookies pueden ser propias o de terceros dependiendo de quién
        gestione el sitio web desde dónde se envían las cookies y se traten los
        Datos que se obtengan. BANGK eventualmente puede compartir la
        información obtenida con terceros aliados, para mejorar el uso y los
        servicios para el Usuario. De la misma forma, la información recibida a
        través de las cookies será usada por BANGK y los terceros aliados para
        los fines descritos en este documento.{" "}
      </Text>
      <hr style={hrProps} />
      <Title>
        Configuración <br></br>de Cookies{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Las cookies pueden ser configuradas por el Usuario en su navegador para
        que sean inhabilitadas, habilitadas o para seleccionar cuáles quiere
        instalar y cuáles no. <br></br>
        <br></br>Para gestionar las cookies en algunos de los navegadores más
        usados, los Usuarios pueden seguir las instrucciones que relacionamos a
        continuación a título indicativo:
      </Text>
      <br></br>
      <br></br>
      {cookiesSettings.map((ele, indx) => (
        <Text key={indx} style={{ marginBottom: "25px" }}>
          {ele.label}{" "}
          <Link
            href={ele.link}
            passHref={true}
            style={{ color: theme.colors.green }}
          >
            <a target="_blank" rel="noreferrer">
              aquí
            </a>
          </Link>
        </Text>
      ))}
      <br></br>
      <br></br>
      <Text>
        Si el Usuario permanece en el sitio web de BANGK y/o no inhabilita en su
        navegador el uso de las cookies, se entenderá que autoriza el uso y
        manejo de las cookies, sin que esto sea óbice para modificar la
        configuración de su navegador o su autorización en cualquier momento.
        <br></br>
        <br></br>Es importante tener en cuenta que al no habilitar el uso de las
        cookies el Usuario podría percibir cambios, afectaciones o desmejora en
        su experiencia de navegación en el sitio web de BANGK o en los de
        terceros. <br></br>
        <br></br>La inhabilitación de las cookies no implica una revocación de
        la Autorización para el Tratamiento de Datos Personales o la aceptación
        de esta Política por parte del Usuario.
      </Text>
      <hr style={hrProps} />
      <Title id="terms">
        Términos y condiciones <br></br>página web{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        En BANGK queremos que tu experiencia de compra sea agradable y exitosa.
        Por lo que, cuando ingresas y/o te suscribes a nuestro sitio web
        www.bangk.co, tanto usuario como cliente aceptan los Términos y
        Condiciones del sitio, junto con todas las políticas y principios de
        este. Te invitamos a leer y entender bien esta información antes de
        continuar la navegación.<br></br>
        <br></br> Todas tus visitas y todas las transacciones que se realicen en
        este sitio, así como sus efectos jurídicos, quedarán regidos por estas
        condiciones y sometidos a la legislación aplicable en la República de
        Colombia. <br></br>
        <br></br>En caso de que decidas no aceptar estos Términos y Condiciones,
        que tienen carácter obligatorio y vinculante para el Usuario y Cliente,
        debes abstenerte de utilizar nuestro sitio y/o los servicios aquí
        ofrecidos. <br></br>
        <br></br>Los presentes Términos y Condiciones pueden ser actualizados
        ocasionalmente, sin que se genere obligación alguna a cargo de BANGK de
        emitir un aviso previo sobre esta situación. En cualquier caso, es deber
        de Usuarios y Clientes revisar la versión más actualizada de los
        Términos y Condiciones.
      </Text>
      <hr style={hrProps} />
      <Title>
        Contenido{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        El sitio web no le otorga al Usuario o Cliente ningún derecho de
        propiedad o uso sobre sus contenidos, códigos, datos o materiales, o a
        los que se pueda acceder por su intermedio, incluyendo, pero sin
        limitarse a marcas, logos, nombres comerciales entre otros. Las
        diferencias que puedan surgir respecto al contenido o elementos usados
        en el sitio web se tratarán en el marco de la legislación de la
        República de Colombia. <br></br>
        <br></br>Los servicios y productos ofrecidos por BANGK no constituyen
        una oferta comercial en los términos de la legislación colombiana, por
        lo tanto, BANGK se reserva el derecho de modificar sin previo aviso el
        contenido y los servicios prestados a través de su sitio web. <br></br>
        <br></br>Desde el sitio web de BANGK es posible que se redirija a
        contenidos de terceros sitios web. Teniendo en cuenta que BANGK no puede
        controlar siempre los contenidos introducidos por los terceros en sus
        sitios web, no asume ningún tipo de responsabilidad respecto a dichos
        contenidos o su administración. Los sitios web de terceros se rigen por
        sus propios términos de uso que no tienen relación con los presentes
        Términos y Condiciones. El Usuario o Cliente por tanto acepta que
        utiliza dichos sitios web por su propia cuenta y riesgo. <br></br>
        <br></br>BANGK no se hace responsable de la información y contenidos
        almacenados, a título enunciativo, pero no limitativo, en foros, chats,
        generadores de blogs, comentarios, redes sociales o cualquier otro medio
        que permita a terceros publicar contenidos de forma independiente en su
        página web.
      </Text>
      <hr style={hrProps} />
      <Title>
        Restricciones <br></br>de uso{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Los contenidos del sitio web www.bangk.co son propiedad exclusiva de
        BUILDING LIFE TECHNOLOGIES S.A.S, propietario de la marca registrada
        BANGK, incluyendo el diseño gráfico, logos, imágenes, textos,
        ilustraciones, publicidad fotográfica, producción audiovisual, marcas y
        otros signos distintivos, en cualquiera de los lenguajes de programación
        utilizados o utilizables.<br></br>
        <br></br> La distribución, reproducción, comunicación al público,
        transformación, cesión y cualquier otro acto o modalidad de explotación
        en cualquier formato digital o físico, que no haya sido expresamente
        autorizado por BUILDING LIFE TECHNOLOGIES S.A.S, quedan expresamente
        prohibidos, so pena de acciones legales.
      </Text>
      <hr style={hrProps} />
      <Title>
        Aceptación de <br></br>términos y condiciones{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Ten en cuenta que por el solo hecho de navegar o visitar el sitio web de
        BANGK, aceptas los Términos y Condiciones de uso de este, los cuales
        declaras haber leído, comprendido y expresado tu acuerdo en todas sus
        partes. Si decides no aceptarlos por favor abstente de utilizar este
        sitio y/o los productos y servicios ofrecidos.
      </Text>
      <hr style={hrProps} />
      <Title>
        Conectividad{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Las condiciones de conectividad serán responsabilidad de cada Usuario
        del sitio web de BANGK. El acceso a este sitio puede ser afectado por
        factores ajenos al control de BANGK. y propias de Internet. Es
        responsabilidad del Usuario tomar las medidas necesarias para mitigar
        riesgos asociados a la presencia de virus informáticos o programas
        maliciosos.
      </Text>
      <hr style={hrProps} />
      <Title>
        Disponibilidad del <br></br>sitio web{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        BANGK reconoce que el sistema puede no estar disponible eventualmente
        debido a fallas técnicas, fallas de internet o por razones fuera de su
        alcance. En el evento en que se presenten circunstancias de este tipo,
        BANGK realizará su mejor esfuerzo para reestablecerlo en el menor tiempo
        posible, sin que por esta razón pueda generarse ningún tipo de
        obligación ni responsabilidad para BANGK. BANGK no será responsable por
        daños y perjuicios de cualquier índole que puedan ocasionarse de la
        falta de disponibilidad y continuidad del sitio web y sus servicios.
      </Text>
      <hr style={hrProps} />
      <Title>
        Solicitud de los <br></br>productos y servicios{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        BANGK opera como un intermediario de productos y servicios de terceros.
        Para acceder a los productos y/o servicios ofrecidos a través de BANGK,
        el Usuario o cliente accede y solicita productos y servicios a través de
        plataformas de terceros, adjunta la información que se requiera y firma
        y acepta los documentos o contratos específicos que apliquen a cada
        producto y/o servicio, los cuales serán puestos a su disposición por
        parte de los aliados comerciales de BANGK expresamente autorizados,
        durante el trámite de la solicitud. <br></br>
        <br></br>En ningún caso el Usuario o cliente podrá solicitar alguno de
        los productos o servicios ofrecidos a través de BANGK para la ejecución
        de actividades relacionadas con el narcotráfico, terrorismo, corrupción,
        secuestro, contrabando, lavado de activos, financiación del terrorismo,
        tráfico de armas o de personas o en general cualquier otro delito, o
        administración de recursos relacionados con esas actividades.
      </Text>
      <hr style={hrProps} />
      <Title>
        Veracidad de<br></br>la información{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        BANGK opera como un intermediario de productos y servicios de terceros.
        El Usuario o Cliente declara que toda la información suministrada a
        BANGK, ya sea a través del sitio web o cualquier otro medio acordado
        tales como chats, emails, puntos de atención física entre otros, es
        veraz y comprobable. Es responsabilidad del Usuario o Cliente la
        autenticidad y validez de su información en todo momento. El Usuario o
        Cliente exonera a BANGK de cualquier responsabilidad por los daños o
        perjuicios ocasionados a si mismo o a terceros, por falencias o
        inexactitudes en su contenido.
      </Text>
      <hr style={hrProps} />
      <Title>
        Firma electrónica{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        El Usuario o Cliente y BANGK entienden y aceptan la plena validez de
        estos Términos y Condiciones de conformidad con el artículo 5 de la Ley
        527 de 1999, por el cual se reconocen los efectos jurídicos de los
        mensajes de datos. Así mismo el Usuario o Cliente reconoce y acepta el
        uso de firmas electrónicas para la firma de este y otros documentos o
        Contratos Específicos a través del método provisto por BANGK, en los
        términos establecidos por la Ley 527 de 1999 y el Decreto 2364 de 2012,
        compilado en el Decreto Único Reglamentario del sector comercio 1074 de
        2015 o cualquier norma sucesiva que le sustituya o complemente.
      </Text>
      <hr style={hrProps} />
      <Title>
        Comentarios{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Cuando los visitantes dejan comentarios en la web, recopilamos los datos
        que se muestran en el formulario de comentarios, así como la dirección
        IP del visitante y la cadena de agentes de usuario del navegador para
        ayudar a la detección de spam.
      </Text>
      <hr style={hrProps} />
      <Title>
        Medios{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Si subes imágenes a la web deberías evitar subir imágenes con datos de
        ubicación (GPS EXIF) incluidos. Los visitantes de la web pueden
        descargar y extraer cualquier dato de localización de las imágenes de la
        web.
      </Text>
      <hr style={hrProps} />
      <Title>
        Contenido incrustado<br></br>de otros sitios web{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        Los artículos de este sitio pueden incluir contenido incrustado (por
        ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de
        otros sitios web se comporta exactamente de la misma manera que si el
        visitante hubiera visitado ese otro sitio web.<br></br>
        <br></br> Estos sitios web pueden recopilar datos sobre ti, utilizar
        cookies, incrustar un seguimiento adicional de terceros, y supervisar tu
        interacción con ese contenido incrustado, incluido el seguimiento de tu
        interacción con el contenido incrustado si tienes una cuenta y estás
        conectado a esa web.
      </Text>
      <hr style={hrProps} />
      <Title>
        Modificaciones de los<br></br>términos y condiciones{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        BANGK podrá modificar estos Términos y Condiciones en cualquier momento
        sin previo aviso mediante su publicación actualizada en el sitio web.
        Las modificaciones a los Términos y Condiciones entrarán en vigor a
        partir de los 5 días hábiles posteriores a su publicación. Si durante
        este período el Usuario no está de acuerdo con las modificaciones
        introducidas, deberá contactar e informar a BANGK, caso en el cual se
        dará por terminada la relación contractual. En todo caso vencido el
        plazo se entiende aceptadas las modificaciones realizadas, aceptación
        que será refrendada con cada ingreso al sitio web de BANGK.
      </Text>
      <hr style={hrProps} />
      <Title>
        Modificaciones a la <br></br>Política{" "}
        <Image
          alt="arrow"
          src={arrow}
          width={isMobile ? "15px" : "30px"}
          height={isMobile ? "15px" : "30px"}
        />
      </Title>
      <Text>
        La Empresa podrá modificar la Política en cualquier momento y de manera
        unilateral. Para el efecto realizará la publicación de un aviso en la
        página de internet con quince (15) días hábiles de antelación a su
        entrada en vigencia. En caso de no estar de acuerdo por razones válidas
        y que se constituyan en una justa causa con las nuevas políticas de
        manejo de la información personal, los titulares de la información o sus
        representantes podrán solicitar a la Empresa el retiro de su información
        a través del correo electrónico info@bangk.la, sin embargo, no se podrá
        solicitar el retiro de los datos mientras se mantenga un vínculo de
        cualquier orden con la Empresa. <br></br>
        <br></br>Si decides no hacerlo, vencido el referido plazo,
        consideraremos autorizado el tratamiento de sus datos personales, de
        acuerdo con las nuevas políticas de manejo de la información personal.
      </Text>
    </Wrapper>
  );
};

export default Legales;
