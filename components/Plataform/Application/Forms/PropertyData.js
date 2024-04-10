import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useGetHousingType from "@/hooks/Common/useGetHousingType";
import { numberFormat } from "@/utilities/helpers";

export const PropertyData = ({ propertyInfo }) => {
  const housingTypeList = useGetHousingType();
  const { data: dataHousingType, isSuccess: isSuccessHousingType } =
    housingTypeList;
  const [housingTypeOptions, setHousingTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessHousingType) {
      const sortedHousingType = dataHousingType?.data?.groupSettings
        .map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
        .sort((a, b) => a.id - b.id);

      setHousingTypeOptions(sortedHousingType);
    }
  }, [dataHousingType, isSuccessHousingType]);

  const statesList = useGetStates(15);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states || []);
    } else {
      setStatesOptions([]);
    }
  }, [isSuccessStates, dataStates]);

  const citiesList = useGetCities(propertyInfo.stateId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [citiesOptions, setCitiesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities);
    } else {
      setCitiesOptions([]);
    }
  }, [isSuccessCities, dataCities]);

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option["id"] === value);
    return selectedOption ? selectedOption["name"] : null;
  };

  const RowInfo1 = [
    {
      title: "Tipo de inmueble",
      description: getLabelFromValue(
        propertyInfo.housingTypeId,
        housingTypeOptions
      ),
    },
    {
      title: "Valor comercial",
      description: `$ ${numberFormat(propertyInfo.housingValue)}`,
    },
    {
      title: "Año de construcción",
      description: new Date(propertyInfo.builtgDate).getFullYear(),
    },
    {
      title: "Antigüedad",
      description: `${
        new Date().getFullYear() -
        new Date(propertyInfo.builtgDate).getFullYear()
      } años`,
    },
  ];

  const RowInfo2 = [
    {
      title: "Área de construcción",
      description: `${propertyInfo.builtArea} mts`,
    },
    {
      title: "Número de piso del apartamento",
      description: propertyInfo.apartmentNumber,
    },
    {
      title: "Cantidad de pisos del edificio",
      description: propertyInfo.buildingFloorsNumber,
    },
    {
      title: "Cantidad de sótanos del edificio",
      description: propertyInfo.basementNumber,
    },
  ];

  const RowInfo3 = [
    {
      title: "Dirección del inmueble",
      description: propertyInfo.address,
    },
    {
      title: "Departamento",
      description: getLabelFromValue(propertyInfo.stateId, statesOptions),
    },
    {
      title: "Cuidad",
      description: getLabelFromValue(propertyInfo.cityId, citiesOptions),
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      <Row width="100%" m="16px 0 0 0" gap="16px">
        {RowInfo1.map((data, index) => (
          <Col key={index} gap="10px" width="237px">
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

      <Div width="100%" height="1px" background={theme.colors.neutralGray200} />

      <Row width="100%" m="16px 0 0 0" gap="16px">
        {RowInfo2.map((data, index) => (
          <Col key={index} gap="10px" width="237px">
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

      <Div width="100%" height="1px" background={theme.colors.neutralGray200} />

      <Row width="100%" m="16px 0 16px 0" gap="16px">
        {RowInfo3.map((data, index) => (
          <Col key={index} gap="10px" width="237px">
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
