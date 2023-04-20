import React from "react";
import Banner from "@/components/ContactUs/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Div } from "@/styles/Common";
import HelpYou from "@/components/ContactUs/HelpYou";
import ProtectedInformation from "@/components/ContactUs/ProtectedInformation";

const ContactUs = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <ContactForm isMobile={isMobile} isTablet={isTablet} />
      <HelpYou />
      <ProtectedInformation />
    </Div>
  );
};

export default ContactUs;
