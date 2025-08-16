import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { Col3, Col4, MessageSave, TitleSave } from "./styles";
import { theme } from "@/styles/theme";
import woman from "../../assets/img/white-woman.svg";
import { Button } from "../Button";
import { useRouter } from "next/router";

const SaveMobile = () => {
  const router = useRouter();

  const handleGo = () => {
    router.push("/cotiza-tu-ahorro/");
  };

  return (
    <>
      <Div direction="column">
        <Div justify="center" height="100px">
          <TitleSave>
            Ahorra dinero endosando los{" "}
            <span
              style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
            >
              seguros
            </span>{" "}
            de tus créditos.
          </TitleSave>
        </Div>
        <Div>
          <Col3>
            <Image alt="woman" src={woman} width={137} height={199} />
          </Col3>
          <Col4>
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
            <Button
              height={"25px"}
              width={"150px"}
              size={theme.fonts.size.default2}
              onClick={handleGo}
            >
              Ahorra ya!
            </Button>
          </Col4>
        </Div>
      </Div>
    </>
  );
};

export default SaveMobile;
