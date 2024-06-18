/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import { Text, Div, Row, Col } from "@/styles/Common";
import { HeaderInsuranceDetail } from "./styles";
import { Grid } from "@mui/material";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import endorsement from "@/assets/icons/endorsement.svg";
import backIcon from "@/assets/icons/back.svg";
import downIcon from "@/assets/icons/expand_circle_down.svg";
import upIcon from "@/assets/icons/expand_circle_up.svg";
import flagIconBold from "../../../assets/icons/flag-bold.svg";
import flagIcon from "../../../assets/icons/flag.svg";
import useGetHistory from "@/hooks/Customers/useGetHistory";
import useGetLoanApplicationInfo from "@/hooks/Customers/useGetLoanApplicationInfo";
import {
  renderDocumentStateDiv,
  formattedDate,
  formattedPrice,
  historyStatus,
} from "@/utilities/helpers";
import { WraperInsurance } from "./styles";
import { InsuranceHistory } from "./InsuranceHistory";

const InsuranceDetail = ({ isMobile }) => {
  const router = useRouter();

  const { policy } = useSelector((state) => state);

  const [expandDetail, setExpandDetail] = useState(isMobile ? false : true);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (
      !policy?.selectedPolicy?.loanApplicationId &&
      !policy?.selectedPolicy?.policyId
    ) {
      router.push("/plataforma-cliente/seguros");
    }
  }, [policy?.selectedPolicy]);

  const applicationInfo = useGetLoanApplicationInfo(
    policy?.selectedPolicy?.loanApplicationId
  );
  const { data: dataApplication, isSuccess: isSuccessApplication } =
    applicationInfo;
  const [application, setApplication] = useState();
  useEffect(() => {
    if (isSuccessApplication) {
      setApplication(dataApplication?.data?.result[0]);
    }
  }, [dataApplication, isSuccessApplication]);

  const history = useGetHistory(policy?.selectedPolicy?.loanApplicationId);
  const { data: dataHistory, isSuccess: isSuccessHistory } = history;
  const [historyInfo, setHistoryInfo] = useState([]);
  const statusCard = (status, validation, index) => {
    if (status === "ClienteNoAsegurable" || validation === 1) {
      return "Alert";
    } else if (validation === 2 || validation === 3) {
      return "Error";
    } else if (index === 0) {
      return "Pending";
    } else {
      return "Success";
    }
  };
  useEffect(() => {
    if (isSuccessHistory) {
      const info = dataHistory?.data.loanApplicationHistory;

      if (info.length === 1) {
        setHistoryInfo([
          {
            status: "Revisión de extracto",
            date: "-",
            observations: "",
            validationClientResult: null,
            statusCard: "Pending",
          },
          {
            status: historyStatus[info[0].stateName],
            date: formattedDate(info[0].creationDate),
            observations: info[0].observations,
            validationClientResult: info[0].validationClientResult,
            statusCard: "Success",
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
          }))
        );
      }
    }
  }, [isSuccessHistory, dataHistory]);

  const insuranceData = [
    {
      label: "Estado de solicitud",
      content: renderDocumentStateDiv(application?.stateName),
      width: isMobile ? "135px" : "173px",
    },
    {
      label: "Fecha de solicitud",
      content: formattedDate(application?.creationDate),
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Fecha de vencimiento",
      content:
        policy?.selectedPolicy?.policyId === null
          ? "--"
          : formattedDate(
              new Date(application?.creationDate).setFullYear(
                new Date(application?.creationDate).getFullYear() + 1
              )
            ),
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Monto del crédito",
      content: application?.loanBalance
        ? formattedPrice(application?.loanBalance)
        : "--",
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Monto prima anual de Bangk",
      content: application?.loanBalance
        ? formattedPrice(application?.yearlyFee)
        : "--",
      width: isMobile ? "135px" : "165px",
    },
    {
      label: "Asesor",
      content: application?.reviewerName,
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Entidad bancaria",
      content: (
        <Row align="center" gap="10px">
          <Div
            align="center"
            justify="center"
            width="24px"
            height="24px"
            radius="50%"
            style={{
              overflow: "hidden",
            }}
          >
            {application?.iconsBanksUrl && (
              <Image
                src={application?.iconsBanksUrl}
                alt="bankLogo"
                width={24}
                height={24}
              />
            )}
          </Div>
          <Text
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            weight={theme.fonts.weight.regular}
            align="left"
            mt="8px"
            mb="8px"
          >
            {application?.bankName}
          </Text>
        </Row>
      ),
      width: isMobile ? "135px" : "150px",
    },
  ];

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
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <WraperInsurance>
      <HeaderInsuranceDetail>
        <Row gap="8px" align="center">
          <Button
            width={"32px"}
            height={isMobile ? "28px" : "32px"}
            mobileWidth="28px"
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
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primary}
            style={{ width: "100%" }}
            align="left"
          >
            Volver a solicitudes
          </Text>
        </Row>
        <Row justify="space-between" align="center" gap="8px">
          <Div gap="8px">
            <Image alt="endorsement" src={endorsement} width={40} height={40} />
            <Col justify="center">
              <Text
                size={theme.fonts.size.xs}
                color={theme.colors.neutralGray500}
                font={theme.fonts.family.primary}
                weight={theme.fonts.weight.semibold}
                align="left"
              >
                {policy?.selectedPolicy?.policyId === null
                  ? `Solicitud # ${application?.loanApplicationId}`
                  : `Póliza # ${policy?.selectedPolicy?.policyId}`}
              </Text>
              <Text
                size={
                  isMobile
                    ? theme.fonts.size.default2
                    : theme.fonts.size.default
                }
                color={theme.colors.gray900}
                font={theme.fonts.family.primaryBold}
              >
                {`Credito ${application?.loanTypeName}`}
              </Text>
            </Col>
          </Div>
          {isMobile && (
            <Image
              alt="expand"
              src={expandDetail ? upIcon : downIcon}
              width={24}
              height={24}
              onClick={() => setExpandDetail(!expandDetail)}
            />
          )}
        </Row>
        {expandDetail && (
          <Row
            style={{ display: "flex", flexWrap: "wrap" }}
            m={!isMobile && "16px 0 0 0"}
            justify="space-between"
            gap={isMobile ? "16px" : "0px"}
          >
            {insuranceData.map((item, index) => (
              <Grid key={index} item xs={12}>
                <Col gap="12px" width={item.width}>
                  <Text
                    size={theme.fonts.size.xs}
                    color={theme.colors.gray900}
                    font={theme.fonts.family.primaryBold}
                  >
                    {item.label}
                  </Text>
                  {item.content}
                </Col>
              </Grid>
            ))}
          </Row>
        )}
      </HeaderInsuranceDetail>

      <Col p="0 24px 24px 24px" width="100%">
        <Row style={{ whiteSpace: "nowrap", overflowX: "auto" }}>
          <Tabs
            value={selectedTab}
            background={theme.colors.orange}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
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
          <InsuranceHistory isMobile={isMobile} historyInfo={historyInfo} />
        )}
      </Col>
    </WraperInsurance>
  );
};
export default InsuranceDetail;
