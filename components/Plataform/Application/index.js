import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Div, Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import backIcon from "../../../assets/icons/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedApplicationInformation } from "@/store/applications";
import { HeaderInfo } from "./styles";
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
import pending from "@/assets/icons/pendingStepper.svg"
import success from "@/assets/icons/successStepper.svg"

const Application = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { applications } = useSelector((state) => state);

  useEffect(() => {
    if (!applications?.selectedApplication?.loanApplicationId) {
      router.push("/plataforma/clientes/cliente");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applications?.selectedApplication]);

  const [selectedTab, setSelectedTab] = useState(0);
  const [historyInfo, setHistoryInfo] = useState([])

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

  const stepperIcon = (status) => {
    switch (status) {
      case "Revisión de extracto":
        return pending;
      case "Solicitud creada":
        return success;
      default:
        return pending;
    }
  }

  useEffect(() => {
    setHistoryInfo(
      [
        {
          status: "Revisión de extracto",
          date: "Sep 04, 2023",
          observations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue, mi ut dictum cursus, velit dui maximus enim, sed semper metus lectus non turpis. Integer id tellus molestie",
          icon: stepperIcon("Revisión de extracto")
        },
        {
          status: "Solicitud creada",
          date: "Sep 04, 2023",
          observations: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue, mi ut dictum cursus, velit dui maximus enim, sed semper metus lectus non turpis. Integer id tellus molestie",
          icon: stepperIcon("Solicitud creada")
        },
      ]
    )
  }, [])

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBack = () => {
    dispatch(setSelectedApplicationInformation({}));
    router.push("/plataforma/clientes/cliente");
  };

  return (
    <Div
      width="100%"
      gap="32px"
      justify="start"
      align="flex-start"
      background={"#fafafa"}
      direction="column"
    >
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
        <ApplicationInfo application={applications?.selectedApplication} />
      </HeaderInfo>
      <Col p="0 24px 24px 24px">
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
        {selectedTab === 0 &&
          <Record historyInfo={historyInfo} />
        }
        {selectedTab === 1 && <Text>Formularios</Text>}
        {selectedTab === 2 && <Text>Pagos</Text>}
        {selectedTab === 3 && <Text>Documentos</Text>}
      </Col>
    </Div>
  );
};

export default Application;
