import { useState, useEffect } from "react";
import { Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";

export const VehiculeData = ({ vehiculeInfo, propertyInfo }) => {
  const statesList = useGetStates(vehiculeInfo.countryVehiculeId);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states || []);
    } else {
      setStatesOptions([]);
    }
  }, [isSuccessStates, dataStates]);

  const citiesList = useGetCities(vehiculeInfo.stateVehiculeId);
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
      title: "Departamento de circulación",
      description: getLabelFromValue(
        vehiculeInfo.stateVehiculeId,
        statesOptions
      ),
    },
    {
      title: "Ciudad de circulación",
      description: getLabelFromValue(
        vehiculeInfo.cityVehiculeId,
        citiesOptions
      ),
    },
    {
      title: "Placa",
      description: vehiculeInfo.vehicleLicensePlate
        ? vehiculeInfo.vehicleLicensePlate.toUpperCase()
        : "--",
    },
  ];

  return (
    <Col m="24px 0 0 0">
      <Row width="100%" m="16px 0 16px 0" gap="16px">
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
    </Col>
  );
};
