import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Div } from "@/styles/Common";

const Layout = ({ children, isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Header isMobile={isMobile} isTablet={isTablet} />
      {children}
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Layout;
