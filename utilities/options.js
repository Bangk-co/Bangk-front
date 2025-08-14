import { theme } from "@/styles/theme";
import photoBlog from "../assets/img/photo-blog.jpg";
import photoBlog2 from "../assets/img/photo-blog2.jpg";
import photoBlog3 from "../assets/img/photo-blog3.jpg";
import photoBlog4 from "../assets/img/photo-blog4.jpg";
import { whatsappNumber } from "./helpers";


export const wappLink =
  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola%20Bangk,%20Quiero%20Ahorrar!`;

export const email = "soporte@bangk.co";

export const phone = `tel:+${whatsappNumber}`;

export const footerList = [
  {
    title: "Nosotros",
    width: "95px",
    list: [
      { label: "Queremos Hacer Bangk!", link: "/conocenos", isExtern: false },
    ],
  },
  {
    title: "Seguros",
    width: "110px",
    list: [
      {
        label: "Ahorra endosando los seguros de tus créditos",
        link: "/ahorra-en-tus-seguros",
        isExtern: false,
      },
    ],
  },
  {
    title: "Legales",
    width: "75px",
    list: [
      {
        label: "Términos & Condiciones.",
        link: "/legales?section=terms",
        isExtern: false,
      },
      {
        label: "Política de Privacidad.",
        link: "/legales?section=policy",
        isExtern: false,
      },
      {
        label: "Datos & Cookies.",
        link: "/legales?section=cookies",
        isExtern: false,
      },
    ],
  },
  {
    title: "Contáctanos",
    width: "90px",
    list: [
      {
        label: "Déjanos un mensaje.",
        link: email,
        isExtern: true,
        email: true,
      },
      {
        label: "Escribenos a Whatsapp.",
        link: wappLink,
        isExtern: true,
      },
    ],
  },
];

export const footerListResponsive = [
  {
    title: "Nosotros",
    width: "200px",
    height: "25px",
    list: [
      { label: "Queremos Hacer Bangk!", link: "/conocenos", isExtern: false },
    ],
  },
  {
    title: "Seguros",
    width: "200px",
    height: "25px",
    list: [
      {
        label: "Ahorra endosando los seguros de tus créditos",
        link: "/ahorra-en-tus-seguros",
        isExtern: false,
      },
    ],
  },
  {
    title: "Legales",
    width: "200px",
    height: "37.5px",
    list: [
      {
        label: "Términos & Condiciones.",
        link: "/legales?section=terms",
        isExtern: false,
      },
      {
        label: "Política de Privacidad.",
        link: "/legales?section=policy",
        isExtern: false,
      },
      {
        label: "Datos & Cookies.",
        link: "/legales?section=cookies",
        isExtern: false,
      },
    ],
  },
  {
    title: "Contáctanos",
    width: "200px",
    height: "50px",
    list: [
      {
        label: "Déjanos un mensaje.",
        link: email,
        isExtern: true,
        email: true,
      },
      {
        label: "Escribenos a Whatsapp.",
        link: wappLink,
        isExtern: true,
      },
    ],
  },
];

export const stepperList = [
  {
    width: "190px",
    number: "#01",
    text1: "Diligencia los datos de tu deuda actual",
    text2: "(saldo y edad)",
    text3: "",
  },
  {
    width: "190px",
    number: "#02",
    text1: "Recibe una",
    text2: "cotización",
    text3: "de una póliza",
  },

  {
    width: "200px",
    number: "#03",
    text1: "Si aceptas, diligencia el",
    text2: "formulario y paga la prima anual",
    text3: "",
  },
  {
    width: "120px",
    number: "#04",
    text1: "",
    text2: "Recibe tu nueva póliza",
    text3: "",
  },
  {
    width: "220px",
    number: "#05",
    text1: "Nuestro equipo",
    text2: "te acompaña en el trámite",
    text3: "del endoso con tu banco",
    text4: "PSSSTT, Sí,",
    text5: "SIN COSTO ALGUNO",
  },
];

export const infoList = [
  "Te cotizamos un nuevo seguro de vida para deudores y te proporcionamos una estimación de cuánto podrías ahorrar en comparación con el seguro actual.",
  "Paga tu nuevo seguro y nos encargaremos de realizar el trámite para cancelar el anterior en el banco.",
  "Nuestros asesores están disponibles para responder cualquier pregunta que tengas y, si decides hacer el cambio, nos encargamos de gestionar contigo la emisión de tu nuevo seguro.",
  "Una vez que el banco haya aceptado tu nuevo seguro de vida para deudores, recibirás una notificación de confirmación del cambio y ¡comenzarás a ahorrar!",
];

export const contactInfoList = [
  "Ahorrar dinero mediante el endoso de tus seguros de deudores actuales.",
  "Disminuir el monto que pagas por las cuotas de crédito.",
  "Financiar la compra de tu vivienda VIS.",
  "Resolver dudas o pedir asesoría sobre nuestros productos y servicios.",
];

export const cardsInfo = [
  {
    id: 1,
    number: "#01",
    title: "¡Ahorrar es posible!",
    text1: "Bangk es una Startup",
    text2: "que nace para aliviar tu bolsillo",
    color1: theme.colors.white,
    color2: theme.colors.orange100,
    photo: photoBlog,
    width: "230px",
    width2: "130px",
  },
  {
    id: 2,
    number: "#02",
    title: "¡Responsabilidad social!",
    text1: "Quiero asegurarme de que",
    text2: "este sea nuestro camino",
    color1: theme.colors.white,
    color2: theme.colors.orange100,
    photo: photoBlog2,
    width: "230px",
    width2: "130px",
  },
  {
    id: 3,
    number: "#03",
    title: "¡Sigo aprendiendo!",
    text1: "Julián Oquendo -",
    text2: "Cofundador de Hatsu",
    color1: theme.colors.white,
    color2: theme.colors.orange100,
    photo: photoBlog3,
    width: "180px",
    width2: "100px",
  },
  {
    id: 4,
    number: "#04",
    title: "¡Buena Suerte!",
    text1: "Camilo Restrepo -",
    text2: "Empresario",
    color1: theme.colors.white,
    color2: theme.colors.orange100,
    photo: photoBlog4,
    width: "180px",
    width2: "100px",
  },
];

export const definitions = [
  "Autorización: Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales;",
  "Base de datos: Conjunto organizado de datos personales que sea objeto de Tratamiento",
  "Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables;",
  "Datos sensibles: Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual, y los datos biométricos.",
  "Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento;",
  "Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos;",
  "Titular: Persona natural cuyos datos personales sean objeto de Tratamiento;",
  "Transferencia: La transferencia de datos tiene lugar cuando el Responsable y/o Encargado del Tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor, que a su vez es Responsable del Tratamiento y se encuentra dentro o fuera del país.",
  "Transmisión: Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable.",
  "Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.",
  "Usuario: Cualquier persona natural o jurídica que ingrese al sitio web de la Empresa, consulte la información de productos y servicios ofrecidos, realice una solicitud o consulte el estado de los productos o servicios solicitados o contratados.",
];

export const personalData = [
  "Ejercer labores de intermediación en la solicitud y adjudicación de productos y servicios de seguros y financiación.",
  "Compartir los Datos Personales de los Titulares con terceros, aliados y/o proveedores de los productos y servicios ofrecidos que sean de interés de los Usuarios, incluyendo información de localización, financiera, de salud y en general la necesaria para el trámite de las solicitudes, evaluación, comunicación y formalización de la adquisición y uso de los productos.",
  "Ofrecer varias alternativas de productos y servicios suministradas por diferentes proveedores que sean de interés de los Usuarios.",
  "Almacenar la información relacionada con las solicitudes y adjudicaciones de los productos y servicios solicitados para su consulta posterior por parte de los Usuarios.",
  "Realizar ofertas de productos complementarios, mejorar los actuales y/o relacionados con el portafolio de productos y servicios ofrecidos, bajo la modalidad de cros-selling o up-selling.",
  "Elaborar modelos y/o estrategias de fidelización para beneficio de los Usuarios.",
  "Generar estadísticas y modelos para evaluar el portafolio de productos y servicios ofrecido, ampliarlo, reducirlo o modificarlo de acuerdo con el comportamiento del usuario, sus necesidades y condiciones del mercado.",
  "Diseñar o crear productos o servicios propios de seguros y/o financiación que puedan ser de interés de los Usuarios.",
  "Realizar campañas de mercadeo, promoción o comunicación con los Usuarios de manera directa o a través de terceros a través de llamadas telefónicas, celular, correo electrónico o cualquier otro medio.",
  "Usar el contenido publicado por los Usuarios a través de los canales de atención y redes sociales de la Empresa, tales como fotos, videos, comentarios entre otros, para llevar a cabo planes comerciales o de mercadeo a través de cualquier medio de comunicación.",
  "Cumplir con el suministro de información a las autoridades competentes en el marco de requerimientos judiciales, tributarios y los que establezca la Ley.",
  "Cumplir con el reporte de información regulatoria requerido por entidades aliadas tales como las instituciones financieras y las que apliquen, en el marco de la oferta de los productos y servicios adquiridos por los Usuarios de acuerdo con la normatividad vigente.",
  "Proporcionar información de interés a los Usuarios sobre el contenido y uso del sitio web y los canales de atención definidos por la Empresa.",
  "Analizar el comportamiento de los Usuarios en el uso y navegación del sitio web de la Empresa incluyendo preferencias de contenido, número de clics en cada sección y en general cualquier hábito o acción, con el fin de mejorar la experiencia de uso del sitio y conocer mejor los gustos y necesidades de los Usuarios. Este análisis podrá realizarse mediante el uso de software o programas especializados contratados por la Empresa de forma directa o a través de terceros.",
  "Informar sobre la modificación a los Términos y Condiciones, Política de Privacidad y Tratamiento de Datos y en general cualquier cambio sobre las condiciones de la oferta de productos y servicios.",
  "Almacenar la información de los Usuarios en las Bases de Datos y sistemas contratados por la Empresa independientemente de su ubicación o a través de servidores internos o externos.",
  "Transferir o Transmitir los Datos Personales de los Titulares a filiales, subsidiarias, aliados comerciales o proveedores autorizados para el cumplimiento de las finalidades establecidas en esta Política.",
  "Consultar información complementaria de los Titulares en el marco del trámite de solicitudes de los productos y servicios ofrecidos, a través de bases de datos públicas y privadas tales como pero sin limitarse a Centrales de Información, de Riesgo, Listas Restrictivas, Antecedentes Judiciales, entre otras, que permitan establecer perfiles de de crédito o de seguros y mitigar riesgos relacionados con el lavado de activos, financiación del terrorismo o cualquier otra actividad delictiva.",
  "Compartir los Datos Personales para gestionar la administración de la relación con los usuarios a través de aplicativos o terceros especializados en el manejo de CRM (Customer Relationship Management).",
];

export const personalData2 = [
  "- Desarrollar actividades administrativas y de recursos humanos tanto a nivel interno como a través de tercerizaciones, incluida la contratación de beneficios laborales.",
  "- Realizar los pagos derivados de cualquier relación contractual laboral o por prestación de servicios.",
  "- Informar a contactos autorizados en caso de emergencias durante el horario de trabajo.",
  "- Realizar capacitaciones a los colaboradores internos o externos de la Empresa.",
  "- Realizar las labores que apliquen en el marco de contratos, alianzas o acuerdos de tipo comercial, operativo, financiero o administrativo.",
  "- Realizar monitoreo y vigilancia por razones de seguridad en las instalaciones de la Empresa, incluyendo el uso de cámaras.",
  "- Registrar a los Titulares en los sistemas de la Empresa y tramitar sus pagos.",
];

export const minorsData = [
  "Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento. Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.",
  "Solicitar prueba de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento.",
  "Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento, previa solicitud, respecto del uso que le ha dado a sus datos personales.",
  "Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la presente ley y las demás normas que la modifiquen, adicionen o complementen.",
  "Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución.",
  "Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.",
];

export const cookies = [
  "- Generar estadísticas y análisis para conocer las preferencias de los Usuarios y mejorar la calidad y experiencia en el uso de sus productos y servicios.",
  "- Llevar a cabo acciones y estrategias de fidelización y planes de marketing de forma directa o a través de terceros previamente autorizados.",
  "- Proporcionar información publicitaria o de interés de los Usuarios a través del sitio web y/o de las redes sociales de BANGK",
];

export const cookiesSettings = [
  {
    label:
      "- Para el procedimiento en Google Chrome seguir los pasos indicados",
    link: "https://support.google.com/accounts/answer/61416?hl=es-419&co=GENIE.Platform%3DDesktop",
  },
  {
    label: "-	Para el procedimiento en Safari seguir los pasos indicados",
    link: "https://support.apple.com/es-es/guide/safari/sfri11471/mac",
  },
  {
    label: "-	Para el procedimiento en Firefox seguir los pasos indicados",
    link: "https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros",
  },
];
