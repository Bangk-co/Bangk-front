import React from "react";
import Banner from "@/components/InsurancePerKm/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/InsurancePerKm/Coverage";

const InsurancePerKm = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
    </Div>
  );
};

export default InsurancePerKm;
