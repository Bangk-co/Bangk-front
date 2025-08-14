import React, { useEffect } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Banner from "@/components/PetBangk/Banner";
import Reviews from "@/components/PetBangk/Reviews";
import Search from "@/components/PetBangk/Search";
import { Services } from "@/components/PetBangk/Services";
import { useDispatch } from "react-redux";
import { setPetsFormInfo } from "@/store/pets";
import { setMedFormInfo } from "@/store/med";
import { setPaymentSource } from "@/store/payment";

const PetBangk = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMedFormInfo({}));
    dispatch(setPetsFormInfo({}));
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
