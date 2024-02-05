import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Div, Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { Tabs } from "@/components/Common/Tabs";
import DrawerEditClient from "./DrawerEditClient";
import backIcon from "../../../assets/icons/back.svg";
import dnsIconBold from "../../../assets/icons/dns-bold.svg";
import dnsIcon from "../../../assets/icons/dns.svg";
import folderIconBold from "../../../assets/icons/folder_copy-bold.svg";
import folderIcon from "../../../assets/icons/folder_copy.svg";
import ClientInfoCard from "./ClientInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedClientInformation } from "@/store/customers";
import { setSelectedApplicationInformation } from "@/store/applications";
import useGetClientInfo from "@/hooks/Customers/useGetClientInfo";
import useGetApplications from "@/hooks/Customers/useGetApplications";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetCountries from "@/hooks/Common/useGetIndicatives";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";
import { Tab } from "@/components/Common/Tabs/Tab";
import { WrapperInfo, ApplicationCard } from "./styles";
import ApplicationInfo from "./ApplicationInfo";

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
    documentIssueDate: {
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
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (!clients?.selectedClient?.idClient) {
      router.push("/plataforma/clientes");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clients?.selectedClient]);

  const getClient = useGetClientInfo(clients?.selectedClient?.idClient);
  const { data, isLoading } = getClient;
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

  const getApplications = useGetApplications(clients?.selectedClient?.idClient);
  const { data: dataApplications, isLoading: isLoadingApplications } =
    getApplications;
  const [applicationsInfo, setApplicationsInfo] = useState([]);
  useEffect(() => {
    if (dataApplications?.data?.loanApplications.length > 0) {
      setApplicationsInfo(dataApplications?.data?.loanApplications);
    }
  }, [dataApplications, isLoadingApplications]);

  const initialValues = {
    id: clientInfo?.idClient,
    name: clientInfo?.name,
    lastName: clientInfo?.lastName,
    documentType: getValueFromLabel(
      clientInfo?.documentType,
      documentTypeOptions
    ),
    identificationNumber: clientInfo?.identificationNumber,
    documentIssueDate: clientInfo?.documentIssueDate,
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
      documentIssueDate: clientInfo?.documentIssueDate,
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

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleApplication = (applicationInfo) => {
    const updatedApplicationInfo = {
      ...applicationInfo,
      clientId: clientInfo?.idClient,
      clientName: clientInfo?.name,
      clientLastName: clientInfo?.lastName,
    };
    dispatch(setSelectedApplicationInformation(updatedApplicationInfo));
    router.push("/plataforma/clientes/solicitud");
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

      <Col width="100%">
        <Row>
          <Tabs
            value={selectedTab}
            background={theme.colors.orange}
            onChange={handleTabChange}
          >
            <Tab
              label="Solicitudes"
              icon={
                <Image
                  alt="back"
                  src={selectedTab === 0 ? dnsIconBold : dnsIcon}
                  width={24}
                  height={24}
                />
              }
              iconPosition="start"
            />
            <Tab
              label="Documentos"
              icon={
                <Image
                  alt="back"
                  src={selectedTab === 1 ? folderIconBold : folderIcon}
                  width={24}
                  height={24}
                />
              }
              iconPosition="start"
            />
          </Tabs>
        </Row>
        <WrapperInfo>
          {selectedTab === 0 &&
            applicationsInfo.map((application, idx) => (
              <ApplicationCard key={idx}>
                <ApplicationInfo
                  application={application}
                  handleApplication={handleApplication}
                />
              </ApplicationCard>
            ))}
          {selectedTab === 1 && <Text>Documentos</Text>}
        </WrapperInfo>
      </Col>
    </Div>
  );
};

export default Customer;
