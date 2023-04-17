import Banner from "@/components/KnowUs/Banner";
import ForUs from "@/components/KnowUs/ForUs";
import KnowUsSection from "@/components/KnowUs/KnowUs";
import OurGain from "@/components/KnowUs/OurGain";
import { Div } from "@/styles/Common";
import React from "react";

const KnowUs = ({ isMobile }) => {
  return (
    <Div direction="column">
      <Banner />
      <KnowUsSection />
      <OurGain />
      <ForUs isMobile={isMobile} />
    </Div>
  );
};

export default KnowUs;
