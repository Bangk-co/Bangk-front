import React, { useEffect } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Banner from "@/components/MedBangk/Banner";
import HowSection from "@/components/MedBangk/HowSection";
import SummaryPlan from "@/components/MedBangk/SummaryPlan";
import { Prices } from "@/components/MedBangk/Prices";
import { Benefits } from "@/components/MedBangk/Benefits";
import { GeneralConditions } from "@/components/MedBangk/GeneralConditions";
import { useDispatch } from "react-redux";
import { setMedFormInfo } from "@/store/med";
import { setPetsFormInfo } from "@/store/pets";

const MedBangk = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMedFormInfo({}));
    dispatch(setPetsFormInfo({}));
  }, [dispatch]);

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
      label: "MedBangk",
      type: "text",
    },
  ];

  const handleScrollTo = () => {
    const element = document.getElementById("prices");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner
        isMobile={isMobile}
        isTablet={isTablet}
        handleScrollTo={handleScrollTo}
      />
      <HowSection
        isMobile={isMobile}
        isTablet={isTablet}
        handleScrollTo={handleScrollTo}
      />
      <SummaryPlan isMobile={isMobile} isTablet={isTablet} />
      <Prices isMobile={isMobile} isTablet={isTablet} />
      <Benefits isMobile={isMobile} isTablet={isTablet} />
      <GeneralConditions isMobile={isMobile} isTablet={isTablet} />
    </>
  );
};

export default MedBangk;
