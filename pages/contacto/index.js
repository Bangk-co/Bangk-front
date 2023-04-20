import React from "react";
import Banner from "@/components/ContactUs/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Div } from "@/styles/Common";
import HelpYou from "@/components/ContactUs/HelpYou";

const ContactUs = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner />
      <ContactForm isMobile={isMobile} isTablet={isTablet} />
      <HelpYou />
    </Div>
  );
};

export default ContactUs;
