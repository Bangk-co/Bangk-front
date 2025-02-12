import React from "react";
import Banner from "@/components/AllRiskInsurance/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/AllRiskInsurance/Coverage";
import BenefitsInfo from "@/components/AllRiskInsurance/BenefitsInfo";
import AssistanceInfo from "@/components/AllRiskInsurance/AssistanceInfo";
import LogosInfo from "@/components/CarBangk/LogosInfo";
import Clause from "@/components/AllRiskInsurance/Clause";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const AllRiskInsurance = ({ isMobile }) => {
  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link",
    },
    {
      label: "Seguros",
      href: "/ahorra-en-tus-seguros",
      type: "link",
    },
    {
      label: "Car-bangk",
      href: "/ahorra-en-tus-seguros/car-bangk",
      type: "link",
    },
    {
      label: "Tradicional",
      type: "text",
    },
  ];

  return (
    <Div direction="column">
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
      <BenefitsInfo isMobile={isMobile} />
      <AssistanceInfo isMobile={isMobile} />
      <Clause isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default AllRiskInsurance;
