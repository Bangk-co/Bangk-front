import React from "react";
import { Header } from "@/components/Common/Header";
import { Container } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote } from "@/styles/Quote";


const ValidateUser = ({ isMobile, isTablet }) => {
  return (
    <Container style={{ background: isMobile && theme.colors.green }}>
      <Header isMobile={isMobile} />
      <WrapperQuote>

      </WrapperQuote>
    </Container>
  )
}

export default ValidateUser;