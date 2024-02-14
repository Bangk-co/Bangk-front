import Image from "next/image";
import { Row, Text, Div, Col } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import {
  formattedDate,
  formattedPrice,
  renderDocumentStateDiv,
} from "@/utilities/helpers";

const ApplicationInfo = ({ application, handleApplication }) => {
  return (
    <Link
      onClick={() => {
        handleApplication(application);
      }}
      hover={theme.colors.white}
      color={theme.colors.white}
      width="100%"
    >
      <Col width="100%" height="100%">
        <Row>
          <Text
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.h6}
            font={theme.fonts.family.primaryBold}
          >
            {`${application.loanApplicationId} - Crédito ${application.loanTypeName}`}
          </Text>
        </Row>
        <Row m="8px 0 0 0" gap="16px">
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Estado de solicitud
            </Text>
            {renderDocumentStateDiv(application.stateName)}
          </Col>
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Fecha de solicitud
            </Text>
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.regular}
              mt="8px"
              mb="8px"
            >
              {formattedDate(application.creationDate)}
            </Text>
          </Col>
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Asesor Bangk
            </Text>
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.regular}
              mt="8px"
              mb="8px"
            >
              {application.reviewerName}
            </Text>
          </Col>
        </Row>

        <Row m="16px 0 0 0" gap="16px">
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Entidad financiera
            </Text>
            <Row align="center" gap="10px">
              <Div
                align="center"
                justify="center"
                width="24px"
                height="24px"
                radius="50%"
                style={{
                  overflow: "hidden",
                }}
              >
                <Image
                  src={application.iconsBanksUrl}
                  alt="bankLogo"
                  width={24}
                  height={24}
                />
              </Div>
              <Text
                color={theme.colors.neutralGray900}
                size={theme.fonts.size.sm}
                font={theme.fonts.family.primary}
                weight={theme.fonts.weight.regular}
                mt="8px"
                mb="8px"
              >
                {application.bankName}
              </Text>
            </Row>
          </Col>
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Monto del crédito
            </Text>
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.regular}
              mt="8px"
              mb="8px"
            >
              {formattedPrice(application.loanBalance)}
            </Text>
          </Col>
          <Col width="245px" align="left" gap="8px">
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.xs}
              font={theme.fonts.family.primaryBold}
            >
              Monto prima anual Bangk
            </Text>
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              weight={theme.fonts.weight.regular}
              mt="8px"
              mb="8px"
            >
              ---
            </Text>
          </Col>
        </Row>
      </Col>
    </Link>
  );
};

export default ApplicationInfo;
