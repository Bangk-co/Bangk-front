import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Div, Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import DrawerEditClient from "./DrawerEditClient";
import backIcon from "../../../assets/icons/back.svg";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import calendarIcon from "../../../assets/icons/date_range.svg";
import profileIcon from "../../../assets/icons/person.svg";
import editIcon from "../../../assets/icons/edit.svg";
import maleProfile from "../../../assets/img/maleProfile.png";
import femaleProfile from "../../../assets/img/femaleProfile.png";
import ClientInfoCard from "./ClientInfoCard";

import {
  formattedDate,
  formattedPhone,
  renderStateDiv,
} from "@/utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedClientInformation } from "@/store/customers";
import useGetClientInfo from "@/hooks/Customers/useGetClientInfo";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetCountries from "@/hooks/Common/useGetIndicatives";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";

const Customer = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state);

  const initialError = {
    name: {
      error: false,
      message: "",
    },
    lastName: {
      error: false,
      message: "",
    },
    documentType: {
      error: false,
      message: "",
    },
    identificationNumber: {
      error: false,
      message: "",
    },
    countryCode: {
      error: false,
      message: "",
    },
    phoneNumber: {
      error: false,
      message: "",
    },
    birthDate: {
      error: false,
      message: "",
    },
    email: {
      error: false,
      message: "",
    },
  };
  const [errorForm, setErrorForm] = useState(initialError);

  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (!clients?.selectedClient?.idClient) {
      router.push("/plataforma/clientes");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clients?.selectedClient]);

  const getClient = useGetClientInfo(clients?.selectedClient?.idClient);
  const { data, isLoading, isFetching } = getClient;
  const [clientInfo, setClientInfo] = useState();
  useEffect(() => {
    if (data?.data?.clientsInfo.length > 0) {
      setClientInfo(data?.data?.clientsInfo[0]);
    }
  }, [data, isLoading]);

  const documentType = useGetDocumentType();
  const { data: dataDocTypes, isSuccess: isSuccessDocTypes } = documentType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDocTypes && dataDocTypes?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        dataDocTypes?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
  }, [dataDocTypes, isSuccessDocTypes]);

  const indicatives = useGetCountries();
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } =
    indicatives;
  const [indicativesOptions, setIndicativesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessIndicatives && dataIndicatives?.data?.groupSettings.length > 0)
      setIndicativesOptions(
        dataIndicatives?.data?.groupSettings.map((ele) => ({
          label: `(${ele.code})`,
          value: ele.id,
        }))
      );
  }, [dataIndicatives, isSuccessIndicatives]);

  const genders = useGetGenders();
  const { data: dataGender, isSuccess: isSuccessGenders } = genders;
  const [genderOptions, setGenderOptions] = useState([]);
  useEffect(() => {
    if (isSuccessGenders && dataGender?.data?.groupSettings.length > 0)
      setGenderOptions(
        dataGender?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
  }, [dataGender, isSuccessGenders]);

  const getValueFromLabel = (label, options) => {
    const selectedOption = options.find((option) => option.label === label);
    return selectedOption ? selectedOption.value : null;
  };

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : null;
  };

  const initialValues = {
    id: clientInfo?.idClient,
    name: clientInfo?.name,
    lastName: clientInfo?.lastName,
    documentType: getValueFromLabel(
      clientInfo?.documentType,
      documentTypeOptions
    ),
    identificationNumber: clientInfo?.identificationNumber,
    countryCode: clientInfo?.countryCode,
    phoneNumber: clientInfo?.phoneNumber,
    birthDate: clientInfo?.birthDate,
    genderId: getValueFromLabel(clientInfo?.genderName, genderOptions),
    email: clientInfo?.email,
  };

  const [actualInfo, setActualInfo] = useState(initialValues);

  useEffect(() => {
    setActualInfo({
      id: clientInfo?.idClient,
      name: clientInfo?.name,
      lastName: clientInfo?.lastName,
      documentType: getValueFromLabel(
        clientInfo?.documentType,
        documentTypeOptions
      ),
      identificationNumber: clientInfo?.identificationNumber,
      countryCode: clientInfo?.countryCode,
      phoneNumber: clientInfo?.phoneNumber,
      birthDate: clientInfo?.birthDate,
      genderId: getValueFromLabel(clientInfo?.genderName, genderOptions),
      email: clientInfo?.email,
    });
  }, [clientInfo, documentTypeOptions, genderOptions]);

  const handleBack = () => {
    dispatch(setSelectedClientInformation({}));
    router.push("/plataforma/clientes");
  };

  const handleCloseDrawer = () => {
    setErrorForm(initialError);
    setActualInfo(initialValues);
    setShowDrawer(false);
  };

  return (
    <Div direction="row" width="100%" gap="32px">
      <DrawerEditClient
        showDrawer={showDrawer}
        closeDrawer={handleCloseDrawer}
        documentTypeOptions={documentTypeOptions}
        indicativesOptions={indicativesOptions}
        actualInfo={actualInfo}
        initialValues={initialValues}
        setActualInfo={setActualInfo}
        errorForm={errorForm}
        setErrorForm={setErrorForm}
      />

      <Col gap="12px" width="275px">
        <Row gap="8px" align="center">
          <Button
            width="32px"
            height="32px"
            radius="4px"
            borderHover={theme.colors.green900}
            border={theme.colors.green900}
            borderHeight={"2px solid"}
            hover={"transparent"}
            background={theme.colors.white}
            onClick={handleBack}
          >
            <Image alt="back" src={backIcon} width={16} height={16} />
          </Button>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default}
          >
            Volver a clientes
          </Text>
        </Row>
        <ClientInfoCard
          indicativesOptions={indicativesOptions}
          clientInfo={clientInfo}
          getLabelFromValue={getLabelFromValue}
          setShowDrawer={setShowDrawer}
        />
      </Col>

      <Row m="0 0 37px 0">
        <Text
          weight={theme.fonts.weight.bold}
          size={theme.fonts.size.h6}
          color={theme.colors.gray900}
        >
          Solicitudes
        </Text>
      </Row>
    </Div>
  );
};

export default Customer;
