import { theme } from "../styles/theme";
import { Div } from "@/styles/Common";

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

export const numberFormat = (value) => {
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
    });
  }
};

export const renderStateDiv = (stateName) => {
  let backgroundColor, borderColor, color;

  switch (stateName) {
    case "Potencial":
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
