import React from "react";
import Image from "next/image";
import {
  TextForUs,
  TitleForUs,
  WrapperForUs,
  WrapperIcon,
  WrapperTextForUs,
} from "./styles";
import coins from "../../assets/icons/white-coin.svg";
import { theme } from "@/styles/theme";
import { Button } from "../Button";
import { useRouter } from "next/router";

const ForUs = ({ isMobile }) => {
  const router = useRouter();

  const handleBlog = () => {
    router.push("/blog");
  };

  return (
    <WrapperForUs>
      <WrapperTextForUs>
        {isMobile ? (
          <TitleForUs>
            ¿Por qué nos proponemos a{" "}
            <span
              style={{ color: theme.colors.yellow, fontFamily: "Gilroy Bold" }}
            >
              compartir conocimiento?
            </span>{" "}
          </TitleForUs>
        ) : (
          <TitleForUs>
            Para nosotros, ofrecer seguros y créditos es{" "}
            <span
              style={{ color: theme.colors.yellow, fontFamily: "Gilroy Bold" }}
            >
              mucho más
            </span>{" "}
            que vender un producto.
          </TitleForUs>
        )}

        <TextForUs>
          Porque la información es revolucionaria, y apoyados en la tecnología
          logramos equilibrar las cargas financieras, optimizar el uso del
          dinero de las personas y en efecto dominó, aportar a la dinamización
          de la economía nacional.
        </TextForUs>
        <Button
          size={theme.fonts.size.default}
          width={"max-content"}
          padding={"0px 3%"}
          onClick={handleBlog}
        >
          Conoce nuestro Blog
        </Button>
      </WrapperTextForUs>
      <WrapperIcon>
        <Image alt="coin" src={coins} />
      </WrapperIcon>
    </WrapperForUs>
  );
};

export default ForUs;
