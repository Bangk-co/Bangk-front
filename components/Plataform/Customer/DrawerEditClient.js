import Image from "next/image";
import toast from "react-hot-toast";
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
import { validateEditClientForm } from "@/utilities/validations";
import useUpdateClientInfo from "@/hooks/Customers/useUpdateClientInfo";
import { useQueryClient } from "react-query";

const DrawerEditClient = ({
  showDrawer,
  closeDrawer,
  documentTypeOptions,
  indicativesOptions,
  initialValues,
  actualInfo,
  setActualInfo,
  errorForm,
  setErrorForm,
}) => {
  const updateClient = useUpdateClientInfo();
  const queryClient = useQueryClient();

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
      genderId: Number(value),
    }));
  };

  const handleChangeDate = (event, id) => {
    console.log("id", id);
    const newErrorForm = { ...errorForm };
    console.log("newErrorForm", newErrorForm[id]);

    const today = new Date();
    const newDate = new Date(event);
    const age = today.getFullYear() - newDate.getFullYear();

    if (id === "birthDate" && age < 18) {
      newErrorForm[id].error = true;
      newErrorForm[id].message = "Debe ser mayor de edad";
      setErrorForm(newErrorForm);
    } else {
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorForm(newErrorForm);
      const newClientForm = { ...actualInfo };
      newClientForm[id] = event;
      setActualInfo(newClientForm);
    }
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorForm };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorForm(newErrorForm);

    const newClientForm = { ...actualInfo };

    newClientForm[name] = value;

    setActualInfo(newClientForm);
  };

  const handleEditPatient = () => {
    const validation = validateEditClientForm.validate(actualInfo, {
      abortEarly: false,
    });

    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        newErrorForm[label].error = true;

        newErrorForm[label].message = "Campo obligatorio";
        setErrorForm(newErrorForm);
      });
    } else {
      updateClient.reset();
      updateClient.mutate(
        {
          clientId: actualInfo?.id,
          formData: {
            name: actualInfo?.name,
            lastName: actualInfo?.lastName,
            documentTypeId: actualInfo?.documentType,
            identificationNumber: actualInfo?.identificationNumber,
            documentIssueDate: actualInfo?.documentIssueDate,
            countryCode: actualInfo?.countryCode,
            phoneNumber: actualInfo?.phoneNumber,
            birthDate: actualInfo?.birthDate,
            genderId: actualInfo?.genderId,
            email: actualInfo?.email,
          },
        },
        {
          onSuccess: () => {
            closeDrawer();
            toast.success("Actualizado correctamente");
            queryClient.invalidateQueries(["clientInfo", actualInfo?.id]);
          },
          onError: (err) => {
            err.response.data.errors.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    }
  };

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
    >
      <Text
        size={theme.fonts.size.ft}
        color={theme.colors.neutralGray800}
        font={theme.fonts.family.primaryBold}
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
          labelFont={theme.fonts.family.primaryMedium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          border={theme.colors.neutralGray500}
          value={actualInfo?.name}
          onChange={handleChange}
          error={errorForm.name.error}
          helper={errorForm.name.error ? errorForm.name.message : ""}
        />
        <TextField
          placeholder={"Apellidos"}
          label="Apellidos*"
          id="lastName"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primaryMedium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          border={theme.colors.neutralGray500}
          value={actualInfo?.lastName}
          onChange={handleChange}
          error={errorForm.lastName.error}
          helper={errorForm.lastName.error ? errorForm.lastName.message : ""}
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
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={actualInfo?.documentType}
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
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={actualInfo?.identificationNumber}
            onChange={handleChange}
            error={errorForm.identificationNumber.error}
            helper={
              errorForm.identificationNumber.error
                ? errorForm.identificationNumber.message
                : ""
            }
          />
        </Row>
        <DatePicker
          placeholder={"dd/mm/aaaa"}
          label="Fecha de expedición del documento*"
          id="documentIssueDate"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primaryMedium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          labelColor={theme.colors.neutralGray900}
          notFocused={true}
          placeholderColor={theme.colors.neutralGray500}
          border={theme.colors.neutralGray500}
          onChange={(e) => handleChangeDate(e, "documentIssueDate")}
          value={dayjs(actualInfo?.documentIssueDate)}
          error={errorForm.documentIssueDate.error}
          helper={
            errorForm.documentIssueDate.error
              ? errorForm.documentIssueDate.message
              : ""
          }
        />
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
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
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
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={actualInfo?.phoneNumber}
            onChange={handleChange}
            error={errorForm.phoneNumber.error}
            helper={
              errorForm.phoneNumber.error ? errorForm.phoneNumber.message : ""
            }
          />
        </Row>
        <DatePicker
          placeholder={"dd/mm/aaaa"}
          label="Fecha de nacimiento*"
          id="birthDate"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primaryMedium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          labelColor={theme.colors.neutralGray900}
          notFocused={true}
          placeholderColor={theme.colors.neutralGray500}
          border={theme.colors.neutralGray500}
          onChange={(e) => handleChangeDate(e, "birthDate")}
          value={dayjs(actualInfo?.birthDate)}
          error={errorForm.birthDate.error}
          helper={errorForm.birthDate.error ? errorForm.birthDate.message : ""}
        />
        <RadioGroup
          gap="5px"
          name="genderId"
          direction="row"
          label="Género*"
          labelFont={theme.fonts.family.primaryMedium}
          labelSize={theme.fonts.size.sm}
          value={actualInfo?.genderId}
          onChange={handleRadio}
        >
          <Radio
            label="Femenino"
            value={108}
            checked={actualInfo?.genderId === 108}
          />
          <Radio
            label="Másculino"
            value={107}
            checked={actualInfo?.genderId === 107}
          />
        </RadioGroup>
      </Col>
      <Row m="24px 0 0 0">
        <Button
          width="100%"
          height={"40px"}
          font={theme.fonts.family.primaryBold}
          size={theme.fonts.size.default2}
          onClick={handleEditPatient}
          background={theme.colors.green900}
          border={"transparent"}
          disabled={
            JSON.stringify(initialValues) === JSON.stringify(actualInfo) ||
            updateClient.isLoading
          }
          hover={theme.colors.green900}
          borderHover={theme.colors.green900}
          startIcon={
            updateClient.isLoading ? (
              <CircularProgress
                size={20}
                style={{ color: theme.colors.white }}
              />
            ) : null
          }
        >
          Actualizar
        </Button>
      </Row>
    </Drawer>
  );
};

export default DrawerEditClient;
