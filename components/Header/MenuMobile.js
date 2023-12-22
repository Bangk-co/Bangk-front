import React from "react";
import Image from "next/image";
import { Text, WrapperMenu } from "./styles";
import { Div } from "@/styles/Common";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import logo from "../../assets/icons/white-logo.png";
import Social from "../Footer/social";

const MenuMobile = ({ headerButtons, optionSelected, handleGo }) => {
  return (
    <WrapperMenu>
      <Div direction="column" height="100%">
        <Div
          direction="column"
          height="70%"
          width="100%"
          gap="23px"
          justify="center"
          align="center"
        >
          {headerButtons.map((ele, indx) => (
            <Link
              key={indx}
              size={theme.fonts.size.h2}
              weight={theme.fonts.weight.bold}
              color={
                optionSelected === indx
                  ? theme.colors.yellow
                  : theme.colors.white
              }
              onClick={() => handleGo(ele.url, ele.key)}
              style={{ lineHeight: "47px", height: "50px" }}
            >
              {ele.label}
            </Link>
          ))}
        </Div>
        <Div direction="column" height="30%" align="center">
          <Image alt="logo" src={logo} width={148.71} height={52.71} />
          <Text>
            Una plataforma{" "}
            <span style={{ color: theme.colors.orange }}>
              en la que ahorras tiempo<br></br> y dinero.
            </span>
          </Text>
          <Social />
        </Div>
      </Div>
    </WrapperMenu>
  );
};

export default MenuMobile;
