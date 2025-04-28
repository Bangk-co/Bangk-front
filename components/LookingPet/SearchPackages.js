import React from "react";
import { SearchCard, WrapperSearchPackages } from "./styles";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import { Button } from "../Common/Button";

const SearchPackages = ({ isMobile }) => {
  const searchPackages = [
    {
      title: "Básica",
      list: [
        "Anuncio durate 4 días",
        "Aprox. 10.000 veces se mostrara tu anuncio"
      ],
      price: "$79.000",
      backgroundColor: theme.colors.blue200,
      titleColor: theme.colors.white,
      textColor: theme.colors.white,
      id: 'basic'
    },
    {
      title: "Avanzada",
      list: [
        "Anuncio durate 5 días",
        "Aprox. se mostrará tu anuncio a 20,000 cuentas",
        "Más visualizaciones más probabilidades"
      ],
      price: "$197.500",
      backgroundColor: theme.colors.orange,
      titleColor: theme.colors.purple,
      textColor: theme.colors.purple,
      id: 'advanced'
    },
    {
      title: "Premium",
      list: [
        "Anuncio durate 7 días",
        "Aprox. se mostrará tu anuncio a 40,000 cuentas",
        "Máxima difusión de tu búsqueda"
      ],
      price: "$395.500",
      backgroundColor: theme.colors.yellow,
      titleColor: theme.colors.blue200,
      textColor: theme.colors.purple,
      id: 'premium'
    }
  ];

  return (
    <WrapperSearchPackages>
      <Text color={theme.colors.blue200} fontSize={theme.fonts.size.default}>
        Nuestros
      </Text>
      <Text 
        color={theme.colors.blue200} 
        size={isMobile ? theme.fonts.size.h3 : theme.fonts.size.xl} 
        font={theme.fonts.family.primaryBold}
        mb="40px"
      >
        Paquetes de busqueda
      </Text>
      <Div direction="column" gap="30px">
        {searchPackages.map((item, index) => (
          <SearchCard key={index} backgroundColor={item.backgroundColor}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={3}>
                <Text
                  color={theme.colors.white}
                  size={theme.fonts.size.xs}
                >
                  Busqueda
                </Text>
                <Text
                  color={item.titleColor}
                  size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
                  font={theme.fonts.family.primaryBold}
                  mb={isMobile ?"10px" : 0}
                >
                  {item.title}
                </Text>
              </Grid>
              <Grid item xs={12} md={5}>
                <Div direction="column" gap="8px">
                  {item.list.map((it, indx) => (
                    <Text 
                      key={indx}
                      color={item.textColor} 
                      size={theme.fonts.size.default2}
                    >
                      • {it}
                    </Text>
                  ))}
                </Div>
              </Grid>
              <Grid item xs={12} md={3}>
                <Div gap="10px">
                  <Text
                    color={theme.colors.white}
                    size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.xl}
                    font={theme.fonts.family.primaryBold}
                    mt={isMobile ? "10px" : 0}
                    mb={isMobile ? "10px" : 0}
                >
                    {item.price}
                  </Text>
                  <Text 
                    color={theme.colors.white} 
                    size={theme.fonts.size.default2}
                    mb="20px"
                    style={{ 
                      textDecoration: 'underline', 
                      alignSelf: 'flex-end' 
                    }}
                  >
                    COP
                  </Text>
                </Div>
              </Grid>
              <Grid item xs={12} md={1} style={{ alignSelf: 'flex-start' }}>
                <Button
                  background={theme.colors.white}
                  hover={theme.colors.white}
                  border={theme.colors.white}
                  borderHover={theme.colors.white}
                  labelColor={theme.colors.purple}
                  height={"25px"}
                  width={"100px"}
                  onClick={() => window.open(`https://app.finders.pet/find?tenant=bangk&plan=${item.id}`, "_blank")}
                >
                  Comprar
                </Button>
              </Grid>
            </Grid>
          </SearchCard>
        ))}
      </Div>
    </WrapperSearchPackages>
  )
};

export default SearchPackages;