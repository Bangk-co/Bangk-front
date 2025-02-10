/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Div } from "@/styles/Common";
import Banner from "@/components/Home/Banner";
import Stepper from "@/components/Common/Stepper";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";
import Bangk from "@/components/Home/Bangk";
import BlogSection from "@/components/Home/BlogSection";
import Reviews from "@/components/Home/Reviews";
import { useDispatch } from "react-redux";
import { initDataLoanInsurancePolicy } from "@/utilities/helpers";
import {
  setRequestInfo,
  setSelectedRequestInformation,
} from "@/store/requests";
import CarBangk from "@/components/Home/CarBangk";
import PetBangk from "@/components/Home/PetBangk";

const Home = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== router.pathname) {
      router.push(`/${window.location.pathname}`);
    }
    dispatch(setRequestInfo(initDataLoanInsurancePolicy));
    dispatch(setSelectedRequestInformation({}));
  }, []);

  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Stepper isHome={true} isMobile={isMobile} isTablet={isTablet} />
      <WhyWeDoIt isMobile={isMobile} />
      <Bangk isMobile={isMobile} />
      <CarBangk isMobile={isMobile} />
      <PetBangk isMobile={isMobile} />
      <BlogSection isTablet={isTablet} isMobile={isMobile} />
      <Reviews isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Home;
