import React, { useState } from "react";
import Image from "next/image";
import {
  CardForm,
  Label,
  TextForm,
  TitleForm,
  WrapperContactForm,
  WrapperFooter,
  WrapperForm,
  WrapperIcons,
  WrapperPadlock,
  WrapperStar,
} from "./styles";
import padlock from "../../assets/icons/padlock.png";
import star from "../../assets/icons/orange-star.svg";
import { Input } from "../Input";
import { Div } from "@/styles/Common";
import { Button } from "../Button";

const ContactForm = ({ isMobile, isTablet }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    cellphone: "",
    email: "",
    message: "",
  });
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleChange = (event) => {
    const { value, id } = event.target;

    const newForm = contactForm;
    newForm[id] = value;
    setContactForm(newForm);
    setForceUpdate(!forceUpdate);
  };

  const form = [
    { label: "Nombres", id: "name", value: contactForm.name },
    { label: "Celular", id: "cellphone", value: contactForm.cellphone },
    { label: "E-mail", id: "email", value: contactForm.email },
  ];

  return (
    <WrapperContactForm>
      <CardForm>
        <WrapperForm>
          <TitleForm>
            También puedes dejarnos tus datos en el siguiente formulario y nos
            contactaremos contigo lo más pronto posible.
          </TitleForm>
          {form.map((ele, indx) => (
            <>
              <Label key={indx}>{ele.label}</Label>
              <Input
                id={ele.id}
                value={ele.value}
                onChange={handleChange}
                height={isMobile ? "22px" : isTablet ? "35px" : "44px"}
              />
            </>
          ))}
          <Label>Mensaje</Label>
          <Input
            id="message"
            value={contactForm.message}
            onChange={handleChange}
            height={isMobile ? "49px" : isTablet ? "78px" : "99px"}
            radius={"9px"}
          />
          <WrapperFooter>
            <TextForm>
              Te atendemos de Lunes a Viernes entre las{" "}
              <strong>7:00 am y 9:00 pm</strong> y los Sábados entre los{" "}
              <strong>9:00 am y 6:00 pm</strong>
            </TextForm>
            <Button>Enviar</Button>
          </WrapperFooter>
        </WrapperForm>
        <WrapperIcons>
          <WrapperStar>
            <Image alt="star" src={star} />
          </WrapperStar>
          <WrapperPadlock>
            <Image alt="padlock" src={padlock} />
          </WrapperPadlock>
        </WrapperIcons>
      </CardForm>
    </WrapperContactForm>
  );
};

export default ContactForm;
