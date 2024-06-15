import React from "react";
import Image from "next/image";
import { Text, Row, Col, Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import {
  WraperHome,
  HeaderHomeMobile,
  HeaderHome,
  WrapperCard,
  ArticleCard,
} from "./styles";
import { getUserInfo } from "@/utilities/helpers";
import { Button } from "@/components/Common/Button";
import backIcon from "@/assets/icons/arrow-down.svg";
import megaphone from "@/assets/img/megaphone.svg";
import article1 from "@/assets/img/article1.svg";
import article2 from "@/assets/img/article2.svg";
import article3 from "@/assets/img/article3.svg";
import article1Mobile from "@/assets/img/article1Mobile.svg";
import article2Mobile from "@/assets/img/article2Mobile.svg";
import article3Mobile from "@/assets/img/article3Mobile.svg";
import logo from "@/assets/img/logoRounded.svg";

export const Home = ({ isMobile }) => {
  const { unique_name: name } = getUserInfo();
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
      photo: isMobile ? article1Mobile : article1,
      title: "¡Buena suerte!",
      description: isMobile
        ? "El dinero debe seguirte, estarás en problemas si lo haces al revés… Cuando emprendemos, consumimos ..."
        : "El dinero debe seguirte, estarás en problemas si lo haces al revés… Cuando emprendemos, consumimos, compramos o invertimos, estamos generando impactos sobre las personas, las comunidades y en ocasiones sobre el mundo entero, es por esto que ser conscientes de nuestros actos es una gran responsabilidad, la mayor de todas. ¿es esto bueno? ¿para quién es bueno? ¿puede ser mejor? Son preguntas que me ayudan...",
      name: "Camilo",
      date: "01/03/2024",
      url: "https://www.bangk.co/blog/articulo/4/",
    },
  ];
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
        <Row width="100%" justify="space-between" align="center">
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
        <Text
          size={theme.fonts.size.ft}
          color={theme.colors.neutralGray900}
          font={theme.fonts.family.primaryBold}
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
                  color={
                    isMobile ? theme.colors.green : theme.colors.neutralGray100
                  }
                  font={theme.fonts.family.primaryMedium}
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
