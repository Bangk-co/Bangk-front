import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Text, Card, Div, Row, Col } from "@/styles/Common";
import { HeaderInsurace, HeaderInsuranceDetail } from "./styles";
import { Grid, IconButton } from "@mui/material";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import endorsement from "@/assets/icons/endorsement.svg";
import backIcon from "@/assets/icons/back.svg";
import downIcon from "@/assets/icons/expand_circle_down.svg";
import upIcon from "@/assets/icons/expand_circle_up.svg";
import article from "@/assets/icons/article.svg";
import addCircle from "@/assets/icons/addCircleOutline.svg";
import useGetBanks from "@/hooks/Common/useGetBanks";
import { LinearProgress } from "@/components/Common/LinearProgress";
import {
  getUserInfo,
  renderDocumentStateDiv,
  formattedDate,
  formattedPrice,
} from "@/utilities/helpers";
import { WraperInsurance } from "./styles";

const InsuranceDetail = ({ isMobile }) => {
  const router = useRouter();

  const { ClientId } = getUserInfo();

  const [expandDetail, setExpandDetail] = useState(isMobile ? false : true);

  const banks = useGetBanks();
  const { data: dataBanks, isSuccess: isSuccessBanks } = banks;
  const [banksOptions, setBanksOptions] = useState([]);
  useEffect(() => {
    if (isSuccessBanks) {
      setBanksOptions(
        dataBanks?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessBanks, dataBanks]);

  const handleBack = () => {
    router.back();
  };

  return (
    <WraperInsurance>
      <HeaderInsuranceDetail>
        <Row gap="8px" align="center">
          <Button
            width={"32px"}
            height={isMobile ? "28px" : "32px"}
            mobileWidth="28px"
            radius="4px"
            borderHover={theme.colors.green900}
            border={theme.colors.green900}
            borderHeight={"2px solid"}
            hover={"transparent"}
            background={theme.colors.white}
            onClick={handleBack}
          >
            <Image alt="back" src={backIcon} width={16} height={16} />
          </Button>
          <Text
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default}
            color={theme.colors.neutralGray900}
            font={theme.fonts.family.primary}
            style={{ width: "100%" }}
            align="left"
          >
            Volver a solicitudes
          </Text>
        </Row>
        <Row justify="space-between" align="center" gap="8px">
          <Div gap="8px">
            <Image alt="endorsement" src={endorsement} width={40} height={40} />
            <Col justify="center">
              <Text
                size={theme.fonts.size.xs}
                color={theme.colors.neutralGray500}
                font={theme.fonts.family.primary}
                weight={theme.fonts.weight.semibold}
                align="left"
              >
                Poliza
              </Text>
              <Text
                size={
                  isMobile
                    ? theme.fonts.size.default2
                    : theme.fonts.size.default
                }
                color={theme.colors.gray900}
                font={theme.fonts.family.primaryBold}
              >
                Credito de
              </Text>
            </Col>
          </Div>
          {isMobile && (
            <Image
              alt="expand"
              src={expandDetail ? upIcon : downIcon}
              width={24}
              height={24}
              onClick={() => setExpandDetail(!expandDetail)}
            />
          )}
        </Row>
        {expandDetail && (
          <Row
            style={{ display: "flex", flexWrap: "wrap" }}
            m={!isMobile && "16px 0 0 0"}
            justify="space-between"
            gap={isMobile ? "16px" : "0px"}
          >
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "173px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Estado de solicitud
                </Text>
                {renderDocumentStateDiv("Revisión de extracto")}
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "150px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Fecha de solicitud
                </Text>
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {formattedDate(new Date())}
                </Text>
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "150px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Fecha de vencimiento
                </Text>
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {formattedDate(new Date())}
                </Text>
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "150px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Monto del credito
                </Text>
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {formattedPrice(1111111)}
                </Text>
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "165px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Monto prima anual de Bangk
                </Text>
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {formattedPrice(222222)}
                </Text>
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "150px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Asesor
                </Text>
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primary}
                >
                  {"nombre asesor"}
                </Text>
              </Col>
            </Grid>
            <Grid item xs={12}>
              <Col gap="7px" width={isMobile ? "135px" : "150px"}>
                <Text
                  size={theme.fonts.size.xs}
                  color={theme.colors.gray900}
                  font={theme.fonts.family.primaryBold}
                >
                  Entidad bancaria
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
                    {/* {application.iconsBanksUrl && ( */}
                    <Image
                      src={backIcon}
                      alt="bankLogo"
                      width={24}
                      height={24}
                    />
                    {/*  )} */}
                  </Div>
                  <Text
                    color={theme.colors.neutralGray900}
                    size={theme.fonts.size.sm}
                    font={theme.fonts.family.primary}
                    weight={theme.fonts.weight.regular}
                    mt="8px"
                    mb="8px"
                  >
                    {/* {
                banksOptions.find((ele) => ele.value === dataLoanInfo?.bankId)
                  ?.label
              } */}
                  </Text>
                </Row>
              </Col>
            </Grid>
          </Row>
        )}
      </HeaderInsuranceDetail>
    </WraperInsurance>
  );
};

export default InsuranceDetail;
