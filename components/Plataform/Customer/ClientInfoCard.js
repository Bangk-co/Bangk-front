import Image from "next/image";
import toast from "react-hot-toast";
import { Row, Text, Div, Col } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import {
  formattedDate,
  renderStateDiv,
  formattedPhone,
  documentTypeAbbreviation,
} from "@/utilities/helpers";
import maleProfile from "../../../assets/img/maleProfile.png";
import femaleProfile from "../../../assets/img/femaleProfile.png";
import emailIcon from "../../../assets/icons/email.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import calendarIcon from "../../../assets/icons/date_range.svg";
import profileIcon from "../../../assets/icons/person.svg";
import editIcon from "../../../assets/icons/edit.svg";

const ClientInfoCard = ({
  indicativesOptions,
  clientInfo,
  getLabelFromValue,
  setShowDrawer,
}) => {
  return (
    <Div
      direction="column"
      gap="12px"
      width="275px"
      p="16px 12px"
      radius="8px"
      style={{ boxShadow: "0px 1px 3px 0px #0000004D" }}
    >
      <Row gap="12px" justify="center">
        <Div
          background={theme.colors.orange}
          radius="50%"
          width="80px"
          height="80px"
          align="center"
          justify="center"
        >
          <Image
            alt="profile"
            src={
              clientInfo?.genderName === "Masculino"
                ? maleProfile
                : femaleProfile
            }
            width={80}
            height={80}
          />
        </Div>

        <Col gap="12px" align="center" justify="center">
          <Text
            color={theme.colors.neutralGray800}
            size={theme.fonts.size.ft}
            font={theme.fonts.family.primaryBold}
            align="left"
          >
            {clientInfo?.name} {clientInfo?.lastName}
          </Text>
          <Col gap="4px" align="left" width="100%">
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray800}
              size={theme.fonts.size.sm}
            >
              {`${documentTypeAbbreviation(clientInfo?.documentType)} ${Number(
                clientInfo?.identificationNumber
              ).toLocaleString()}`}
            </Text>
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray800}
              size={theme.fonts.size.sm}
            >
              {`Exp: ${formattedDate(clientInfo?.documentIssueDate)}`}
            </Text>
            <Text
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray800}
              size={theme.fonts.size.sm}
            >
              {`ID: ${clientInfo?.idClient}`}
            </Text>
          </Col>
        </Col>
      </Row>
      <Row gap="8px" align="center" justify="center">
        <Div background={theme.colors.gray50} width="275px" height="1px" />
      </Row>
      <Col gap="8px" justify="center">
        <Text
          color={theme.colors.neutralGray800}
          size={theme.fonts.size.sm}
          font={theme.fonts.family.primaryBold}
        >
          Datos Generales
        </Text>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
          font={theme.fonts.family.primaryMedium}
        >
          Correo electrónico
        </Text>
        <Row gap="8px" m="8px 0 0 0" align="center">
          <Image alt="email" src={emailIcon} width={16} height={16} />
          <Text
            mt="2px"
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
          >
            {clientInfo?.email}
          </Text>
        </Row>
        <Text
          mt="8px"
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
          font={theme.fonts.family.primaryMedium}
        >
          Número de celular
        </Text>
        <Row gap="8px" m="8px 0 0 0" align="center">
          <Image alt="phone" src={phoneIcon} width={16} height={16} />
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
          >
            {`${getLabelFromValue(
              clientInfo?.countryCode,
              indicativesOptions
            )} ${formattedPhone(clientInfo?.phoneNumber)}`}
          </Text>
        </Row>
        <Text
          mt="8px"
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
          font={theme.fonts.family.primaryMedium}
        >
          Fecha de nacimiento
        </Text>
        <Row gap="8px" m="8px 0 0 0" align="center">
          <Image alt="calendar" src={calendarIcon} width={16} height={16} />
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
          >
            {formattedDate(clientInfo?.birthDate)}
          </Text>
        </Row>
        <Text
          mt="8px"
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
          font={theme.fonts.family.primaryMedium}
        >
          Género
        </Text>
        <Row gap="8px" m="8px 0 0 0" align="center">
          <Image alt="profile" src={profileIcon} width={16} height={16} />
          <Text
            weight={theme.fonts.weight.regular}
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
          >
            {clientInfo?.genderName}
          </Text>
        </Row>
        <Text
          mt="8px"
          weight={theme.fonts.weight.medium}
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.sm}
        >
          Estado del cliente
        </Text>
        <Row gap="8px" width="100%" justify="center">
          {renderStateDiv(clientInfo?.stateName)}
        </Row>
      </Col>
      <Link
        onClick={() => {
          setShowDrawer(true);
          toast.dismiss();
        }}
        hover={theme.colors.gray100}
        color={theme.colors.green900}
        font={theme.fonts.family.primary}
        weight={theme.fonts.weight.semibold}
        size={theme.fonts.size.default2}
        width="100%"
        radius="40px"
      >
        <Row
          gap="8px"
          align="center"
          m="8px 0"
          style={{
            borderBottom: `2px solid ${theme.colors.green900}`,
          }}
        >
          <Image alt="edit" src={editIcon} width={16} height={16} />
          <Text
            color={theme.colors.green900}
            size={theme.fonts.size.default2}
            font={theme.fonts.family.primaryBold}
          >
            Editar
          </Text>
        </Row>
      </Link>
    </Div>
  );
};

export default ClientInfoCard;
