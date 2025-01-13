import React from "react";
import Banner from "@/components/ThirdPartiesDamage/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/ThirdPartiesDamage/Coverage";
import LogosInfo from "@/components/CarBangk/LogosInfo";
import FAQs from "@/components/ThirdPartiesDamage/FAQs";
import Clause from "@/components/ThirdPartiesDamage/Clause";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const InsurancePerKm = ({ isMobile, isTablet }) => {
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
      label: "Contra Terceros",
      type: "text",
    },
  ];

  return (
    <Div direction="column">
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
      <FAQs isMobile={isMobile} />
      <Clause isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default InsurancePerKm;
