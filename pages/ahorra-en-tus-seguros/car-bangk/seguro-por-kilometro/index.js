import React from "react";
import Banner from "@/components/InsurancePerKm/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/InsurancePerKm/Coverage";
import BenefitsInfo from "@/components/InsurancePerKm/BenefitsInfo";
import AssistanceInfo from "@/components/InsurancePerKm/AssistanceInfo";
import Quote from "@/components/InsurancePerKm/Quote";
import LogosInfo from "@/components/CarBangk/LogosInfo";
import FAQs from "@/components/InsurancePerKm/FAQs";

const InsurancePerKm = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
      <BenefitsInfo isMobile={isMobile} />
      <AssistanceInfo isMobile={isMobile} />
      <Quote isMobile={isMobile} />
      <FAQs isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default InsurancePerKm;
