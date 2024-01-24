/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Header } from "@/components/Common/Header";
import { Container } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote } from "@/styles/Quote";
import { BackButton } from "@/components/Quote/BackButton.js";

const CreditInfo = ({ isMobile, isTablet }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container style={{ background: isMobile && theme.colors.green }}>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }
      </WrapperQuote>
    </Container>
  )
}

export default CreditInfo;