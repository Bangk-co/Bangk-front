import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { Title1, Title2, WrapperUy } from "../Common/styles";
import { theme } from "@/styles/theme";
import uy from "../../assets/icons/uy.svg";

const StepperTitleHome = () => {
  return (
    <Div direction="column">
      <Title1>Es muy fácil, sigue</Title1>
      <Title2>
        El Paso a{" "}
        <span style={{ color: theme.colors.green, fontFamily: "Gilroy Bold" }}>
          Paso
        </span>
        <WrapperUy>
          <Image alt="uy" src={uy} width={65} height={43.63} />
        </WrapperUy>
      </Title2>
    </Div>
  );
};

export default StepperTitleHome;
