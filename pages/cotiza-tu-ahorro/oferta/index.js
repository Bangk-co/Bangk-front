import React, { useState } from "react";
import { Header } from "@/components/Common/Header";
import { Col, Container, Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import { useRouter } from "next/router";
import wappIcon from "@/assets/icons/whatsapp-original.svg"
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton.js";
import { ImageCol } from "@/components/Quote/ImageCol";


const Sale = ({ isMobile, isTablet }) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false);

  const handleBack = () => {
    router.push("/")
  }

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
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} handleBack={handleBack} />
        }
        <Div gap="127px" justify={isMobile && "center"}>
          {!isMobile &&
            <ImageCol />
          }

          <Col
            width={isMobile ? "312px" : "541px"}
            m={isMobile ? "10px 0 0 0" : "92px 0 0 0"}
            justify={isMobile && "center"}
          >
            {isMobile && (
              <WrapperWapp>
                <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
              </WrapperWapp>
            )}
          </Col>
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

export default Sale;