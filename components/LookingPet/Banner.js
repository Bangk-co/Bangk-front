import React from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import catMeow from "@/assets/img/catMeow.png";
import Image from "next/image";

const Banner = ({ isMobile, isTablet }) => {
  return (
    <Div 
      direction={isMobile ? "column" : "row"} 
      justify="center" 
      align="center" p={isMobile ? "40px 0" : "70px 0 0 0"}
      style={{ borderBottom: `1px solid ${theme.colors.neutralGray900}` }}
    >
      <Text 
        color={theme.colors.blue200} 
        size={isTablet ? theme.fonts.size.h4 : theme.fonts.size.lg}
          font={theme.fonts.family.primaryBold}
        style={{ width: "400px", textAlign: "left", paddingLeft: "60px" }}
      >
        Buscamos 
        <br /> 
        <span style={{color: theme.colors.yellow, fontFamily: theme.fonts.family.primaryBold}}>
          tu Mascota!
        </span>
      </Text>
      <Image src={catMeow} alt="catMeow" width={isMobile ? 300 : isTablet ? 350 : 600} />
      <Text 
        color={theme.colors.blue200} 
        size={theme.fonts.size.h5s} 
        font={theme.fonts.family.primaryBold}
        style={{ width: "400px", textAlign: isMobile ? "center" : "left" }}
        mt={isMobile ? "30px" : "0"}
      >
        ¡Cada minuto cuenta, empieza ahora y encuentra a tu mascota perdida!
      </Text>
    </Div>
  )
};

export default Banner;
