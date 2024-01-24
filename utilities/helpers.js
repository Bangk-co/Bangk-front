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
