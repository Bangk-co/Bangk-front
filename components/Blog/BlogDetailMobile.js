import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import {
  BlogText,
  HelpText,
  TitleDetail,
  WrapperBlogImage,
  WrapperGreenStar,
  WrapperIcon,
  WrapperInfo,
  WrapperSingleLogo,
  WrapperTop,
  WriterName,
  WriterPosition,
  WriterPosition2,
  YellowLine,
} from "./styles";
import { theme } from "@/styles/theme";
import image from "../../assets/img/rectangle-2.png";
import star from "../../assets/icons/green-star.svg";
import logo from "../../assets/icons/single-white-logo.png";
import percentage from "../../assets/icons/percentage.svg";

const BlogDetailMobile = () => {
  return (
    <Div direction="column">
      <WrapperTop>
        <TitleDetail>
          ¡Ahorrar es{" "}
          <span
            style={{ color: theme.colors.orange, fontFamily: "Gilroy Bold" }}
          >
            posible!
          </span>
        </TitleDetail>
      </WrapperTop>
      <WrapperBlogImage image={image} />
      <Div m="37px 29px 51px 0px" style={{ alignSelf: "self-end" }}>
        <WrapperGreenStar>
          <Image alt="star" src={star} />
          <WrapperSingleLogo>
            <Image alt="logo" src={logo} />
          </WrapperSingleLogo>
        </WrapperGreenStar>
      </Div>
      <WrapperInfo>
        <WriterName>
          Bangk es una Startup que nace para aliviar tu bolsillo; entre otras
        </WriterName>
        <BlogText>
          Las startups, empresas emergentes con un alto potencial de crecimiento
          y expansión, han tenido un impacto significativo en la sociedad en las
          últimas décadas. Desde la creación de nuevas soluciones tecnológicas
          hasta la generación de empleo y la promoción del emprendimiento, las
          startups han demostrado ser un motor clave para el desarrollo
          económico y social en todo el mundo.<br></br>
          <br></br>Uno de los principales impactos de las startups en la
          sociedad es la creación de nuevos productos y servicios. A menudo, las
          startups son empresas innovadoras que desarrollan soluciones
          tecnológicas y de vanguardia para resolver problemas complejos en
          diferentes sectores. Por ejemplo, las startups de tecnología han
          creado soluciones en áreas como la salud, la educación, la
          agricultura, el transporte y las energías renovables, entre otros.
          Estas soluciones han mejorado la calidad de vida de las personas,
          aumentando su eficiencia y su capacidad de acceso a los servicios y
          productos que necesitan.<br></br>
          <br></br>Bangk es una Startup que nace para aliviar tu bolsillo, el
          primer producto que tenemos disponible para lograr este fin es el{" "}
          <strong>“endoso de los seguros atados a tus créditos”.</strong>
          <br></br>
          <br></br>Y seguramente te estás preguntando, ¿cuáles seguros atados a
          mis créditos? Cuando solicitas un crédito y te lo desembolsan en tu
          cuenta, usualmente un mes después tienes que pagar la cuota de este.
          Dentro de esa cuota pagas el capital, los intereses y también un
          seguro llamado “vida deudores”. Este seguro es obligatorio, de tal
          forma que la entidad bancaria lo exige para cubrir la deuda en caso de
          que fallezcas o tengas una incapacidad permanente que te impida seguir
          pagando las cuotas de tu crédito.<br></br>
          <br></br>¿Y qué es un endoso? Endosar es una acción legal que implica
          transferir los derechos de propiedad de un documento, título o
          instrumento financiero a otra persona o entidad. Por ejemplo, cuando
          una persona endosa un cheque, está cediendo su derecho a cobrar el
          cheque a otra persona o entidad.<br></br>
          <br></br>Endosar los seguros atados a tus créditos es una buena forma
          de ahorrar dinero. El endoso es una práctica que consiste en ceder los
          derechos de un seguro a otra persona o entidad, lo que significa que
          la cobertura del seguro se transfiere a esa persona o entidad.
          <br></br>
          <br></br> Para endosar los seguros de tus créditos escríbenos: Bangk
          se encarga de cotizar tu nuevo seguro, emitir la póliza, y formalizar
          el endoso en tu entidad bancaria.
        </BlogText>
      </WrapperInfo>
      <Div align="center" p="0px 69px 23.32px 40.35px" justify="space-between">
        <WrapperIcon>
          <Image
            alt="percentage"
            src={percentage}
            width={"70%"}
            height={"70%"}
          />
        </WrapperIcon>
        <HelpText>
          Uno de nuestros asesores estará dispuesto a ayudarte en temas.
          <YellowLine />
        </HelpText>
      </Div>
    </Div>
  );
};

export default BlogDetailMobile;
