/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Div, Placeholder, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { ColForm, WrapperAlert } from "@/styles/Policy";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";
import { TextField } from "@/components/Common/TextField";
import { Select } from "@/components/Common/Select";
import info from "@/assets/icons/info.svg"
import infoError from "@/assets/icons/info-error.svg"
import Image from "next/image";
import percentage from "@/assets/icons/percentage-small.svg"
import percentageIconError from "@/assets/icons/percentage-error.svg"
import addUser from "@/assets/icons/add-user.svg"
import trash from "@/assets/icons/trash-yellow.svg"
import { Link } from "@/components/Common/Link";
import { Collapse } from "@/components/Common/Collapse";

export const Step5 = ({
  isMobile,
  formInfo,
  setFormInfo,
  documentTypeOptions,
  relationshipsOptions
}) => {
  const [visibleButton, setVisibleButton] = useState(false);
  const [panels, setPanels] = useState([]);
  const [activeKey, setActiveKey] = useState(["1"]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const inputsProps = {
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    labelColor: theme.colors.white,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    fontColor: theme.colors.neutralGray900,
    font: theme.fonts.family.primary,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    radius: "4px",
    height: "40px",
    width: "100%",
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  };

  const percentageValue = formInfo.beneficiary.reduce((total, obj) => total + (Number(obj.percentInherit) || 0), 0);
  const percentageError = percentageValue > 100;

  useEffect(() => {
    if (formInfo.beneficiary.length === 7) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }, [formInfo]);

  const handleChangeText = (event, index) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }
    const newBeneficiary = [...newInfo.beneficiary]

    newBeneficiary[index][id] = value
    setFormInfo(newInfo)
  };

  const handleChangeNumber = (event, index) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }
    const newBeneficiary = [...newInfo.beneficiary]

    newBeneficiary[index][id] = value.replace(/\D/g, "");
    setFormInfo(newInfo)
  };

  const handleChangePercentage = (event, index) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }
    const newBeneficiary = [...newInfo.beneficiary]

    newBeneficiary[index][id] = value.replace(/[^\d.]/g, "");
    setFormInfo(newInfo)
  };
  
  const handleSelect = (event, index) => {
    const { name, value } = event.target
    const newInfo = { ...formInfo }
    const newBeneficiary = [...newInfo.beneficiary]

    newBeneficiary[index][name] = value
    setFormInfo(newInfo)
  };

  const handleChangeRadio = (event, id) => {
    const { defaultValue } = event.target;
    const newInfo = { ...formInfo };

    newInfo[id] = JSON.parse(defaultValue);

    if (id === "beneficiaries" && JSON.parse(defaultValue) === true) {
      setFormInfo({
        ...newInfo, 
        beneficiary: [{
          id: 0,
          loanInsurancePolicyId: 0,
          name: "",
          lastName: "",
          identificationTypeId: 76,
          identificationNumber: "",
          relationshipId: null,
          percentInherit: null
        }]
      })
    } else {
      setFormInfo({
        ...newInfo, 
        beneficiary: [],
      })    
    }
    setForceUpdate(!forceUpdate)
  };

  const handleAdd = () => {
    const newInfo = { ...formInfo };
    setFormInfo({
      ...newInfo,
      beneficiary: [
        ...newInfo.beneficiary,
        {
          id: 0,
          loanInsurancePolicyId: 0,
          name: "",
          lastName: "",
          identificationTypeId: 76,
          identificationNumber: "",
          relationshipId: null,
          percentInherit: null
        }
      ]
    });
    setActiveKey([`${Number(activeKey[0]) + 1}`]);
  };

  const handleDelete = (index) => {
    const newInfo = { ...formInfo };
    const newBeneficiaries = newInfo.beneficiary.filter((ele, indx) => index !== indx);

    setFormInfo({
      ...newInfo,
      beneficiary: newBeneficiaries,
    });
    setActiveKey([`${Number(activeKey[0]) - 1}`]);
  };

  const beneficiaryData = (ele, indx, mobile) => {
    return (
      <>
        <Div key={indx} direction="column" m="18px 0 0 0">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Nombre(s)*"}
                width={"100%"}
                placeholder={"Escribir nombre"}
                id="name"
                value={ele.name}
                inputProps={{ maxLength: 50 }}
                onChange={(e) => handleChangeText(e, indx)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Apellidos*"}
                width={"100%"}
                placeholder={"Escribir apellidos"}
                id="lastName"
                value={ele.lastName}
                inputProps={{ maxLength: 50 }}
                onChange={(e) => handleChangeText(e, indx)}
              />
            </Grid>
            <Grid item md={4} xs={4}>
              <Select
                {...inputsProps}
                label={"Tipo de documento*"}
                width={"100%"}
                name="identificationTypeId"
                value={ele.identificationTypeId}
                onChange={(e) => handleSelect(e, indx)}
              >
                {documentTypeOptions.map((ele, indx) => (
                  <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item md={8} xs={8} style={{ marginTop: mobile ? "14px" : "0px" }}>
              <TextField
                {...inputsProps}
                label={"Número de documento*"}
                width={"100%"}
                placeholder={"Escribir número"}
                id="identificationNumber"
                value={ele.identificationNumber}
                inputProps={{
                  maxLength: 15,
                  pattern: ele.identificationTypeId !== 78 && "\\d*",
                  inputMode: ele.identificationTypeId !== 78 && "numeric"
                }}
                onChange={(e) => handleChangeNumber(e, indx)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Select
                {...inputsProps}
                label={"Parentesco*"}
                width={"100%"}
                name="relationshipId"
                value={ele.relationshipId}
                onChange={(e) => handleSelect(e, indx)}
                displayEmpty
                renderValue={(selected) => {
                  if (selected === null) {
                    return <Placeholder>Seleccionar parentesco</Placeholder>
                  } else {
                    return relationshipsOptions.find((ele) => ele.id === selected)
                      ? relationshipsOptions.find((ele) => ele.id === selected).name
                      : null
                  }
                }}
              >
                {relationshipsOptions.map((ele, indx) => (
                  <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Porcentaje a heredar (1 a 100%)*"}
                width={"100%"}
                placeholder={"Escribir porcentaje"}
                id="percentInherit"
                value={ele.percentInherit}
                inputProps={{
                  maxLength: 5, 
                  pattern: "\\d*\\.?\\d*", 
                  inputMode: "numeric"
                }}
                suffix={<Image alt="percentage" src={percentageError ? percentageIconError : percentage} />}
                onChange={(e) => handleChangePercentage(e, indx)}
                customError={percentageError}
                border={percentageError ? theme.colors.error100 : theme.colors.primary25}
                helper={percentageError ? "El valor supera la sumatoria de 100%" : ""}
              />
            </Grid>
          </Grid>
          <Div m="24px 0 0 0" justify="flex-end">
            <Link
              startIcon={<Image alt="add" src={trash} />}
              color={theme.colors.yellow500}
              size={theme.fonts.size.default2}
              font={theme.fonts.family.primaryBold}
              style={{ borderBottom: `2px solid ${theme.colors.yellow500}` }}
              width={"max-content"}
              onClick={() => handleDelete(indx)}
            >
              Eliminar
            </Link>
          </Div>
        </Div>
      </>
    )
  };

  useEffect(() => {
    if (formInfo.beneficiary.length > 0) {
      setPanels(
        formInfo.beneficiary.map((ele, indx) => ({
          key: `${indx + 1}`,
          header: `Heredero ${indx + 1} ${ele.name ? "-" : ""} ${ele.name ? ele.name : ""} ${ele.lastName ? ele.lastName : ""} ${ele.percentInherit ? `(${ele.percentInherit}%)` : ""}`,
          panel: beneficiaryData(ele, indx, isMobile),
        }))
      );
    };
  }, [formInfo]);

  return (
    <ColForm m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
        mt={isMobile ? "24px" : "12px"}
      >
        Datos <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>adicionales</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="convicted"
            direction="row"
            label="¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.convicted}
            onChange={(event) => handleChangeRadio(event, "convicted")}
          >
            <Radio
              label="Si"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="lifeEnsure"
            direction="row"
            label="¿Tienes algún seguro de vida individual o de accidentes personales con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.lifeEnsure}
            onChange={(event) => handleChangeRadio(event, "lifeEnsure")}
          >
            <Radio
              label="Si"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="beneficiaries"
            direction={isMobile ? "column" : "row"}
            label="*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.beneficiaries}
            onChange={(event) => handleChangeRadio(event, "beneficiaries")}
          >
            <Radio
              label="Mis herederos legales"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="Designado por mi"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        {formInfo.beneficiaries && (
          <>
            <Grid item md={12} xs={12} style={{ padding: 0, marginBottom: '16px' }}>
              {percentageError && activeKey.length === 0 ? (
                <WrapperAlert background={theme.colors.error100}>
                  <Image alt="info" src={infoError} />
                  <Text 
                    size={theme.fonts.size.sm}
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryMedium}
                  >
                    La sumatoria de los porcentaje supera el 100% permitido
                  </Text>
                </WrapperAlert>
              ) : (
                <WrapperAlert background={theme.colors.primary100}>
                  <Image alt="info" src={info} />
                  <Text 
                    size={theme.fonts.size.sm}
                    color={theme.colors.green700}
                    font={theme.fonts.family.primaryMedium}
                  >
                    La sumatoria de los porcentaje de los herederos debe ser igual a 100%
                  </Text>
                </WrapperAlert>
              )}
            </Grid>
            <Collapse panels={panels} activeKey={activeKey} setActiveKey={setActiveKey} />
            {!visibleButton && (
              <Grid item md={12} xs={12}>
                <Link
                  startIcon={<Image alt="add" src={addUser} />}
                  color={theme.colors.yellow500}
                  size={theme.fonts.size.default2}
                  font={theme.fonts.family.primaryBold}
                  style={{ borderBottom: `2px solid ${theme.colors.yellow500}` }}
                  width={"max-content"}
                  onClick={handleAdd}
                >
                  Agregar otro heredero
                </Link>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </ColForm>
  )
}