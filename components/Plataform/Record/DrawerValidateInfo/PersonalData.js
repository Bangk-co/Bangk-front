import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";

export const PersonalData = ({
  handleRadio,
  assessorConcept,
  handleChange,
  assessorComments,
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
          ¿Eres o tienes familiares Públicamente Expuestos (Actores, políticos,
          estrellas deportivas, etc...)?
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
      <Div width="100%" height="1px" background={theme.colors.neutralGray200} />
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
      <Div width="100%" height="1px" background={theme.colors.neutralGray200} />
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
    </Col>
  );
};
