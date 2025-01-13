import { useState, useEffect } from "react";
import { Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import useGetDiseases from "@/hooks/Common/useGetDiseases";

export const HealthData = ({ healthInfo }) => {
  const diseasesList = useGetDiseases();
  const { data: dataDiseases, isSuccess: isSuccessDiseases } = diseasesList;
  const [diseasesOptions, setDiseasesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDiseases)
      setDiseasesOptions(
        dataDiseases?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDiseases, isSuccessDiseases]);

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option["id"] === value);
    return selectedOption ? selectedOption["name"] : null;
  };

  const RowInfo1 = [
    { title: "¿Cúal es tu peso en kilos?(kg)", description: healthInfo.weight },
    {
      title: "¿Cúal es tu estatura en centimetros?(cm)",
      description: healthInfo.height,
    },
    {
      title: "Índice de masa corporal (IMC)",
      description: (
        healthInfo.weight /
        ((healthInfo.height / 100) ^ 2)
      ).toFixed(2),
    },
  ];

  const diseasesInfo = healthInfo?.diseases
    ? healthInfo.diseases.split(",")
    : [];
  const RowInfo2 = [
    {
      title:
        "¿Te han diagnosticado alguna(s) de estas enfermedades, circunstancias o eventos?",
      description:
        healthInfo.diseases !== null
          ? diseasesInfo
              .map((disease) =>
                getLabelFromValue(Number(disease), diseasesOptions)
              )
              .join(", ")
          : "Ninguna",
    },
    {
      title:
        "¿Le han detectado la presencia de anticuerpos contra el virus V.I.H. productor del SIDA?",
      description:
        healthInfo.hivActive !== null
          ? healthInfo.hivActive
            ? "Si"
            : "No"
          : "--",
    },
    {
      title:
        "¿Te encuentras actualmente en exámenes, estudios, investigación o te han indicado la necesidad de alguna cirugía o tratamiento que no te hayas realizado aún?",
      description:
        healthInfo.plannedMedicalProcidure !== null
          ? healthInfo.plannedMedicalProcidure
            ? "Si"
            : "No"
          : "--",
    },
  ];

  const RowInfo3 = [
    {
      title:
        "¿Tiene algún tipo de discapacidad, incapacidad o limitación física o mental?",
      description:
        healthInfo.disability !== null
          ? healthInfo.disability
            ? "Si"
            : "No"
          : "--",
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      <Row width="100%" m="16px 0 0 0" gap="16px">
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
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>

      <Row width="100%" m="16px 0 0 0" gap="16px">
        {RowInfo2.map((data, index) => (
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
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>

      <Row width="100%" m="16px 0 16px 0" gap="16px">
        {RowInfo3.map((data, index) => (
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
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
