import Stepper from "@/components/Common/Stepper";
import BangkData from "@/components/Insurance/BangkData";
import Banner from "@/components/Insurance/Banner";
import Save from "@/components/Insurance/Save";
import { Div } from "@/styles/Common";
import React from "react";

const Insurance = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <Save isMobile={isMobile} isTablet={isTablet} />
      <BangkData isMobile={isMobile} isTablet={isTablet} />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Insurance;
