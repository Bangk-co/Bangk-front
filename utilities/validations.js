import Joi from "joi";
import tlds from "@sideway/address";

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
