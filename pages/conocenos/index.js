import Banner from "@/components/KnowUs/Banner";
import KnowUsSection from "@/components/KnowUs/KnowUs";
import { Div } from "@/styles/Common";
import React from "react";

const KnowUs = () => {
  return (
    <Div direction="column">
      <Banner />
      <KnowUsSection />
    </Div>
  );
};

export default KnowUs;
