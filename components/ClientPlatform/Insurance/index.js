import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Text, Card, Div, Row, Col } from "@/styles/Common";
import { HeaderInsurace, HeaderInsuranceMobile, WrapperCard } from "./styles";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import endorsement from "@/assets/icons/endorsement.svg";
import backIcon from "@/assets/icons/backArrow.svg";
import megaphone from "@/assets/img/megaphone.svg";
import useGetClientInsurances from "@/hooks/Customers/useGetClientInsurances";
import { setSelectedPolicyInformation } from "@/store/policy";
import { LinearProgress } from "@/components/Common/LinearProgress";
import {
  getUserInfo,
  renderDocumentStateDiv,
  formattedDate,
} from "@/utilities/helpers";
import { WraperInsurance } from "./styles";
import article from "../../../assets/icons/article-green.svg";
import editNote from "@/assets/icons/editNote.svg";
import { Grid } from "@mui/material";

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

  const handleDetail = (policyId, loanApplicationId) => {
    dispatch(
      setSelectedPolicyInformation({
        policyId: policyId,
        loanApplicationId: loanApplicationId,
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
    const daysRemaining = Math.ceil(differenceMs / (1000 * 60 * 60 * 24) - 1);

    const elapsedMs = currentDate - applicationDate;
    const progress = (elapsedMs / differenceMs) * 100;

    return {
      dueDate: oneYearLater,
      daysRemaining: daysRemaining,
      progress: progress,
    };
  };

  const handleCreateEndorsement = () => {
    router.push("/cotiza-tu-ahorro/tu-credito?source=create");
  };

  const handleViewQuote = (loanApplicationId) => {
    router.push(
      `/ver-cotizacion/informacion-cotizacion/?requestId=${loanApplicationId}`
    );
  };

  const handleViewPolicy = (loanApplicationId) => {
    router.push(`/solicitar-poliza/confirma-tus-datos/?loanApplicationId=${loanApplicationId}`);
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
        width="100%"
        p={isMobile ? "0 16px" : "0"}
      >
        {insuranceList.length === 0 ? (
          <WrapperCard isMobile={isMobile}>
            <Image
              alt="megaphone"
              src={megaphone}
              width={isMobile ? "137px" : "167px"}
            />
            <Col align="center" gap="4px">
              <Text
                color={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.default}
                lineHeight={"20px"}
                mb="4px"
              >
                ¡Completa tus seguros!
              </Text>
              <Text
                color={theme.colors.green900}
                font={theme.fonts.family.primaryMedium}
                size={theme.fonts.size.sm}
                lineHeight={"20px"}
                mb="22px"
              >
                Solicita hoy mismo un nuevo endoso y descubre los beneficios que
                Bangk tiene para tí!
              </Text>
            </Col>
            <Button
              background={theme.colors.green900}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              width={isMobile ? "282px" : "300px"}
              style={{ alignSelf: "center" }}
              onClick={handleCreateEndorsement}
            >
              Nueva solicitud de endoso
            </Button>
          </WrapperCard>
        ) : (
          <>
            <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3 }} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
              {insuranceList.map((insurance, index) => (
                <Grid item key={index} md={6} xs={12}>
                  <Card
                    gap="8px"
                    m={isMobile ? "20px 16px 0 16px" : "0"}
                    p="16px 24px"
                    width={isMobile ? "90%" : "100%"}
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
                          {insurance.policyId === null
                            ? `Numero de solicitud ${insurance.loanApplicationId}`
                            : `Numero de póliza ${insurance.policyId}`}
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
                      <Col justify="center" gap="8px" width={!isMobile && "152px"}>
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
                          {insurance?.creationDateLoanApplication
                            ? formattedDate(insurance.creationDateLoanApplication)
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
                        insurance?.creationDatePolicy
                          ? calculateDaysRemaning(insurance.creationDatePolicy)
                              .daysRemaining
                          : "--"
                      }`}
                    </Text>
                    <LinearProgress
                      variant="determinate"
                      height="10px"
                      value={
                        insurance?.creationDatePolicy
                          ? calculateDaysRemaning(insurance.creationDatePolicy)
                              .progress
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
                        insurance?.creationDatePolicy
                          ? formattedDate(
                              calculateDaysRemaning(insurance.creationDatePolicy)
                                .dueDate
                            )
                          : "--"
                      }`}
                    </Text>
                    <Div
                      width="100%"
                      height="1px"
                      background={theme.colors.gray50}
                      m="16px 0 0 0"
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
                        radius={"40px"}
                        onClick={() =>
                          handleDetail(
                            insurance.policyId,
                            insurance.loanApplicationId
                          )
                        }
                      >
                        <Text
                          size={theme.fonts.size.default2}
                          color={theme.colors.green900}
                          font={theme.fonts.family.primaryBold}
                          style={{
                            borderBottom: `2px solid ${theme.colors.green900}`,
                          }}
                        >
                          Ver Detalle
                        </Text>
                      </Button>
                      {insurance.stateName === "Cotización enviada" && (
                        <Button
                          width={isMobile ? "145px" : "167px"}
                          height={"40px"}
                          labelColor={theme.colors.green900}
                          borderHover={theme.colors.green900}
                          border={theme.colors.green900}
                          borderHeight={"3px solid"}
                          hover={theme.colors.white}
                          background={theme.colors.white}
                          font={theme.fonts.family.primaryBold}
                          size={theme.fonts.size.default2}
                          radius={"40px"}
                          startIcon={
                            isMobile ? null : (
                              <Image
                                alt="article"
                                src={article}
                                width={16}
                                height={16}
                              />
                            )
                          }
                          onClick={() =>
                            handleViewQuote(insurance.loanApplicationId)
                          }
                        >
                          Ver Cotización
                        </Button>
                      )}
                      {(insurance.stateName === "Poliza Emitida" ||
                        insurance.stateName === "Pago Rechazado") && (
                        <Button
                          width={isMobile ? "130px" : "167px"}
                          height={"40px"}
                          labelColor={theme.colors.green900}
                          borderHover={theme.colors.green900}
                          border={theme.colors.green900}
                          borderHeight={"3px solid"}
                          hover={theme.colors.white}
                          background={theme.colors.white}
                          font={theme.fonts.family.primaryBold}
                          size={theme.fonts.size.default2}
                          radius={"40px"}
                          startIcon={
                            isMobile ? null : (
                              <Text
                                size={theme.fonts.size.default2}
                                color={theme.colors.green900}
                                font={theme.fonts.family.primaryBold}
                              >
                                $
                              </Text>
                            )
                          }
                          onClick={() => {}}
                        >
                          Pagar Póliza
                        </Button>
                      )}
                      {insurance.stateName === "Poliza Pagada" && (
                        <Button
                          width={isMobile ? "auto" : "205px"}
                          height={"40px"}
                          labelColor={theme.colors.green900}
                          borderHover={theme.colors.green900}
                          border={theme.colors.green900}
                          borderHeight={"3px solid"}
                          hover={theme.colors.white}
                          background={theme.colors.white}
                          font={theme.fonts.family.primaryBold}
                          size={theme.fonts.size.default2}
                          radius={"40px"}
                          startIcon={
                            isMobile ? null : (
                              <Image
                                alt="editNote"
                                src={editNote}
                                width={16}
                                height={16}
                              />
                            )
                          }
                          onClick={() => {}}
                        >
                          {isMobile ? "Firmar" : "Firmar Documentos"}
                        </Button>
                      )}
                      {insurance.stateName === "Cotización aceptada" && (
                        <Button
                          width={isMobile ? "auto" : "205px"}
                          height={"40px"}
                          labelColor={theme.colors.green900}
                          borderHover={theme.colors.green900}
                          border={theme.colors.green900}
                          borderHeight={"3px solid"}
                          hover={theme.colors.white}
                          background={theme.colors.white}
                          font={theme.fonts.family.primaryBold}
                          size={theme.fonts.size.default2}
                          radius={"40px"}
                          onClick={() => handleViewPolicy(insurance.loanApplicationId)}
                        >
                          {isMobile ? "Formularios" : "Diligenciar formularios"}
                        </Button>
                      )}

                      {/* <Button
                      width={isMobile ? "auto" : "174px"}
                      padding="0px"
                      labelColor={theme.colors.white}
                      borderHover={theme.colors.green900}
                      border={theme.colors.green900}
                      borderHeight={"3px solid"}
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
                </Grid>
              ))}
              <Grid item md={6} xs={12}>
                <WrapperCard
                  isMobile={isMobile}
                  width={isMobile ? "90%" : "100%"}
                  padding={isMobile ? "53px 16px" : "53px 29px"}
                >
                  <Image
                    alt="megaphone"
                    src={megaphone}
                    width={isMobile ? "137px" : "167px"}
                  />
                  <Col align="center" gap="4px">
                    <Text
                      color={theme.colors.green900}
                      font={theme.fonts.family.primaryBold}
                      size={theme.fonts.size.default}
                      lineHeight={"20px"}
                      mb="4px"
                    >
                      ¡Completa tus seguros!
                    </Text>
                    <Text
                      color={theme.colors.green900}
                      font={theme.fonts.family.primaryMedium}
                      size={theme.fonts.size.sm}
                      lineHeight={"20px"}
                      mb="22px"
                    >
                      Solicita hoy mismo un nuevo endoso y descubre los beneficios
                      que Bangk tiene para tí!
                    </Text>
                  </Col>
                  <Button
                    background={theme.colors.green900}
                    hover={theme.colors.green900}
                    borderHover={theme.colors.green900}
                    width={isMobile ? "250px" : "300px"}
                    style={{ alignSelf: "center" }}
                    onClick={handleCreateEndorsement}
                  >
                    Nueva solicitud de endoso
                  </Button>
                </WrapperCard>
              </Grid>
            </Grid>
          </>
        )}
      </Div>
    </WraperInsurance>
  );
};

export default Insurance;
