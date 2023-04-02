import React from "react";
import { Div } from "@/styles/Common";
import Banner from "@/components/Home/Banner";
import Stepper from "@/components/Common/Stepper";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";
import Bangk from "@/components/Home/Bangk";

const Home = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
      <WhyWeDoIt />
      <Bangk />
    </Div>
  );
};

export default Home;
