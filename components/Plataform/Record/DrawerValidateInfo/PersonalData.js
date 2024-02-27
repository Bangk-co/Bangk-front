import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";

export const PersonalData = ({
  handleRadio,
  assessorConcept,
  handleChange,
  assessorComments,
  isEditing,
  setIsEditing,
}) => {
  const dataInfo = [
    {
      titleL: "País de nacimiento",
      descriptionL: "colombia",
      titleR: "Nacionalidad",
      descriptionR: "nacionalidad",
    },
    {
      titleL: "Departamento/Estado de nacimiento",
      descriptionL: "departamento",
      titleR: "Cuidad de nacimiento",
      descriptionR: "cuidad",
    },
    {
      titleL: "Estado civil",
      descriptionL: "estadoCivil",
      titleR: "Número de hijos",
      descriptionR: "numeroDeHijos",
    },
    {
      titleL: "Profesión",
      descriptionL: "profesion",
      titleR: "Actividad económica",
      descriptionR: "actividadEconomica",
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      {!isEditing ? (
        <>
          {dataInfo.map((data, index) => (
            <Row key={index} width="100%" m="16px 0 0 0">
              <Col gap="10px" width="313.5px">
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.sm}
                  color={theme.colors.neutralGray900}
                >
                  {data.titleL}
                </Text>
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {data.descriptionL}
                </Text>
              </Col>
              <Col gap="10px" width="313.5px">
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.sm}
                  color={theme.colors.neutralGray900}
                >
                  {data.titleR}
                </Text>
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {data.descriptionR}
                </Text>
              </Col>
            </Row>
          ))}
          <Col gap="10px" width="313.5px" m="16px 0 0 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              ¿Eres o tienes familiares Públicamente Expuestos (Actores,
              políticos, estrellas deportivas, etc...)?
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              respuesta
            </Text>
          </Col>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.sm}
            color={theme.colors.neutralGray900}
          >
            Información de residencia
          </Text>
          <Row width="100%" m="16px 0 0 0">
            <Col gap="10px" width="313.5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                País de residencia
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                paisDeResidencia
              </Text>
            </Col>
            <Col gap="10px" width="313.5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Departamento de residencia
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                departamentoDeResidencia
              </Text>
            </Col>
          </Row>
          <Col gap="10px" width="313.5px" m="16px 0 0 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              Ciudad de residencia
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              ciudadDeResidencia
            </Text>
          </Col>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Div direction="column">
            <Div
              radius="8px 8px 0 0"
              background={theme.colors.yellow500}
              p="12px 16px"
              width="100%"
            >
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.default2}
                color={theme.colors.neutralGray900}
              >
                Concepto del asesor
              </Text>
            </Div>
            <Div
              radius="0 0 8px 8px"
              p="16px"
              gap="16px"
              direction="column"
              style={{ border: `1px solid ${theme.colors.neutralGray200}` }}
            >
              <RadioGroup
                gap="5px"
                name="correctInfo"
                direction="row"
                value={assessorConcept}
                onChange={handleRadio}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={assessorConcept === "La información es correcta"}
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={assessorConcept === "Presenta novedades"}
                />
              </RadioGroup>
              <TextField
                placeholder={"Texto descriptivo"}
                label="Comentarios*"
                id="comments"
                radius="4px"
                width="100%"
                height="40px"
                labelFont={theme.fonts.family.primaryMedium}
                labelSize={theme.fonts.size.sm}
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                border={theme.colors.neutralGray500}
                value={assessorComments}
                onChange={handleChange}
              />
            </Div>
            <Row width="100%" justify="right" m="24px 0 0 0" gap="16px">
              <Button
                background={theme.colors.white}
                hover={theme.colors.gray100}
                borderHover={theme.colors.green900}
                border={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                labelColor={theme.colors.green900}
                borderHeight={"3px solid"}
                width={"78px"}
                height={"40px"}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </Button>
              <Button
                background={theme.colors.green900}
                hover={theme.colors.green900}
                borderHover={theme.colors.green900}
                border={"transparent"}
                font={theme.fonts.family.primaryBold}
                width={"109px"}
                height={"40px"}
                disabled={assessorConcept === "" || assessorComments === ""}
              >
                Continuar
              </Button>
            </Row>
          </Div>
        </>
      ) : (
        <Col gap="16px">
          <Select
            label={"País de nacimiento*"}
            name="birthCountry"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Nacionalidad*"}
            name="nationality"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Departamento/Estado de nacimiento*"}
            name="department"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Cuidad de nacimiento*"}
            name="city"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Estado civil*"}
            name="civilStatus"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <TextField
            label={"Número de hijos*"}
            placeholder={"Número de hijos"}
            id="children"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            /* value={assessorComments}
                onChange={handleChange} */
          />
          <TextField
            label={"Profesión*"}
            placeholder={"Profesión"}
            id="profession"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            /* value={assessorComments}
                onChange={handleChange} */
          />
          <TextField
            label="Actividad económica*"
            placeholder={"Actividad económica"}
            id="activity"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            /* value={assessorComments}
                onChange={handleChange} */
          />
          <RadioGroup
            gap="5px"
            name="publiclyExposed"
            direction="row"
            label={
              "¿Eres o tienes familiares Públicamente Expuestos (Actores, políticos, estrellas deportivas, etc...)?"
            }
            /* value={assessorConcept}
                onChange={handleRadio} */
          >
            <Radio
              label="Si"
              value={"Si"}
              /* checked={assessorConcept === "La información es correcta"} */
            />
            <Radio
              label="No"
              value={"No"}
              /* checked={assessorConcept === "Presenta novedades"} */
            />
          </RadioGroup>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
          >
            Información de residencia
          </Text>
          <Select
            label={"País de residencia*"}
            name="residenceCountry"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Departamento de residencia*"}
            name="residenceDepartment"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Select
            label={"Cuidad de Residencia*"}
            name="residenceCity"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            /* value={actualInfo?.countryCode}
            onChange={handleSelect} */
          >
            {/* {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))} */}
          </Select>
          <Row width="100%" justify="right" m="8px 0 0 0" gap="16px">
            <Button
              background={theme.colors.white}
              hover={theme.colors.gray100}
              borderHover={theme.colors.green900}
              border={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              labelColor={theme.colors.green900}
              borderHeight={"3px solid"}
              width={"102px"}
              height={"40px"}
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </Button>
            <Button
              background={theme.colors.green900}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              border={"transparent"}
              font={theme.fonts.family.primaryBold}
              width={"166px"}
              height={"40px"}
            >
              Guardar cambios
            </Button>
          </Row>
        </Col>
      )}
    </Col>
  );
};
