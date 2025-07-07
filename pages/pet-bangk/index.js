import React, { useEffect } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Banner from "@/components/PetBangk/Banner";
import Reviews from "@/components/PetBangk/Reviews";
import Search from "@/components/PetBangk/Search";
import { Services } from "@/components/PetBangk/Services";
import { useDispatch } from "react-redux";
import { resetPetsFormInfo } from "@/store/pets";
import { resetMedFormInfo } from "@/store/med";

const PetBangk = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMedFormInfo());
    dispatch(resetPetsFormInfo());
  }, [dispatch]);

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
