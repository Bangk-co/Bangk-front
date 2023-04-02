import React from "react";
import { useMediaQuery } from "react-responsive";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import SectionOne from "@/components/Home/SectionOne";
import Stepper from "@/components/Common/Stepper";

const Home = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <SectionOne />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Home;
