import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import backIcon from "../../../assets/icons/back.svg";
import { useSelector } from "react-redux";
import { HeaderInfo, WrapperPage } from "./styles";
import ApplicationInfo from "./ApplicationInfo";
import flagIconBold from "../../../assets/icons/flag-bold.svg";
import flagIcon from "../../../assets/icons/flag.svg";
import moneyIcon from "../../../assets/icons/money-gray.svg";
import moneyIconBold from "../../../assets/icons/money-bold.svg";
import formIcon from "../../../assets/icons/form.svg";
import formIconBold from "../../../assets/icons/form-bold.svg";
import folderIconBold from "../../../assets/icons/folder_copy-bold.svg";
import folderIcon from "../../../assets/icons/folder-gray.svg";
import { Record } from "../Record";
import { Forms } from "./Forms";
import pending from "@/assets/icons/pendingStepper.svg";
import success from "@/assets/icons/successStepper.svg";
import useGetHistory from "@/hooks/Customers/useGetHistory";
import { formattedDate, historyStatus } from "@/utilities/helpers";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";
import useGetCreditType from "@/hooks/Common/useGetCreditType";
import useGetBanks from "@/hooks/Common/useGetBanks";
import useGetLoanInfo from "@/hooks/Customers/useGetLoanInfo";
import useGetQuoteRate from "@/hooks/Common/useGetQuoteRate";
import useGetInsurers from "@/hooks/Common/useGetInsurers";
import useGetClientInfo from "@/hooks/Customers/useGetClientInfo";

