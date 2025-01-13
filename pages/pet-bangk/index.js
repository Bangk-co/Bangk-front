import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Banner from "@/components/PetBangk/Banner";
import Reviews from "@/components/PetBangk/Reviews";
import Search from "@/components/PetBangk/Search";
import { Services } from "@/components/PetBangk/Services";
import React from "react";

const PetBangk = ({ isMobile, isTablet }) => {

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link"
    },
    {
      label: "PetBangk",
      type: "text"
    }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Banner isMobile={isMobile} isTablet={isTablet} />
      <Search isMobile={isMobile} isTablet={isTablet} />
      <Services isMobile={isMobile} isTablet={isTablet} />
      <Reviews isMobile={isMobile} isTablet={isTablet} />
    </>
  );
};

export default PetBangk;
