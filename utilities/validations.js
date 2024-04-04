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

export const validateEditPersonalInfo = Joi.object({
  birthCountryId: Joi.number().required(),
  countryNationalityId: Joi.number().required(),
  birthStateId: Joi.number().required(),
  birthCityId: Joi.number().required(),
  civilStatusId: Joi.number().required(),
  numberChildren: Joi.alternatives().try(
    Joi.string().required(),
    Joi.number().required()
  ),
  occupation: Joi.string().required(),
  occupationActivityId: Joi.number().required(),
  isPublicPerson: Joi.bool().required(),
  hasBondPublicPerson: Joi.bool().required(),
  residenceCountryId: Joi.number().required(),
  residenceStateId: Joi.number().required(),
  residenceCityId: Joi.number().required(),
});

export const validateEditFinancialInfo = Joi.object({
  monthlyIncome: Joi.number().required(),
  monthlyExpenses: Joi.number().required(),
  assetValue: Joi.number().required(),
  liabilitiesValue: Joi.number().required(),
  incomeOrigin: Joi.string().allow("", null),
});

export const validateEditPropertyInfo = Joi.object({
  housingTypeId: Joi.number().required(),
  housingValue: Joi.number().required(),
  builtgDate: Joi.alternatives(
    Joi.string().isoDate(),
    Joi.custom((value, helpers) => {
      const isDayjsInstance = dayjs.isDayjs(value);
      if (!isDayjsInstance) {
        return helpers.error("any.custom");
      }
      return value;
    }, "Dayjs object")
  ).required(),
  builtArea: Joi.number().required(),
  basementNumber: Joi.number().required(),
  apartmentNumber: Joi.number().required(),
  buildingFloorsNumber: Joi.number().required(),
  address: Joi.string().required(),
  stateId: Joi.number().required(),
  cityId: Joi.number().required(),
});

export const validateEditHealthInfo = Joi.object({
  weight: Joi.number().required(),
  height: Joi.number().required(),
  diseases: Joi.number().allow(null),
  diseasesMoreInfo: Joi.string().allow("", null),
  hivActive: Joi.bool().required(),
  plannedMedicalProcidure: Joi.bool().required(),
  plannedMedicalProcidureMoreInfo: Joi.string().allow("", null),
  disability: Joi.bool().required(),
  disabilityMoreInfo: Joi.string().allow("", null),
});

export const validateEditAdditionalInfo = Joi.object({
  convicted: Joi.bool().required(),
  lifeEnsure: Joi.bool().required(),
  beneficiaries: Joi.array().required(),
  plannedMedicalProcidureMoreInfo: Joi.string().allow("", null),
});
