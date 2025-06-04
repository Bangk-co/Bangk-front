import Breadcrumbs from "@/components/Common/Breadcrumbs";
import GeneralConditions from "@/components/InfoPetBangk/GeneralConditions";
import Banner from "@/components/LookingPet/Banner";
import Footer from "@/components/LookingPet/Footer";
import HowWorks from "@/components/LookingPet/HowWorks";
import SearchPackages from "@/components/LookingPet/SearchPackages";
import React from "react";


const LookingForYourPet = ({ isMobile, isTablet }) => {
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
      label: "Buscamos tu mascota",
      type: "text"
    }
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} isTablet={isTablet} />
      <HowWorks isMobile={isMobile} isTablet={isTablet} />
      <SearchPackages isMobile={isMobile} isTablet={isTablet} />
      <Footer isMobile={isMobile} isTablet={isTablet} />
      <GeneralConditions isMobile={isMobile} isTablet={isTablet} source="lookingPet" />
    </>
  )
}

export default LookingForYourPet;