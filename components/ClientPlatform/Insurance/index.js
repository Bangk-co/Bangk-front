import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Text, Card, Div, Row, Col } from "@/styles/Common";
import { HeaderInsurace, HeaderInsuranceMobile } from "./styles";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import endorsement from "@/assets/icons/endorsement.svg";
import backIcon from "@/assets/icons/backArrow.svg";
import addCircle from "@/assets/icons/addCircleOutline.svg";
import useGetClientInsurances from "@/hooks/Customers/useGetClientInsurances";
import { setSelectedPolicyInformation } from "@/store/policy";
import { LinearProgress } from "@/components/Common/LinearProgress";
import {
  getUserInfo,
  renderDocumentStateDiv,
  formattedDate,
} from "@/utilities/helpers";
import { WraperInsurance } from "./styles";

const Insurance = ({ isMobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { ClientId } = getUserInfo();

  const insurances = useGetClientInsurances(ClientId);
  const { data: dataInsurances, isSuccess: isSuccessInsurances } = insurances;
  const [insuranceList, setInsuranceList] = useState([]);
  useEffect(() => {
    if (isSuccessInsurances) {
      setInsuranceList(dataInsurances?.data.clientPolicyInfo);
    }
  }, [isSuccessInsurances, dataInsurances]);

  const handleBack = () => {
    router.back();
  };

  const handleDetail = (policyId) => {
    dispatch(
      setSelectedPolicyInformation({
        policyId: policyId,
        loanApplicationId: policyId, //TODO validate loanApplicationId
      })
    );
    router.push("/plataforma-cliente/seguros/detalle-seguro");
  };

  const calculateDaysRemaning = (date) => {
    const applicationDate = new Date(date);
    const currentDate = new Date();

    const oneYearLater = new Date(applicationDate);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const differenceMs = oneYearLater - currentDate;
    const daysRemaining = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    const elapsedMs = currentDate - applicationDate;
    const progress = (elapsedMs / differenceMs) * 100;

    return {
      dueDate: oneYearLater,
      daysRemaining: daysRemaining,
      progress: progress,
    };
  };

  return (
    <WraperInsurance>
      {isMobile ? (
        <HeaderInsuranceMobile>
          <Image
            alt="back"
            src={backIcon}
            width={16}
            height={16}
            onClick={handleBack}
          />
          <Text
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
            align="center"
            style={{ width: "100%" }}
          >
            Solicitudes
          </Text>
        </HeaderInsuranceMobile>
      ) : (
        <>
          <HeaderInsurace>
            <Text
              size={theme.fonts.size.h2}
              color={theme.colors.neutralGray900}
              font={theme.fonts.family.primaryBold}
            >
              Seguros
            </Text>
          </HeaderInsurace>

          <Text
            size={theme.fonts.size.ft}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
            mb="12px"
          >
            Endosos
          </Text>
        </>
      )}
      <Div
        direction={isMobile ? "column" : "row"}
        align="center"
        gap={isMobile ? "20px" : "16px"}
      >
        {insuranceList.map((insurance, index) => (
          <Card
            key={index}
            gap="8px"
            m={isMobile ? "20px 16px 0 16px" : "0"}
            p="16px 24px"
            width={isMobile ? "90%" : "560px"}
          >
            <Row justify="center" gap="8px">
              <Image
                alt="endorsement"
                src={endorsement}
                width={40}
                height={40}
              />
              <Col justify="center" align="left">
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.neutralGray500}
                  font={theme.fonts.family.primary}
                  weight={theme.fonts.weight.semibold}
                >
                  {insurance.stateName !== "Poliza Emitida"
                    ? `Numero de solicitud ${insurance.policyId}`
                    : `Numero de póliza ${insurance.policyId}`}{" "}
                  {/* TODO validate applicationId */}
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
                  {`Credito ${insurance.loanType}`}
                </Text>
              </Col>
            </Row>
            <Div
              width="100%"
              height="1px"
              background={theme.colors.gray50}
              m="16px 0"
            />
            <Row
              width="100%"
              justify="space-between"
              align="start"
              m="0 0 20px 0"
            >
              <Col justify="center" gap="8px">
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray300}
                  font={theme.fonts.family.primary}
                  weight={theme.fonts.weight.semibold}
                >
                  Estado de solicitud
                </Text>
                {renderDocumentStateDiv(insurance.stateName)}
              </Col>
              <Col justify="center" gap="8px">
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray300}
                  font={theme.fonts.family.primary}
                  weight={theme.fonts.weight.semibold}
                >
                  Fecha de solicitud
                </Text>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {insurance?.applicationDate
                    ? formattedDate(insurance.applicationDate)
                    : "--"}
                </Text>
              </Col>
            </Row>
            <Text
              size={theme.fonts.size.xs}
              color={theme.colors.gray300}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.semibold}
            >
              {`Días restantes: ${
                insurance?.applicationDate
                  ? calculateDaysRemaning(insurance.applicationDate)
                      .daysRemaining
                  : "--"
              }`}
            </Text>
            <LinearProgress
              variant="determinate"
              height="10px"
              value={
                insurance?.applicationDate
                  ? calculateDaysRemaning(insurance.applicationDate).progress
                  : 0
              }
              sx={{ width: "100%" }}
            />
            <Text
              size={theme.fonts.size.xxs}
              color={theme.colors.gray300}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.regular}
            >
              {`Vence: ${
                insurance?.applicationDate
                  ? formattedDate(
                      calculateDaysRemaning(insurance.applicationDate).dueDate
                    )
                  : "--"
              }`}
            </Text>
            <Div
              width="100%"
              height="1px"
              background={theme.colors.gray50}
              m="16px 0"
            />
            <Row width="100%" justify="center" gap="16px">
              <Button
                width={"auto"}
                padding="0px 16px"
                labelColor={theme.colors.green900}
                borderHover={"#F0F0F0"}
                border={theme.colors.white}
                hover={theme.colors.gray100}
                background={theme.colors.white}
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.default2}
                radius={"40px"}
                onClick={() => handleDetail(insurance.policyId)}
              >
                Ver Detalle
              </Button>
              {/* <Button
              width={"174px"}
              padding="0px"
              labelColor={theme.colors.white}
              borderHover={theme.colors.green900}
              border={theme.colors.green900}
              hover={theme.colors.green900}
              background={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              radius={"40px"}
              startIcon={
                <Image alt="article" src={article} width={16} height={16} />
              }
              onClick={() => setShowModal(true)}
            >
              Ver Documento
            </Button> */}
            </Row>
          </Card>
        ))}

        <Card
          gap="4px"
          p="0 16px"
          width={isMobile ? "90%" : "176px"}
          height={isMobile ? "123px" : "100%"}
          background={theme.colors.primary25}
          style={{
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image alt="addCircle" src={addCircle} width={24} height={24} />
          <Text
            size={theme.fonts.size.default2}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            style={{ padding: isMobile ? "0 60px" : "0 10px" }}
          >
            Nueva Solicitud de endoso
          </Text>
        </Card>
      </Div>
    </WraperInsurance>
  );
};

export default Insurance;
