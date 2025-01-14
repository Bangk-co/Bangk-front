import React from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import SummaryPlan from "@/components/InfoPetBangk/SummaryPlan";
import { Price } from "@/components/InfoPetBangk/Price";

const InfoPetBangk = ({ isMobile, isTablet }) => {
  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link"
    },
    {
      label: "PetBangk",
      href: "/pet-bangk",
      type: "link"
    },
    {
      label: "Info PetBangk",
      type: "text"
    }
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <SummaryPlan isMobile={isMobile} isTablet={isTablet} />
      <Price isMobile={isMobile} isTablet={isTablet} />
    </>
  );
};

export default InfoPetBangk;