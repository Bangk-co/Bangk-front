import React, { useState } from "react";
import { Header } from "@/components/Common/Header";
import { Container, Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import wappIcon from "@/assets/icons/whatsapp-original.svg"
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton.js";


const UserData = ({ isMobile, isTablet }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <Container style={{ background: isMobile && theme.colors.green }}>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }
        <Div justify={"center"}>

        </Div>
        {!isMobile && (
          <WrapperWapp>
            <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
          </WrapperWapp>
        )}
      </WrapperQuote>
    </Container>
  )
}

export default UserData;