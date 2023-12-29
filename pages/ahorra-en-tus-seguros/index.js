import React from "react";
import Stepper from "@/components/Common/Stepper";
import BangkData from "@/components/Insurance/BangkData";
import Banner from "@/components/Insurance/Banner";
import FormInfo from "@/components/Insurance/FormInfo";
import Save from "@/components/Insurance/Save";
import { Div } from "@/styles/Common";

const Insurance = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Save isMobile={isMobile} isTablet={isTablet} />
      <BangkData isMobile={isMobile} isTablet={isTablet} />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
      <FormInfo isMobile={isMobile} />
    </Div>
  );
};

export default Insurance;
