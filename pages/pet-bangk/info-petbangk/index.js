import React, { useEffect } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import SummaryPlan from "@/components/InfoPetBangk/SummaryPlan";
import { Price } from "@/components/InfoPetBangk/Price";
import PetCare from "@/components/InfoPetBangk/PetCare";
import AttendanceSummary from "@/components/InfoPetBangk/AttendanceSummary";
import AssistanceAreas from "@/components/InfoPetBangk/AssistanceAreas";
import GeneralConditions from "@/components/InfoPetBangk/GeneralConditions";
import { useDispatch } from "react-redux";
import { setPetsFormInfo } from "@/store/pets";
import { setMedFormInfo } from "@/store/med";
import { setPaymentSource } from "@/store/payment";

const InfoPetBangk = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPetsFormInfo({}));
    dispatch(setMedFormInfo({}));
    dispatch(setPaymentSource(""));
  }, [dispatch]);

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
      <PetCare isMobile={isMobile} isTablet={isTablet} />
      <AttendanceSummary isMobile={isMobile} isTablet={isTablet} />
      <AssistanceAreas isMobile={isMobile} isTablet={isTablet} />
      <GeneralConditions isMobile={isMobile} isTablet={isTablet} />
    </>
  );
};

export default InfoPetBangk;