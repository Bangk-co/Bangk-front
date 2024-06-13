import Image from "next/image";
import { theme } from "@/styles/theme";
import { WrapperImage } from "./styles";
import handQuote from "@/assets/img/hand-quote.png";
import { Text, Div } from "@/styles/Common";
import logo from "@/assets/icons/white-logo.png";
import { Button } from "../Common/Button";

const Banner = ({ isMobile, handleGo }) => {
  return (
    <WrapperImage>
      {isMobile && (
        <Div height="80px" justify="center" align="center">
          <Image alt="logo" src={logo} width={85} height={32} />
        </Div>
      )}
      <Image
        alt="hand"
        src={handQuote}
        width={isMobile ? 330 : 606}
        height={isMobile ? 396 : 776}
      />
      <Div width="100%" justify="center">
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.h4s : theme.fonts.size.h1s}
          lineHeight={isMobile ? "36px" : "52px"}
          style={{
            alignItems: "center",
            width: "584px",
            textAlign: isMobile && "center",
          }}
        >
          ¡Tu cotización está lista!<br></br> No esperes más y empieza a ahorrar
          con{" "}
          <span
            style={{
              color: theme.colors.yellow500,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            Bangk
          </span>
        </Text>
      </Div>
      {isMobile && (
        <Div m="50px 0 20px 0" width="100%" justify="center">
          <Button
            labelColor={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            background={theme.colors.yellow500}
            hover={theme.colors.yellow500}
            borderHover={theme.colors.yellow500}
            width={"312px"}
            height={"40px"}
            onClick={handleGo}
          >
            Conocer cotización
          </Button>
        </Div>
      )}
    </WrapperImage>
  );
};

export default Banner;
