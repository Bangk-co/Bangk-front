import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Text, Row, Col, Div, Card } from "@/styles/Common";
import { theme } from "@/styles/theme";
import {
  WraperHome,
  HeaderHomeMobile,
  HeaderHome,
  WrapperCard,
  ArticleCard,
  WrapperSmallCard,
} from "./styles";
import { formattedDate, getUserInfo } from "@/utilities/helpers";
import { Button } from "@/components/Common/Button";
import backIcon from "@/assets/icons/arrow-down.svg";
import megaphone from "@/assets/img/megaphone.svg";
import endorsement from "@/assets/icons/endorsement.svg";
import article from "@/assets/icons/article-green.svg";
import article1 from "@/assets/img/article1.svg";
import article2 from "@/assets/img/article2.svg";
import article3 from "@/assets/img/article3.svg";
import article4 from "@/assets/img/article4.svg";
import article1Mobile from "@/assets/img/article1Mobile.svg";
import article2Mobile from "@/assets/img/article2Mobile.svg";
import article3Mobile from "@/assets/img/article3mobile.svg";
import article4Mobile from "@/assets/img/article4Mobile.svg";
import logo from "@/assets/img/logoRounded.svg";
import useGetLastThreeApplication from "@/hooks/Customers/useGetLastThreeApplication";
import { Grid } from "@mui/material";
import { LinearProgress } from "@/components/Common/LinearProgress";
import { renderDocumentStateDiv } from "@/utilities/helpers";
import { setSelectedPolicyInformation } from "@/store/policy";

