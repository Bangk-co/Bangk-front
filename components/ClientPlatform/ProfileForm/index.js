import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";

const ProfileForm = ({ isMobile }) => {
  const router = useRouter();

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
          label: `(${ele.code})`,
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

  const handleBack = () => {
    router.back();
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
              /* value={userForm?.name}
                  onChange={handleChangeUser}
                  disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Apellidos*"}
              {...textFieldProps}
              id={"lastName"}
              helper={"Escribe los apellidos como aparecen en la cédula"}
              helperColor={theme.colors.neutralGray700}
              /* value={userForm?.lastName}
                  onChange={handleChangeUser}
                  disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label={"Tipo de documento*"}
              {...textFieldProps}
              notFocused={true}
              name="documentTypeId"
              /* value={userForm?.documentTypeId}
              onChange={handleSelectUser}
              disabled={savedBankStatStatement} */
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
              /* value={userForm?.identificationNumber}
              onChange={handleChangeUser}
              disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label={"Fecha de expedición del documento*"}
              {...textFieldProps}
              border={theme.colors.gray500}
              /* value={userForm?.documentIssueDate}
                  error={userForm?.documentIssueDate === null}
                  helper={
                    userForm?.documentIssueDate === null
                      ? "Campo requerido"
                      : ""
                  }
                  onChange={(event) =>
                    handleChangeDate(event, "documentIssueDate")
                  }
                  disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <DatePicker
              label={"Fecha de nacimiento*"}
              {...textFieldProps}
              border={theme.colors.gray500}
              /* error={errorDate}
                  helper={errorDate ? "Debes ser mayor de edad" : ""}
                  value={userForm?.birthDate}
                  onChange={(event) => handleChangeDate(event, "birthDate")}
                  disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label={"Genero*"}
              {...textFieldProps}
              notFocused={true}
              name="genderId"
              /* value={userForm?.documentTypeId}
              onChange={handleSelectUser}
              disabled={savedBankStatStatement} */
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
              /* value={userForm?.countryCode}
              onChange={handleSelectUser}
              disabled={savedBankStatStatement} */
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
              /* value={userForm?.phoneNumber}
                  onChange={handleChangeUser}
                  disabled={savedBankStatStatement} */
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"Correo electrónico*"}
              {...textFieldProps}
              id={"email"}
              /* value={userForm?.email} */
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label={"ID cliente*"}
              {...textFieldProps}
              id={"clientId"}
              /* value={userForm?.phoneNumber}
                  onChange={handleChangeUser}*/
              disabled={true}
            />
          </Grid>
        </Grid>
        <Row width="100%" justify="center" m="24px 0 24px 0">
          <Button
            background={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            hover={theme.colors.green900}
            borderHover={theme.colors.green900}
            width={isMobile ? "247px" : "300px"}
            height={"40px"}
            /* onClick={() => handleSave(false)}
                disabled={disabledButtons || isLoading} */
          >
            Guardar
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default ProfileForm;
