/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import { Text, Card, Div, Row, Col } from "@/styles/Common";
import { HeaderInsurace, HeaderInsuranceDetail } from "./styles";
import { Grid, IconButton } from "@mui/material";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import endorsement from "@/assets/icons/endorsement.svg";
import backIcon from "@/assets/icons/back.svg";
import downIcon from "@/assets/icons/expand_circle_down.svg";
import upIcon from "@/assets/icons/expand_circle_up.svg";
import flagIconBold from "../../../assets/icons/flag-bold.svg";
import flagIcon from "../../../assets/icons/flag.svg";
import moneyIcon from "../../../assets/icons/money-gray.svg";
import moneyIconBold from "../../../assets/icons/money-bold.svg";
import formIcon from "../../../assets/icons/form.svg";
import formIconBold from "../../../assets/icons/form-bold.svg";
import folderIconBold from "../../../assets/icons/folder_copy-bold.svg";
import folderIcon from "../../../assets/icons/folder-gray.svg";
import useGetBanks from "@/hooks/Common/useGetBanks";
import useGetHistory from "@/hooks/Customers/useGetHistory";
import {
  getUserInfo,
  renderDocumentStateDiv,
  formattedDate,
  formattedPrice,
} from "@/utilities/helpers";
import { WraperInsurance } from "./styles";
import { InsuranceHistory } from "./InsuranceHistory";

const InsuranceDetail = ({ isMobile }) => {
  const router = useRouter();

  const { ClientId } = getUserInfo();

  const [expandDetail, setExpandDetail] = useState(isMobile ? false : true);
  const [selectedTab, setSelectedTab] = useState(0);

  const history = useGetHistory(112); //TODO validate
  const { data: dataHistory, isSuccess: isSuccessHistory } = history;
  const [historyInfo, setHistoryInfo] = useState([]);

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

  const banks = useGetBanks();
  const { data: dataBanks, isSuccess: isSuccessBanks } = banks;
  const [banksOptions, setBanksOptions] = useState([]);
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

  const insuranceData = [
    {
      label: "Estado de solicitud",
      content: renderDocumentStateDiv("Revisión de extracto"),
      width: isMobile ? "135px" : "173px",
    },
    {
      label: "Fecha de solicitud",
      content: formattedDate(new Date()),
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Fecha de vencimiento",
      content: formattedDate(new Date()),
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Monto del crédito",
      content: formattedPrice(1111111),
      width: isMobile ? "135px" : "150px",
    },
    {
      label: "Monto prima anual de Bangk",
      content: formattedPrice(222222),
      width: isMobile ? "135px" : "165px",
    },
    {
      label: "Asesor",
      content: "nombre asesor",
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
            <Image src={backIcon} alt="bankLogo" width={24} height={24} />
          </Div>
          <Text
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            weight={theme.fonts.weight.regular}
            mt="8px"
            mb="8px"
          >
            {/* {
                banksOptions.find((ele) => ele.value === dataLoanInfo?.bankId)
                  ?.label
              } */}
            Bancolombia
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
                Poliza
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
                Credito de
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
        {selectedTab === 0 && <InsuranceHistory historyInfo={historyInfo} />}
        {selectedTab === 1 && <Text>Formulario</Text>}
        {selectedTab === 2 && <Text>Pagos</Text>}
        {selectedTab === 3 && <Text>Documentos</Text>}
      </Col>
    </WraperInsurance>
  );
};
export default InsuranceDetail;
