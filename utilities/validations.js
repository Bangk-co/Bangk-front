import Joi from "joi";
import tlds from "@sideway/address";
import dayjs from "dayjs";

const validatePassword = Joi.string()
  .required()
  .pattern(
    new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{10,}$/
    )
  );

export const validateEmailRequired = Joi.string()
  .email({ tlds: { allow: tlds } })
  .required();

export const validateLoginForm = Joi.object({
  email: validateEmailRequired,
  password: validatePassword,
});

export const validateChangePassword = Joi.object({
  password: validatePassword,
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Las contraseñas deben coincidir",
  }),
});

export const validateRegisterForm = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: validateEmailRequired,
  password: validatePassword,
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Las contraseñas deben coincidir",
  }),
});

export const validateEditClientForm = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).max(100).required(),
  lastName: Joi.string().min(3).max(100).required(),
  documentType: Joi.number().required(),
  identificationNumber: Joi.number().required(),
  countryCode: Joi.number().required(),
  phoneNumber: Joi.string().required(),
  birthDate: Joi.alternatives(
    Joi.string().isoDate(),
    Joi.custom((value, helpers) => {
      const isDayjsInstance = dayjs.isDayjs(value);
      if (!isDayjsInstance) {
        return helpers.error("any.custom");
      }
      return value;
    }, "Dayjs object")
  ).required(),
  documentIssueDate: Joi.alternatives(
    Joi.string().isoDate(),
    Joi.custom((value, helpers) => {
      const isDayjsInstance = dayjs.isDayjs(value);
      if (!isDayjsInstance) {
        return helpers.error("any.custom");
      }
      return value;
    }, "Dayjs object")
  ).required(),
  genderId: Joi.number().required(),
  email: Joi.string().required(),
});