export const Home = ({ isMobile }) => {
  const { unique_name: name, ClientId } = getUserInfo();
  const router = useRouter();
  const dispatch = useDispatch();

  const threeApplication = useGetLastThreeApplication(ClientId);
  const { data: dataApplications, isSuccess: isSuccessApplications } =
    threeApplication;
  const [applicationList, setApplicationsList] = useState([]);

  useEffect(() => {
    if (isSuccessApplications) {
      setApplicationsList(dataApplications?.data?.loanApplications);
    }
  }, [isSuccessApplications, dataApplications]);

  const articles = [
    {
      photo: isMobile ? article1Mobile : article1,
      title: "¡Ahorrar es posible!",
      description: isMobile
        ? "Las startups, empresas emergentes con un alto potencial de crecimiento y expansión, han tenido..."
        : "Las startups, empresas emergentes con un alto potencial de crecimiento y expansión, han tenido un impacto significativo en la sociedad en las últimas décadas. Desde la creación de nuevas soluciones tecnológicas hasta la generación de empleo y la promoción del emprendimiento, las startups han demostrado ser un motor clave para el desarrollo económico y social en todo el mundo...",
      name: "Marco",
      date: "01/03/2024",
      url: "https://www.bangk.co/blog/articulo/1/",
    },
    {
      photo: isMobile ? article2Mobile : article2,
      title: "¡Responsabilidad social!",
      description: isMobile
        ? "Mi nombre es Esteban y aunque no trabajo de tiempo completo en Bangk, estaré apoyando.. "
        : "Mi nombre es Esteban y aunque no trabajo de tiempo completo en Bangk, estaré apoyando y liderando el camino hacia una empresa socialmente sostenible. Mi emprendimiento y proyecto de vida se llama InfluenSer Natural, creamos un proyecto llamado “Más Cerca”, que busca generar una conexión entre las empresas y las comunidades mientras mejora la calidad de vida de las personas y traza y recoge... ",
      name: "Esteban",
      date: "01/03/2024",
      url: "https://www.bangk.co/blog/articulo/2/",
    },
    {
      photo: isMobile ? article3Mobile : article3,
      title: "¡Sigo aprendiendo!",
      description: isMobile
        ? "Sin duda, el proceso de venta de una empresa es un gran logro, especialmente una gran satisfacción... "
        : "Sin duda, el proceso de venta de una empresa es un gran logro, especialmente una gran satisfacción personal, pero también puede ser un desafío financiero para aquellos que no estamos acostumbrados a manejar bien el dinero; puede llegar a ser abrumador. Mi experiencia personal me llevó a comprender la importancia de la educación financiera. A lo largo de mi vida, cometí muchos... ",
      name: "Julián",
      date: "01/03/2024",
      url: "https://www.bangk.co/blog/articulo/3/",
    },
    {
      photo: isMobile ? article4Mobile : article4,
      title: "¡Buena suerte!",
      description: isMobile
        ? "El dinero debe seguirte, estarás en problemas si lo haces al revés… Cuando emprendemos, consumimos ..."
        : "El dinero debe seguirte, estarás en problemas si lo haces al revés… Cuando emprendemos, consumimos, compramos o invertimos, estamos generando impactos sobre las personas, las comunidades y en ocasiones sobre el mundo entero, es por esto que ser conscientes de nuestros actos es una gran responsabilidad, la mayor de todas. ¿es esto bueno? ¿para quién es bueno? ¿puede ser mejor? Son preguntas que me ayudan...",
      name: "Camilo",
      date: "01/03/2024",
      url: "https://www.bangk.co/blog/articulo/4/",
    },
  ];

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

  const handleDetail = (policyId, loanApplicationId) => {
    dispatch(
      setSelectedPolicyInformation({
        policyId: policyId,
        loanApplicationId: loanApplicationId,
      })
    );
    router.push("/plataforma-cliente/seguros/detalle-seguro");
  };

  const handleViewQuote = (loanApplicationId) => {
    router.push(
      `/ver-cotizacion/informacion-cotizacion/?requestId=${loanApplicationId}`
    );
  };

  const handleViewPolicy = (loanApplicationId) => {
    router.push(
      `/solicitar-poliza/confirma-tus-datos/?loanApplicationId=${loanApplicationId}`
    );
  };

  return (
    <WraperHome>
      {isMobile ? (
        <HeaderHomeMobile>
          <Text
            size={theme.fonts.size.ft}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
          >
            {`¡Hola, ${name}!`}
          </Text>
        </HeaderHomeMobile>
      ) : (
        <HeaderHome>
          <Text
            size={theme.fonts.size.h2}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
          >
            {`Hola ${name}`}
          </Text>
        </HeaderHome>
      )}
      <Col p={isMobile ? "0 16px" : "0"}>
        <Row
          width="100%"
          justify="space-between"
          align="center"
          m={isMobile ? "0 0 24px 0" : "0 0 32px 0"}
        >
          <Text
            size={theme.fonts.size.ft}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primaryBold}
          >
            Tus productos
          </Text>
          <Button
            width={"auto"}
            padding="0px 16px"
            labelColor={theme.colors.green900}
            borderHover={theme.colors.light4}
            border={isMobile ? theme.colors.white : theme.colors.light4}
            hover={theme.colors.gray100}
            background={isMobile ? theme.colors.white : theme.colors.light4}
            font={theme.fonts.family.primaryBold}
            radius={"40px"}
            onClick={() => router.push("/plataforma-cliente/seguros")}
          >
            <Row
              align="center"
              gap="5px"
              style={{
                borderBottom: `2px solid ${theme.colors.green900}`,
              }}
            >
              <Text
                size={theme.fonts.size.default2}
                color={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
              >
                Ver más
              </Text>
              <Image
                alt="back"
                src={backIcon}
                width={16}
                height={16}
                style={{ transform: "rotate(-90deg)" }}
              />
            </Row>
          </Button>
        </Row>
        {applicationList.length === 0 ? (
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
            >
              Nueva solicitud de endoso
            </Button>
          </WrapperCard>
        ) : (
          <>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 2, md: 3 }}
              columnSpacing={{ xs: 2, sm: 2, md: 4 }}
            >
              {applicationList.map((insurance, index) => (
                <Grid item key={index} md={6} xs={12}>
                  <Card gap="8px" p="16px 24px" width={"100%"}>
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
                      <Col
                        justify="center"
                        gap="8px"
                        width={!isMobile && "152px"}
                      >
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
                            ? formattedDate(
                                insurance.creationDateLoanApplication
                              )
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
                              calculateDaysRemaning(
                                insurance.creationDatePolicy
                              ).dueDate
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
                          onClick={() =>
                            handleViewPolicy(insurance.loanApplicationId)
                          }
                        >
                          {isMobile ? "Formularios" : "Diligenciar formularios"}
                        </Button>
                      )}
                    </Row>
                  </Card>
                </Grid>
              ))}
              <Grid item md={6} xs={12}>
                <WrapperSmallCard isMobile={isMobile} width={"100%"}>
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
                    >
                      Solicita hoy mismo un nuevo endoso y descubre los
                      beneficios que Bangk tiene para tí!
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
                </WrapperSmallCard>
              </Grid>
            </Grid>
          </>
        )}
        <Text
          size={theme.fonts.size.ft}
          color={theme.colors.neutralGray900}
          font={theme.fonts.family.primaryBold}
          style={{ margin: "24px 0 0 0" }}
        >
          Puede interesarte...
        </Text>
        <Row
          m="24px 0"
          p="0 0 16px 0"
          gap={isMobile ? "24px" : "40px"}
          style={{
            overflowX: "auto",
            scrollbarWidth: isMobile ? null : "none",
          }}
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              isMobile={isMobile}
              onClick={
                isMobile ? () => window.open(article.url, "_blank") : null
              }
            >
              <Image
                alt="articleImg"
                src={article.photo}
                width={isMobile ? "200px" : "352px"}
                height={isMobile ? "178px" : "312px"}
              />
              <Col p={isMobile ? "16px 16px 5px 16px" : "16px"} gap="16px">
                <Text
                  color={theme.colors.green}
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.default}
                >
                  {article.title}
                </Text>
                <Text
                  color={isMobile ? theme.colors.green : "#202842"}
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                >
                  {article.description}
                </Text>
                <Row m="16px 0" gap="10px" align="center">
                  <Image alt="logo" src={logo} width="57px" height="42px" />
                  <Text
                    color={isMobile ? theme.colors.green : "#202842"}
                    font={theme.fonts.family.primary}
                    weight={theme.fonts.weight.semibold}
                    size={theme.fonts.size.sm}
                  >
                    {article.name}
                  </Text>
                  {!isMobile && (
                    <Button
                      background={theme.colors.green900}
                      hover={theme.colors.green900}
                      border={theme.colors.green900}
                      borderHover={theme.colors.green900}
                      width={"65px"}
                      height={"40px"}
                      style={{ marginLeft: "auto" }}
                      onClick={() => window.open(article.url, "_blank")}
                    >
                      Leer
                    </Button>
                  )}
                </Row>
              </Col>
            </ArticleCard>
          ))}
        </Row>
      </Col>
    </WraperHome>
  );
};
