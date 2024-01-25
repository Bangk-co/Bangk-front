import { useRouter } from "next/router";
import Image from "next/image";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import { Div, Row, Col } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import backIcon from "../../../assets/icons/arrow-back-green.svg";
import accountIcon from "../../../assets/icons/account.svg";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import calendarIcon from "../../../assets/icons/date_range.svg";
import profileIcon from "../../../assets/icons/person.svg";
import { renderStateDiv } from "@/utilities/helpers";

const Customer = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/plataforma/clientes");
  };

  return (
    <Div direction="row" width="100%" gap="32px">
      <Col gap="24px" width="275px">
        <Row gap="8px" align="center">
          <Button
            width="32px"
            height="32px"
            radius="4px"
            borderHover={theme.colors.green900}
            border={theme.colors.green900}
            borderHeigh={"3px"}
            hover={"transparent"}
            background={theme.colors.white}
            onClick={handleBack}
          >
            <Image alt="back" src={backIcon} width={16} height={16} />
          </Button>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default}
          >
            Volver a clientes
          </Text>
        </Row>
        <Row gap="8px" align="center" justify="center">
          <Div
            background={theme.colors.orange}
            radius="50%"
            width="150px"
            height="150px"
            align="center"
            justify="center"
          >
            <Image alt="account" src={accountIcon} width={120} height={120} />
          </Div>
        </Row>
        <Col gap="8px" align="center" justify="center">
          <Text
            weight={theme.fonts.weight.bold}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.h5}
          >
            Nombre del cliente
          </Text>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            C.C. 1.662.344
          </Text>
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            ID: 1.662.344
          </Text>
        </Col>
        <Row gap="8px" align="center" justify="center">
          <Div background={theme.colors.gray50} width="275px" height="1px" />
        </Row>
        <Col gap="8px" justify="center">
          <Text
            weight={theme.fonts.weight.bold}
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.sm}
          >
            Datos Generales
          </Text>
          <Text
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Correo electrónico
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="email" src={emailIcon} width={16} height={16} />
            <Text
              mt="2px"
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              correo@correo.com
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Número de celular
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="phone" src={phoneIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              +57 300 456 9857
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Fecha de nacimiento
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="calendar" src={calendarIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              24 / 06 / 2022
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Género
          </Text>
          <Row gap="8px" m="2px 0 0 0" align="center">
            <Image alt="profile" src={profileIcon} width={16} height={16} />
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
            >
              Másculino
            </Text>
          </Row>
          <Text
            mt="16px"
            weight={theme.fonts.weight.medium}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.sm}
          >
            Estado del cliente
          </Text>
          <Row gap="8px" width="100%" justify="center">
            {renderStateDiv("Potencial")}
          </Row>
        </Col>
      </Col>

      <Row m="0 0 37px 0">
        <Text
          weight={theme.fonts.weight.bold}
          size={theme.fonts.size.h6}
          color={theme.colors.gray900}
        >
          Solicitudes
        </Text>
      </Row>
    </Div>
  );
};

export default Customer;
