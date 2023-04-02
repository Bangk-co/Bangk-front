import React from "react";
import { useMediaQuery } from "react-responsive";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import SectionOne from "@/components/Home/SectionOne";
import Stepper from "@/components/Common/Stepper";

const Home = ({ isMobileServer }) => {
  const isMobile =
    useMediaQuery({
      query: `(max-width: ${theme.breakpoints.sm})`,
    }) || isMobileServer;

  return (
    <Div direction="column">
      <SectionOne />
      <Stepper />
    </Div>
  );
};

export default Home;
