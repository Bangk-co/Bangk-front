import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Div } from "@/styles/Common";
import Banner from "@/components/Home/Banner";
import Stepper from "@/components/Common/Stepper";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";
import Bangk from "@/components/Home/Bangk";
import BlogSection from "@/components/Home/BlogSection";
import Reviews from "@/components/Home/Reviews";

const Home = ({ isMobile, isTablet }) => {
  const router = useRouter();
  useEffect(() => {
    if (window.location.pathname !== router.pathname) {
      router.push(`/${window.location.pathname}`);
    }
  }, []);

  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Stepper isHome={true} isMobile={isMobile} isTablet={isTablet} />
      <WhyWeDoIt isMobile={isMobile} />
      <Bangk isMobile={isMobile} />
      <BlogSection isTablet={isTablet} isMobile={isMobile} />
      <Reviews isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Home;
