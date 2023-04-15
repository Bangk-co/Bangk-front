import Banner from "@/components/KnowUs/Banner";
import KnowUsSection from "@/components/KnowUs/KnowUs";
import OurGain from "@/components/KnowUs/OurGain";
import { Div } from "@/styles/Common";
import React from "react";

const KnowUs = () => {
  return (
    <Div direction="column">
      <Banner />
      <KnowUsSection />
      <OurGain />
    </Div>
  );
};

export default KnowUs;
