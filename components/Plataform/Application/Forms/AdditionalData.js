import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { Grid } from "@mui/material";
import { theme } from "@/styles/theme";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetRelationships from "@/hooks/Common/useGetRelationships";
import { documentTypeAbbreviation } from "@/utilities/helpers";

export const AdditionalData = ({ additionalInfo }) => {
  const documentType = useGetDocumentType();
  const { data: dataDocument, isSuccess: isSuccessDocument } = documentType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDocument && dataDocument?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        dataDocument?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDocument, isSuccessDocument]);

  const relationshipList = useGetRelationships();
  const { data: dataRelationships, isSuccess: isSuccessRelationships } =
    relationshipList;
  const [relationshipOptions, setRelationshipOptions] = useState([]);
  useEffect(() => {
    if (
      isSuccessRelationships &&
      dataRelationships?.data?.groupSettings.length > 0
    )
      setRelationshipOptions(
        dataRelationships?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataRelationships, isSuccessRelationships]);

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option["id"] === value);
    return selectedOption ? selectedOption["name"] : null;
  };

  const RowInfo1 = [
    {
      title:
        "¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?",
      description: additionalInfo.convicted ? "Si" : "No",
    },
    {
      title:
        "¿Tienes algún seguro de vida individual o de accidentes personales con Allianz o con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?",
      description: additionalInfo.lifeEnsure ? "Si" : "No",
    },
    {
      title:
        "*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora",
      description: additionalInfo.beneficiaries
        ? "Designado por mi"
        : "Mis herederos legales",
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      <Row width="100%" m="16px 0 16px 0">
        {RowInfo1.map((data, index) => (
          <Col key={index} gap="10px" width="387px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              {data.title}
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {data.description}
            </Text>
          </Col>
        ))}
      </Row>

      {additionalInfo.beneficiary.length > 0 && (
        <>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Grid container spacing={2}>
            {additionalInfo.beneficiary.map((benefic, index) => (
              <Grid item xs={3} key={index}>
                <Col>
                  <Text
                    font={theme.fonts.family.primaryBold}
                    size={theme.fonts.size.default2}
                    color={theme.colors.neutralGray900}
                  >
                    {`Heredero ${index + 1}`}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    weight={theme.fonts.weight.regular}
                    color={theme.colors.neutralGray900}
                  >
                    {benefic.name}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    weight={theme.fonts.weight.regular}
                    color={theme.colors.neutralGray900}
                  >
                    {`${documentTypeAbbreviation(
                      getLabelFromValue(
                        benefic.identificationTypeId,
                        documentTypeOptions
                      )
                    )} ${benefic.identificationNumber}`}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    weight={theme.fonts.weight.regular}
                    color={theme.colors.neutralGray900}
                  >
                    {`Parentesco: ${getLabelFromValue(
                      benefic.relationshipId,
                      relationshipOptions
                    )}`}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    weight={theme.fonts.weight.regular}
                    color={theme.colors.neutralGray900}
                  >
                    {`Porcentaje a heredar: ${benefic.percentInherit}%`}
                  </Text>
                </Col>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Col>
  );
};
