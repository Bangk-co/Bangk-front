import React from "react";
import Image from "next/image";
import {
  Col3,
  Col4,
  MessageSave,
  TitleSave,
  WrapperLogo,
  WrapperSave,
} from "./styles";
import woman from "../../assets/img/white-woman.svg";
import logo from "../../assets/icons/single-green-logo.svg";
import { theme } from "@/styles/theme";
import SaveMobile from "./SaveMobile";
import { Button } from "../Button";
import { useRouter } from "next/router";

const Save = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleGo = () => {
    router.push("/cotiza-tu-ahorro/");
  };

  return (
    <WrapperSave>
      {isMobile ? (
        <SaveMobile />
      ) : (
        <>
          <Col3>
            <Image
              alt="woman"
              src={woman}
              width={isTablet ? 256 : 639}
              height={isTablet ? 372 : 859}
            />
          </Col3>
          <Col4>
            <WrapperLogo>
              <Image alt="logo" src={logo} width={63} height={100} />
            </WrapperLogo>
            <TitleSave>
              Ahorra dinero endosando los{" "}
              <span
                style={{
                  color: theme.colors.orange100,
                  fontFamily: "Gilroy Bold",
                }}
              >
                seguros
              </span>{" "}
              de tus créditos.
            </TitleSave>
            <MessageSave>
              En Colombia, como titular de crédito,{" "}
              <strong>tienes la libertad de elegir</strong> los seguros que se
              encargan de pagar a los bancos los saldos de tus deudas en caso de
              fallecimiento o incapacidad total y permanente.<br></br>
              <br></br> Tú tienes{" "}
              <strong>la opción de endosar tu seguro,</strong> es decir,
              contratar uno por cuenta propia que cumpla con las mismas
              condiciones que pide el banco o la entidad ﬁnanciera, pero que te
              cueste mucho menos.
            </MessageSave>
            <Button onClick={handleGo}>Ahorra ya!</Button>
          </Col4>
        </>
      )}
    </WrapperSave>
  );
};

export default Save;
