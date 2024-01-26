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

const DrawerEditClient = ({
  showDrawer,
  closeDrawer,
  documentTypeOptions,
  indicativesOptions,
}) => {
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
          /* onChange={handleChange}
              value={loginForm.email}
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""} */
        />
        <TextField
          placeholder={"Apellidos"}
          label="Apellidos*"
          id="lastname"
          radius="4px"
          width="100%"
          height="40px"
          labelFont={theme.fonts.family.primary}
          labelWeight={theme.fonts.weight.medium}
          labelSize={theme.fonts.size.sm}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.default2}
          border={theme.colors.neutralGray500}
          /* onChange={handleChange}
              value={loginForm.email}
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""} */
        />
        <Row gap="16px">
          <Select
            placeholder={"Selecciona tipo de documento"}
            label={"Tipo de documento*"}
            name="documentType"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={formInfo.documentType}
            onChange={handleSelect} */
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
            id="idNumber"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            /* onChange={handleChange}
            value={loginForm.email}
            error={errorForm.email.error}
            helper={errorForm.email.error ? errorForm.email.message : ""} */
          />
        </Row>
        <Row gap="16px">
          <Select
            placeholder={"Selecciona código"}
            label={"Código de país*"}
            name="countryCode"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primary}
            labelWeight={theme.fonts.weight.medium}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={formInfo.documentType}
            onChange={handleSelect} */
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
            /* onChange={handleChange}
            value={loginForm.email}
            error={errorForm.email.error}
            helper={errorForm.email.error ? errorForm.email.message : ""} */
          />
        </Row>
        <TextField
          placeholder={"Fecha de nacimiento"}
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
          border={theme.colors.neutralGray500}
          /* onChange={handleChange}
              value={loginForm.email}
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""} */
        />
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
