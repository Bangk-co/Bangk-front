const CryptoJS = require("crypto-js");

export const encrypt = (message) => {
  const key = process.env.REACT_APP_CRYPT_KEY;
  const iv = process.env.REACT_APP_CRYPT_IV;

  const encryptedData = CryptoJS.AES.encrypt(
    message,
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
    }
  );
  return encryptedData.toString();
};
