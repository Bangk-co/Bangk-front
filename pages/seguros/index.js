import Stepper from "@/components/Common/Stepper";
import Banner from "@/components/Insurance/Banner";
import { Div } from "@/styles/Common";
import React from "react";

const Insurance = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Insurance;