const Application = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const documentsType = useGetDocumentType();
  const { selectedClient } = useSelector((state) => state)?.clients;
  const { data: dataDocuments, isSuccess: isSuccessDocuments } = documentsType;
  const phoneCode = useGetIndicatives();
  const { data: dataPhone, isSuccess: isSuccessPhone } = phoneCode;
  const gender = useGetGenders();
  const { data: dataGender, isSuccess: isSuccessGender } = gender;
  const loanType = useGetCreditType();
  const { data: dataLoan, isSuccess: isSuccessLoan } = loanType;
  const banks = useGetBanks();
  const { data: dataBanks, isSuccess: isSuccessBanks } = banks;
  const insurers = useGetInsurers();
  const { data: dataInsurers, isSuccess: isSuccessInsurers } = insurers;
  const quoteRateData = useGetQuoteRate();
  const { data: dataQuoteRate, isSuccess: isSuccessQuoteRate } = quoteRateData;
  const { data: dataUser, isSuccess: isSuccessUser } = useGetClientInfo(
    selectedClient.idClient
  );

  const { applications } = useSelector((state) => state);

  const history = useGetHistory(
    applications?.selectedApplication?.loanApplicationId
  );
  const { data, isSuccess } = history;
  const loanInfo = useGetLoanInfo(
    applications?.selectedApplication?.loanApplicationId
  );

  const {
    data: dataLoanInfo,
    isSuccess: isSuccessLoanInfo,
    isLoading: isLoadingLoanInfo,
  } = loanInfo;

  useEffect(() => {
    if (!applications?.selectedApplication?.loanApplicationId) {
      router.push("/plataforma/clientes/cliente");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applications?.selectedApplication]);

  const [selectedTab, setSelectedTab] = useState(0);
  const [historyInfo, setHistoryInfo] = useState([]);

  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const [phoneCodesOptions, setPhoneCodesOptions] = useState([]);
  const [gendersOptions, setGendersOptions] = useState([]);
  const [loanTypeOptions, setLoanTypeOptions] = useState([]);
  const [banksOptions, setBanksOptions] = useState([]);
  const [insurersOptions, setInsurersOptions] = useState([]);
  const [quoteRate, setQuoteRate] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [allianzRule, setAllianzRule] = useState(false);

  const tabs = [
    {
      icon: (
        <Image
          alt="back"
          src={selectedTab === 0 ? flagIconBold : flagIcon}
          width={24}
          height={24}
        />
      ),
      label: "Historial",
    },
    {
      icon: (
        <Image
          alt="back"
          src={selectedTab === 1 ? formIconBold : formIcon}
          width={24}
          height={24}
        />
      ),
      label: "Formularios",
    },
    {
      icon: (
        <Image
          alt="back"
          src={selectedTab === 2 ? moneyIconBold : moneyIcon}
          width={24}
          height={24}
        />
      ),
      label: "Pagos",
    },
    {
      icon: (
        <Image
          alt="back"
          src={selectedTab === 3 ? folderIconBold : folderIcon}
          width={24}
          height={24}
        />
      ),
      label: "Documentos",
    },
  ];

  const statusCard = (status, validation, index) => {
    if (status === "ClienteNoAsegurable" || validation === 1) {
      return "Alert";
    } else if (validation === 2 || validation === 3 || validation === 4) {
      return "Error";
    } else if (index === 0) {
      return "Pending";
    } else {
      return "Success";
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const info = data?.data.loanApplicationHistory;

      if (info.length === 1) {
        setHistoryInfo([
          {
            status: "Revisión de extracto",
            date: "-",
            observations: "",
            validationClientResult: null,
            statusCard: "Pending",
            historicalLoanApplicationId: null,
          },
          {
            status: historyStatus[info[0].stateName],
            date: formattedDate(info[0].creationDate),
            observations: info[0].observations,
            validationClientResult: info[0].validationClientResult,
            statusCard: "Success",
            historicalLoanApplicationId: info[0].id,
          },
        ]);
      } else {
        setHistoryInfo(
          info.map((ele, indx) => ({
            status: historyStatus[ele.stateName],
            date: formattedDate(ele.creationDate),
            observations: ele.observations,
            validationClientResult: ele.validationClientResult,
            statusCard: statusCard(
              ele.stateName,
              ele.validationClientResult,
              indx
            ),
            historicalLoanApplicationId: ele.id,
          }))
        );
      }
    }
  }, [isSuccess, data, selectedClient]);

  useEffect(() => {
    if (isSuccessDocuments) {
      setDocumentTypeOptions(
        dataDocuments?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessDocuments, dataDocuments]);

  useEffect(() => {
    if (isSuccessPhone) {
      setPhoneCodesOptions(
        dataPhone?.data?.groupSettings?.map((ele) => ({
          label: `(${ele.code})`,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessPhone, dataPhone]);

  useEffect(() => {
    if (isSuccessGender) {
      setGendersOptions(
        dataGender?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessGender, dataGender]);

  useEffect(() => {
    if (isSuccessLoan) {
      setLoanTypeOptions(
        dataLoan?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessLoan, dataLoan]);

  useEffect(() => {
    if (isSuccessBanks) {
      setBanksOptions(
        dataBanks?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessBanks, dataBanks]);

  useEffect(() => {
    if (isSuccessBanks) {
      setBanksOptions(
        dataBanks?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessBanks, dataBanks]);

  useEffect(() => {
    if (isSuccessBanks) {
      setBanksOptions(
        dataBanks?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessBanks, dataBanks]);

  useEffect(() => {
    if (isSuccessInsurers) {
      setInsurersOptions(
        dataInsurers?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessInsurers, dataInsurers]);

  useEffect(() => {
    if (isSuccessUser) {
      setBirthdate(dataUser.data.clientsInfo[0].birthDate);
      setAllianzRule(dataUser.data.clientsInfo[0].clientAge);
    }
  }, [isSuccessUser, dataUser]);

  useEffect(() => {
    if (isSuccessQuoteRate) {
      let annualRate = 0;

      const ageCalulate = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const birthDate = new Date(birthdate);
        birthDate.setHours(0, 0, 0, 0);

        const ageMilliseconds = today - birthDate;
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
        const age = Math.floor(ageMilliseconds / millisecondsPerYear);

        return age;
      };

      if (ageCalulate() < 50) {
        annualRate = dataQuoteRate?.data?.groupSettings.find(
          (ele) => ele.name === "AnnualRate1"
        )?.code;
      } else {
        annualRate = dataQuoteRate?.data?.groupSettings.find(
          (ele) => ele.name === "AnnualRate2"
        )?.code;
      }
      setQuoteRate(annualRate);
    }
  }, [isSuccessQuoteRate, dataQuoteRate, birthdate]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBack = () => {
    router.push("/plataforma/clientes/cliente");
  };

  return (
    <WrapperPage>
      <HeaderInfo>
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
            Volver a solicitudes
          </Text>
        </Row>
        <ApplicationInfo
          application={applications?.selectedApplication}
          dataLoanInfo={dataLoanInfo?.data?.loanApplication}
          banksOptions={banksOptions}
        />
      </HeaderInfo>
      <Col p="0 24px 24px 24px" width="100%">
        <Row>
          <Tabs
            value={selectedTab}
            background={theme.colors.orange}
            onChange={handleTabChange}
          >
            {tabs.map((tab, idx) => (
              <Tab
                key={idx}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                color={theme.colors.neutralGray600}
              />
            ))}
          </Tabs>
        </Row>
        {selectedTab === 0 && (
          <Record
            historyInfo={historyInfo}
            documentTypeOptions={documentTypeOptions}
            phoneCodesOptions={phoneCodesOptions}
            gendersOptions={gendersOptions}
            loanTypeOptions={loanTypeOptions}
            banksOptions={banksOptions}
            data={dataLoanInfo}
            isSuccess={isSuccessLoanInfo}
            insurersOptions={insurersOptions}
            quoteRate={quoteRate}
            application={applications?.selectedApplication}
            allianzRule={allianzRule}
          />
        )}
        {selectedTab === 1 && (
          <Forms
            loanApplicationId={
              applications?.selectedApplication?.loanApplicationId
            }
          />
        )}
        {selectedTab === 2 && <Text>Pagos</Text>}
        {selectedTab === 3 && <Text>Documentos</Text>}
      </Col>
    </WrapperPage>
  );
};

export default Application;
