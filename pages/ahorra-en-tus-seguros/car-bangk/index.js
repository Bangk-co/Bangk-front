import React from "react";
import Banner from "@/components/CarBangk/Banner";
import { Div } from "@/styles/Common";
import OurInsurances from "@/components/CarBangk/OurInsurances";
import PadlockInfo from "@/components/CarBangk/PadlockInfo";
import WealthInfo from "@/components/CarBangk/WealthInfo";
import LogosInfo from "@/components/CarBangk/LogosInfo";

const CarBangk = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <OurInsurances isMobile={isMobile} />
      <PadlockInfo isMobile={isMobile} />
      <WealthInfo isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default CarBangk;
