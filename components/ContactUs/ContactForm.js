import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import {
  Button,
  CardForm,
  Label,
  TextForm,
  TitleForm,
  WrapperCheck,
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
import { Checkbox } from "antd";
import { theme } from "@/styles/theme";
import Link from "next/link";

const ContactForm = ({ isMobile, isTablet }) => {
  const defaultValues = {
    fullname: "",
    cellphone: "",
    email: "",
    message: "",
    privacy: false,
  };
  const {
    control,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm({ defaultValues, mode: "all" });

  return (
    <WrapperContactForm>
      <CardForm>
        <WrapperForm>
          <TitleForm>
            También puedes dejarnos tus datos en el siguiente formulario y nos
            contactaremos contigo lo más pronto posible.
          </TitleForm>
          <form onSubmit={handleSubmit()}>
            <Controller
              control={control}
              name="fullname"
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <Label>{"Nombres"}</Label>
                  <Input
                    name="fullname"
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!formErrors.fullname}
                    height={isMobile ? "22px" : isTablet ? "35px" : "44px"}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="cellphone"
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <Label>{"Celular"}</Label>
                  <Input
                    name="cellphone"
                    type="number"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!formErrors.cellphone}
                    height={isMobile ? "22px" : isTablet ? "35px" : "44px"}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <Label>{"E-mail"}</Label>
                  <Input
                    name="email"
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!formErrors.email}
                    height={isMobile ? "22px" : isTablet ? "35px" : "44px"}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="message"
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <>
                  <Label>Mensaje</Label>
                  <Input
                    name="message"
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!formErrors.message}
                    height={isMobile ? "49px" : isTablet ? "78px" : "99px"}
                    radius={"9px"}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="privacy"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <>
                  <WrapperCheck>
                    <Checkbox
                      name="privacy"
                      type="checkbox"
                      value={value}
                      onChange={onChange}
                    />
                    <TextForm>
                      Acepto el tratamiento de mis datos personales conforme a
                      la{" "}
                      <Link
                        href="/legales"
                        target="_blank"
                        style={{ color: theme.colors.green }}
                      >
                        Política de Privacidad y Tratamiento de Datos.
                      </Link>
                    </TextForm>
                  </WrapperCheck>
                </>
              )}
            />
            <WrapperFooter>
              <TextForm>
                Te atendemos de Lunes a Viernes entre las{" "}
                <strong>7:00 am y 9:00 pm</strong> y los Sábados entre los{" "}
                <strong>9:00 am y 6:00 pm</strong>
              </TextForm>
              <Button type="submit">Enviar</Button>
            </WrapperFooter>
          </form>
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
