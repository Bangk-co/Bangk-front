import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { Grid, IconButton } from "@mui/material";
import { Text, Card, Row } from "@/styles/Common";
import { HeaderProfileMobile } from "@/components/ClientPlatform/ProfileForm/styles";
import { Button } from "@/components/Common/Button";
import { TextField } from "@/components/Common/TextField";
import { theme } from "@/styles/theme";
import eye from "@/assets/icons/eye.svg";
import eyeoff from "@/assets/icons/eyeoff.svg";
import lock from "@/assets/icons/lock.svg";
import backIcon from "@/assets/icons/backArrow.svg";
import check from "@/assets/icons/checkCircleGreen.svg";
import cancel from "@/assets/icons/cancelCircleRed.svg";
import useUpdateClientProfile from "@/hooks/Profile/useUpdateClientProfile";
import { ToastSuccess } from "@/components/Common/ToastSucces";
import CircularProgress from "@mui/material/CircularProgress";

const ChangePasswordForm = ({ isMobile }) => {
  const router = useRouter();
  const updateProfile = useUpdateClientProfile();
  const queryClient = useQueryClient();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: null,
  });
  const [validations, setValidations] = useState({
    samePassword: false,
    length: false,
    capitalLetter: false,
    numbers: false,
    character: false,
  });

  const validation = [
    {
      icon: (
        <Image
          alt="validation"
          src={validations.samePassword ? check : cancel}
          width={16}
          height={16}
        />
      ),
      text: "Las contraseñas deben coincidir",
    },
    {
      icon: (
        <Image
          alt="validation"
          src={validations.length ? check : cancel}
          width={16}
          height={16}
        />
      ),
      text: "Mínimo 8 caracteres",
    },
    {
      icon: (
        <Image
          alt="validation"
          src={validations.capitalLetter ? check : cancel}
          width={16}
          height={16}
        />
      ),
      text: "Incluye una mayúscula",
    },
    {
      icon: (
        <Image
          alt="validation"
          src={validations.numbers ? check : cancel}
          width={16}
          height={16}
        />
      ),
      text: "Incluye números",
    },
    {
      icon: (
        <Image
          alt="validation"
          src={validations.character ? check : cancel}
          width={16}
          height={16}
        />
      ),
      text: "Incluye almenos 1 carácter especial -+/",
    },
  ];

  const textFieldProps = {
    labelColor: theme.colors.neutralGray900,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.sm,
    border: theme.colors.neutralGray500,
    borderHover: theme.colors.neutralGray500,
    fontColor: theme.colors.neutralGray900,
    radius: "4px",
    width: "100%",
    height: "40px",
    prefixIcon: (
      <Image alt="confirm-password" src={lock} width={16} height={16} />
    ),
  };

  const handleClickShowPassword = (field) => {
    if (field === "oldPassword") {
      setShowOldPassword((show) => !show);
    } else if (field === "password") {
      setShowNewPassword((show) => !show);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword((show) => !show);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newUserForm = { ...passwordForm };
    newUserForm[id] = value;
    if (!disabledButtons) {
      let isSamePassword;
      if (id === "confirmPassword") {
        isSamePassword = passwordForm.password === value;
      } else {
        isSamePassword = passwordForm.confirmPassword === value;
      }

      const isLengthValid = value.length >= 8;
      const hasCapitalLetter = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      setValidations({
        samePassword: isSamePassword,
        length: isLengthValid,
        capitalLetter: hasCapitalLetter,
        numbers: hasNumber,
        character: hasSpecialCharacter,
      });
    }
    setPasswordForm(newUserForm);
  };

  const handleBack = () => {
    router.back();
  };

  const disabledButtons =
    passwordForm &&
    Object.values(passwordForm).some((value) => value === "" || value === null);

  /*   const handleSave = () => {
    const formData = {
      clientId: passwordForm?.idClient,
      name: passwordForm?.name,
      lastName: passwordForm?.lastName,
      documentTypeId: passwordForm?.documentTypeId,
      identificationNumber: passwordForm?.identificationNumber,
      countryCode: passwordForm?.countryCode,
      phoneNumber: passwordForm?.phoneNumber,
      birthDate: passwordForm?.birthDate,
      genderId: passwordForm?.genderId,
      documentIssueDate: passwordForm?.documentIssueDate,
    };
    updateProfile.reset();
    updateProfile.mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["clientInfo"]);
        toast.custom(
          <ToastSuccess
            message={"Los datos se han modificado con éxito"}
            color={theme.colors.white}
            background={theme.colors.primary300}
          />,
          { duration: 1000 }
        );
      },
      onError: (err) => {
        err.response.data.errors.map((error) => {
          toast.error(error);
        });
      },
    });
  }; */

  return (
    <>
      {isMobile && (
        <HeaderProfileMobile>
          <Image
            alt="back"
            src={backIcon}
            width={16}
            height={16}
            onClick={handleBack}
          />
          <Text
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
            align="center"
            style={{ width: "100%" }}
          >
            Cambia tu contraseña
          </Text>
        </HeaderProfileMobile>
      )}
      <Card
        gap="8px"
        m="0 0 24px 0"
        p={!isMobile && "24px 32px"}
        width={isMobile ? "100%" : "478px"}
        shadow={!isMobile && "0px"}
        align="center"
      >
        {!isMobile && (
          <Text
            size={theme.fonts.size.ft}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
          >
            Cambia tu contraseña
          </Text>
        )}
        <Grid container spacing={2} margin={!isMobile && "16px 0 0 0"}>
          <Grid item xs={12}>
            <TextField
              label={"Constraseña actual*"}
              {...textFieldProps}
              id={"oldPassword"}
              placeholder={"Ingresa tu contraseña actual"}
              type={showOldPassword ? "text" : "password"}
              suffix={
                <IconButton
                  onClick={() => handleClickShowPassword("oldPassword")}
                  edge="end"
                >
                  {showOldPassword ? (
                    <Image alt="eyeoff" src={eyeoff} />
                  ) : (
                    <Image alt="eye" src={eye} />
                  )}
                </IconButton>
              }
              value={passwordForm?.oldPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Nueva constraseña*"}
              {...textFieldProps}
              id={"password"}
              placeholder={"Ingresa la nueva contraseña"}
              type={showNewPassword ? "text" : "password"}
              suffix={
                <IconButton
                  onClick={() => handleClickShowPassword("password")}
                  edge="end"
                >
                  {showNewPassword ? (
                    <Image alt="eyeoff" src={eyeoff} />
                  ) : (
                    <Image alt="eye" src={eye} />
                  )}
                </IconButton>
              }
              value={passwordForm?.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} margin="0 0 16px 0">
            <TextField
              label={"Confirma la ueva constraseña*"}
              {...textFieldProps}
              id={"confirmPassword"}
              placeholder={"Confirma la nueva contraseña"}
              type={showConfirmPassword ? "text" : "password"}
              suffix={
                <IconButton
                  onClick={() => handleClickShowPassword("confirmPassword")}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <Image alt="eyeoff" src={eyeoff} />
                  ) : (
                    <Image alt="eye" src={eye} />
                  )}
                </IconButton>
              }
              value={passwordForm?.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {!disabledButtons &&
          validation.map((validation, index) => (
            <Row key={index} gap="8px" m="0 0 4px 0">
              {validation.icon}
              <Text size={theme.fonts.size.sm} color={theme.colors.primary900}>
                {validation.text}
              </Text>
            </Row>
          ))}
        <Row width="100%" justify="center" m="24px 0 0 0">
          <Button
            background={
              isMobile ? theme.colors.green900 : theme.colors.yellow500
            }
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            labelColor={isMobile ? theme.colors.white : theme.colors.green900}
            hover={isMobile ? theme.colors.green900 : theme.colors.yellow500}
            border={isMobile ? theme.colors.green900 : theme.colors.yellow500}
            borderHover={
              isMobile ? theme.colors.green900 : theme.colors.yellow500
            }
            width={isMobile ? "247px" : "300px"}
            height={"40px"}
            startIcon={
              updateProfile.isLoading ? (
                <CircularProgress
                  size={10}
                  style={{ color: theme.colors.white }}
                />
              ) : null
            }
            /* onClick={handleSave} */
            disabled={
              Object.values(validations).some((value) => value === false) ||
              updateProfile.isLoading
            }
          >
            Guardar
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default ChangePasswordForm;
