import React from "react";
import Banner from "@/components/MotoBangk/Banner";
import { Div } from "@/styles/Common";
import Coverage from "@/components/MotoBangk/Coverage";
import BenefitsInfo from "@/components/MotoBangk/BenefitsInfo";
import OurPromise from "@/components/MotoBangk/OurPromise";
import LogosInfo from "@/components/CarBangk/LogosInfo";
import Clause from "@/components/MotoBangk/Clause";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

const BangkMotos = ({ isMobile }) => {
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
      label: "Bangk-Motos",
      type: "text",
    },
  ];

  return (
    <Div direction="column">
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} />
      <Coverage isMobile={isMobile} />
      <BenefitsInfo isMobile={isMobile} />
      <OurPromise isMobile={isMobile} />
      <Clause isMobile={isMobile} />
      <LogosInfo isMobile={isMobile} />
    </Div>
  );
};

export default BangkMotos;
