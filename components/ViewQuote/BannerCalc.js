import Image from "next/image";
import { theme } from "@/styles/theme";
import { WrapperImage } from "./styles";
import handQuote from "@/assets/img/hand-quote.png";
import { Text, Div } from "@/styles/Common";
import logoSbs from "@/assets/img/logo-sbs.png";

const BannerCalc = ({ insuranceName }) => {
  const sbs = insuranceName === "SBS Seguros Colombia";

  return (
    <WrapperImage>
      <Image
        alt="hand"
        src={handQuote}
        width={sbs ? 460 : 606}
        height={!sbs && 776}
      />
      <Div width="100%" justify="center">
        {sbs ? (       
          <Text
            font={theme.fonts.family.primaryBold}
            color={theme.colors.white}
            size={theme.fonts.size.h2}
            lineHeight={"52px"}
            style={{
              position: "absolute",
              top: "45%",
              left: "25%",
              alignItems: "center",
              width: "584px",
            }}
          >
            ¡Tu cotización está lista!<br></br> No esperes más y empieza ahorrar
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
        ) : (
          <Text
            font={theme.fonts.family.primaryBold}
            color={theme.colors.white}
            size={theme.fonts.size.h1s}
            lineHeight={"52px"}
            style={{
              alignItems: "center",
              width: "584px",
            }}
          >
            ¡Tu cotización está lista!<br></br> No esperes más y empieza ahorrar
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
        )}
      </Div>
      {sbs && (
        <Div style={{ position: "absolute", bottom: "3vh", left: "1vw" }}>
          <Image 
            alt="logoSbs" 
            src={logoSbs} 
            height={350}
          />
        </Div>
      )}
    </WrapperImage>
  );
};

export default BannerCalc;
