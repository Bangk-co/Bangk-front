import React, { useEffect, useState } from "react";
import closeIcon from "../../../assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { StyledDocument, StyledPage, WrapperClose } from "./styles";
import { Grid, MenuItem } from "@mui/material";
import { TextField } from "@/components/Common/TextField";
import { Select } from "@/components/Common/Select";
import { DatePicker } from "@/components/Common/DatePicker";
import { Button } from "@/components/Common/Button";
import { LinkButton } from "@/components/Common/LinkButton";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";
import { numberFormat } from "@/utilities/helpers";
import pesosIcon from "@/assets/icons/pesos.svg"
import downloadIcon from "@/assets/icons/download-2.svg"
import { pdfjs } from "react-pdf";

export const DrawerAllInfo = ({
  showDrawer,
  closeDrawer,
  documentTypeOptions,
  phoneCodesOptions,
  gendersOptions,
  loanTypeOptions,
  banksOptions,
  userForm,
  loanForm,
  handleChangeUser,
  handleSelectUser,
  handleChangeDate,
  handleSelectGender,
  errorDate,
  handleChangeLoan,
  handleSelectLoan,
  handleChange,
  handleSave,
  disabledButtons,
  bankStatementInfo,
  handleDownload
}) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const textFieldProps = {
    labelColor: theme.colors.neutralGray900,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    labelSize: theme.fonts.size.sm,
    border: theme.colors.neutralGray900,
    borderHover: theme.colors.neutralGray900,
    radius: "4px",
    width: "100%",
    height: "40px"
  }

  const subTitleProps = {
    font: theme.fonts.family.primaryBold,
    weight: theme.fonts.weight.bold,
    size: "16px",
    lineHeight: "24px",
    color: theme.colors.neutralGray800,
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  return (
    <Drawer
      open={showDrawer}
      onClose={closeDrawer}
      padding={"0px"}
      width="1283px"
    >
      <Div>
        <Div
          direction="column"
          width="896px"
          p="40px 24px 40px 24px"
          style={{ background: theme.colors.primary100, overflowY: "auto" }}
          minheight="100vh"
        >
          <Div justify="space-between" align="center" mb="16px">
            <Text
              color={theme.colors.primary900}
              font={theme.fonts.family.primaryMedium}
              weight={theme.fonts.weight.medium}
              size={theme.fonts.size.default2}
              lineHeight={"24px"}
            >
              {bankStatementInfo?.bankStatementName}
            </Text>
            <Image alt="download" src={downloadIcon} onClick={handleDownload} style={{ cursor: "pointer" }} />
          </Div>
          <StyledDocument
            file={bankStatementInfo?.bankStatementUrl}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <StyledPage
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </StyledDocument>
        </Div>
        <Div
          width="414px"
          p="40px 24px 40px 24px"
          direction="column"
          style={{ soverflowY: "auto" }}
          minheight="100vh"
        >
          <WrapperClose>
            <Image alt="close" src={closeIcon} width={20} height={20} onClick={closeDrawer} style={{ cursor: "pointer" }} />
          </WrapperClose>
          <Div direction="column" p="0 0 18px 0" style={{ borderBottom: `1px solid ${theme.colors.neutralGray400}` }}>
            <Text
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
              size={"22px"}
              lineHeight={"28px"}
              color={theme.colors.neutralGray800}
            >
              Valida la información
            </Text>
            <Text
              { ...subTitleProps }
              mt="26px"
              mb="22px"
            >
              Información del titular
            </Text>
            <Grid container rowSpacing={{ md: "18px" }} columnSpacing={{ md: "18px" }}>
              <Grid item md="12">
                <TextField
                  label={"Nombres*"}
                  { ...textFieldProps }
                  id={"name"}
                  value={userForm?.name}
                  onChange={handleChangeUser}
                />
              </Grid>
              <Grid item md="12">
                <TextField
                  label={"Apellidos*"}
                  { ...textFieldProps }
                  id={"lastName"}
                  value={userForm?.lastName}
                  onChange={handleChangeUser}
                />
              </Grid>
              <Grid item md="5">
                <Select
                  label={"Tipo de documento*"}
                  { ...textFieldProps }
                  notFocused={true}
                  name="documentType"
                  value={userForm?.documentTypeId}
                  onChange={handleSelectUser}
                >
                  {documentTypeOptions.map((ele, indx) => (
                    <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>
                      {ele.label}
                    </MenuItem>
                  ))}
                 </Select>
              </Grid>
              <Grid item md="7">
                <TextField
                  label={"Número de documento*"}
                  { ...textFieldProps }
                  id={"identificationNumber"}
                  value={userForm?.identificationNumber}
                  onChange={handleChangeUser}
                />
              </Grid>
              <Grid item md="12">
                <TextField
                  label={"Correo electrónico*"}
                  { ...textFieldProps }
                  id={"email"}
                  value={userForm?.email}
                  disabled={true}
                />
              </Grid>
              <Grid item md="5">
                <Select
                  label={"Código de país*"}
                  { ...textFieldProps }
                  notFocused={true}
                  name={"countryCode"}
                  value={userForm?.countryCode}
                  onChange={handleSelectUser}
                >
                  {phoneCodesOptions.map((ele, indx) => (
                    <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>
                      {ele.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md="7">
                <TextField
                  label={"Número de celular*"}
                  { ...textFieldProps }
                  id={"phoneNumber"}
                  value={userForm?.phoneNumber}
                  onChange={handleChangeUser}
                />
              </Grid>
              <Grid item md="12">
                <DatePicker
                  label={"Fecha de nacimiento*"}
                  { ...textFieldProps }
                  border={theme.colors.gray500}
                  error={errorDate}
                  helper={errorDate ? "Debes ser mayor de edad" : ""}
                  value={userForm?.birthDate}
                  onChange={handleChangeDate}
                />
              </Grid>
              <Grid item md="12">
                <RadioGroup
                  gap="5px"
                  name="genderId"
                  direction="row"
                  label="Género*"
                  color= {theme.colors.neutralGray900}
                  labelFont={theme.fonts.family.primaryMedium}
                  labelSize={theme.fonts.size.sm}
                  weight= {theme.fonts.weight.medium}
                  value={Number(userForm?.genderId)}
                  onChange={handleSelectGender}
                >
                  {gendersOptions.map((ele, indx) => (
                    <Radio
                      key={indx}
                      label={ele.label}
                      value={ele.value}
                      checked={Number(userForm.genderId) === ele.value}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Div>
          <Div direction="column" m="18px 0 0 0">
            <Text
              { ...subTitleProps }
              mb="22px"
            >
              Información del credito
            </Text>
            <Grid container rowSpacing={{ md: "18px" }}>
              <Grid item md="12">
                <TextField
                  label={"Saldo del crédito*"}
                  { ...textFieldProps }
                  prefixIcon={<Image alt="pesos" src={pesosIcon} width={16} height={16} />}
                  id={"loanBalance"}
                  value={loanForm?.loanBalance === "" ? "" : numberFormat(Number(loanForm?.loanBalance))}
                  onChange={handleChangeLoan}
                  inputProps={{
                    pattern: "\\d*",
                    inputMode: "numeric",
                  }}
                />
              </Grid>
              <Grid item md="12">
                <Select
                  label={"Tipo de crédito*"}
                  { ...textFieldProps }
                  notFocused={true}
                  name={"loanTypeId"}
                  value={loanForm?.loanTypeId}
                  onChange={handleSelectLoan}
                >
                  {loanTypeOptions.map((ele, indx) => (
                    <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>
                      {ele.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md="12">
                <Select
                  label={"Banco donde se radica el crédito*"}
                  { ...textFieldProps }
                  notFocused={true}
                  name={"bankId"}
                  value={loanForm?.bankId}
                  onChange={handleSelectLoan}
                >
                  {banksOptions.map((ele, indx) => (
                    <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>
                      {ele.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md="12">
                <TextField
                  label={"Número del crédito*"}
                  { ...textFieldProps }
                  id={"loanNumber"}
                  value={loanForm?.loanNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md="12">
                <TextField
                  label={"Costo mensual del seguro*"}
                  placeholder={"Ingresa costo actual"}
                  { ...textFieldProps }
                  prefixIcon={<Image alt="pesos" src={pesosIcon} width={16} height={16} />}
                  id={"monthlyCostInsurance"}
                  value={loanForm?.monthlyCostInsurance === "" ? "" : numberFormat(Number(loanForm?.monthlyCostInsurance))}
                  onChange={handleChangeLoan}
                  inputProps={{
                    pattern: "\\d*",
                    inputMode: "numeric",
                  }}
                />
              </Grid>
              <Grid item md="12">
                <TextField
                  label={"Observaciones"}
                  { ...textFieldProps }
                  id={"observations"}
                  value={loanForm?.observations}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Div>
          <Div direction="column" m="36px 0 0 0" gap="16px">
            <Button
              background={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              width={"100%"}
              height={"40px"}
              onClick={() => handleSave(false)}
              disabled={disabledButtons}
            >
              Guardar y crear cotización
            </Button>
            <LinkButton
              color={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              backgroundHover={theme.colors.primary50}
              style={{ textDecoration: "underline" }}
              onClick={() => handleSave(true)}
              disabled={disabledButtons}
            >
              Solo guardar cambios
            </LinkButton>
          </Div>
        </Div>
      </Div>
    </Drawer>
  )
}