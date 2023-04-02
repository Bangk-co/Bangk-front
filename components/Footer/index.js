import React from "react";
import FooterResponsive from "./responsive";
import FooterDesktop from "./desktop";
import { WrapperFooter } from "./styles";

const Footer = ({ isMobile, isTablet }) => {
  return (
    <WrapperFooter>
      {isMobile || isTablet ? (
        <FooterResponsive isMobile={isMobile} />
      ) : (
        <FooterDesktop />
      )}
    </WrapperFooter>
  );
};

export default Footer;
