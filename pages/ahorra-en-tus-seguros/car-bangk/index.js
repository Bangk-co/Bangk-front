import React from "react";
import Banner from "@/components/CarBangk/Banner";
import { Div } from "@/styles/Common";
import OurInsurances from "@/components/CarBangk/OurInsurances";
import PadlockInfo from "@/components/CarBangk/PadlockInfo";
import WealthInfo from "@/components/CarBangk/WealthInfo";
import LogosInfo from "@/components/CarBangk/LogosInfo";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const CarBangk = ({ isMobile, isTablet }) => {

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link"
    },
    {
      label: "Seguros",
      href: "/ahorra-en-tus-seguros",
      type: "link"
    },
    {
      label: "Car-bangk",
      type: "text"
    }
  ];

  return (
    <Div direction="column">
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <OurInsurances isMobile={isMobile} />
      <PadlockInfo isMobile={isMobile} />
      <WealthInfo isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default CarBangk;
