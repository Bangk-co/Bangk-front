import React from "react";
import { Div } from "@/styles/Common";
import Banner from "@/components/Home/Banner";
import Stepper from "@/components/Common/Stepper";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";

const Home = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <Stepper isMobile={isMobile} isTablet={isTablet} />
      <WhyWeDoIt />
    </Div>
  );
};

export default Home;
