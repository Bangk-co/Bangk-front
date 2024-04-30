import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import { Grid, MenuItem } from "@mui/material";
import { Text, Card, Div, Row } from "@/styles/Common";
import {
  HeaderProfile,
  HeaderProfileMobile,
} from "@/components/ClientPlatform/ProfileForm/styles";
import { Button } from "@/components/Common/Button";
import { TextField } from "@/components/Common/TextField";
import { DatePicker } from "@/components/Common/DatePicker";
import { Select } from "@/components/Common/Select";
import { theme } from "@/styles/theme";
import whatsapp from "../../../assets/icons/settingsGreen.svg";
import backIcon from "@/assets/icons/backArrow.svg";
import useGetClientInfo from "@/hooks/Customers/useGetClientInfo";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import useUpdateClientProfile from "@/hooks/Profile/useUpdateClientProfile";
import { ToastSuccess } from "@/components/Common/ToastSucces";
import CircularProgress from "@mui/material/CircularProgress";
import { getUserInfo } from "@/utilities/helpers";

const ProfileForm = ({ isMobile }) => {
  const router = useRouter();
  const updateProfile = useUpdateClientProfile();
  const queryClient = useQueryClient();

  const { ClientId } = getUserInfo();

  const getClient = useGetClientInfo(ClientId);
  const { data, isSuccess } = getClient;
  const [clientInfo, setClientInfo] = useState();
  const [userForm, setUserForm] = useState({
    name: "",
    lastName: "",
    documentTypeId: null,
    identificationNumber: "",
    email: "",
    countryCode: null,
    phoneNumber: "",
    birthDate: null,
    genderId: null,
    documentIssueDate: null,
  });
  const [errorDate, setErrorDate] = useState(false);
  useEffect(() => {
    if (isSuccess && data?.data?.clientsInfo.length > 0) {
      setClientInfo(data?.data?.clientsInfo[0]);
      setUserForm(data?.data?.clientsInfo[0]);
    }
  }, [data, isSuccess]);

  const documentsType = useGetDocumentType();
  const { data: dataDocuments, isSuccess: isSuccessDocuments } = documentsType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDocuments) {
      setDocumentTypeOptions(
        dataDocuments?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessDocuments, dataDocuments]);

  const gender = useGetGenders();
  const { data: dataGender, isSuccess: isSuccessGender } = gender;
  const [gendersOptions, setGendersOptions] = useState([]);
  useEffect(() => {
    if (isSuccessGender) {
      setGendersOptions(
        dataGender?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessGender, dataGender]);

  const phoneCode = useGetIndicatives();
  const { data: dataPhone, isSuccess: isSuccessPhone } = phoneCode;
  const [phoneCodesOptions, setPhoneCodesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessPhone) {
      setPhoneCodesOptions(
        dataPhone?.data?.groupSettings?.map((ele) => ({
          label: `(${ele.code}) ${ele.name}`,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessPhone, dataPhone]);

  const textFieldProps = {
    labelColor: theme.colors.neutralGray900,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    labelSize: theme.fonts.size.sm,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.default2,
    border: theme.colors.neutralGray500,
    borderHover: theme.colors.neutralGray500,
    fontColor: theme.colors.neutralGray900,
    radius: "4px",
    width: "100%",
    height: "40px",
  };

  const handleChangeUser = (event) => {
    const { id, value } = event.target;
    const newUserForm = { ...userForm };

    if (id === "identificationNumber") {
      if (userForm.documentTypeId !== 78) {
        newUserForm[id] = value.replace(/\D/g, "");
      } else {
        newUserForm[id] = value;
      }
    } else if (id === "phoneNumber") {
      newUserForm[id] = value.replace(/\D/g, "");
    } else {
      newUserForm[id] = value;
    }

    setUserForm(newUserForm);
  };

  const handleSelectUser = (event) => {
    const { name, value } = event.target;
    const newUserForm = { ...userForm };

    newUserForm[name] = value;
    setUserForm(newUserForm);
  };

  const handleChangeDate = (event, id) => {
    const today = new Date();
    const birthDate = new Date(event);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (id === "birthDate") {
      if (age < 18) {
        setErrorDate(true);
      } else {
        setErrorDate(false);
        setUserForm({ ...userForm, birthDate: event });
      }
    } else {
      setUserForm({ ...userForm, documentIssueDate: event });
    }
  };

  const handleBack = () => {
    router.back();
  };

  const disabledButtons =
    (userForm &&
      Object.values(userForm).some(
        (value) => value === "" || value === null
      )) ||
    (clientInfo && JSON.stringify(clientInfo) === JSON.stringify(userForm));

  const handleSave = () => {
    const formData = {
      clientId: userForm?.idClient,
      name: userForm?.name,
      lastName: userForm?.lastName,
      documentTypeId: userForm?.documentTypeId,
      identificationNumber: userForm?.identificationNumber,
      countryCode: userForm?.countryCode,
      phoneNumber: userForm?.phoneNumber,
      birthDate: userForm?.birthDate,
      genderId: userForm?.genderId,
      documentIssueDate: userForm?.documentIssueDate,
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
  };

  return (
    <>
      {isMobile ? (
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
            Tu Perfil
          </Text>
        </HeaderProfileMobile>
      ) : (
        <HeaderProfile>
          <Text
            size={theme.fonts.size.h2}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
          >
            Tu Perfil
          </Text>
          <Button
            width={"251px"}
            padding="0px"
            labelColor={theme.colors.green900}
            borderHover={"#F0F0F0"}
            border={"#F0F0F0"}
            hover={theme.colors.gray100}
            background={"#F0F0F0"}
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            radius={"40px"}
            startIcon={
              <Image alt="logo" src={whatsapp} width={16} height={16} />
            }
          >
            Cambia tu constraseña
          </Button>
        </HeaderProfile>
      )}
      <Card gap="8px" m="0 0 24px 0" width={isMobile ? "100%" : "752px"}>
        <Text
          size={theme.fonts.size.ft}
          color={theme.colors.primary900}
          font={theme.fonts.family.primaryBold}
        >
          Datos generales
        </Text>
        <Text
          size={theme.fonts.size.sm}
          color={theme.colors.neutralGray600}
          font={theme.fonts.family.primaryMedium}
        >
          Te recomendamos tener siempre actualizados tu información personal
          para realizar una mejor gestión de tus productos.
        </Text>
        <Div
          height="1px"
          background={theme.colors.neutralGray200}
          width="100%"
          m="8px 0 16px 0"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Nombre(s)*"}
              {...textFieldProps}
              id={"name"}
              helper={"Escribe el nombre como aparece en la cédula"}
              helperColor={theme.colors.neutralGray700}
              value={userForm?.name}
              onChange={handleChangeUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Apellidos*"}
              {...textFieldProps}
              id={"lastName"}
              helper={"Escribe los apellidos como aparecen en la cédula"}
              helperColor={theme.colors.neutralGray700}
              value={userForm?.lastName}
              onChange={handleChangeUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label={"Tipo de documento*"}
              {...textFieldProps}
              notFocused={true}
              name="documentTypeId"
              value={userForm?.documentTypeId}
              onChange={handleSelectUser}
            >
              {documentTypeOptions.map((ele, indx) => (
                <MenuItem
                  key={indx}
                  value={ele.value}
                  style={{ fontFamily: theme.fonts.family.primary }}
                >
                  {ele.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Número de documento*"}
              {...textFieldProps}
              id={"identificationNumber"}
              value={userForm?.identificationNumber}
              onChange={handleChangeUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label={"Fecha de expedición del documento*"}
              {...textFieldProps}
              border={theme.colors.gray500}
              value={dayjs(userForm?.documentIssueDate)}
              error={userForm?.documentIssueDate === null}
              helper={
                userForm?.documentIssueDate === null ? "Campo requerido" : ""
              }
              onChange={(event) => handleChangeDate(event, "documentIssueDate")}
            />
          </Grid>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <DatePicker
              label={"Fecha de nacimiento*"}
              {...textFieldProps}
              border={theme.colors.gray500}
              value={dayjs(userForm?.birthDate)}
              error={errorDate}
              helper={errorDate ? "Debes ser mayor de edad" : ""}
              onChange={(event) => handleChangeDate(event, "birthDate")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label={"Genero*"}
              {...textFieldProps}
              notFocused={true}
              name="genderId"
              value={userForm?.genderId}
              onChange={handleSelectUser}
            >
              {gendersOptions.map((ele, indx) => (
                <MenuItem
                  key={indx}
                  value={ele.value}
                  style={{ fontFamily: theme.fonts.family.primary }}
                >
                  {ele.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label={"Código de país*"}
              {...textFieldProps}
              notFocused={true}
              name={"countryCode"}
              value={userForm?.countryCode}
              onChange={handleSelectUser}
            >
              {phoneCodesOptions?.map((ele, indx) => (
                <MenuItem
                  key={indx}
                  value={ele.value}
                  style={{ fontFamily: theme.fonts.family.primary }}
                >
                  {ele.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Número de celular*"}
              {...textFieldProps}
              id={"phoneNumber"}
              value={userForm?.phoneNumber}
              onChange={handleChangeUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Correo electrónico*"}
              {...textFieldProps}
              id={"email"}
              value={userForm?.email}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"ID cliente*"}
              {...textFieldProps}
              id={"clientId"}
              value={userForm?.idClient}
              disabled={true}
            />
          </Grid>
        </Grid>
        <Row width="100%" justify="center" m="24px 0 24px 0">
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
            onClick={handleSave}
            disabled={disabledButtons || updateProfile.isLoading}
          >
            Guardar
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default ProfileForm;
