import React from "react";
import Banner from "@/components/InsurancePerKm/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/InsurancePerKm/Coverage";
import BenefitsInfo from "@/components/InsurancePerKm/BenefitsInfo";
import AssistanceInfo from "@/components/InsurancePerKm/AssistanceInfo";

const InsurancePerKm = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
      <BenefitsInfo isMobile={isMobile} />
      <AssistanceInfo isMobile={isMobile} />
    </Div>
  );
};

export default InsurancePerKm;
