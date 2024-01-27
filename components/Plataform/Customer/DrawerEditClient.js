import Image from "next/image";
import { Row, Text, Div, Col } from "@/styles/Common";
import { Drawer } from "../../../components/Common/Drawer";
import { theme } from "../../../styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { MenuItem } from "@mui/material";
import closeIcon from "../../../assets/icons/close.svg";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { DatePicker } from "@/components/Common/DatePicker";
import dayjs from "dayjs";

const DrawerEditClient = ({
  showDrawer,
  closeDrawer,
  documentTypeOptions,
  indicativesOptions,
  actualInfo,
  setActualInfo,
  errorForm,
  setErrorForm,
}) => {
  const handleChange = (event) => {
    const { value, id } = event.target;

    const newErrorForm = { ...errorForm };
    newErrorForm[id].error = false;
    newErrorForm[id].message = "";
    setErrorForm(newErrorForm);

    const newClientForm = { ...actualInfo };
    newClientForm[id] = value;
    setActualInfo(newClientForm);
  };

  const handleRadio = (event) => {
    const { value } = event.target;

    setActualInfo((prevInfo) => ({
      ...prevInfo,
      genderName: value,
    }));
  };

  const handleChangeDate = (event) => {
    const newErrorForm = { ...errorForm };

    const today = new Date();
    const birthDate = new Date(event);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      newErrorForm["birthDate"].error = true;
      newErrorForm["birthDate"].message = "Fecha invalida";
      setErrorForm(newErrorForm);
    } else {
      newErrorForm["birthDate"].error = false;
      newErrorForm["birthDate"].message = "";
      setErrorForm(newErrorForm);
      const newClientForm = { ...actualInfo };
      newClientForm["birthDate"] = event;
      setActualInfo(newClientForm);
    }
  };

  const getValueFromLabel = (label) => {
    const selectedOption = documentTypeOptions.find(
      (option) => option.label === label
    );
    return selectedOption ? selectedOption.value : null;
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorForm };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorForm(newErrorForm);

    const newClientForm = { ...actualInfo };
    if (name === "documentType") {
      const selectedOption = documentTypeOptions.find(
        (option) => option.value === value
      );
      newClientForm[name] = selectedOption ? selectedOption.label : "";
    } else {
      newClientForm[name] = value;
    }

    setActualInfo(newClientForm);
  };

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
    >
      <Text
        weight={theme.fonts.weight.semibold}
        size={theme.fonts.size.ft}
        color={theme.colors.neutralGray800}
      >
        Edita la información del cliente
      </Text>
      <Col gap="16px" m="24px 0 0 0">
        <TextField
          placeholder={"Nombres"}
          label="Nombres*"
          id="name"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primary}
          labelWeight={theme.fonts.weight.medium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          border={theme.colors.neutralGray500}
          value={actualInfo?.name}
          onChange={handleChange}
          /* 
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""} */
        />
        <TextField
          placeholder={"Apellidos"}
          label="Apellidos*"
          id="lastName"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primary}
          labelWeight={theme.fonts.weight.medium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          border={theme.colors.neutralGray500}
          value={actualInfo?.lastName}
          onChange={handleChange}
          /* 
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""} */
        />
        <Row>
          <Select
            placeholder={"Selecciona tipo de documento"}
            label={"Tipo de documento*"}
            name="documentType"
            radius="4px"
            width="150px"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={getValueFromLabel(actualInfo?.documentType)}
            onChange={handleSelect}
          >
            {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder={"Número de documento"}
            label="Número de documento*"
            id="identificationNumber"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={actualInfo?.identificationNumber}
            onChange={handleChange}
            /* 
            error={errorForm.email.error}
            helper={errorForm.email.error ? errorForm.email.message : ""} */
          />
        </Row>
        <Row>
          <Select
            placeholder={"Selecciona código"}
            label={"Código de país*"}
            name="countryCode"
            radius="4px"
            width="150px"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={actualInfo?.countryCode}
            onChange={handleSelect}
          >
            {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder={"Número de celular"}
            label="Número de celular*"
            id="phoneNumber"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={actualInfo?.phoneNumber}
            onChange={handleChange}
            /*
            error={errorForm.email.error}
            helper={errorForm.email.error ? errorForm.email.message : ""} */
          />
        </Row>
        <DatePicker
          placeholder={"dd/mm/aaaa"}
          label="Fecha de nacimiento*"
          id="birthDate"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primary}
          labelWeight={theme.fonts.weight.medium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          labelColor={theme.colors.neutralGray900}
          notFocused={true}
          placeholderColor={theme.colors.neutralGray500}
          border={theme.colors.gray500}
          onChange={handleChangeDate}
          value={dayjs(actualInfo?.birthDate)}
          /* 
        error={errorDate}
        helper={errorDate ? "Debes ser mayor de edad para cotizar tu ahorro" : ""} */
        />
        <RadioGroup
          gap="5px"
          name="genderName"
          direction="row"
          label="Género*"
          labelFont={theme.fonts.family.primary}
          labelWeight={theme.fonts.weight.medium}
          labelSize={theme.fonts.size.sm}
          value={actualInfo?.genderName}
          onChange={handleRadio}
        >
          <Radio
            label="Femenino"
            value="Femenino"
            checked={actualInfo?.genderName === "Femenino"}
          />
          <Radio
            label="Másculino"
            value="Masculino"
            checked={actualInfo?.genderName === "Masculino"}
          />
        </RadioGroup>
      </Col>
      <Row style={{ marginTop: "auto" }}>
        <Button
          width="100%"
          height={"40px"}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          labelWeight={theme.fonts.weight.bold}
          /* onClick={handleLogin}
        disabled={isLoading} */
          /* startIcon={
          isLoading ? (
            <CircularProgress size={20} style={{ color: theme.colors.white }} />
          ) : null
        } */
        >
          Actualizar
        </Button>
      </Row>
    </Drawer>
  );
};

export default DrawerEditClient;
