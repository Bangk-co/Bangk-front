import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Div, Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import DrawerEditClient from "./DrawerEditClient";
import backIcon from "../../../assets/icons/arrow-back-green.svg";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import calendarIcon from "../../../assets/icons/date_range.svg";
import profileIcon from "../../../assets/icons/person.svg";
import editIcon from "../../../assets/icons/edit.svg";
import maleProfile from "../../../assets/img/maleProfile.png";
import femaleProfile from "../../../assets/img/femaleProfile.png";

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

const Customer = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state);

  const [errorForm, setErrorForm] = useState({
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
  });

  const [showDrawer, setShowDrawer] = useState(false);
  const [actualInfo, setActualInfo] = useState(initialValues);

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

  const initialValues = {
    id: clientInfo?.idClient,
    name: clientInfo?.name,
    lastName: clientInfo?.lastName,
    documentType: clientInfo?.documentType,
    identificationNumber: clientInfo?.identificationNumber,
    countryCode: clientInfo?.countryCode,
    phoneNumber: clientInfo?.phoneNumber,
    birthDate: clientInfo?.birthDate,
    genderName: clientInfo?.genderName,
  };

  useEffect(() => {
    setActualInfo({
      id: clientInfo?.idClient,
      name: clientInfo?.name,
      lastName: clientInfo?.lastName,
      documentType: clientInfo?.documentType,
      identificationNumber: clientInfo?.identificationNumber,
      countryCode: clientInfo?.countryCode,
      phoneNumber: clientInfo?.phoneNumber,
      birthDate: clientInfo?.birthDate,
      genderName: clientInfo?.genderName,
    });
  }, [clientInfo]);

  const handleBack = () => {
    dispatch(setSelectedClientInformation({}));
    router.push("/plataforma/clientes");
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
    setActualInfo(initialValues);
  };

  return (
    <Div direction="row" width="100%" gap="32px">
      <DrawerEditClient
        showDrawer={showDrawer}
        closeDrawer={handleCloseDrawer}
        documentTypeOptions={documentTypeOptions}
        indicativesOptions={indicativesOptions}
        actualInfo={actualInfo}
        setActualInfo={setActualInfo}
        errorForm={errorForm}
        setErrorForm={setErrorForm}
      />
      <Col gap="24px" width="275px">
        <Row gap="8px" align="center">
          <Button
            width="32px"
            height="32px"
            radius="4px"
            borderHover={theme.colors.green900}
            border={theme.colors.green900}
            borderHeigh={"3px"}
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
        <Row gap="8px" align="center" justify="center">
          <Div
            background={theme.colors.orange}
            radius="50%"
            width="150px"
            height="150px"
            align="center"
            justify="center"
          >
            <Image
              alt="profile"
              src={
                clientInfo?.genderName === "Masculino"
                  ? maleProfile
                  : femaleProfile
              }
              width={150}
              height={150}
            />
          </Div>
        </Row>
        <Col gap="8px" align="center" justify="center">
          <Text
            weight={theme.fonts.weight.bold}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.h5}
          >
            {clientInfo?.name} {clientInfo?.lastName}
          </Text>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            {`C.C. ${Number(
              clientInfo?.identificationNumber
            ).toLocaleString()}`}
          </Text>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            {`ID: ${clientInfo?.idClient}`}
          </Text>
        </Col>
        <Row gap="8px" align="center" justify="center">
          <Div background={theme.colors.gray50} width="275px" height="1px" />
        </Row>
        <Col gap="8px" justify="center">
          <Text
            weight={theme.fonts.weight.bold}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            Datos Generales
          </Text>
          <Text
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Correo electrónico
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="email" src={emailIcon} width={16} height={16} />
            <Text
              mt="2px"
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              {clientInfo?.email}
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Número de celular
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="phone" src={phoneIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              {`+${clientInfo?.countryCode} ${formattedPhone(
                clientInfo?.phoneNumber
              )}`}
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Fecha de nacimiento
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="calendar" src={calendarIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              {formattedDate(clientInfo?.birthDate)}
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Género
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="profile" src={profileIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              {clientInfo?.genderName}
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Estado del cliente
          </Text>
          <Row gap="8px" width="100%" justify="center">
            {renderStateDiv(clientInfo?.stateName)}
          </Row>
        </Col>
        <Link
          onClick={() => setShowDrawer(true)}
          hover={theme.colors.gray100}
          color={theme.colors.green900}
          font={theme.fonts.family.primary}
          weight={theme.fonts.weight.semibold}
          size={theme.fonts.size.default2}
          width="100%"
          radius="40px"
        >
          <Row
            gap="8px"
            align="center"
            m="8px 0"
            style={{
              borderBottom: `2px solid ${theme.colors.green900}`,
            }}
          >
            <Image alt="edit" src={editIcon} width={16} height={16} /> Editar
          </Row>
        </Link>
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
