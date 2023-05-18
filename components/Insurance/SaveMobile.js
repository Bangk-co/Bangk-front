import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { Col3, Col4, MessageSave, TitleSave } from "./styles";
import { theme } from "@/styles/theme";
import woman from "../../assets/img/white-woman.svg";
import { Button } from "../Button";
import { wappLink } from "@/utilities/options";

const SaveMobile = () => {
  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
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
            <Image alt="woman" src={woman} width={"137px"} height={"199px"} />
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
            <Button onClick={handleWapp}>Ahorra ya!</Button>
          </Col4>
        </Div>
      </Div>
    </>
  );
};

export default SaveMobile;
