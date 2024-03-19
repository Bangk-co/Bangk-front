import { theme } from "../styles/theme";
import { Div, Text } from "@/styles/Common";
import axios from "axios";

const CryptoJS = require("crypto-js");

export const encrypt = (message) => {
  const key = process.env.NEXT_PUBLIC_CRYPT_KEY;
  const iv = process.env.NEXT_PUBLIC_CRYPT_IV;

  const encryptedData = CryptoJS.AES.encrypt(
    message,
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      keySize: 256,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encryptedData.toString();
};

export const decrypt = (encryptedMessage) => {
  const key = process.env.NEXT_PUBLIC_CRYPT_KEY;
  const iv = process.env.NEXT_PUBLIC_CRYPT_IV;

  const decryptedData = CryptoJS.AES.decrypt(
    encryptedMessage,
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      keySize: 256,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return decryptedData.toString(CryptoJS.enc.Utf8);
};

export const parseNumber = (value) => {
  const numericString = value.replace(/[^\d,]/g, "").replace(",", ".");

  const numericValue = parseFloat(numericString).toString();

  return numericValue;
};

export const numberFormat = (value) => {
  if (value !== "" && typeof value === "number") {
    const stringValue = value.toString();

    const [integerPart, decimalPart] = stringValue.split(".");

    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

    const truncatedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : "";

    if (decimalPart) {
      return `${formattedIntegerPart},${truncatedDecimalPart}`;
    } else {
      return formattedIntegerPart;
    }
  }
  return "";
};

export const numberFormatText = (value) => {
  if (value !== "") {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return null;
};

export const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formattedPrice = (price) => {
  {
    return Number(price).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
};

export const formattedPhone = (phone) => {
  return `${String(phone).slice(0, 3)} ${String(phone).slice(3, 6)} ${String(
    phone
  ).slice(6)}`;
};

export const renderStateDiv = (stateName) => {
  let backgroundColor, borderColor, color;

  switch (stateName) {
    case "Potencial":
      backgroundColor = theme.colors.blue100;
      borderColor = theme.colors.blue;
      color = theme.colors.blue;
      break;
    case "Registrado":
      backgroundColor = theme.colors.blue100;
      borderColor = theme.colors.blue;
      color = theme.colors.blue;
      break;
    case "Prospecto":
      backgroundColor = theme.colors.green100;
      borderColor = theme.colors.green500;
      color = theme.colors.green500;
      break;
    case "Activo":
      backgroundColor = theme.colors.green200;
      borderColor = theme.colors.green500;
      color = theme.colors.green500;
      break;
    case "Inactivo":
      backgroundColor = theme.colors.yellow100;
      borderColor = theme.colors.yellow600;
      color = theme.colors.yellow600;
      break;
    case "Perdido por frio":
      backgroundColor = theme.colors.red100;
      borderColor = theme.colors.red500;
      color = theme.colors.red500;
      break;
    case "Perdido por rechazo":
      backgroundColor = theme.colors.red100;
      borderColor = theme.colors.red500;
      color = theme.colors.red500;
      break;
    default:
      backgroundColor = "transparent";
      borderColor = "transparent";
      color = theme.colors.black;
      break;
  }
  return (
    <Div
      background={backgroundColor}
      border={borderColor}
      color={color}
      width="100%"
      align="center"
      justify="center"
      radius="4px"
      p="6px 10px"
      style={{ border: `1px solid ${borderColor}` }}
    >
      {stateName}
    </Div>
  );
};

export const renderDocumentStateDiv = (stateName) => {
  let borderColor, color;

  switch (stateName) {
    case "Solicitud creada":
    case "Revisión de extracto":
    case "Cotización enviada":
    case "Cotización aceptada":
    case "Formularios Diligenciados":
    case "Formularios Validados":
    case "Estudio Sarlaft":
    case "Estudio lista restrictiva SBS":
    case "Solicitud emisión de poliza":
      borderColor = theme.colors.teal;
      color = theme.colors.teal;
      break;
    case "Poliza emitida":
    case "Poliza Pagada":
    case "Carta de endoso realizada":
    case "Endoso aceptado":
    case "Renovado":
      borderColor = theme.colors.green500;
      color = theme.colors.green500;
      break;
    case "Próximo a renovar":
      borderColor = theme.colors.yellow600;
      color = theme.colors.yellow600;
      break;
    case "Rechazado":
    case "Vencido":
      borderColor = theme.colors.red500;
      color = theme.colors.red500;
      break;
    default:
      borderColor = theme.colors.neutralGray900;
      color = theme.colors.neutralGray900;
      break;
  }
  return (
    <Div
      background={theme.colors.white}
      align="center"
      justify="center"
      radius="4px"
      p="8px"
      width="fit-content"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <Text
        color={color}
        size={theme.fonts.size.xs}
        font={theme.fonts.family.primary}
        weight={theme.fonts.weight.semibold}
      >
        {stateName}
      </Text>
    </Div>
  );
};

export const documentTypeAbbreviation = (documentType) => {
  switch (documentType) {
    case "Cédula de ciudadania":
      return "C.C.";
    case "Cédula de extranjeria":
      return "C.E.";
    case "Número de pasaporte":
      return "PA";
    default:
      return "C.C.";
  }
};

export const downloadFile = async (url, filename) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export const historyStatus = {
  SolicitudCreada: "Solicitud creada",
  RevisionDeExtracto: "Revisión de extracto",
  CotizacionEnviada: "Cotización enviada",
  CotizaciónAceptada: "Cotización aceptada",
  FormulariosDiligenciados: "Formularios diligenciados",
  FormulariosValidados: "Formularios validados",
  EstufioSarlaft: "Estudio Sarlaft",
  EstudioListaRestrictivaSBS: "Estudio lista restrictiva SBS",
  PolizaEmitida: "Póliza emitida",
  PolizaPagada: "Póliza pagada",
  CartaDeEndosoRealizada: "Carta de endoso realizada",
  EndosoAceptada: "Endoso aceptada",
  ProximoARenovar: "Próximo a renovar",
  Renpvado: "Renovado",
  Vencido: "Vencido",
  RechazadoPorLaAseguradora: "Rechazado por la aseguradora",
  CotizaciónRechazada: "Cotización rechazada",
  CotizaciónNoRespondida: "Cotización no respondida",
};

export const getFileType = (url) => {
  const extension = url.split(".").pop().toLowerCase();

  if (extension === "png" || extension === "jpg" || extension === "jpeg") {
    return "image";
  } else if (extension === "pdf") {
    return "pdf";
  } else {
    return "unknown";
  }
};

export const getDiseasesIds = (selectedDiseases, allDiseases) => {
  if (selectedDiseases.length === 0) {
    return null;
  } else {
    const diseasesIds = allDiseases
      .filter((disease) => selectedDiseases.includes(disease.name))
      .map((disease) => disease.id)
      .join(",");

    return diseasesIds;
  }
};

export const getDiseasesNames = (selectedDiseaseIds, allDiseases) => {
  if (!selectedDiseaseIds) {
    return [];
  }

  const selectedIds = selectedDiseaseIds
    .split(",")
    .map((id) => parseInt(id, 10));
  const selectedDiseases = allDiseases.filter((disease) =>
    selectedIds.includes(disease.id)
  );
  return selectedDiseases.map((disease) => disease.name);
};

export const initDataLoanInsurancePolicy = {
  address: null,
  apartmentNumber: null,
  assetValue: null,
  basementNumber: null,
  beneficiaries: null,
  beneficiaryIdentificationNumber: null,
  beneficiaryIdentificationTypeId: null,
  beneficiaryName: null,
  birthCityId: null,
  birthCountryId: null,
  birthDate: null,
  birthStateId: null,
  buildingFloorsNumber: null,
  builtArea: null,
  builtgDate: null,
  cityId: null,
  cityVehiculeId: null,
  civilStatusId: null,
  clienId: null,
  convicted: null,
  countryCodePhoneId: null,
  countryNationalityId: null,
  countryVehiculeId: null,
  disability: null,
  disabilityMoreInfo: null,
  diseases: null,
  diseasesMoreInfo: null,
  documentIdentificationTypeId: null,
  documentIssueDate: null,
  email: null,
  genderId: null,
  height: null,
  hivActive: null,
  housingTypeId: null,
  housingValue: null,
  identificationNumber: null,
  incomeOrigin: null,
  isPublicPerson: null,
  lastName: null,
  liabilitiesValue: null,
  lifeEnsure: null,
  loanApplicationId: null,
  loanBalance: null,
  loanTypeId: null,
  monthlyCostInsurance: null,
  monthlyExpenses: null,
  monthlyIncome: null,
  name: null,
  numberChildren: null,
  occupation: null,
  occupationActivityId: null,
  phoneNumber: null,
  plannedMedicalProcidure: null,
  plannedMedicalProcidureMoreInfo: null,
  residenceCityId: null,
  residenceCountryId: null,
  residenceStateId: null,
  stateId: null,
  stateVehiculeId: null,
  vehicleLicensePlate: null,
  weight: null,
};
