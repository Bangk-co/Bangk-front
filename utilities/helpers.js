const CryptoJS = require("crypto-js");

export const encrypt = (message) => {
  const key = process.env.REACT_APP_CRYPT_KEY;
  const iv = process.env.REACT_APP_CRYPT_IV;

  const encryptedData = CryptoJS.AES.encrypt(message, key, { iv: iv });
  return encryptedData.toString();
};
