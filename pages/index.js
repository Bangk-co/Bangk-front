import React from "react";
import { Div } from "@/styles/Common";
import Banner from "@/components/Home/Banner";
import Stepper from "@/components/Common/Stepper";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";
import Bangk from "@/components/Home/Bangk";
import BlogSection from "@/components/Home/BlogSection";
import Reviews from "@/components/Home/Reviews";

const Home = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <Stepper isHome={true} isMobile={isMobile} isTablet={isTablet} />
      <WhyWeDoIt />
      <Bangk />
      <BlogSection isTablet={isTablet} />
      <Reviews isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Home;
