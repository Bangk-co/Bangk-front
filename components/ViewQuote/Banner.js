import Image from "next/image";
import { theme } from "@/styles/theme";
import { WrapperImage } from "./styles";
import handQuote from "@/assets/img/hand-quote.png";
import { Text, Div } from "@/styles/Common";

const Banner = ({ isMobile, isTablet }) => {
  return (
    <WrapperImage>
      <Image alt="hand" src={handQuote} width={606} height={776} />
      <Div width="100%" justify="center">
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.white}
          size={theme.fonts.size.h1s}
          style={{ alignItems: "center", width: "584px" }}
        >
          ¡Tu cotización está lista!<br></br> No esperes más y empeza ahorrar
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
    </WrapperImage>
  );
};

export default Banner;
