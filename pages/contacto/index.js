import React from "react";
import Banner from "@/components/ContactUs/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Div } from "@/styles/Common";
import HelpYou from "@/components/ContactUs/HelpYou";
import ProtectedInformation from "@/components/ContactUs/ProtectedInformation";

const ContactUs = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <ContactForm isMobile={isMobile} isTablet={isTablet} />
      <HelpYou isMobile={isMobile} />
      <ProtectedInformation isMobile={isMobile} />
    </Div>
  );
};

export default ContactUs;
