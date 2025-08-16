import React from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import Image from "next/image";
import photoCat from "@/assets/img/photoCat.png";
import womanAndDog from "@/assets/img/womanAndDog.png";
import map from "@/assets/img/map.png";
import starYellow from "@/assets/img/star.png";
import { WrapperCard } from "./styles";

const HowWorks = ({ isMobile, isTablet }) => {
  const items = [
    {
      image: photoCat,
      title: "Creamos anuncios pagos",
      description:
        "Creamos anuncios pagos en varias redes sociales para que la mayor cantidad de personas vean la información de tu mascota.",
    },
    {
      image: map,
      title: "Elegimos la zona de búsqueda",
      description:
        "Usamos la zona de perdida como radio, para mostrar el anuncio a las personas con mayor probabilidad de ver tu mascota.",
    },
    {
      image: womanAndDog,
      title: "Esperamos que nos contacten",
      description:
        "El anuncio cuenta con tu información para ser contactado de la manera más rápida y eficaz.",
    },
  ];
  return (
    <Div
      direction="column"
      justify="center"
      align="center"
      p={isMobile ? "80px 0 50px 0" : "80px 0 100px 0"}
    >
      <Text
        color={theme.colors.orange500}
        size={theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
      >
        Así{" "}
        <span
          style={{
            color: theme.colors.blue200,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          funciona
        </span>
      </Text>
      <Text
        color={theme.colors.blue200}
        size={theme.fonts.size.default}
        mb="40px"
      >
        Es muy fácil
      </Text>
      <Div gap="40px" direction={isMobile || isTablet ? "column" : "row"}>
        {items.map((item, index) => (
          <WrapperCard key={index}>
            <Div style={{ position: "relative" }}>
              <Image
                src={item.image}
                alt={item.title}
                width={isMobile ? 300 : 350}
                style={{
                  borderTopLeftRadius: "23px",
                  borderTopRightRadius: "23px",
                }}
              />
              <Image
                src={starYellow}
                alt="starYellow"
                width={40}
                style={{ position: "absolute", top: "20px", right: "30px" }}
              />
            </Div>
            <Div
              direction="column"
              gap="20px"
              p="30px 20px 20px 20px"
              height={isMobile ? "250px" : "230px"}
              style={{
                backgroundColor: theme.colors.blue200,
                borderBottomLeftRadius: "23px",
                borderBottomRightRadius: "23px",
              }}
            >
              <Text
                color={theme.colors.purple}
                size={theme.fonts.size.h4}
                font={theme.fonts.family.primaryBold}
              >
                {item.title}
              </Text>
              <Text color={theme.colors.white} size={theme.fonts.size.default}>
                {item.description}
              </Text>
            </Div>
          </WrapperCard>
        ))}
      </Div>
    </Div>
  );
};

export default HowWorks;
